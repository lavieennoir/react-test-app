import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles, Theme } from '@material-ui/core/styles';
import FoodTable from './FoodTable/FoodTable';
import Form from './From';
import bgImage from './bg-image.png';

const appStyles = (theme: Theme) => ({
  '@global body': {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: '400px'
  }
});

enum Page {
  List,
  Create
}

interface IState {  
  currentPage: Page
}

class App extends Component<{}, IState> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      currentPage: Page.List
    }
  }
  render() {
    let content: JSX.Element;
    switch (this.state.currentPage) {
      case Page.Create:
        return (<Form/>);
      default:
        return (<FoodTable/>);
    }
  }
}

export default withStyles(appStyles)(App);
