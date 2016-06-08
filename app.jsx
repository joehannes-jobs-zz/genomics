import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GToolbar from './src/toolbar.jsx!';
import GGrid from './src/grid.jsx!';

const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 3,
    price: 8
};

const App = () => (
    <main>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <GToolbar />
      </MuiThemeProvider>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <GGrid />
      </MuiThemeProvider>
    </main>
);

ReactDOM.render(
    <App />,
    document.querySelector('.root')
);
//setTimeout(() => { ReactDOM.findDOMNode("GGrid").tick(); }, 1000);
