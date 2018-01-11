// Here we have an example of a basic container
// First we do our imports
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// We're also importing some of our own files
import ActionCreators from 'actions/index';
import getName from 'selectors/name';
import Button from 'components/Button/index';
import styles from './styles';

// To start we declare our basic container as a class that extends Component
export class Home extends Component {
  // Then we define our render method
  render() {
    let name = '';
    const greeting = (this.props.name !== '') ? `Hello, ${this.props.name}!` : 'Please enter your name';
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to React Native!</Text>
        <Text style={styles.greeting}>
          {greeting}
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Name"
          onChangeText={(text) => { name = text; }}
        />
        <Button type={'standard'} onPress={() => { this.props.setName(name); }} text={'Set your name'} />
      </View>
    );
  }
}

// Declaring default props
Home.defaultProps = {
  setName: () => {},
  name: '',
};
// And setting prop types
Home.propTypes = {
  setName: PropTypes.func.isRequired,
  name: PropTypes.string,
};
// Here we are using bindActionCreators to return a dispatcher for all of our
// actions.
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
// Here we take the store and return the name from getName
function mapStateToProps(store) {
  return { name: getName(store) };// Imported from selectors, watches the store
}
// Finally we export the return value of connect
export default connect(mapStateToProps, mapDispatchToProps)(Home);
