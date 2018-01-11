import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import ActionCreators from 'actions/index';
import getName from 'selectors/name';
import getViewCoords from 'selectors/viewCoords';
import getMarkers from 'selectors/markers';
import MapMarker from 'components/MapMarker';
import Button from 'components/Button';
import styles from './styles';


export class MapScreen extends Component {
  region2 = {
    latitude: 45.527,
    longitude: -122.683,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  markers = [];

  setFocus(focus) {
    this.props.setViewCoords(focus);
    this.markers = (<Marker coordinate={this.props.markers[0].coordinate} />);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView region={this.props.viewCoords} style={{ flex: 1, height: '100%', width: '100%', position: 'absolute', top: 0, right: 0 }} provider={PROVIDER_GOOGLE} >
          {this.markers}
        </MapView>
        <Button style={{ flex: 1, position: 'absolute', bottom: 0 }} type={'standard'} onPress={() => { this.setFocus(this.region2); }} text={'Find EyeCue'} />
      </View>
    );
  }
}

MapScreen.defaultProps = {
  markers: [],
  viewCoords: {
    latitude: 45.5231,
    longitude: -122.6708,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  },
  setViewCoords: () => {},
  setMarkers: () => {},
};

MapScreen.propTypes = {
  markers: PropTypes.array,
  viewCoords: PropTypes.object,
  setViewCoords: PropTypes.func,
  setMarkers: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { name: getName(store), viewCoords: getViewCoords(store), markers: getMarkers(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
