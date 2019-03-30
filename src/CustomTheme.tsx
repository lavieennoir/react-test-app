import { createMuiTheme } from '@material-ui/core/styles';

export const customTheme = createMuiTheme({
	overrides: {
		MuiTablePagination: {
			toolbar: {
				height: 'initial',
				flexFlow: 'row wrap',
			},
		}
	},
});