import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormLabel from '@material-ui/core/FormLabel';
import { IFoodItemState, FoodItemField } from './FoodTable/FoodTable';

const styles = (theme : Theme)  => ({
	hidden: {
	  display: 'none'
	},
	formLabel: {
		fontSize: theme.typography.fontSize * 0.8
	}
});
	
interface IProps {
	editingItem?: IFoodItemState
	handleDialogClose: (submitted: boolean, data?: IFoodItemState) => void,
	classes: any
}	

interface IState {
	name: string | null,
	calories: number | null,
	fat: number | null,
	carbs: number | null,
	protein: number | null,
	hasError: FoodItemField[]
}

class FoodForm extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		const { editingItem } = props;
		if(editingItem) {
			this.state = {
				name: editingItem.name,
				calories: editingItem.calories,
				fat: editingItem.fat,
				carbs: editingItem.carbs,
				protein: editingItem.protein,
				hasError: []
			};
		} else {
			this.state = {
				name: null,
				calories: null,
				fat: null,
				carbs: null,
				protein: null,
				hasError: []
			};
		}
	}

	validate = (value: string, field: FoodItemField) => {
		if(field === FoodItemField.name) {
			return value ? true : false;
		} else {
			const numValue = Number(value);
			return value !== "" && !isNaN(numValue) && numValue >= 0 ? true : false;
		}

		return true;
	}

	handleChange = (name: FoodItemField) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		const { hasError } = this.state;
		const hasErrorIdx = hasError.indexOf(name);
		const isValid = this.validate(newValue, name);

		if(isValid && hasErrorIdx !== -1) {
			hasError.splice(hasErrorIdx, 1);
		} else if(!isValid && hasErrorIdx === -1){
			hasError.push(name);
		}
		//@ts-ignore
    this.setState({
			[name]: event.target.value,
			hasError: hasError
    });
	}

	hasError = (field: FoodItemField) => {
		return this.state.hasError.indexOf(field) !== -1;
	}

	isValid = () => {
		const { name, calories, fat, carbs, protein } = this.state;
		const allFieldsInitialized = [name, calories, fat, carbs, protein].indexOf(null) === -1;
		return allFieldsInitialized && this.state.hasError.length === 0;
	}

	getFoodItemState = () => {
		const { name, calories, fat, carbs, protein } = this.state;
		const { editingItem } = this.props;
		return {
			id: editingItem ? editingItem.id : -1, 
			name: name === null ? '' : name, 
			calories: calories === null ? 0 : calories, 
			fat: fat === null ? 0 : fat, 
			carbs: carbs === null ? 0 : carbs, 
			protein: protein === null ? 0 : protein
		}
	}

	render(){
		const { classes } = this.props;
		return (
			<React.Fragment>
				<DialogTitle id="form-dialog-title">Add new dessert to the list</DialogTitle>
				<DialogContent>
					<Grid container spacing={24}>
						<Grid item xs={12}>
							<TextField
								autoFocus
								required
								error={this.hasError(FoodItemField.name)}									
								id="name"
								label="Name"
								type="text"
								value={this.state.name !== null ? this.state.name : ''}
								onChange={this.handleChange(FoodItemField.name)}
								fullWidth
							/>
							<FormLabel 
								className={this.hasError(FoodItemField.name) ? classes.formLabel : classes.hidden}
								error={this.hasError(FoodItemField.name)} 
							>
								Field {FoodItemField.name} is not valid!!
							</FormLabel>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								error={this.hasError(FoodItemField.calories)}	
								id="callories"
								label="Callories"
								type="number"
								value={this.state.calories !== null ? this.state.calories : ''}
								onChange={this.handleChange(FoodItemField.calories)}
								fullWidth
							/>
							<FormLabel 
								className={this.hasError(FoodItemField.calories) ? classes.formLabel : classes.hidden}
								error={this.hasError(FoodItemField.calories)} 
							>
								Field {FoodItemField.calories} is not valid!!
							</FormLabel>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								error={this.hasError(FoodItemField.fat)}	
								id="fat"
								label="Fat (g)"
								type="number"
								value={this.state.fat !== null ? this.state.fat : ''}
								onChange={this.handleChange(FoodItemField.fat)}
								fullWidth
							/>
							<FormLabel 
								className={this.hasError(FoodItemField.fat) ? classes.formLabel : classes.hidden}
								error={this.hasError(FoodItemField.fat)} 
							>
								Field {FoodItemField.fat} is not valid!!
							</FormLabel>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								error={this.hasError(FoodItemField.carbs)}	
								id="carbs"
								label="Carbs (g)"
								type="number"
								value={this.state.carbs !== null ? this.state.carbs : ''}
								onChange={this.handleChange(FoodItemField.carbs)}
								fullWidth
							/>
							<FormLabel 
								className={this.hasError(FoodItemField.carbs) ? classes.formLabel : classes.hidden}
								error={this.hasError(FoodItemField.carbs)} 
							>
								Field {FoodItemField.carbs} is not valid!!
							</FormLabel>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								error={this.hasError(FoodItemField.protein)}	
								id="protein"
								label="Protein (g)"
								type="number"
								value={this.state.protein !== null ? this.state.protein : ''}
								onChange={this.handleChange(FoodItemField.protein)}
								inputProps={{ min: "0", step: "0.1" }}
								fullWidth
							/>
							<FormLabel 
								className={this.hasError(FoodItemField.protein) ? classes.formLabel : classes.hidden}
								error={this.hasError(FoodItemField.protein)} 
							>
								Field {FoodItemField.protein} is not valid!!
							</FormLabel>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
				<Button onClick={event => this.props.handleDialogClose(false)} color="primary">
					Cancel
				</Button>
				<Button 
					disabled={!this.isValid()}
					onClick={event => this.props.handleDialogClose(true, this.getFoodItemState()) } 
					color="primary"
				>
					Submit
				</Button>
				</DialogActions>
			</React.Fragment>
		);
	};
}

//@ts-ignore
export default withStyles(styles)(FoodForm);