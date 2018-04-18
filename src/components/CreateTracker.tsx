import * as React from 'react';
import { ISite } from '../interfaces/Interface';

import Tile from './Tile';
import '../styles/home.css';

class CreateTracker extends React.Component<ISite> {

    onPress = (panel: boolean) => {
        return true;
    }

    render() {
        return(
            <div className="homeContainer">
                <h3>Click a tile to create a new Tracker</h3>
                <div className="topRow">
                    <Tile name={'Alcohol'} path={"/alcoholTracker"}/>
                    <Tile name={'Lagoon'} path={"/lagoonCounter"}/>
                </div>
                <div className="bottomRow">
                    <Tile name={'Counter'} path={"/counter"}/>
                </div>
            </div>
        );
    }
}

export default CreateTracker;
