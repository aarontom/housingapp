import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const BackButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Pressable>
      {/* Back Button Circle */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Back Button Circle'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Back Button Circle'].style,
          dimensions.width
        )}
      >
        {/* Back Arrow */}
        <Image
          {...GlobalStyles.ImageStyles(theme)['Arrow Back'].props}
          resizeMode={'contain'}
          source={Images.ArrowLeft}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ImageStyles(theme)['Arrow Back'].style,
              { height: 16, width: 16 }
            ),
            dimensions.width
          )}
        />
      </View>
    </Pressable>
  );
};

export default withTheme(BackButtonBlock);
