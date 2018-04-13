import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Fabric } from 'office-ui-fabric-react/lib//Fabric';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Fabric>
    <MuiThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </MuiThemeProvider>
  </Fabric>
  , 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
