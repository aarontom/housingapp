import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, TextInput, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const SearchSection2Block2 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Search Section'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['Search Section'].style,
        dimensions.width
      )}
    >
      {/* Search Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Search Container'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['Search Container'].style,
            { paddingLeft: 20, paddingRight: 20 }
          ),
          dimensions.width
        )}
      >
        {/* Search Image */}
        <Image
          {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
          resizeMode={'contain'}
          source={Images.Search}
          style={StyleSheet.applyWidth(
            GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
            dimensions.width
          )}
        />
        {/* Search Input */}
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          placeholder={'Enter a value...'}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Search Text Input'].props}
          changeTextDelay={300}
          keyboardType={'default'}
          placeholder={'Search...'}
          placeholderTextColor={theme.colors['hs_grey_third']}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextInputStyles(theme)['Search Text Input'].style,
            dimensions.width
          )}
        />
        {/* Filter Button */}
        <Pressable>
          {/* Filter Image */}
          <Image
            {...GlobalStyles.ImageStyles(theme)['Icon 16 x 16'].props}
            resizeMode={'contain'}
            source={Images.Preferences}
            style={StyleSheet.applyWidth(
              GlobalStyles.ImageStyles(theme)['Icon 16 x 16'].style,
              dimensions.width
            )}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default withTheme(SearchSection2Block2);
