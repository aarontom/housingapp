import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, TextInput, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const PasswordInputContainer2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Password Input Container'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['Password Input Container'].style,
        dimensions.width
      )}
    >
      {/* Lock Image */}
      <Image
        {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
        resizeMode={'contain'}
        source={Images.Lock}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
            { left: 14, position: 'absolute', zIndex: 1 }
          ),
          dimensions.width
        )}
      />
      {/* Password Input Hidden */}
      <TextInput
        autoCorrect={true}
        placeholder={'Enter a value...'}
        webShowOutline={true}
        {...GlobalStyles.TextInputStyles(theme)['Password Input'].props}
        autoCapitalize={'words'}
        changeTextDelay={300}
        keyboardType={'default'}
        numberOfLines={1}
        placeholder={'Password'}
        placeholderTextColor={theme.colors['hs_grey_third']}
        secureTextEntry={true}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextInputStyles(theme)['Password Input'].style,
            { paddingLeft: 48, position: 'absolute', width: '100%' }
          ),
          dimensions.width
        )}
      />
      {/* Password Input Visible */}
      <TextInput
        autoCorrect={true}
        placeholder={'Enter a value...'}
        webShowOutline={true}
        {...GlobalStyles.TextInputStyles(theme)['Password Input'].props}
        autoCapitalize={'words'}
        changeTextDelay={300}
        keyboardType={'default'}
        numberOfLines={1}
        placeholder={'Password'}
        placeholderTextColor={theme.colors['hs_grey_third']}
        secureTextEntry={false}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextInputStyles(theme)['Password Input'].style,
            { paddingLeft: 48, position: 'absolute', width: '100%' }
          ),
          dimensions.width
        )}
      />
      {/* Eye Closed Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Eye Buttons Container'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Eye Buttons Container'].style,
          dimensions.width
        )}
      >
        {/* Eye Closed Button */}
        <Pressable>
          {/* Eye Closed Image */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
            source={Images.EyeClose}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                { position: 'relative' }
              ),
              dimensions.width
            )}
          />
        </Pressable>
      </View>
      {/* Eye Open Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Eye Buttons Container'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Eye Buttons Container'].style,
          dimensions.width
        )}
      >
        {/* Eye Open Button */}
        <Pressable>
          {/* Eye Open Image */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
            source={Images.Eye}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                { position: 'relative' }
              ),
              dimensions.width
            )}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default withTheme(PasswordInputContainer2Block);
