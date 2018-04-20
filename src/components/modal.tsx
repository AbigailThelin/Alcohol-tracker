import * as React from 'react';
import '../styles/modal.css';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export interface IModal {
    exit: () => void;
    title?: string;
    name?: string | number;
    number?: any;
    start?: string;
    end?: string;
} 

export const Modal1:React.SFC<IModal> = ({ exit, title, name, number, start, end }) =>{
    console.log('modal props', start)
    return (
        <div className="modalContainer" onClick={exit}>
            <Card className="modal">
                <div className="exitContainer">
                    <i className="material-icons exit" onClick={exit}>clear</i>
                </div>
                <div className="content">
                    <h3>You created a new {title} tracker event</h3>
                    <h5>Name: {name}</h5>
                    <h5>Drinks allotted: {number}</h5>
                    <h5>Start Date: <Moment format="MM/DD/YYYY">{start}</Moment></h5>
                    <h5>End Date: <Moment format="MM/DD/YYYY">{end}</Moment></h5>
                <Link to='/'>
                    <RaisedButton
                        className="finishButton2"
                        label="Go back to Home page"
                        primary={true}
                    />
                </Link>
                </div>
            </Card>
        </div>
    );
}