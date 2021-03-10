import React, {Component} from 'react';
import './Inventory.css';

class InventoryShoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 80,
            soldCount: 64
        }
        this.addButton = this.addButton.bind(this);
        this.minusButton = this.minusButton.bind(this);
        this.resetButton = this.resetButton.bind(this);
        console.log(constructor, this);
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
                <h3>Available Shoes: {this.state.count}</h3>
                <h4>Sold Shoes: {this.state.count}</h4>
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
export default InventoryShoes;

