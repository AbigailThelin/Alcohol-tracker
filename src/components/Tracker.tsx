import * as React from 'react';
import Paper from 'material-ui/Paper';
// import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ITracker } from '../interfaces/Interface';

import '../styles/tracker.css';

export default class Tracker extends React.Component<ITracker, any>{

    constructor(props:any){
        super(props);
        this.state={
            employees:[{},{},{},{},{}]
        }
    }

    render(){
        return(
            <div className="trackerContainer">
                <Paper zDepth={2} className="trackingTile">
                <div>
                    <h2>This.props.title</h2>
                    <p>Enter employees badge number if unable to scan</p>
                </div>
                    <TextField
                        hintText="Badge Number"
                    />
                    <RaisedButton
                        primary={true}
                        label="Give a Drink"
                    />
                </Paper>
            </div>
        )
    }
}

