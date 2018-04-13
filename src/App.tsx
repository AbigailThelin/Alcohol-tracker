import * as React from 'react';
import './App.css';
import router from './utilities/router';
import AppBar from 'material-ui/AppBar';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <AppBar
        title="Tracker"
      />
        {router}
      </div>
    );
  }
}

export default App;
