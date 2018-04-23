import * as React from 'react';
import './styles/App.css';
import { IPanel } from './interfaces/Interface';
import router from './utilities/router';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

class App extends React.Component<IPanel, any>{

  constructor(props: any){
    super(props)
    this.state={
      open: false
    }
  }

  toggleNav = () => this.setState({open: !this.state.open})
  
  render() {
    return (
      <div className="App">
      <AppBar
        title="Tracker"
        iconElementLeft={<Link to='/'><i className="material-icons home">home</i></Link>}
      />
        {router}
      </div>
    );
  }
}

export default App;
