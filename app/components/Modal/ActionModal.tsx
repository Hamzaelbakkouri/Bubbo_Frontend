import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';

type BookModalProps = {
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    modalVisible: boolean;
};

const ActionModal: React.FC<BookModalProps> = ({
    setModalVisible,
    modalVisible,
}) => {

    const [text, setText] = useState<string>('');
    const [date, setDate] = useState<Date>(new Date());

    const submit = () => {
        console.log('submit');
    }
    return (
        <View style={styles.centeredView}>
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
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <Text style={{ fontWeight: 'bold' }}>CREATE A BOOK</Text>
                        </View>
                        <Text style={{ color: 'gray', fontSize: 12, paddingLeft: 9 }}>Name</Text>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <TextInput
                                value={text}
                                onChangeText={setText}
                                placeholder='Book Name'
                                style={{ borderColor: "black", backgroundColor: "white", width: 200, paddingHorizontal: 11, paddingVertical: 3, borderRadius: 5 }} />
                        </View>
                        <Text style={{ color: 'gray', fontSize: 12, paddingLeft: 9 }}>Name</Text>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <TextInput
                                value={text}
                                onChangeText={setText}
                                placeholder='Book Name'
                                style={{ borderColor: "black", backgroundColor: "white", width: 200, paddingHorizontal: 11, paddingVertical: 3, borderRadius: 5 }} />
                        </View>
                        <Text style={{ color: 'gray', fontSize: 12, paddingLeft: 9 }}>Price</Text>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <TextInput
                                value={text}
                                onChangeText={setText}
                                placeholder='Price'
                                style={{ borderColor: "black", backgroundColor: "white", width: 200, paddingHorizontal: 11, paddingVertical: 3, borderRadius: 5 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 8 }}>
                            <Pressable
                                style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#333533', borderRadius: 5 }}
                                onPress={submit}>
                                <Text style={styles.textStyle}>Submit</Text>
                            </Pressable>
                            <Pressable
                                style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#333533', borderRadius: 5 }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: '80%',
        margin: 20,
        backgroundColor: '#E8EDDF',
        borderRadius: 5,
        padding: 35,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#333533',
    },
    textStyle: {
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ActionModal;