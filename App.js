import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import CourseInput from './components/courseinput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courses, setCourses] = useState([]);

  const startModal = () => {
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

  const addCourse = (courseText) => {
    setCourses((currentCourses) => [
      ...currentCourses,
      { id: Math.random().toString(), text: courseText },
    ]);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.title}>Ali Can Yücel CourseApp</Text>
        <View style={styles.button}>
          <Button title="Kurs Ekle" color="red" onPress={startModal} />
        </View>
        <CourseInput
          visible={modalIsVisible}
          onAddCourse={addCourse}
          onClose={closeModal}
        />
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
});
