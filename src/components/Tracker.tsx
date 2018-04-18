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
            drinkModal: false,
            currentEmployee: null
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
        const allEmployees = this.state.employees
        const Id = this.state.badgeID
        
        let filteredEmployee = allEmployees.filter(function(employee:any){
            return employee.id === Number(Id)
        })

        this.setState({
            ids: badgeIDNumber, 
            drinkModal: true,
            currentEmployee: filteredEmployee
        })

        document.getElementById

    }

    toggleModal = () => {
        this.setState({drinkModal: false})
    }

    render(){
        return(
            <div className="trackerContainer">

            {!this.state.drinkModal ? null : <DrinkModal ids={this.state.ids} badgeID={this.state.badgeID} exit={this.toggleModal} currentEmployee={this.state.currentEmployee}/>}
               
                <Paper zDepth={2} className="trackingTile">
                <div>
                    <h2>This.props.title</h2>
                    <p>Enter employees badge number if unable to scan</p>
                </div>

                <form className="form">
                    <TextField
                        // tslint:disable-next-line jsx-no-lambda
                        onChange={(e) => this.handleChange(e, 'badge')}
                        maxlength="5"
                        hintText="Badge Number"
                        // type="text"
                    />
                    <RaisedButton
                        className="submitBtn"
                        type="reset"
                        primary={true}
                        label="Submit"
                        onClick={this.check}
                    />
                </form>
                </Paper>
            </div>
        )
    }
}

