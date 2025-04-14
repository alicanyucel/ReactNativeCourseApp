import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import CourseInput from './components/courseinput';
export default function App() {
  const [modalIsVisibe, setModalIsVisible] = useState(false);
  const startModal = () => {
    setModalIsVisible(true);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.title}>Ali Can Yücel Course App</Text>
        <Button
          title='Kurs Ekle'
          color="red"
          onPress={startModal}
          style={styles.button}
        />
        <CourseInput visible={modalIsVisibe} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 40,
  },
});
