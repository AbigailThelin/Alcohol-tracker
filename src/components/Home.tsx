import * as React from 'react';
import { ISite } from '../interfaces/Interface';
import AppBar from 'material-ui/AppBar';
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
                <AppBar 
                    title="Tracker"
                    // tslint:disable-next-line jsx-no-lambda
                    // onLeftIconButtonClick={() => { this.onPress(true);}}
                />
                <div className="topRow">
                    <Tile name={'Lagoon'} />
                    <Tile name={'Alcohol'} />
                </div>
                <div className="bottomRow">
                    <Tile name={'Counter'} />
                </div>
                
                <FloatingActionButton className="add-btn" children={<i className="material-icons">add</i>}/>

            </div>
        );
    }
}

export default Home;