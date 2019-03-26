import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Form from './From';
import FoodTable from './FoodTable/FoodTable';
import bgImage from './bg-image.png';

const appStyles = (theme: any) => ({
  '@global body': {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: '400px'
  }
});

class App extends Component {
  render() {
    return (
      <FoodTable/>
    );
  }
}

//@ts-ignore
export default withStyles(appStyles)(App);
