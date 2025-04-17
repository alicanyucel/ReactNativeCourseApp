import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Modal,
  Alert,
  Image,
  TextInput,
} from "react-native";

function Spacer({ height = 20 }) {
  return <View style={{ height }} />;
}

export default function CourseInput({ visible, onClose, onAddCourse }) {
  const [enteredCourseText, setEnteredCourseText] = useState('');
  const addCourseHandler = () => {
    if (enteredCourseText.trim().length === 0) {
      Alert.alert("Lütfen bir kurs adı girin.");
      return;
    }

    onAddCourse(enteredCourseText); 
    setEnteredCourseText("");
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert("Modal kapatıldı.");
        onClose();
      }}
    >
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/acy.jpeg")} />
        <Spacer height={20} />
        <TextInput
          style={styles.textInput}
          placeholder="Kurs Ekle"
          value={enteredCourseText}
          onChangeText={setEnteredCourseText}
        />
        <Spacer height={20} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="İptal Et" color="red" onPress={onClose} />
          </View>
          <View style={styles.button}>
            <Button title="Ekle" color="blue" onPress={addCourseHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  textInput: {
    width: '80%',
    marginTop: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#ccc',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
