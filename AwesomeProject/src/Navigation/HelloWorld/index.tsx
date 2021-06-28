import React from 'react';
import * as RN from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getCounter, add, subscribeTestNotification} from '@Redux/Stores/Common';
import Config from 'react-native-config';
import s from '@borjomeeee/rn-styles';

const HelloWorld = () => {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(subscribeTestNotification());
  }, [dispatch]);

  return (
    <SafeAreaView style={s('fill aic jcc')}>
      <RN.View style={s('pb:100 aic')}>
        <RN.Text>{Config.HELLO_MESSAGE}</RN.Text>
      </RN.View>
      <RN.Text style={s(`fsz:32`)}>Hello, world!</RN.Text>
      <RN.Text style={s(`fsz:24 mt:15 mb:15`)}>{counter}</RN.Text>
      <RN.Button title="+" onPress={() => dispatch(add())} />
    </SafeAreaView>
  );
};

export default HelloWorld;
