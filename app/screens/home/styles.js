import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4287f5',
  },
  logo: {
    width: 150,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#a8323e',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom:5
  },
  buttonText: {
    color: 'white',
  },
});
