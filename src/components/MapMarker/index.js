import React from 'react';
import { Marker } from 'react-native-maps';
import PropTypes from 'prop-types';

import styles from './styles';

const MapMarker = (props) => {
  return (
    <Marker style={styles.text} onPress={props.onPress}>
      {props.text}
    </Marker>
  );
};

MapMarker.defaultProps = {
  onPress: () => {},
  text: '',
};

MapMarker.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default MapMarker;
