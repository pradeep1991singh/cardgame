// @ts
import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import FlipCard from '../../../src/components/flip/FlipCard';
import {MockCard} from '../../../__mocks__/card.mock';
import {Provider} from 'react-redux';
import {Pressable} from 'react-native';

const mockStore = configureStore([]);

describe('FlipCard', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    component = create(
      <Provider store={store}>
        <FlipCard item={MockCard} />
      </Provider>,
    );
  });

  it('renders correctly && snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('flipCardHandler', () => {
    expect(component.root.instance.refs).toBe(1);
    const flipCard = component.root.findByType(Pressable);
    flipCard.props.onPress();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
