import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.elevatedText}>Elevated Card</Text>
      <ScrollView style={styles.boxContainer} horizontal={true}>
        <View style={styles.box}>
          <Text>Tap</Text>
        </View>
        <View style={styles.box}>
          <Text>me</Text>
        </View>
        <View style={styles.box}>
          <Text>to</Text>
        </View>
        <View style={styles.box}>
          <Text>view</Text>
        </View>
        <View style={styles.box}>
          <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  elevatedText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  boxContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 14,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B6BBC4',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 4,
  },
});
