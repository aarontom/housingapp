import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Checkbox, Link, TextInput, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const FormContainerBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View>
      {/* Name Title */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Body 6'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Body 6'].style, {
            color: theme.colors['hs_grey_second'],
            marginBottom: 8,
          }),
          dimensions.width
        )}
      >
        {'Name'}
      </Text>
      {/* Name Input */}
      <TextInput
        autoCorrect={true}
        placeholder={'Enter a value...'}
        webShowOutline={true}
        {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
        autoCapitalize={'words'}
        changeTextDelay={300}
        keyboardType={'default'}
        numberOfLines={1}
        placeholder={'Enter your Name'}
        placeholderTextColor={theme.colors['hs_grey_third']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextInputStyles(theme)['Text Input'].style,
            { marginBottom: 16 }
          ),
          dimensions.width
        )}
      />
      {/* Email Title */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Body 6'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Body 6'].style, {
            color: theme.colors['hs_grey_second'],
            marginBottom: 8,
          }),
          dimensions.width
        )}
      >
        {'Email'}
      </Text>
      {/* Email input */}
      <TextInput
        autoCorrect={true}
        placeholder={'Enter a value...'}
        webShowOutline={true}
        {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
        autoCapitalize={'words'}
        changeTextDelay={300}
        keyboardType={'email-address'}
        numberOfLines={1}
        placeholder={'Enter your Email'}
        placeholderTextColor={theme.colors['hs_grey_third']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextInputStyles(theme)['Text Input'].style,
            { marginBottom: 16 }
          ),
          dimensions.width
        )}
      />
      {/* Form Bottom Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Form Bottom Container'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Form Bottom Container'].style,
          dimensions.width
        )}
      >
        {/* Remember Container */}
        <View
          {...GlobalStyles.ViewStyles(theme)['CheckBox Container'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['CheckBox Container'].style,
              { alignSelf: 'flex-start' }
            ),
            dimensions.width
          )}
        >
          <Checkbox
            {...GlobalStyles.CheckboxStyles(theme)['Checkbox 2'].props}
            checkedIcon={'Ionicons/checkbox'}
            color={theme.colors['hs_blue_main']}
            style={StyleSheet.applyWidth(
              GlobalStyles.CheckboxStyles(theme)['Checkbox 2'].style,
              dimensions.width
            )}
            uncheckedColor={theme.colors['hs_blue_fourth']}
            uncheckedIcon={'FontAwesome/square'}
          />
          {/* Remember Text */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Body 7'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Body 7'].style,
                { color: theme.colors['hs_grey_main'] }
              ),
              dimensions.width
            )}
          >
            {'Remember Me'}
          </Text>
        </View>
        <Link
          accessible={true}
          {...GlobalStyles.LinkStyles(theme)['Forgot Password Link'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.LinkStyles(theme)['Forgot Password Link'].style,
              { color: theme.colors['hs_blue_main'] }
            ),
            dimensions.width
          )}
          title={'Forgot Password'}
        />
      </View>
    </View>
  );
};

export default withTheme(FormContainerBlock);
