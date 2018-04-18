import * as React from 'react';
import './App.css';
import router from './utilities/router';
import AppBar from 'material-ui/AppBar';

class App extends React.Component{
  
  render() {
    return (
      <div className="App">
      <AppBar
        title="Tracker"
        // onLeftIconButtonClick={this.toggleNav}
      />
        {router}
      </div>
    );
  }
}

export default App;
