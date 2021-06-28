import React from 'react';
import * as RN from 'react-native';

import {default as NetworkLoggerComponent} from 'react-native-network-logger';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const BOTTOM_PADDING = 50;
export const NetworkLogger = () => {
  const {bottom} = useSafeAreaInsets();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleNetworkLoggerVisible = () => setIsVisible(s => !s);
  return (
    <>
      <RN.View style={[styles.openButton, {bottom: BOTTOM_PADDING + bottom}]}>
        <RN.Button onPress={toggleNetworkLoggerVisible} title="network" />
      </RN.View>
      <RN.Modal visible={isVisible} onRequestClose={toggleNetworkLoggerVisible}>
        <SafeAreaView style={styles.container}>
          <NetworkLoggerComponent />
        </SafeAreaView>
        <RN.View
          style={[styles.closeButton, {bottom: BOTTOM_PADDING + bottom}]}>
          <RN.Button onPress={toggleNetworkLoggerVisible} title="Close" />
        </RN.View>
      </RN.Modal>
    </>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
  },
  openButton: {
    position: 'absolute',
    right: 24,
  },
  closeButton: {
    position: 'absolute',
    right: 24,
  },
});

export default NetworkLogger;
