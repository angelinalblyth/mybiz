import React, { Component } from 'react';
import AddOrder from './addOrder';
import SingleOrder from './singleOrder';

class Home extends Component {
   constructor(){
      super();
      this.state = {
         customers :[],
         orders: [],
         addOrder: false
      }
   }
   componentDidMount(){
      this.setState({
         customers : this.props.customers,
         orders : this.props.orders,
      })
   }
   handleAddOrderFormTrigger = () => {
      this.setState({
         addOrder : true
      })
   }
   handleHideorderForm = () => {
      this.setState({
         addOrder : false
      })
   }
  render() {
    return (
      <div className="ordersWrapper">
         {(this.state.addOrder && <AddOrder customers={this.props.customers} handleOrderUpdate={this.props.handleOrderUpdate} handleHideForm={this.handleHideorderForm}/>) || <button onClick={this.handleAddOrderFormTrigger}>Add Order</button>}
         {this.state.orders && this.state.orders.map((order, index) => (
            <SingleOrder
               key={index}
               _id= {order._id}
               orderName={order.orderName}
               Description={order.Description}
               customerName={order.customerName}
               orderDate={order.orderDate}
               dueDate={order.dueDate}
               status={order.status}
               customers = {this.props.customers}
               handleOrderEdit = {this.props.handleOrderEdit}
            />
         ))}
      </div>
    );
  }
}

export default Home;
