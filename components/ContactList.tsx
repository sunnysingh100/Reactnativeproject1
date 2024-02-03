import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Sunny Singh',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/121339249?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.text}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.card}>
            <Image source={{uri: imageUrl}} style={styles.img} />
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.work}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },

  container: {
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    padding: 6,
    backgroundColor: '#6C22A6',
    borderRadius: 4,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  work: {
    color: '#FFD0EC',
    fontSize: 14,
    fontWeight: '400',
  },
});
