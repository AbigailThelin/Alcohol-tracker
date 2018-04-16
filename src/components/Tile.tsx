import * as React from 'react';
import { ITile } from '../interfaces/Interface';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
import '../styles/tile.css';

export default class Tile extends React.Component<ITile> {
    render() {
        return(
            <Link to={this.props.path} className="container">
                <div id="Tile" className="card-1">
                    <h3 className="tileTitle">{this.props.name} Tracker</h3>
                </div>
            </Link>
        );
    }
}

// const mapStateToProps = (state: IState) => ({
//         date: state.startDate
// });
// export default connect(mapStateToProps, )(Tile);