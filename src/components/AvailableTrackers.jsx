import * as React from 'react';
import { IAvailable } from '../interfaces/Interface';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import currentTrackers from '../json/currentTrackers.json';
import axios from 'axios';

import '../styles/available.css'
import { RaisedButton } from 'material-ui';

class AvailableTrackers extends React.Component{

    constructor(props){
        super(props);
        this.state={
            availableTiles: [{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-17'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-17'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-17'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-17'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-17'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-17'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-17'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-17'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-17'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-17'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-20'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-23'},{name: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-24'},{name: '18', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-18'},{name: '14', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla', date:'2018-04-19'}],
            availableTracker: [],
            upcomingTrackers: [],
            pastTrackers: []
        }
    }

    componentWillMount(){
        const allTiles = this.state.availableTiles;
        const availableTracker = [];
        const upcomingTrackers = [];
        const pastTrackers = [];
        
        allTiles.map((tile) => {
            
            const tempDate = new Date().toISOString().split('T')[0];
            
            if(tile.date < tempDate) {
                pastTrackers.push(tile)
            }
            if(tile.date > tempDate){
                upcomingTrackers.push(tile)
            }
            if(tile.date === tempDate){
                availableTracker.push(tile)
            }
        })
        
        this.setState({
            availableTracker, pastTrackers, upcomingTrackers
        })
    }

    
    
    render(){
        const availableTrackers = this.state.availableTracker;
        const upcomingTrackers = this.state.upcomingTrackers;
        const pastTrackers = this.state.pastTrackers;
        let size = 5;
        let addFive = function(size){
            return size += 5
        }
        // const { pastTrackers, upcomingTrackers, availableTrackers } = this.state;
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
                    {availableTrackers.map((availableTracker,index)=>{
                        return(
                            <Link to='/tracker'>
                                <Paper key={`availableTracker${index}`} className="trackersTile" zDepth={2}>
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
                        {upcomingTrackers.map((availableTracker,index)=>{
                        return(
                            <Link to='/tracker'>
                                <Paper key={`upcomingTrackers${index}`} className="trackersTile" zDepth={2}>
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
                    {pastTrackers.slice(0, size).map((pastTracker,index)=>{
                        return(
                            <Link to='/tracker'>
                                <Paper className="trackersTile" key={`pastTracker${index}`} zDepth={2}>
                                    <h3>{pastTracker.name}</h3>
                                    <p>{pastTracker.description}</p>
                                    <p>{pastTracker.date}</p>
                                    <p>Click to view event details</p>
                                </Paper>
                            </Link>
                        )
                    })}
                    </div>
                    {pastTrackers.length > 5 ? 
                    <div className="showMoreContainer">
                        <RaisedButton
                            onClick={this.addFive}
                            className="showMoreBtn"
                            label="Show More"
                            primary={true}
                        />
                    </div>
                    :
                    null
                    }
                </div>
            </div>
        )
    }
}

export default AvailableTrackers;