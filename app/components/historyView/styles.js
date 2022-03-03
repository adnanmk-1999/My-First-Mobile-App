import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  clearCont: {
    height: 40,
    alignItems: 'flex-end',
    paddingRight: 15,
    justifyContent: 'center',
  },

  txtClear: {
    color: '#435fde',
    fontFamily: 'Roboto',
    fontSize: 15,
  },

  txtExpression: {
    color: '#000',
    fontFamily: 'Helvetica-Light',
    fontSize: 15,
  },

  txtResult: {
    color: '#3c7a43',
    fontFamily: 'Helvetica-Light',
    fontSize: 15,
  },

  historyCont: {
    flex: 1,
    flexDirection: 'column',
  },

  placeHolderHistory: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    borderTopWidth: 0.7,
    borderColor: '#000',
  },

  expressionCont: {
    flex: 0.7,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },

  resultCont: {
    flex: 0.3,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },

  emptyHistoryCont: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtEmptyHistory: {
    color: '#7f8c8d',
    fontFamily: 'Helvetica-Light',
    fontSize: 15,
  },
});
