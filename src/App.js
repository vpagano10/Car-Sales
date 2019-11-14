// IMPORTS
import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature, total } from './actions/Feature';

// REDUX/REACT-REDUX
import { connect } from 'react-redux';

const App = props => {
  // === This part is commented out because it is now being used by initial state to set the initial state for the app. ===

  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
    props.total(item.price);
  };

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
    props.total(- item.price);
  };
  
  // only thing(s) changed in the return was state => props (Lines - 49, 53 and 57)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures 
          additionalFeatures={props.additionalFeatures} 
          buyItem={buyItem} 
          />
        <Total 
          car={props.car} 
          additionalPrice={props.additionalPrice} 
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    // ...state,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    // addFeature: state.addFeature,
    // removeFeature: state.removeFeature,
    // total: state.total
  };
};

const mapDispatchToProps = {
  addFeature,
  removeFeature,
  total
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
