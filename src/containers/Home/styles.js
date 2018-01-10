import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  greeting: {
    fontSize: 20,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    // width: 300,
    // height: 40,
    // fontSize: 30,
    // fontFamily: 'Avenir',
    color: 'white',
    // padding: 15,
    margin: 10,
    alignSelf: 'auto',
    borderRadius: 2,
    borderColor: 'white',
    borderWidth: 0.3,
    textAlign: 'center',
  },
});


export default styles;

/**************************************************************
We can keep code looking tidier if we separate stylesheets into
separate files. This can make things handy for tweaking styles
later on as well.
**************************************************************/
