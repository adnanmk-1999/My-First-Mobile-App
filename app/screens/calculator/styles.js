import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainer: {
    elevation: 8,
    backgroundColor: '#a8323e',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  buttonText: {
    color: 'white',
  },

  contHistory: {
    flex: 0.3,
    backgroundColor: '#bdc3c7',
  },

  contOutput: {
    flex: 0.2,
  },

  contButtons: {
    flex: 0.5,
    backgroundColor: '#bdc3c7',
  },

  placeHolderOutput: {
    flex: 1,
    backgroundColor: '#424242',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },

  textDefault: {
    color: '#fff',
    fontFamily: 'Helvetica-Light',
    fontSize: 30,
  },
});
