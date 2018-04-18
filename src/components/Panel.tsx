import * as React from 'react';
import { IPanel } from '../interfaces/Interface';
// import Drawer from 'material-ui/Drawer';

export default class Panel extends React.Component<IPanel, any>{

  constructor(props:any){
    super(props);
    this.state={}
  }

  render(){
    return(
      <p>hello</p>
      // <Drawer open>

      // </Drawer>
    )
  }
}