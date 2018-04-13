import * as React from 'react';
import { ITile } from '../interfaces/Interface';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

import '../styles/tile.css';

class Tile extends React.Component<ITile> {



    render() {
        console.log('welooooo', this.props.path)
        return(
            <Paper id="Tile" zDepth={2} className="tileContainer">
                <Link to={this.props.path}>{this.props.name}</Link>
            </Paper>
        );
    }
}

export default Tile;