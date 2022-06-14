import React, {FC} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {resetCards} from '../../store/cardReducer';
import {getClickCount} from '../../store/cardSelector';
import {ContextBarProps} from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  button: {
    color: '#1ca2f4',
  },
  rightContainer: {
    flexDirection: 'row',
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    marginRight: 5,
    lineHeight: 30,
  },
  stepCount: {
    color: '#1ca2f4',
    fontSize: 24,
  },
});

const ContextBar: FC<ContextBarProps> = () => {
  const dispatch = useDispatch();
  const clickCount = useSelector(getClickCount);
  const restart = () => {
    dispatch(resetCards());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={restart}>
        <Text style={styles.button}>Restart</Text>
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>STEPS:</Text>
        <Text style={styles.stepCount}>{clickCount}</Text>
      </View>
    </View>
  );
};

export default ContextBar;
