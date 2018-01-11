//Here's a basic button component
//First we import
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

//Then declare our component as a fat arrow function that takes props and
//returns some DOM stuff
const Button = (props) => {
  const style = styles[props.type];
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={style.container}
    >
      <Text style={style.text}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
//It's good practice to set your default props
Button.defaultProps = {
  type: 'standard',
  onPress: () => {},
  text: '',
};
//It's also good practice to declare your prop types, and be sure to specify
//if any are required
Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};
//Finally, export
export default Button;


/**************************************************************
Here we have an example of the index.js for a button component.

You'll notice that it's very boring, and it should be. The
button is a good example of a "dumb component". The button
isn't concerned with what is going on elsewhere, nor should it
be. It simply takes 3 props, and acts accordingly. This makes
it easy to reuse, which makes for good code. Now

    <TouchableOpacity
      onPress={props.onPress}
      style={style.container}
    >
      <Text style={style.text}>
        {props.text}
      </Text>
    </TouchableOpacity>

Can be simplified to

<Button
  onPress={someFunction}
  text={"Do Something"}
  type={button.style1}/>

Great!

**************************************************************/
