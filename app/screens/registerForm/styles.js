import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea:{
    flex: 1,
  },
  scroll:{
    flex:1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 40,
    paddingRight: 40
  },
  headingLayout: {
    flex: 0.2
  },
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 24,
    fontFamily: 'Helvetica-Light',
    color: 'white',
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    marginTop: 15,
    textAlign:'center',
    paddingBottom:10
  },
  inputContainer:{
    // marginBottom: 10
  },
  inputText: {
    height: 40,
    color : 'white',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#59cbbd',
    alignSelf: 'stretch',
    height: 40,
    marginTop: 20,
    justifyContent: "center",
    marginBottom:20
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold'
  }
});