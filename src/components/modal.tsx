import * as React from 'react';
import '../styles/modal.css'

export interface IModal {
    exit: () => void;
} 

export const Modal1:React.SFC<IModal> = ({ exit }) =>{
    return (
        <div className="modalContainer" onClick={exit}>
            <div className="modal">
                <div className="exitContainer">
                    <i className="material-icons exit" onClick={exit}>clear</i>
                </div>
            </div>
        </div>
    );
}