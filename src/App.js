
// First we do our imports
import React, { Component } from 'react';
import { NetInfo } from 'react-native';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// We also import our own files
import getStore from 'store';
import navigator from 'navigator';
import ActionCreators from 'actions/index';

// Here we expand the navigator object we passed in
const { navReducer, AppWithNavigationState } = navigator;

// We define the App as a class that extends React.Component
export default class App extends Component {
  // Not needed but good coding practice
  constructor(props) {
    super(props);
  }
  // Is this needed????
  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', (isConnected) => {
      this.props.store.dispatch(ActionCreators.setConnectivity(isConnected));
    });
  }
  // The render method returns redux's Provider
  render() {
    return (
      <Provider store={this.props.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
// Here we make use of the navReducer
App.defaultProps = {
  store: getStore(navReducer),
};

/**************************************************************
Our App.js file is where everything comes together.
**************************************************************/
