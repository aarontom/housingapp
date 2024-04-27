import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const BottomButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Bottom Button Container'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['Bottom Button Container'].style,
        dimensions.width
      )}
    >
      {/* Send Button */}
      <Pressable>
        {/* Send Button View */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Normal Button Container'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Normal Button Container'].style,
            dimensions.width
          )}
        >
          {/* Signup Text */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Body 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Body 2'].style,
                { color: theme.colors['hs_white'] }
              ),
              dimensions.width
            )}
          >
            {'Send Now'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default withTheme(BottomButtonBlock);
