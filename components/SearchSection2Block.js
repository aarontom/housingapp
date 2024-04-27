import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, TextInput, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

const SearchSection2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Search Section'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.ViewStyles(theme)['Search Section'].style,
          { paddingLeft: 24, paddingRight: 24 }
        ),
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
        {/* Search Button */}
        <Pressable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'SearchStack',
                params: { screen: 'SearchScreen' },
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Search Image */}
          <Image
            {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
            resizeMode={'contain'}
            source={Images.Search}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                { marginBottom: 4, marginLeft: 4, marginRight: 4, marginTop: 4 }
              ),
              dimensions.width
            )}
          />
        </Pressable>
        {/* Search Input */}
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          onSubmitEditing={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'SearchStack',
                params: { screen: 'SearchScreen' },
              });
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Enter a value...'}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Search Text Input'].props}
          changeTextDelay={300}
          enablesReturnKeyAutomatically={false}
          keyboardType={'default'}
          placeholder={'Search...'}
          placeholderTextColor={theme.colors['hs_grey_third']}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextInputStyles(theme)['Search Text Input'].style,
            dimensions.width
          )}
        />
        {/* Filter Button */}
        <Pressable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'SearchStack',
                params: { screen: 'SearchScreen' },
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Filter Image */}
          <Image
            {...GlobalStyles.ImageStyles(theme)['Icon 16 x 16'].props}
            resizeMode={'contain'}
            source={Images.Preferences}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Icon 16 x 16'].style,
                { marginBottom: 8, marginLeft: 8, marginRight: 8, marginTop: 8 }
              ),
              dimensions.width
            )}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default withTheme(SearchSection2Block);
