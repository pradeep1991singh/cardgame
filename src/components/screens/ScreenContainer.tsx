import React, {FC} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {getCardsSize} from '../../store/cardSelector';
import ContextBar from '../context-bar/ContextBar';
import Grid from '../grid/Grid';
import InputModal from '../input-modal/InputModal';
import {ScreenContainerProps} from './types';

const ScreenContainer: FC<ScreenContainerProps> = () => {
  const size = useSelector(getCardsSize);

  if (size) {
    return (
      <View>
        <ContextBar />
        <Grid />
      </View>
    );
  }

  return (
    <View>
      <InputModal />
    </View>
  );
};

export default ScreenContainer;
