import React, {Component} from 'react';
import './Inventory.css';

class InventoryShirts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 100,
            soldCount: 17
        }
        this.addButton = this.addButton.bind(this);
        this.minusButton = this.minusButton.bind(this);
        this.resetButton = this.resetButton.bind(this);
        console.log(this, constructor);
    }


addButton() {
    this.setState({
        soldCoun: this.state.soldCount - 1,
        count: this.state.count + 1
    });
}
minusButton() {
    this.setState({
        soldCoun: this.state.soldCount + 1,
        count: this.state.count - 1
    });
}
resetButton() {
    this.setState({
        soldCoun: 0,
        count: 100
    });
}

render(){
    return (
        <div classNmae='containerInventory'>
            <div classNmae='style'>
                <h3>Available Shirts: {this.state.count}</h3>
                <h4>Sold Shirts: {this.state.count}</h4>
                <div className="addminus">
                    <button onClick={() => this.addButton()}> + </button>
                    <button onClick={() => this.minusButton()}> - </button>
                </div>
                <button onClick={() => this.resetButton()}> Reset </button>
            </div>
        </div>
    )
    }
}
export default InventoryShirts;

