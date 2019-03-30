import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles, Theme } from '@material-ui/core/styles';
import FoodTable, { IFoodItemState } from './FoodTable/FoodTable';
import FoodForm from './FoodFrom';
import Dialog from '@material-ui/core/Dialog';
import bgImage from './bg-image.png';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { compose } from 'recompose';

const appStyles = (theme: Theme) => ({
  '@global body': {
    backgroundImage: `url(${bgImage})`,
    backgroundAttachment: 'fixed',
    backgroundSize: '400px'
  }
});

interface IState {  
  isDialogOpen: boolean
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

  handleDialogClose = (submitted: boolean, newItem?: IFoodItemState) => {
    this.setState({ isDialogOpen: false });
    if(submitted && newItem && this.foodTable.current) {
      this.foodTable.current.createFoodItem(newItem);
    }
  };

  render() {
    const { fullScreen } = this.props;
    return (
      <React.Fragment>
        <FoodTable 
          innerRef={this.foodTable}
          handleDialogOpen={this.handleDialogOpen}
          />
        <Dialog
          fullScreen={fullScreen}
          open={this.state.isDialogOpen}
          onClose={event => this.handleDialogClose(false)}
          aria-labelledby="form-dialog-title"
        >
        <FoodForm handleDialogClose={this.handleDialogClose}/>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default compose(withMobileDialog({breakpoint: 'xs'}),withStyles(appStyles))(App);
