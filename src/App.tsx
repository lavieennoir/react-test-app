import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles, Theme, MuiThemeProvider } from '@material-ui/core/styles';
import FoodTable, { IFoodItemState } from './FoodTable/FoodTable';
import FoodForm from './FoodFrom';
import Dialog from '@material-ui/core/Dialog';
import bgImage from './bg-image.png';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { compose } from 'recompose';
import { customTheme } from './CustomTheme';


const appStyles = (theme: Theme) => ({
  '@global body': {
    backgroundImage: `url(${bgImage})`,
    backgroundAttachment: 'fixed',
    backgroundSize: '400px'
  }
});

interface IState {  
  isDialogOpen: boolean,
  editingItem?: IFoodItemState
}
interface IProps {
  fullScreen?: boolean
}

class App extends Component<IProps, IState> {
  private foodTable: React.RefObject<any>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      isDialogOpen: false
    }
    this.foodTable = React.createRef();
  }
  
  handleDialogOpen = () => {
    this.setState({ isDialogOpen: true });
  };
  
  handleItemEdit = (item: IFoodItemState) => {
    this.setState({
      editingItem: item,
      isDialogOpen: true 
    });
  };

  handleDialogClose = (submitted: boolean, newItem?: IFoodItemState) => {
    this.setState({ 
      isDialogOpen: false,
      editingItem: undefined,
     });
    if(submitted && newItem && this.foodTable.current) {
      this.foodTable.current.createFoodItem(newItem);
    }
  };

  render() {
    const { fullScreen } = this.props;
    return (
      <MuiThemeProvider theme={customTheme}>
        <FoodTable 
          innerRef={this.foodTable}
          handleDialogOpen={this.handleDialogOpen}
          handleItemEdit={this.handleItemEdit}
          />
        <Dialog
          fullScreen={fullScreen}
          open={this.state.isDialogOpen}
          onClose={event => this.handleDialogClose(false)}
          aria-labelledby="form-dialog-title"
        >
        <FoodForm 
          handleDialogClose={this.handleDialogClose}
          editingItem={this.state.editingItem}
        />
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

export default compose(withMobileDialog({breakpoint: 'xs'}),withStyles(appStyles))(App);
