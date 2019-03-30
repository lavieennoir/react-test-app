import React, {Component, ComponentType} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Theme, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { fade } from '@material-ui/core/styles/colorManipulator';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { compose } from 'recompose';

const toolbarStyles = (theme : Theme) => createStyles({
	root: {
	  paddingLeft: theme.spacing.unit * 3,
	  paddingRight: theme.spacing.unit,
	},
	highlight:
	  theme.palette.type === 'light'
		? {
			color: theme.palette.secondary.main,
			backgroundColor: lighten(theme.palette.secondary.light, 0.85),
		  }
		: {
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.secondary.dark,
		  },
	spacer: {
	  flex: '1 1 100%',
	},
	actions: {
	  color: theme.palette.text.secondary,
	},
	title: {
	  flex: '0 0 auto',
	},
	search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.25),
    },
	},
	searchUpSm: {
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
		width: '100%',
		minWidth: '320px',
  },
	searchXs: {
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

interface IProps extends WithStyles<typeof toolbarStyles>{
	numSelected: number,
	handleDeleteClick: () => void,
	handleAddClick: () => void,
	handleSearch: (input: string) => void,
	width: Breakpoint
}

interface IState {
	searchText: string
}

  
class EnhancedTableToolbar extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			searchText: ''
		}
	}

	handleLocalSearch = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		this.setState({searchText: event.target.value});
		this.props.handleSearch(event.target.value);
	}

	render() {
		const { numSelected, classes, handleDeleteClick, handleAddClick, width } = this.props;
		const isWidthUpSm = isWidthUp('sm', width);
		let searchElement = (<React.Fragment></React.Fragment>);
		if(numSelected < 1){
			searchElement = (
				<div className={classNames(classes.search, isWidthUpSm ? classes.searchUpSm : classes.searchXs)}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase 
						value = {this.state.searchText}
						onChange = {this.handleLocalSearch}
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
					/>
				</div>
			);
		}

		return (
			<React.Fragment>
				<Toolbar
				className={classNames(classes.root, {
					[classes.highlight]: numSelected > 0,
				})}
				>
					{numSelected > 0 ? (
					<div className={classes.title}>
						<Typography color="inherit" variant="subtitle1">
							{numSelected} selected
						</Typography>
					</div>
					) : (
					<React.Fragment>
						<div className={classes.title}>
							<Typography variant="h6" id="tableTitle">
								Desserts
							</Typography>
						</div>
						{isWidthUpSm ? searchElement : ''}
					</React.Fragment>
					)}
					<div className={classes.spacer} />
					<div className={classes.actions}>
						{numSelected > 0 ? (
							<Tooltip title="Delete">
								<IconButton 
									aria-label="Delete"
									onClick={ (event) => handleDeleteClick() }
								>
								<DeleteIcon />
								</IconButton>
							</Tooltip>
						) : (
							<Tooltip title="Add item" disableFocusListener={true} >
								<IconButton 
									aria-label="Add item"
									color="primary"
									onClick={ (event) => handleAddClick() }
									>
								<AddIcon />
								</IconButton>
							</Tooltip>
						)}
					</div>
				</Toolbar>
				{isWidthUpSm ? '' : searchElement}
			</React.Fragment>
		);
	}
};
//@ts-ignore
export default compose(withWidth(),withStyles(toolbarStyles))(EnhancedTableToolbar);