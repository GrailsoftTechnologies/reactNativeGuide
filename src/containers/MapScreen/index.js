import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import ActionCreators from 'actions/index';
import getName from 'selectors/name';
import MapMarker from 'components/MapMarker';
import styles from './styles';


export class MapScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1, height: '100%', width: '100%' }} provider={PROVIDER_GOOGLE} >
        </MapView>
      </View>
    );
  }
}

MapScreen.defaultProps = {
  markers: {},
};

MapScreen.propTypes = {
  markers: PropTypes.instanceOf(MapMarker),
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { name: getName(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
