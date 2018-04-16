import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import { IAlcohol } from '../interfaces/Interface';
import { Modal1 } from './modal';

import '../styles/alcohol.css'

class Alcohol extends React.Component<IAlcohol, any>{

    constructor(props: any){
        super(props);
        this.state={
            startDate: '',
            endDate: '',
            modal: false
        }
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal})
    }


    render() {
        return(
            <div className="alcoholContainer">
                {this.state.modal ? <Modal1 exit={this.toggleModal}/> : null}
                <p className="alcoholTitle">Alcohol Tracker</p>
                <Paper zDepth={3} className="paper">
                    <div className="AlcoholPaper">
                        <div className="leftSide">
                            <TextField
                                hintText="Name your event here"
                                floatingLabelText="Name Of Event"
                            />                   
                            <TextField
                                hintText="Drinkss Allotted"
                                floatingLabelText="How many drinks allotted"
                            />
                        </div>
                        <div className="rightSide">
                            <DatePicker hintText="Start Date" mode="landscape" />                    
                            <DatePicker hintText="End Date" mode="landscape" />
                        </div>
                    </div>
                    <div className="button">
                        <RaisedButton className="finishButton" label="Create New Tracker" primary={true} onClick={this.toggleModal}/>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Alcohol;