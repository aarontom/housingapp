import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, ImageBackground, Text, View } from 'react-native';

const OnboardingScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      {...GlobalStyles.ScreenContainerStyles(theme)['Screen No Padding'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ScreenContainerStyles(theme)['Screen No Padding'].style,
        dimensions.width
      )}
    >
      {/* Background Image */}
      <ImageBackground
        resizeMode={'cover'}
        {...GlobalStyles.ImageBackgroundStyles(theme)['Background Image'].props}
        source={{
          uri: 'https://images.unsplash.com/photo-1619216083420-6e54b895f730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80',
        }}
        style={StyleSheet.applyWidth(
          GlobalStyles.ImageBackgroundStyles(theme)['Background Image'].style,
          dimensions.width
        )}
      />
      {/* Onboarding Content */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Onboarding Content'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Onboarding Content'].style,
          dimensions.width
        )}
      >
        {/* Background Shape Small */}
        <>
          {!!(dimensions.width >= Breakpoints.Tablet) ? null : (
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Onboarding Background']
                .props}
              source={Images.OnboardingShapeS}
              style={StyleSheet.applyWidth(
                GlobalStyles.ImageStyles(theme)['Onboarding Background'].style,
                dimensions.width
              )}
            />
          )}
        </>
        {/* Background Shape Large */}
        <>
          {!(dimensions.width >= Breakpoints.Tablet) ? null : (
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Onboarding Background']
                .props}
              source={Images.OnboardingShapeL}
              style={StyleSheet.applyWidth(
                GlobalStyles.ImageStyles(theme)['Onboarding Background'].style,
                dimensions.width
              )}
            />
          )}
        </>
        {/* Info Container */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Onboarding Info Container'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Onboarding Info Container'].style,
            dimensions.width
          )}
        >
          {/* Onboarding Title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Title 1'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Title 1'].style,
                {
                  color: theme.colors['hs_grey_main'],
                  marginBottom: 20,
                  textAlign: 'center',
                }
              ),
              dimensions.width
            )}
          >
            {'Find Your Dream Home With Us'}
          </Text>
          {/* Onboarding Paragraph */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Body 7'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Body 7'].style,
                {
                  color: theme.colors['hs_grey_third'],
                  lineHeight: 18,
                  marginBottom: 32,
                  textAlign: 'center',
                }
              ),
              dimensions.width
            )}
          >
            {
              'Discover and explore a wide range of properties tailored to your preferences.'
            }
          </Text>
          {/* Start Button */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.TouchableStyles(theme)['Touchable'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TouchableStyles(theme)['Touchable'].style,
              dimensions.width
            )}
          >
            {/* Start Button Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Button Container Circle']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Button Container Circle'].style,
                dimensions.width
              )}
            >
              {/* Start Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Title 5'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Title 5'].style,
                    { color: theme.colors['hs_grey_second'], marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {'Start'}
              </Text>
              {/* Start Button Circle */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Button Circle Blue'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Button Circle Blue'].style,
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['hs_blue_main'],
                      borderRadius: 30,
                      justifyContent: 'center',
                      marginBottom: 8,
                    }
                  ),
                  dimensions.width
                )}
              >
                {/* Start Arrow */}
                <Image
                  {...GlobalStyles.ImageStyles(theme)['Arrow Right'].props}
                  resizeMode={'contain'}
                  source={Images.ArrowRight2}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Arrow Right'].style,
                      { height: 14, width: 14 }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            </View>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingScreen);
