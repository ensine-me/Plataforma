import { createStore } from 'redux';

 const environment = "local";
// const environment = "remoto";
// const environment = "privado-ec2";

 const initialState = {
  backEndUrl: environment === "local" ? 'http://localhost:8080/' :
              environment === "remoto" ? 'http://44.217.177.131:8080/' :
              environment === "privado-ec2" ? '10.0.0.24:8080/' : '',
  frontEndUrl: environment === "local" ? 'http://localhost:3000/' :
               environment === "remoto" ? 'https://ensineme.org/' : ''
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
