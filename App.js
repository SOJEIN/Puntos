import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Map, Modal, Panel } from './components';

export default function App() {
  const handleLongPress = ({ nativeEvent }) => {
    console.log("hola", nativeEvent);
  }
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Modal />
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});
