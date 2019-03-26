import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

export interface IFoodItemState {
	id: number,
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number,
	isSelected?: boolean
}

interface IFoodItemProps {
	id: number,
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number,
	isSelected: boolean,
	handleClick: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, id: number) => any 
}

export enum FoodItemField {
	id = "id",
	name = "name",
	calories = "calories",
	fat = "fat",
	carbs = "carbs",
	protein = "protein",
}


class FoodItem extends Component<IFoodItemProps, IFoodItemState> {
	constructor(props : Readonly<IFoodItemProps>) {
		super(props);
		this.state = { 
			id: props.id, 
			name: props.name, 
			calories: props.calories, 
			fat: props.fat, 
			carbs: props.carbs, 
			protein: props.protein,
			isSelected: false
		}
	}
	static defaultProps = {
		id: 0, 
		name: '', 
		calories : 0, 
		fat: 0, 
		carbs: 0, 
		protein: 0,
		isSelected: false,
		handleClick: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, id: number) => {}
	  }

	render() {
		return (
			<TableRow
				hover
				onClick={event => this.props.handleClick(event, this.state.id)}
				role="checkbox"
				aria-checked={this.state.isSelected}
				tabIndex={-1}
				key={this.state.id}
				selected={this.state.isSelected}
			>
				<TableCell padding="checkbox">
				<Checkbox checked={this.state.isSelected} />
				</TableCell>
				<TableCell component="th" scope="row" padding="none">
				{this.state.name}
				</TableCell>
				<TableCell align="right">{this.state.calories}</TableCell>
				<TableCell align="right">{this.state.fat}</TableCell>
				<TableCell align="right">{this.state.carbs}</TableCell>
				<TableCell align="right">{this.state.protein}</TableCell>
			</TableRow>
		);
	}
}

export default FoodItem;