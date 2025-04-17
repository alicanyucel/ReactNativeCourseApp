import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import CourseInput from './components/courseinput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startModal = () => {
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.title}>Ali Can Yücel CourseApp</Text>
        <Button
          title="Kurs Ekle"
          color="red"
          onPress={startModal}
          style={styles.button}
        />
        <CourseInput visible={modalIsVisible} onClose={closeModal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,           
    marginBottom: 20,       
    textAlign: 'center',
  },
  button: {
    marginBottom: 40,
    alignSelf: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  inputContainer: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    width: '100%',
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
