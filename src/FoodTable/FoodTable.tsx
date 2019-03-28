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
import 	{FoodItemField, IFoodItemState} from './FoodItem';
import FoodTableToolbar from './FoodTableToolbar'
import FoodTableHead from './FoodTableHead'
import { promised } from 'q';

interface IProps {
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
    width: 'calc(100% - '+theme.spacing.unit * 6+'px)',
    margin: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class FoodTable extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      order: TableOrder.asc,
      orderBy: FoodItemField.calories,
      selected: [],
      data: [
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
      ],
      page: 0,
      rowsPerPage: 5,
      counter: 0,
    }
  }

  createFoodItem = (name : string, calories : number, fat : number, carbs : number, protein : number) : IFoodItemState => {
    this.setState(state => ({ 
      counter: state.counter + 1,
      lastItemId: state.lastItemId == null ? 0 : state.lastItemId + 1
     }));
    const {counter} = this.state;
    return { id: counter, name, calories, fat, carbs, protein, isDisplayed: true };
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

  handleAddClick = () : void => {
    //TODO: add dialog box
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
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
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
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <FoodTableToolbar 
          numSelected={selected.length} 
          handleDeleteClick={this.handleDeleteClick}
          handleAddClick={this.handleAddClick}
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
                        {n.name}
                      </TableCell>
                      <TableCell align="right">{n.calories}</TableCell>
                      <TableCell align="right">{n.fat}</TableCell>
                      <TableCell align="right">{n.carbs}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
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