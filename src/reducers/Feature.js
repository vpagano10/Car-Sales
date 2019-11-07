import  { ADD_FEATURE, REMOVE_FEATURE, TOTAL } from '../actions/Feature';

export const initialState = {
    // (additionalPrice and car:) - (data from Line 5 through line 18) - are given thier initial state from App.js, this data was provided then inputted into this component as the initialState.
    additionalPrice: 0, 
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
      },
      additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
};

// reducer function that takes state and action where state is set to initialState
export function reducer(state = initialState, action) {
    switch (action.type) {
        // addFeature action 
        case ADD_FEATURE:
            // if the feature is already added, state is returned, else adds the feature
            if (state.car.features.includes(action.payload)) {
                return state;
            } else {
                return {
                    ...state,
                    car: {
                        ...state.car,
                        features: [...state.car.features, action.payload]
                    }
                };
            }
        // removeFeature action
        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(
                        vehicle => vehicle.id !== action.payload.id
                    )
                }
            };
        // total action
        case TOTAL:
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload
            }
        default:
            return state;
    };
};







// === All comments represent changes/additions to the component ===