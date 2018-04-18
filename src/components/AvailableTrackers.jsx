import * as React from 'react';
import { IAvailable } from '../interfaces/Interface';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import currentTrackers from '../json/currentTrackers.json';
import axios from 'axios';


import '../styles/available.css'

class AvailableTrackers extends React.Component{

    constructor(props){
        super(props);
        this.state={
            availableTiles: [{name: 'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla'},{name: 'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla'},{name: 'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla'},{name: 'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla'},{name: 'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla'},{name: 'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla'},{name: 'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla'},{name: 'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla'},{name: 'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla'},{name: 'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla'}]
        }
    }


    render(){
        const availableTrackers = this.state.availableTiles;
        return(
            <div className="availableContainer">
                <div className="current">
                    <div className="head">
                        <h3>CURRENT TRACKERS</h3>
                    </div>
                    <div className="trackers">
                    {availableTrackers.map(function(availableTracker){
                        console.log('here dawg',availableTracker.name)
                        return(
                            <Link to='/tracker'>
                                <Paper className="trackersTile" zDepth={2}>
                                    <h3>{availableTracker.name}</h3>
                                    <p>{availableTracker.description}</p>
                                </Paper>
                            </Link>
                        )
                    })}
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

                <div className="upcoming">
                    <div className="head">
                        <h3>PAST EVENTS</h3>
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