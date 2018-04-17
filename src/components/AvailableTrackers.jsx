import * as React from 'react';
import { IAvailable } from '../interfaces/Interface';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';


import '../styles/available.css'

class AvailableTrackers extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentTrackers:[],
            upcomingTrackers:[]
        }
    }

    render(){
        return(
            <div className="availableContainer">
                <div className="current">
                    <div className="head">
                        <h3>CURRENT TRACKERS</h3>
                    </div>
                    <div className="trackers">
                        {/* {this.state.currentTrackers ? 'No current trackers' : null} */}
                        <div className="card-1 trackersTile">
                            Alcohol
                        </div>
                        <Paper className="trackersTile" zDepth={2}>
                            Lagoon
                        </Paper>
                    </div>
                </div>
                <div className="upcoming">
                    <div className="head">
                        <h3>UPCOMING TRACKERS</h3>
                    </div>
                    <div className="trackers">
                        {this.state.upcomingTrackers ? 'No upcoming trackers' : null}
                    </div>
                </div>
                    <Link to='/createTracker'><FloatingActionButton tooltip="Add new Tracker" className="goToCreate" children={<i className="material-icons">add</i>}/></Link>
            </div>
        )
    }
}

export default AvailableTrackers;