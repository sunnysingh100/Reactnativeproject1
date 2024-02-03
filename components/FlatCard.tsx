import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Flat Card</Text>
        <View style={styles.boxContainer}>
          <View style={[styles.box, styles.red]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.box, styles.blue]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.box, styles.green]}>
            <Text>Green</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  boxContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  box: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    backgroundColor: '#EF4040',
  },
  blue: {
    backgroundColor: '#3559E0',
  },
  green: {
    backgroundColor: '#016A70',
  },
});
