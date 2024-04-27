import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const ButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Pressable
      style={StyleSheet.applyWidth({ marginBottom: 24 }, dimensions.width)}
    >
      {/* Signup Button Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Normal Button Container'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['Normal Button Container'].style,
            { alignSelf: 'center' }
          ),
          dimensions.width
        )}
      >
        {/* Signup Text */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Body 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Body 2'].style, {
              color: theme.colors['hs_white'],
            }),
            dimensions.width
          )}
        >
          {'Sign up'}
        </Text>
      </View>
    </Pressable>
  );
};

export default withTheme(ButtonBlock);
