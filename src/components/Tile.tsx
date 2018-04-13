import * as React from 'react';
import { ITile } from '../interfaces/Interface';
import Paper from 'material-ui/Paper';

import '../styles/tile.css';

class Tile extends React.Component<ITile> {

    render() {
        return(
            <Paper zDepth={2}  className="tileContainer">
                {this.props.name}
            </Paper>
        );
    }
}

export default Tile;