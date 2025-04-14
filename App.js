import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { useState } from 'react';
import CourseInput from './components/courseinput';
export default function App() {
  const [modalIsVisibe,setModalIsVisible]=useState(false);
  const startModal=()=>{
    setModalIsVisible(true);
  }
  return (
    <>
     <StatusBar style="light" />
    <View style={styles.container}>
      <Text>Kurslarım Uygulaması</Text>
     <Button title='Kurs Ekle' color="red" onPress={startModal}/>
     <CourseInput  visible={modalIsVisibe}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
    paddingHorizontal:20,
  },
});
