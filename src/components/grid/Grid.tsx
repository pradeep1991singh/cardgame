import React, {FC, useEffect} from 'react';
import {Alert, StyleSheet, ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {resetCards} from '../../store/cardReducer';
import {
  getCards,
  getClickCount,
  getOpenCardCount,
} from '../../store/cardSelector';
import FlipCard from '../flip/FlipCard';
import {GridProps} from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const Grid: FC<GridProps> = () => {
  const dispatch = useDispatch();
  const openCardCount = useSelector(getOpenCardCount);
  const steps = useSelector(getClickCount);
  const list = useSelector(getCards);

  useEffect(() => {
    if (steps > 0 && openCardCount === list.length) {
      Alert.alert('Congratulations', `You win this game by ${steps} steps!`, [
        {text: 'Try another round', onPress: () => dispatch(resetCards())},
      ]);
    }
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        {list.map((item, idx) => (
          <FlipCard key={idx} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Grid;
