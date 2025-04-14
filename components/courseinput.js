import { StyleSheet, Text, View, Modal, Alert } from "react-native";
import React from "react";
export default function CourseInput({ visible }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Merhaba Dünya</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Gizle</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({});
