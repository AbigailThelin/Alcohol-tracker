import * as React from 'react';
import './App.css';
import router from './utilities/router';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
