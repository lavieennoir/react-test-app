import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { withStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import FoodTableToolbar from './FoodTableToolbar'
import FoodTableHead from './FoodTableHead'
import Button from '@material-ui/core/Button';

export interface IFoodItemState {
	id: number,
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number,
	isSelected?: boolean,
	isDisplayed?: boolean
}

export enum FoodItemField {
	id = "id",
	name = "name",
	calories = "calories",
	fat = "fat",
	carbs = "carbs",
	protein = "protein",
}

interface IProps {
  handleDialogOpen: () => void,
  handleItemEdit: (item :IFoodItemState) => void,
	classes: any
}

interface IState {
  order: TableOrder,
	orderBy: FoodItemField,
	selected: number[],
	data: IFoodItemState[],
	page: number,
  rowsPerPage: number,
  counter: number,
  lastItemId?: number
}

enum TableOrder {
	desc = "desc",
	asc = "asc"
}

const tableStyles = (theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - ' + theme.spacing.unit * 6 + 'px)',
      margin: theme.spacing.unit * 3,
      display: 'block',
      flexDirection: 'unset',
      height: 'initial'
    },
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1
    },
  },
  rowButton: {
    textTransform: 'none',
    justifyContent: 'start'
  }
});

class FoodTable extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const data = [
      { name:'Cupcake',            calories: 305, fat: 3.7,  carbs: 67, protein: 4.3,  id: 1 , isDisplayed: true},
      { name:'Donut',              calories: 452, fat: 25.0, carbs: 51, protein: 4.9,  id: 2 , isDisplayed: true},
      { name:'Eclair',             calories: 262, fat: 16.0, carbs: 24, protein: 6.0,  id: 3 , isDisplayed: true},
      { name:'Frozen yoghurt',     calories: 159, fat: 6.0,  carbs: 24, protein: 4.0,  id: 4 , isDisplayed: true},
      { name:'Gingerbread',        calories: 356, fat: 16.0, carbs: 49, protein: 3.9,  id: 5 , isDisplayed: true},
      { name:'Honeycomb',          calories: 408, fat: 3.2,  carbs: 87, protein: 6.5,  id: 6 , isDisplayed: true},
      { name:'Ice cream sandwich', calories: 237, fat: 9.0,  carbs: 37, protein: 4.3,  id: 7 , isDisplayed: true},
      { name:'Jelly Bean',         calories: 375, fat: 0.0,  carbs: 94, protein: 0.0,  id: 8 , isDisplayed: true},
      { name:'KitKat',             calories: 518, fat: 26.0, carbs: 65, protein: 7.0,  id: 9 , isDisplayed: true},
      { name:'Lollipop',           calories: 392, fat: 0.2,  carbs: 98, protein: 0.0,  id: 10, isDisplayed: true},
      { name:'Marshmallow',        calories: 318, fat: 0,    carbs: 81, protein: 2.0,  id: 11, isDisplayed: true},
      { name:'Nougat',             calories: 360, fat: 19.0, carbs: 9,  protein: 37.0, id: 12, isDisplayed: true},
      { name:'Oreo',               calories: 437, fat: 18.0, carbs: 63, protein: 4.0,  id: 13, isDisplayed: true}
    ];
    this.state = {
      order: TableOrder.asc,
      orderBy: FoodItemField.calories,
      selected: [],
      data: data,
      page: 0,
      rowsPerPage: 5,
      counter: data.length,
    }
  }

  public createFoodItem(item: IFoodItemState) {
    const {data, counter} = this.state;
    const isEdited = data.filter(i => i.id === item.id).length > 0;
    if(isEdited) {
      for(let i = 0; i < data.length; i++) {
        if(data[i].id === item.id) {
          data[i] = {...data[i], ...item};
          break;
        }
      }
    } else {
      item.id =  counter + 1;
      item.isDisplayed = true;
      data.push(item);
    }

    this.setState(state => ({ 
      counter: state.counter + 1,
      lastItemId: state.lastItemId == null ? 0 : state.lastItemId + 1,
      data: data
     }));
  }  

  deleteFoodItem = (id : number) : void => {
    this.state;
    this.setState(state => {
      const newData = state.data.filter((item) => item.id !== id);
      return {
        data: newData,
        counter: state.counter - 1
      }
    });
  }  

  handleDeleteClick = () : void => {
    const { selected } = this.state;
    selected.forEach((item) => this.deleteFoodItem(item));
    this.setState({selected: []});
  }
  
  handleSearch = (input: string) : void => {
    let newCounter = 0;
    this.state.data.forEach(item => {
      if(input && !item.name.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())) {
        item.isDisplayed = false;
      } else {
        item.isDisplayed = true;
        newCounter++;
      }
    });
    this.setState({ counter: newCounter });
  }  
  
  desc = (lhs: IFoodItemState, rhs: IFoodItemState, orderBy: FoodItemField) => {
    if (rhs[orderBy] < lhs[orderBy]) {
      return -1;
    }
    if (rhs[orderBy] > lhs[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  tableSort = (array : IFoodItemState[], cmp: (lhs: IFoodItemState, rhs: IFoodItemState)=> number): IFoodItemState[] => {
    const stabilizedThis = array.map((el: IFoodItemState, index: number) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0] as IFoodItemState, b[0] as IFoodItemState);
      if (order !== 0) {
        return order;
      }
      return (a[1] as number) - (b[1] as number);
    });
    return stabilizedThis.map(el => el[0]) as IFoodItemState[];
  }
  
  getSorting = (order: TableOrder, orderBy: FoodItemField) => {
    return order === TableOrder.desc ? 
      (a: IFoodItemState, b: IFoodItemState) => this.desc(a, b, orderBy) : 
      (a: IFoodItemState, b: IFoodItemState) => -this.desc(a, b, orderBy);
  }
  

  handleRequestSort = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, property: FoodItemField) => {
    const orderBy = property;
    let order = TableOrder.desc;

    if (this.state.orderBy === property && this.state.order === TableOrder.desc) {
      order = TableOrder.asc;
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.filter(n => n.isDisplayed === true).map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, id: number) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => {
    this.setState({ rowsPerPage: Number(event.target.value) });
  };

  isSelected = (id: number) => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;

    return (
      <Paper className={classes.root}>
        <FoodTableToolbar 
          numSelected={selected.length} 
          handleDeleteClick={this.handleDeleteClick}
          handleAddClick={this.props.handleDialogOpen}
          handleSearch={this.handleSearch}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <FoodTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {this.tableSort(data, this.getSorting(order, orderBy))
                .filter(item => item.isDisplayed === true)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
										<TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        <Button color="primary" onClick={event => {this.props.handleItemEdit(n); event.stopPropagation();}} className={classes.rowButton}>
                          {n.name}
                        </Button>
                      </TableCell>
                      <TableCell align="right">{n.calories}</TableCell>
                      <TableCell align="right">{n.fat}</TableCell>
                      <TableCell align="right">{n.carbs}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.filter(item => item.isDisplayed).length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

//@ts-ignore
export default withStyles(tableStyles)(FoodTable);