import React, {FC, memo, useCallback, useEffect, useRef} from 'react';
import {Text, StyleSheet, Animated, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {incrementCardClickCount, validateCard} from '../../store/cardReducer';
import {FlipCardProps} from './types';

const styles = StyleSheet.create({
  flipCard: {
    width: 100,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1ca2f4',
    backfaceVisibility: 'hidden',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ffffff',
    margin: 5,
  },
  flipBackCard: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 0,
  },
  text: {
    lineHeight: 25,
    fontSize: 18,
    marginVertical: 18,
    textAlign: 'center',
  },
  textWhite: {
    color: '#ffffff',
  },
});

const FlipCard: FC<FlipCardProps> = memo(({item}) => {
  const {value, index, isOpen} = item;
  const dispatch = useDispatch();
  const animatedValue = useRef(new Animated.Value(0)).current;

  let flipValue = 0;
  animatedValue.addListener(({value: val}) => (flipValue = val));

  const frontAnimation = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backAnimation = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimationStyle = {
    transform: [{rotateY: frontAnimation}],
  };
  const backAnimationStyle = {
    transform: [{rotateY: backAnimation}],
  };

  const closeCard = useCallback(() => {
    Animated.spring(animatedValue, {
      toValue: 0,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const openCard = useCallback(() => {
    Animated.spring(animatedValue, {
      toValue: 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  useEffect(() => {
    if (value) {
      closeCard();
    }
  }, [value, closeCard]);

  useEffect(() => {
    if (!isOpen) {
      closeCard();
    }
  }, [isOpen, closeCard]);

  const flipCardHandler = () => {
    if (flipValue >= 90) {
      closeCard();
    } else {
      openCard();
    }
    dispatch(incrementCardClickCount({value, index, isOpen}));
    setTimeout(() => dispatch(validateCard({value, index, isOpen})), 1000);
  };

  return (
    <Pressable onPress={flipCardHandler}>
      <Animated.View style={[styles.flipCard, frontAnimationStyle]}>
        <Text style={[styles.text, styles.textWhite]}>?</Text>
      </Animated.View>
      <Animated.View
        style={[backAnimationStyle, styles.flipCard, styles.flipBackCard]}>
        <Text style={styles.text}>{value}</Text>
      </Animated.View>
    </Pressable>
  );
});

export default FlipCard;
