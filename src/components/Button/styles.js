import { StyleSheet } from 'react-native';

import colors from 'lib/colors';

const standard = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    borderWidth: 5,
    borderRadius: 20,
    padding: 5,
    width: 150, // should this value be made amenable to a variety of screen sizes?
  },
  text: {
    color: colors.secondary,
  },
});


export default { standard };

/**************************************************************
We can keep code looking tidier if we separate stylesheets into
separate files. This can make things handy for tweaking styles
later on as well.
**************************************************************/
