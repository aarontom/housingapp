import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const ItemLocationContainerBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Item Location Container'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['Item Location Container'].style,
        dimensions.width
      )}
    >
      {/* Pin Image */}
      <Image
        {...GlobalStyles.ImageStyles(theme)['Pin IMage'].props}
        resizeMode={'contain'}
        source={Images.LocationPinSolid}
        style={StyleSheet.applyWidth(
          GlobalStyles.ImageStyles(theme)['Pin IMage'].style,
          dimensions.width
        )}
      />
      {/* Location Text */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Body 10'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Body 10'].style, {
            color: theme.colors['hs_grey_second'],
          }),
          dimensions.width
        )}
      >
        {'Reykjavik, Iceland'}
      </Text>
    </View>
  );
};

export default withTheme(ItemLocationContainerBlock);
