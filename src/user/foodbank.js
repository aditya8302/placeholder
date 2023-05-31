import React from 'react';
import Navigation from '../navigation/navigation';
import Support from '../support';
import './foodbank.css';


const FoodBank = () => {

  const receivedItems = [
    { name: 'Apples',type:'veg', quantity: 20, receivedDate: '2022-03-15' },
    { name: 'Bread',type:'veg', quantity: 10, receivedDate: '2022-03-14' },
    { name: 'Carrots',type:'veg', quantity: 15, receivedDate: '2022-03-12' },
    { name: 'Potatoes',type:'veg', quantity: 8, receivedDate: '2022-03-10' },
    { name: 'Bananas',type:'veg', quantity: 25, receivedDate: '2022-03-08' },
  ];

  return (
    <section className="foodbank">
      <Navigation />
      <h2 className="foodbank-heading">Received Items</h2>
      <div className="foodbank-list">
      <div className="list-item">
          <div className="item-name">Item</div>
          <div className="item-type">type</div>
          <div className="item-quantity">Food Quantity</div>
          <div className="item-received-date">Date</div>
        </div>
        {receivedItems.map((item, index) => (
          <div key={index} className="list-item">
            <div className="item-name">{item.name}</div>
            <div className="item-type">{item.type}</div>
            <div className="item-quantity">{item.quantity}</div>
            <div className="item-received-date">{item.receivedDate}</div>
          </div>
        ))}
      </div>
      <Support />
    </section>
  );
};

export default FoodBank;
