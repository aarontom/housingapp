import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Pressable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const RemoveButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Pressable>
      {/* Remove Button Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Button Container 24'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Button Container 24'].style,
          dimensions.width
        )}
      >
        {/* Button Icon */}
        <Icon name={'Ionicons/close'} size={16} />
      </View>
    </Pressable>
  );
};

export default withTheme(RemoveButtonBlock);
