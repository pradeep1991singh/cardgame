import React, {FC, useState} from 'react';
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {initCards} from '../../store/cardReducer';
import {InputModalProps} from './types';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const InputModal: FC<InputModalProps> = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(true);
  const [size, setSize] = useState('');

  const handleSubmit = () => {
    dispatch(initCards(parseInt(size, 10)));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Enter grid size (only even number allowed)"
              keyboardType="numeric"
              value={size}
              onChangeText={setSize}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleSubmit}>
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InputModal;
