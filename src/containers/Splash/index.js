//Here we have an example of a basic container
//First we do our imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';//Self explanatory function
import { connect } from 'react-redux';//Will connect our container with the store
import PropTypes from 'prop-types';

//We're also importing some of our own files
import ActionCreators from 'actions/index';
import getTitle from 'selectors/title';
import positionerStyle from 'lib/styles/positioner';
import Button from 'components/Button/index';
import { staticStyles, dynamicStyles } from './styles';

//To start we declare our basic container as a class that extends Component
export class Splash extends Component {
  //Then we define our render method
  render() {
    //Which simply returns some code to the DOM
    return (
      <View style={staticStyles.container}>
        <Text style={dynamicStyles.getTitle('white')}>{this.props.title}</Text>
        <View style={positionerStyle.centeringFromBottom('20%')}>
          <Button
            text={'Fetch Remote Title'}
            type={'standard'}
            onPress={() => {
              this.props.fetchTitle();//Notice that fetch title comes from props
            }}
          />
        </View>
      </View>
    );
  }
}
//Declaring default props
Splash.defaultProps = {
  fetchTitle: () => {},
  title: '',
};
//And setting prop types
Splash.propTypes = {
  fetchTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

//Here we are using bindActionCreators to return a dispatcher for all of our
//actions.
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
//Here we take the store and return the title from getTitle
function mapStateToProps(store) {
  return { title: getTitle(store) };//Imported from selectors, watches the store
}

//Finally we export the return value of connect
export default connect(mapStateToProps, mapDispatchToProps)(Splash);

/**************************************************************
Here we have an example of the index.js for our Splash container.

You'll notice that it's very different from our dumb button,
and it should be! You'll also notice that while we have been
calling it a container, it extends the Component class. Didn't
our button component get delcared as a function? What's going
on here?

Recall that our Button is a function; it takes 3 props and
spits out some code for the DOM. Our Splash container, however,
is not dumb. It needs to pay attention to the store,
specifically the return value for getTitle. For that matter, it
also needs to be able to run fetchTitle, which is supposed to
update that value. These two "cognitive demands" are the reason
Splash must extend React.Component (another way to write it if
you don't import { Component } from React) and use connect.
Connect will ensure that Splash has fetchTitle in its props, as
well as any other action listed in ActionCreators. It will also
be sure to keep an eye on the value that getTitle returns from 
the store and make it available to access in props. Any change
in that value will cause Splash to re-render, which is exactly
what we want!

Note that getTitle is used twice in this example two describe
two different things; the selector, and a dynamic styling
function.

**************************************************************/
