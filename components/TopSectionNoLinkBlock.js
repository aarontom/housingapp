import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, Spacer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const TopSectionNoLinkBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Top Container'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['Top Container'].style,
        dimensions.width
      )}
    >
      {/* Back Button */}
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
      {/* Screen Title */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Title 6'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.TextStyles(theme)['Title 6'].style,
          dimensions.width
        )}
      >
        {'Search'}
      </Text>
      <Spacer bottom={25} left={25} right={25} top={25} />
    </View>
  );
};

export default withTheme(TopSectionNoLinkBlock);
