import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Pressable,
  ScreenContainer,
  Shadow,
  Spacer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, Text, View } from 'react-native';

const EditProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [addressInput, setAddressInput] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [nameInput, setNameInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [showPasword, setShowPasword] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      {...GlobalStyles.ScreenContainerStyles(theme)[
        'Screen Container No Padding Horizontal'
      ].props}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        GlobalStyles.ScreenContainerStyles(theme)[
          'Screen Container No Padding Horizontal'
        ].style,
        dimensions.width
      )}
    >
      {/* Top Section */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Top Container'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['Top Container'].style,
            { paddingLeft: 24, paddingRight: 24 }
          ),
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
        {/* Screen Title */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Title 6'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Title 6'].style,
              { color: theme.colors['hs_grey_main'] }
            ),
            dimensions.width
          )}
        >
          {'Edit Profile'}
        </Text>
        <Spacer bottom={25} left={25} right={25} top={25} />
      </View>
      {/* Profile Scroll */}
      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        {...GlobalStyles.ScrollViewStyles(theme)['Detail Scroll'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ScrollViewStyles(theme)['Detail Scroll'].style,
          dimensions.width,
          ['width', 'height', 'flexGrow']
        )}
        contentContainerStyle={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ScrollViewStyles(theme)['Detail Scroll'].style,
            { paddingLeft: 24, paddingRight: 24 }
          ),
          dimensions.width
        )}
      >
        {/* Profile Header Container */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Profile Edit Header'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Profile Edit Header'].style,
            dimensions.width
          )}
        >
          {/* Profile Image Container */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Header Image Container']
              .props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Profile Header Image Container']
                  .style,
                { alignItems: 'flex-end' }
              ),
              dimensions.width
            )}
          >
            {/* Profile Header Image */}
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Profile Header Image'].props}
              source={Images.ProfilePicPlaceholder}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Profile Header Image'].style,
                  { borderRadius: 60, height: 120, width: 120 }
                ),
                dimensions.width
              )}
            />
            <Pressable>
              {/* Button Shadow */}
              <Shadow
                offsetX={0}
                offsetY={0}
                paintInside={true}
                showShadowCornerBottomEnd={true}
                showShadowCornerBottomStart={true}
                showShadowCornerTopEnd={true}
                showShadowCornerTopStart={true}
                showShadowSideBottom={true}
                showShadowSideEnd={true}
                showShadowSideStart={true}
                showShadowSideTop={true}
                {...GlobalStyles.ShadowStyles(theme)['Edit Button Shadow']
                  .props}
                distance={20}
                startColor={theme.colors['hs_shadow']}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ShadowStyles(theme)['Edit Button Shadow']
                      .style,
                    { opacity: 0.3 }
                  ),
                  dimensions.width
                )}
              />
              {/* Profile Edit View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Button Edit circle'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Button Edit circle'].style,
                  dimensions.width
                )}
              >
                {/* Camera Icon */}
                <Image
                  {...GlobalStyles.ImageStyles(theme)['Icon 16 x 16'].props}
                  resizeMode={'contain'}
                  source={Images.Camera}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 16 x 16'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
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
          {/* Adress Title */}
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
            {'Address'}
          </Text>
          {/* Address Input */}
          <TextInput
            autoCorrect={true}
            onChangeText={newAddressInputValue => {
              try {
                setAddressInput(newAddressInputValue);
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
            value={addressInput}
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
              {!!showPasword ? null : (
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
              {!showPasword ? null : (
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
                    if (showPasword) {
                      setShowPasword(false);
                    } else {
                      setShowPasword(true);
                    }
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Eye Closed Image */}
                <>
                  {!!showPasword ? null : (
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
                  {!showPasword ? null : (
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
        </View>
      </ScrollView>
      {/* Send Button Container */}
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
    </ScreenContainer>
  );
};

export default withTheme(EditProfileScreen);
