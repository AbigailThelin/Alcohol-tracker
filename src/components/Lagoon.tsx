import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import { IAlcohol } from '../interfaces/Interface';
import Toggle from 'material-ui/Toggle';
import { Modal1 } from './modal';


import '../styles/alcohol.css'

class Lagoon extends React.Component<IAlcohol, any>{

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
                {this.state.modal ? <Modal1 exit={this.toggleModal} title={'Lagoon'}/> : null}
                <p className="alcoholTitle">Lagoon Tracker</p>
                <Paper zDepth={3} className="paper">
                    <div className="AlcoholPaper">
                        {/* <div className="leftSide"> */}
                            <TextField
                                hintText="Name your event here"
                                floatingLabelText="Name Of Event"
                            />                   
                            <TextField
                                hintText="Tickets Allotted"
                                floatingLabelText="How many tickets allotted"
                            />
                            <Toggle
                                label="Vegetarian options available"
                            />
                        </div>
                        <div className="rightSide">
                            <DatePicker hintText="Start Date" mode="landscape" />                    
                            <DatePicker hintText="End Date" mode="landscape" />
                        </div>
                    {/* </div> */}
                    <div className="button">
                        <RaisedButton className="finishButton" label="Create New Tracker" primary={true} onClick={this.toggleModal}/>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Lagoon;