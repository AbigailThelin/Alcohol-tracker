import * as React from 'react';
import '../styles/modal.css';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

export interface IModal {
    exit: () => void;
    title?: string;
    name?: string | number;
    number?: any;
} 

export const Modal1:React.SFC<IModal> = ({ exit, title, name, number }) =>{
    return (
        <div className="modalContainer" onClick={exit}>
            <Card className="modal">
                <div className="exitContainer">
                    <i className="material-icons exit" onClick={exit}>clear</i>
                </div>
                <div>
                    <h3>CONGRATS</h3>
                    <h6>You created a new {title} tracker event</h6>
                    <h6>Name: {name}</h6>
                    <h6>Drinks allotted: {number}</h6>
                </div>
                <Link to='/'>
                    <RaisedButton
                        className="finishButton"
                        label="Go back to Home page"
                        primary={true}
                    />
                </Link>
            </Card>
        </div>
    );
}