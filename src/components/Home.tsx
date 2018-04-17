import * as React from 'react';
import { ISite } from '../interfaces/Interface';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Tile from './Tile';
import '../styles/home.css';

class Home extends React.Component<ISite> {

    onPress = (panel: boolean) => {
        return true;
    }

    render() {
        return(
            <div className="homeContainer">
                <div className="topRow">
                    <Tile name={'Alcohol'} path={"/alcoholTracker"}/>
                    <Tile name={'Lagoon'} path={"/lagoonCounter"}/>
                </div>
                <div className="bottomRow">
                    <Tile name={'Counter'} path={"/counter"}/>
                </div>
                
                <FloatingActionButton className="add-btn" children={<i className="material-icons">add</i>}/>
            </div>
        );
    }
}

export default Home;
