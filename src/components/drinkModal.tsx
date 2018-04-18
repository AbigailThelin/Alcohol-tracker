import * as React from 'react';
import '../styles/drinkModal.css';
import { Card } from 'material-ui/Card';

export interface IDrinkModal {
    exit: () => void;
    employees?: any;
    ids?: any;
    badgeID?: any;
}

export const DrinkModal:React.SFC<IDrinkModal> = ({ employees, ids, badgeID, exit}) => {
    return(
        <div className="drinkModalConatiner">

            <Card className="drinkModal">
                {badgeID}

                <div className="exitContainer">
                    <i className="material-icons exit" onClick={exit}>clear</i>
                </div>
            </Card>
        </div>
    )
}

export default DrinkModal;