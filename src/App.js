import React, {Component} from 'react';
import InventoryShirts from './InventoryShirts';
import InventoryJackets from "./InventoryJackets";
import InventoryPants from "./InventoryPants";
import InventoryShoes from "./InventoryShoes";

import "./App.css";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Welcome'
    }
  }
  getData(){
    setTimeout(() => {
      console.log("our data");
      this.setState({
        data: "Welcom To My Inventory Website"
      })
    })
  }

componentDidMount(){
  this.getData();
}

componentDidUpdate(){
  console.log("componentDidUpdate", this.state.data)
}
render(){
return (
  <div className="container">
    <h1>Stock Inventory</h1>
    <hr></hr>
    <div className="items">
      <InventoryShirts />
      <InventoryJackets />
      <InventoryPants />
      <InventoryShoes />

    </div>
    <hr></hr>
    <div><h1>{this.state.data}</h1></div>
    <hr></hr>
  </div>
)
}}

export default App;
