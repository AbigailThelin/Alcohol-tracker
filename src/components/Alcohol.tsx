import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import { IAlcohol } from '../interfaces/Interface';
import { Modal1 } from './modal';
import { connect } from 'react-redux';
import { endDate, startDate } from '../actions/index';

import '../styles/alcohol.css'

class Alcohol extends React.Component<IAlcohol, any>{

    constructor(props: any){
        super(props);
        this.state={
            // startDate: null,
            // endDate: null,
            nameOfEvent: '',
            num: '',
            modal: false
        }
    }

    handleChange = (e: any, type: string) => {
        if(type === 'name'){
            this.setState({ nameOfEvent: e.target.value})
        }else if(type === 'number'){
            this.setState({ num: e.target.value})
        }
    }

    startDateChange = (e:any, value:any) => {
        // this.setState({startDate: value})
        this.props.startDate(value)
    }

    endDateChange = (e:any, value:any) => {
        // this.setState({endDate: value})
        this.props.endDate(value)
    }
    

    toggleModal = () => {
        this.setState({modal: !this.state.modal})
    }


    render() {
        // console.log('redux', this.props.endDate)
        return(
            <div className="alcoholContainer">
                {this.state.modal ? <Modal1 exit={this.toggleModal} title={'Alcohol'} name={this.state.nameOfEvent} number={this.state.num} start={this.state.startDate} end={this.state.endDate}/> : null}
                <p className="alcoholTitle">Alcohol Tracker</p>
                <Paper zDepth={3} className="paper">
                    <div className="AlcoholPaper">
                        <div className="leftSide">
                            <TextField
                                // tslint:disable-next-line jsx-no-lambda
                                onChange={(e) => this.handleChange(e, 'name')}
                                hintText="Name your event here"
                                floatingLabelText="Name Of Event"
                            />                   
                            <TextField
                                // tslint:disable-next-line jsx-no-lambda
                                onChange={(e) => this.handleChange(e, 'number')}
                                hintText="Drinkss Allotted"
                                floatingLabelText="How many drinks allotted"
                            />
                        </div>
                        <div className="rightSide">
                            <DatePicker
                                onChange={this.startDateChange}
                                hintText="Start Date" 
                                mode="landscape" 
                            />                    
                            <DatePicker
                                onChange={this.endDateChange}
                                hintText="End Date" 
                                mode="landscape" 
                            />
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

function mapStateToProps(state: IAlcohol){
    return{
        alcoholTitle: 'jersey day'
    }
}

export default connect(mapStateToProps, {endDate, startDate})(Alcohol);