import React from "react";
import { StyleSheet, Text, Button, View, Modal, Alert, Image, TextInput } from "react-native";

export default function CourseInput({ visible, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal kapatıldı.');
        onClose();
      }}
    >
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/icon.png')} />
        <TextInput style={styles.textInput} placeholder="Yeni Kurs Ekle" />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="İptal Et" color="red" onPress={onClose} />
          </View>
          <View style={styles.button}>
            <Button title="Ekle" color="blue" onPress={() => Alert.alert("Kurs eklendi!")} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles=StyleSheet.create({
  inputContiner:{},
  image:{},
  TextInput:{},
  buttonContainer:[],
  button:{},
})
