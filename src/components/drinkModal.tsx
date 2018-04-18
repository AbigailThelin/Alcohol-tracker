import * as React from 'react';
import '../styles/drinkModal.css';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export interface IDrinkModal {
    exit: () => void;
    employees?: any;
    ids?: any;
    badgeID?: any;
    currentEmployee: any;
}

class DrinkModal extends React.Component<IDrinkModal, any>{

    constructor(props: any){
        super(props);
        this.state={
            twoDrinks: false
        }
    }

    // componentDidMount(){
        //get all employees here instead of passing through props
    // }

    render(){
        const employeeName = this.props.currentEmployee[0].name;
        return(
            <div className="drinkModalConatiner">

                <Card className="drinkModal">
    
                    <div className="exitContainer">
                        <i className="material-icons exit" onClick={this.props.exit}>clear</i>
                    </div>

                    <div className="modalContent">
                        <div className="text">
                            <h2>{employeeName} has had 1 drink</h2>
                        </div>

                    <RaisedButton
                        primary={true}
                        label="Give a Drink"
                    />
                    </div>
    
                </Card>
            </div>
        )
    }
}

export default DrinkModal;