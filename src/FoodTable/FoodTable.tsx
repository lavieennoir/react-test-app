import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
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

let counter = 0;
function createFoodItem(name : string, calories : number, fat : number, carbs : number, protein : number) : IFoodItemState {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

function desc(lhs: IFoodItemState, rhs: IFoodItemState, orderBy: FoodItemField) {
  if (rhs[orderBy] < lhs[orderBy]) {
    return -1;
  }
  if (rhs[orderBy] > lhs[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array : IFoodItemState[], cmp: (lhs: IFoodItemState, rhs: IFoodItemState)=> number): IFoodItemState[] {
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

function getSorting(order: TableOrder, orderBy: FoodItemField) {
  return order === TableOrder.desc ? (a: IFoodItemState, b: IFoodItemState) => desc(a, b, orderBy) : (a: IFoodItemState, b: IFoodItemState) => -desc(a, b, orderBy);
}

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
}

enum TableOrder {
	desc = "desc",
	asc = "asc"
}

const tableStyles = (theme : any) => ({
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
  state: IState = {
    order: TableOrder.asc,
    orderBy: FoodItemField.calories,
    selected: [],
    data: [
      createFoodItem('Cupcake', 305, 3.7, 67, 4.3),
      createFoodItem('Donut', 452, 25.0, 51, 4.9),
      createFoodItem('Eclair', 262, 16.0, 24, 6.0),
      createFoodItem('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createFoodItem('Gingerbread', 356, 16.0, 49, 3.9),
      createFoodItem('Honeycomb', 408, 3.2, 87, 6.5),
      createFoodItem('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createFoodItem('Jelly Bean', 375, 0.0, 94, 0.0),
      createFoodItem('KitKat', 518, 26.0, 65, 7.0),
      createFoodItem('Lollipop', 392, 0.2, 98, 0.0),
      createFoodItem('Marshmallow', 318, 0, 81, 2.0),
      createFoodItem('Nougat', 360, 19.0, 9, 37.0),
      createFoodItem('Oreo', 437, 18.0, 63, 4.0),
    ],
    page: 0,
    rowsPerPage: 5,
  };

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
    let newSelected: Array<number> = [];

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
        <FoodTableToolbar numSelected={selected.length} />
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
              {stableSort(data, getSorting(order, orderBy))
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
          count={data.length}
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