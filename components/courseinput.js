import React from "react";
import { StyleSheet, Text, Button, View, Modal, Alert, Image, TextInput } from "react-native";

export default function CourseInput({ visible, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onClose();
      }}>
      <View style={styles.inputContiner}>
        <image style={styles.image} source={require('../assets/icon.png')} />
        <TextInput style={styles.TextInput} placeholder="Yeni Kurs ekle" />
        <View style={styles.buttonContainer}>
          <View style={styles.button}> 
            <Button title="İptal Et" color="red" />
          </View>
          <View style={styles.button}> 
            <Button title="Ekle" color="blue" />
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
