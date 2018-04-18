import * as React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ITracker } from '../interfaces/Interface';
import DrinkModal from './drinkModal';

import '../styles/tracker.css';

export default class Tracker extends React.Component<ITracker, any>{

    constructor(props:any){
        super(props);
        this.state={
            employees:[{name: 'joe', id: 12345},{name: 'kelly', id: 12321},{name: 'Jessica', id: 12255},{name: 'Paul', id: 98798}],
            ids:[],
            badgeID: '',
            drinkModal: false
        }
    }

    handleChange = (e: any, type: string) => {
        if(type === 'badge'){
            this.setState({badgeID: e.target.value})
        }
    }

    check = () => {
        const idsArray = this.state.ids;
        const badgeIDNumber = idsArray.concat(this.state.badgeID);

        this.setState({ids: badgeIDNumber, drinkModal: true})
    }

    toggleModal = () => {
        this.setState({drinkModal: false})
    }

    render(){
        return(
            <div className="trackerContainer">

            {!this.state.drinkModal ? null : <DrinkModal employees={this.state.employees} ids={this.state.ids} badgeID={this.state.badgeID} exit={this.toggleModal}/>}
               
                <Paper zDepth={2} className="trackingTile">
                <div>
                    <h2>This.props.title</h2>
                    <p>Enter employees badge number if unable to scan</p>
                </div>
                    <TextField
                        // tslint:disable-next-line jsx-no-lambda
                        onChange={(e) => this.handleChange(e, 'badge')}
                        maxlength="5"
                        hintText="Badge Number"
                    />
                    <RaisedButton
                        primary={true}
                        label="Submit"
                        onClick={this.check}
                    />
                </Paper>
            </div>
        )
    }
}

