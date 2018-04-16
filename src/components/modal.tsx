import * as React from 'react';
import '../styles/modal.css';
import { Card } from 'material-ui/Card'

export interface IModal {
    exit: () => void;
    title?: string;
} 

export const Modal1:React.SFC<IModal> = ({ exit, title }) =>{
    return (
        <div className="modalContainer" onClick={exit}>
            <Card className="modal">
                <div className="exitContainer">
                    <i className="material-icons exit" onClick={exit}>clear</i>
                </div>
                <div>
                    <h3>CONGRATS</h3>
                    <h6>You created a {title} tracker event</h6>
                </div>
            </Card>
        </div>
    );
}