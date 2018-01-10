import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from 'actions/index';
import getName from 'selectors/name';
import Button from 'components/Button/index';
import styles from './styles';

export class Home extends Component {

  submitName(name) {
    return this.props.setName(name);
  }

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

Home.defaultProps = {
  setName: () => {},
  name: '',
};

Home.propTypes = {
  setName: PropTypes.func.isRequired,
  name: PropTypes.string,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { name: getName(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
