import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';

import NumberBottons from '../../components/numberButton';
import HistoryView from '../../components/historyView';

import styles from './styles';

const buttons = [
  ['CLEAR', 'DEL'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '+'],
  ['.', '0', '=', '-'],
];
const initialOutput = '0';
const maxLength = 57;

function CalculatorScreen() {
  const [state, setState] = useState({
    output: initialOutput,
    history: [],
  });
  const [history, setHistory] = useState([]);

  //Handles actions on button press
  function handleEvent(value) {
    if (!isNaN(value) || value == '.') {
      concatToOutput(value);
    } else {
      switch (value) {
        case buttons[0][0]:
          initOutput();
          break;

        case buttons[0][1]:
          if (state.output.length === 1) {
            initOutput();
          } else {
            replaceLastIndex('');
          }
          break;

        case buttons[4][2]:
          evaluate();
          break;

        default:
          let strLastChar = state.output.slice(-1);
          if (isNaN(strLastChar)) {
            replaceLastIndex(value);
          } else {
            concatToOutput(value);
          }
          break;
      }
    }
  }

  //Function to concat user input to output screen
  function concatToOutput(value) {
    if (state.output.length >= maxLength) {
      showToast('Maximum Expression Length of ' + maxLength + ' is reached.');
    } else {
      if (state.output !== initialOutput) {
        setState({output: state.output + '' + value + ''});
      } else {
        setState({output: value + ''});
      }
    }
  }

  //Function to replace the last index of the output
  function replaceLastIndex(value) {
    var str1 = state.output.replace(/.$/, value);
    setState({
      output: str1,
    });
  }

  //Function to initialize output state
  function initOutput() {
    setState({
      output: initialOutput,
    });
  }

  //Validate and Calculate the output state as a Mathematical expression
  function evaluate() {
    try {
      let strCurOutput = state.output;
      if (isNaN(strCurOutput)) {
        let dEval = eval(convertToMathExpression(state.output));

        let aHistory = [...history];
        aHistory.push([strCurOutput, dEval]);

        setState({
          output: '' + dEval,
        });
        setHistory(aHistory);
      }
    } catch (exception) {
      /* console.log('exception: ' + exception); */
      showToast('Invalid format used.');
    }
  }

  //Function to convert the output state into a valid mathematical expression
  function convertToMathExpression(value) {
    let strTemp = value.replace(
      new RegExp(escapeRegExp(buttons[1][3]), 'g'),
      '/',
    );
    strTemp = strTemp.replace(
      new RegExp(escapeRegExp(buttons[2][3]), 'g'),
      '*',
    );
    return strTemp;
  }

  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
  }

  //Function to clear the history
  function clearHistory() {
    console.log('inside _clearHistory function');
    const emptyArray = [];
    setHistory(emptyArray);
  }

  //Function to display an android toast
  function showToast(value) {
    ToastAndroid.show(value, ToastAndroid.SHORT);
  }

  return (
    <View style={styles.container}>
      <View style={styles.contHistory}>
        <HistoryView data={history} onClear={clearHistory} />
      </View>

      <View style={styles.contOutput}>
        <View style={styles.placeHolderOutput}>
          <Text style={styles.textDefault}>{state.output}</Text>
        </View>
      </View>

      <View style={styles.contButtons}>
        <NumberBottons onBtnPress={handleEvent} buttons={buttons} />
      </View>
    </View>
  );
}

export default CalculatorScreen;
