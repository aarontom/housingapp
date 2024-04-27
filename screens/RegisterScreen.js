import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Checkbox,
  Link,
  Pressable,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [emailInput, setEmailInput] = React.useState('');
  const [nameInput, setNameInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [rememberCheckbox, setRememberCheckbox] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <ScreenContainer
      scrollable={false}
      {...GlobalStyles.ScreenContainerStyles(theme)['Screen Container'].props}
      hasSafeArea={true}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        GlobalStyles.ScreenContainerStyles(theme)['Screen Container'].style,
        dimensions.width
      )}
    >
      {/* Top Section */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Top Container'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Top Container'].style,
          dimensions.width
        )}
      >
        {/* Back Button */}
        <Pressable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
        {/* Help Link */}
        <Link
          accessible={true}
          {...GlobalStyles.LinkStyles(theme)['Help Link'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.LinkStyles(theme)['Help Link'].style,
            dimensions.width
          )}
          title={'Need Help'}
        />
      </View>
      {/* Scrolling Register Section */}
      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 24 },
          dimensions.width
        )}
      >
        {/* Title Container */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Title Container'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Title Container'].style,
            dimensions.width
          )}
        >
          {/* Title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Title 1'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Title 1'].style,
                {
                  color: theme.colors['hs_grey_main'],
                  marginBottom: 16,
                  textAlign: 'center',
                }
              ),
              dimensions.width
            )}
          >
            {'Register Your New Account!'}
          </Text>
          {/* Subtitle */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Body 4'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Body 4'].style,
                {
                  color: theme.colors['hs_grey_second'],
                  lineHeight: 24,
                  textAlign: 'center',
                }
              ),
              dimensions.width
            )}
          >
            {'Enter your information below'}
          </Text>
        </View>
        {/* Form Container */}
        <View>
          {/* Name Title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Body 6'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Body 6'].style,
                { color: theme.colors['hs_grey_second'], marginBottom: 8 }
              ),
              dimensions.width
            )}
          >
            {'Name'}
          </Text>
          {/* Name Input */}
          <TextInput
            autoCorrect={true}
            onChangeText={newNameInputValue => {
              try {
                setNameInput(newNameInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
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
            value={nameInput}
          />
          {/* Email Title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Body 6'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Body 6'].style,
                { color: theme.colors['hs_grey_second'], marginBottom: 8 }
              ),
              dimensions.width
            )}
          >
            {'Email'}
          </Text>
          {/* Email input */}
          <TextInput
            autoCorrect={true}
            onChangeText={newEmailInputValue => {
              try {
                setEmailInput(newEmailInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
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
            value={emailInput}
          />
          {/* Password Title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Body 6'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Body 6'].style,
                { color: theme.colors['hs_grey_second'], marginBottom: 8 }
              ),
              dimensions.width
            )}
          >
            {'Password'}
          </Text>
          {/* Password Input Container */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Password Input Container']
              .props}
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
            <>
              {!!showPassword ? null : (
                <TextInput
                  autoCorrect={true}
                  onChangeText={newPasswordInputHiddenValue => {
                    try {
                      setPasswordInput(newPasswordInputHiddenValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'Enter a value...'}
                  webShowOutline={true}
                  {...GlobalStyles.TextInputStyles(theme)['Password Input']
                    .props}
                  autoCapitalize={'words'}
                  changeTextDelay={300}
                  keyboardType={'default'}
                  numberOfLines={1}
                  placeholder={'Password'}
                  placeholderTextColor={theme.colors['hs_grey_third']}
                  secureTextEntry={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextInputStyles(theme)['Password Input']
                        .style,
                      { paddingLeft: 48, position: 'absolute', width: '100%' }
                    ),
                    dimensions.width
                  )}
                  value={passwordInput}
                />
              )}
            </>
            {/* Password Input Visible */}
            <>
              {!showPassword ? null : (
                <TextInput
                  autoCorrect={true}
                  onChangeText={newPasswordInputVisibleValue => {
                    try {
                      setPasswordInput(newPasswordInputVisibleValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'Enter a value...'}
                  webShowOutline={true}
                  {...GlobalStyles.TextInputStyles(theme)['Password Input']
                    .props}
                  autoCapitalize={'words'}
                  changeTextDelay={300}
                  keyboardType={'default'}
                  numberOfLines={1}
                  placeholder={'Password'}
                  placeholderTextColor={theme.colors['hs_grey_third']}
                  secureTextEntry={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextInputStyles(theme)['Password Input']
                        .style,
                      { paddingLeft: 48, position: 'absolute', width: '100%' }
                    ),
                    dimensions.width
                  )}
                  value={passwordInput}
                />
              )}
            </>
            {/* Eye Button Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Eye Buttons Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Eye Buttons Container'].style,
                dimensions.width
              )}
            >
              {/* Eye Button */}
              <Pressable
                onPress={() => {
                  try {
                    if (showPassword) {
                      setShowPassword(false);
                    } else {
                      setShowPassword(true);
                    }
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Eye Closed Image */}
                <>
                  {!!showPassword ? null : (
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
                  )}
                </>
                {/* Eye Open Image */}
                <>
                  {!showPassword ? null : (
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
                  )}
                </>
              </Pressable>
            </View>
          </View>
          {/* Terms Checkbox Container */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Terms and Conditions Container']
              .props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Terms and Conditions Container']
                .style,
              dimensions.width
            )}
          >
            <Checkbox
              onPress={newCheckboxValue => {
                try {
                  setRememberCheckbox(newCheckboxValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.CheckboxStyles(theme)['Checkbox 2'].props}
              checkedIcon={'Ionicons/checkbox'}
              color={theme.colors['hs_blue_main']}
              status={rememberCheckbox}
              style={StyleSheet.applyWidth(
                GlobalStyles.CheckboxStyles(theme)['Checkbox 2'].style,
                dimensions.width
              )}
              uncheckedColor={theme.colors['hs_blue_second']}
              uncheckedIcon={'FontAwesome/square'}
            />
            {/* Terms Text */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Body 7'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Body 7'].style,
                  {
                    color: theme.colors['hs_grey_main'],
                    flex: 1,
                    lineHeight: 18,
                  }
                ),
                dimensions.width
              )}
            >
              {'By creating an account, you agree to our '}
              {/* Terms Link */}
              <Link
                accessible={true}
                {...GlobalStyles.LinkStyles(theme)['Terms Link'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.LinkStyles(theme)['Terms Link'].style,
                  dimensions.width
                )}
                title={'Terms and Conditions'}
              />
            </Text>
          </View>
        </View>
        {/* Signup Button */}
        <Pressable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator');
            } catch (err) {
              console.error(err);
            }
          }}
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
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Body 2'].style,
                  { color: theme.colors['hs_white'] }
                ),
                dimensions.width
              )}
            >
              {'Sign up'}
            </Text>
          </View>
        </Pressable>
        {/* Alternative Login Divider */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Login Divider Container'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Login Divider Container'].style,
            dimensions.width
          )}
        >
          {/* Line Left */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Login Line'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Login Line'].style,
              dimensions.width
            )}
          />
          {/* Alternative Text */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Body 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Body 2'].style,
                {
                  color: theme.colors['hs_grey_second'],
                  paddingLeft: 8,
                  paddingRight: 8,
                }
              ),
              dimensions.width
            )}
          >
            {'or'}
          </Text>
          {/* Line Right */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Login Line'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Login Line'].style,
              dimensions.width
            )}
          />
        </View>
        {/* Alternative Signup Container */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Alternative Login Container']
            .props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Alternative Login Container'].style,
            dimensions.width
          )}
        >
          {/* Facebook Signup Button */}
          <Pressable>
            {/* Facebook Logo Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Logo Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Logo Container'].style,
                dimensions.width
              )}
            >
              {/* Facebook Logo */}
              <Image
                {...GlobalStyles.ImageStyles(theme)['Logo Image'].props}
                resizeMode={'contain'}
                source={Images.Facebook}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ImageStyles(theme)['Logo Image'].style,
                  dimensions.width
                )}
              />
            </View>
          </Pressable>
          {/* Google Signup Button */}
          <Pressable
            style={StyleSheet.applyWidth(
              {
                marginLeft: [
                  { minWidth: Breakpoints.Mobile, value: 24 },
                  { minWidth: Breakpoints.Tablet, value: 36 },
                ],
                marginRight: [
                  { minWidth: Breakpoints.Mobile, value: 24 },
                  { minWidth: Breakpoints.Tablet, value: 36 },
                ],
              },
              dimensions.width
            )}
          >
            {/* Google Logo Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Logo Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Logo Container'].style,
                dimensions.width
              )}
            >
              {/* Google Logo */}
              <Image
                {...GlobalStyles.ImageStyles(theme)['Logo Image'].props}
                resizeMode={'contain'}
                source={Images.Google}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ImageStyles(theme)['Logo Image'].style,
                  dimensions.width
                )}
              />
            </View>
          </Pressable>
          {/* Apple Signup Button */}
          <Pressable>
            {/* Apple Logo Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Logo Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Logo Container'].style,
                dimensions.width
              )}
            >
              {/* Apple Logo */}
              <Image
                {...GlobalStyles.ImageStyles(theme)['Logo Image'].props}
                resizeMode={'contain'}
                source={Images.Apple}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ImageStyles(theme)['Logo Image'].style,
                  dimensions.width
                )}
              />
            </View>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
      {/* Login Link Section */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Register Link Container'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Register Link Container'].style,
          dimensions.width
        )}
      >
        {/* Login Text */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Body 4'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Body 4'].style, {
              color: theme.colors['hs_grey_main'],
            }),
            dimensions.width
          )}
        >
          {'Already have an account? '}
          {/* Login Link */}
          <Link
            accessible={true}
            onPress={() => {
              try {
                navigation.navigate('LoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.LinkStyles(theme)['Auth Link'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.LinkStyles(theme)['Auth Link'].style,
              dimensions.width
            )}
            title={'Log in'}
          />
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(RegisterScreen);
