import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const RatingsViewBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Ratings View'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.ViewStyles(theme)['Ratings View'].style,
          { alignItems: 'center', justifyContent: 'flex-start' }
        ),
        dimensions.width
      )}
    >
      {/* Star Icon */}
      <Image
        resizeMode={'cover'}
        {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
        source={Images.Star}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
            { marginRight: 12 }
          ),
          dimensions.width
        )}
      />
      {/* Ratings Text */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Body 5'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Body 5'].style, {
            color: theme.colors['hs_grey_main'],
          }),
          dimensions.width
        )}
      >
        {'4.8 (1,275 reviews)'}
      </Text>
    </View>
  );
};

export default withTheme(RatingsViewBlock);
