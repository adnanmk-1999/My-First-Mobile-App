import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

//Styles
import styles from './styles';

function HistoryView(props) {

  //This will call the bound function from its parent component to clear history
  function onClear() {
    props.onClear();
  }

  return (
    <View style={styles.container}>
      <View style={styles.clearCont}>
        <Text onPress={() => onClear()} style={styles.txtClear}>
          CLEAR HISTORY
        </Text>
      </View>
      {props.data.length !==0 ? (
        <ScrollView
         >
          {props.data.map((history, index) => (
            <View key={index} style={styles.historyCont}>
              <View style={styles.placeHolderHistory}>
                <View style={styles.expressionCont}>
                  <Text style={styles.txtExpression}>{history[0]}</Text>
                </View>
                <View style={styles.resultCont}>
                  <Text style={styles.txtResult}>{'=' + history[1]}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyHistoryCont}>
          <Text style={styles.txtEmptyHistory}>NO HISTORY</Text>
        </View>
      )}
    </View>
  );
}

export default HistoryView;
