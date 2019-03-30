import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import { FoodItemField } from './FoodTable';

interface IProps {
  numSelected: number,
  onRequestSort: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, property: FoodItemField) => void,
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void,
  order?: 'desc' | 'asc',
  orderBy: string,
	rowCount: number
}

class FoodTableHead extends Component<IProps> {

  createSortHandler = (property : FoodItemField) => (event : React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    this.props.onRequestSort(event, property);
  };

  private readonly rows = [
    { id: FoodItemField.name, 		numeric: false, disablePadding: true, 	label: 'Dessert (100g serving)' },
    { id: FoodItemField.calories, numeric: true, 	disablePadding: false, 	label: 'Calories' },
    { id: FoodItemField.fat, 			numeric: true, 	disablePadding: false, 	label: 'Fat (g)' },
    { id: FoodItemField.carbs, 		numeric: true, 	disablePadding: false, 	label: 'Carbs (g)' },
    { id: FoodItemField.protein, 	numeric: true, 	disablePadding: false, 	label: 'Protein (g)' },
  ];

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount && numSelected > 0}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {this.rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

export default FoodTableHead;