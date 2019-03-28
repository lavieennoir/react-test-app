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