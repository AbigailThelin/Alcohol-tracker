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
            availableTiles: [{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-17'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-10'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-27'},{name: '18', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-18'},{name: '14', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-19'}],
            availableTracker: [],
            upcomingTrackers: [],
            pastTrackers: []
        }
    }

    componentDidMount(){
        const allTiles = this.state.availableTiles;
        const todayTracker = [];
        const futureTracker = [];
        const pastTracker = [];

        allTiles.map(function(tile){
            if(tile.date > new Date().toISOString().split('T')[0]){
                todayTracker.push(tile)
            }else if(tile.date === new Date().toISOString().split('T')[0]){
                futureTracker.push(tile)
            }else if(tile.date <= new Date().toISOString().split('T')[0]){
                pastTracker.push(tile)
            }
        })
        
        this.setState({
            availableTracker: todayTracker.reverse(),
            pastTrackers: pastTracker.reverse(),
            availableTracker: futureTracker.reverse()
        })
    }
    
    
    render(){
        const availableTrackers = this.state.availableTracker;
        const upcomingTrackers = this.state.upcomingTrackers;
        const pastTrackers = this.state.pastTrackers;

        console.log('today',this.state.availableTracker)
        console.log('future',this.state.upcomingTrackers)
        console.log('past',this.state.pastTrackers)
        return(
            <div className="availableContainer">
                <div className="btnContainer">
                    <Link to='/createTracker' className="link">
                        <FloatingActionButton tooltip="Add new Tracker" className="goToCreate" children={<i className="material-icons">add</i>}/>
                    </Link>
                </div>
                <div className="current">
                    <div className="head">
                        <h3>CURRENT TRACKERS</h3>
                    </div>
                    <div className="trackers">
                    {availableTrackers.map(function(availableTracker){
                        return(
                            <Link to='/tracker'>
                                <Paper className="trackersTile" zDepth={2}>
                                    <h3>{availableTracker.name}</h3>
                                    <p>{availableTracker.description}</p>
                                    <p>{availableTracker.date}</p>
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
                        {upcomingTrackers.map(function(availableTracker){
                        return(
                            <Link to='/tracker'>
                                <Paper className="trackersTile" zDepth={2}>
                                    <h3>{availableTracker.name}</h3>
                                    <p>{availableTracker.description}</p>
                                    <p>{availableTracker.date}</p>
                                </Paper>
                            </Link>
                        )
                    })}
                    </div>
                </div>

                <div className="upcoming">
                    <div className="head">
                        <h3>PAST EVENTS</h3>
                    </div>
                    <div className="trackers">
                    {pastTrackers.map(function(availableTracker){
                        return(
                            <Link to='/tracker'>
                                <Paper className="trackersTile" zDepth={2}>
                                    <h3>{availableTracker.name}</h3>
                                    <p>{availableTracker.description}</p>
                                    <p>{availableTracker.date}</p>
                                </Paper>
                            </Link>
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default AvailableTrackers;