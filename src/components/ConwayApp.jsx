import GToolbar from "./Toolbar.jsx!";
import GGrid from "./Grid.jsx!";
import React from "react";
import ConwayStore from "../stores/ConwayStore";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var getGameBoard = () => {
  return {
    board: ConwayStore.fetchNext()
  };

}

export default class ConwayApp extends React.Component {
  constructor() {
    super({});
    this.state = getGameBoard();
  }
  componentDidMount () {
    ConwayStore.addChangeListener(this._onChange);
  }
  componentWillUnmount () {
    ConwayStore.removeChangeListener(this._onChange);
  }
  render () {
    return (
      <main>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <GToolbar />
        </MuiThemeProvider>
        <GGrid
          board={this.state.board}
        />
      </main>
    );
  }
  _onChange () {
    this.setState(getGameBoard());
  }
}
