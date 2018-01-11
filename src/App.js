
// First we do our imports
import React, { Component } from 'react';
import { NetInfo } from 'react-native';
import { Provider } from 'react-redux';

// We also import our own files
import getStore from 'store';
import navigator from 'navigator';
import ActionCreators from 'actions/index';

// Here we expand the navigator object we passed in
const { navReducer, AppWithNavigationState } = navigator;

// We define the App as a class that extends React.Component
export default class App extends Component {
  // This bit is for some helpful, extra debugger info, you can disregard it for now
  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', (isConnected) => {
      this.props.store.dispatch(ActionCreators.setConnectivity(isConnected));
    });
  }
  // The render method returns redux's Provider, which allows the containers
  // within it to access connect, which gives each container access to dispatch
  // and the store.
  render() {
    return (
      <Provider store={this.props.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
// Here we make use of the navReducer by passing into getStore
App.defaultProps = {
  store: getStore(navReducer),
};

/**************************************************************
Our App.js file is where everything comes together. You'll
notice that our store.js and navigator.js files are 'linked'
together in App.defaultProps.
**************************************************************/
