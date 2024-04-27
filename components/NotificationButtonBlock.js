import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Circle, Pressable, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const NotificationButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Pressable>
      {/* Notification Button Circle */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Back Button Circle'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['Back Button Circle'].style,
            {
              backgroundColor: theme.colors['hs_white'],
              borderColor: theme.colors['hs_grey_fifth'],
              borderWidth: 1,
            }
          ),
          dimensions.width
        )}
      >
        {/* Notification Container */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Notification Container'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Notification Container'].style,
            dimensions.width
          )}
        >
          {/* Notification Image */}
          <Image
            {...GlobalStyles.ImageStyles(theme)['Notification Image'].props}
            resizeMode={'contain'}
            source={Images.Notification}
            style={StyleSheet.applyWidth(
              GlobalStyles.ImageStyles(theme)['Notification Image'].style,
              dimensions.width
            )}
          />
          {/* Notification Dot */}
          <Circle
            {...GlobalStyles.CircleStyles(theme)['Notification Dot'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.CircleStyles(theme)['Notification Dot'].style,
              dimensions.width
            )}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default withTheme(NotificationButtonBlock);
