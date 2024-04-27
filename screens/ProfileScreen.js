import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as InterimAPIApi from '../apis/InterimAPIApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Pressable,
  ScreenContainer,
  Shadow,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      {...GlobalStyles.ScreenContainerStyles(theme)['Screen Container'].props}
      hasTopSafeArea={true}
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
          {'Profile'}
        </Text>
        <Spacer bottom={25} left={25} right={25} top={25} />
      </View>
      {/* Profile Scroll */}
      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        {...GlobalStyles.ScrollViewStyles(theme)['Detail Scroll'].props}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={StyleSheet.applyWidth(
          GlobalStyles.ScrollViewStyles(theme)['Detail Scroll'].style,
          dimensions.width,
          ['width', 'height', 'flexGrow']
        )}
        contentContainerStyle={StyleSheet.applyWidth(
          GlobalStyles.ScrollViewStyles(theme)['Detail Scroll'].style,
          dimensions.width
        )}
      >
        {/* Profile Fetch */}
        <InterimAPIApi.FetchPropertiesGET>
          {({ loading, error, data, refetchProperties }) => {
            const profileFetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <>
                {/* Profile Header Container */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Profile Header Container']
                    .props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Profile Header Container']
                      .style,
                    dimensions.width
                  )}
                >
                  {/* Profile Image Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)[
                      'Profile Header Image Container'
                    ].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)[
                          'Profile Header Image Container'
                        ].style,
                        { alignItems: 'flex-end', justifyContent: 'flex-end' }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Profile Header Image */}
                    <Image
                      resizeMode={'cover'}
                      {...GlobalStyles.ImageStyles(theme)[
                        'Profile Header Image'
                      ].props}
                      source={Images.AliMorshedlouWMD64tMfc4kUnsplash}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)[
                            'Profile Header Image'
                          ].style,
                          { borderRadius: 60, height: 120, width: 120 }
                        ),
                        dimensions.width
                      )}
                    />
                    <Pressable
                      onPress={() => {
                        try {
                          navigation.navigate('EditProfileScreen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
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
                        {...GlobalStyles.ShadowStyles(theme)[
                          'Edit Button Shadow'
                        ].props}
                        distance={20}
                        startColor={theme.colors['hs_shadow']}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ShadowStyles(theme)[
                              'Edit Button Shadow'
                            ].style,
                            { opacity: 0.3 }
                          ),
                          dimensions.width
                        )}
                      />
                      {/* Profile Edit View */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['Button Edit circle']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['Button Edit circle']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Edit Icon */}
                        <Image
                          resizeMode={'cover'}
                          {...GlobalStyles.ImageStyles(theme)['Icon 16 x 16']
                            .props}
                          source={Images.Edit}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 16 x 16']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                    </Pressable>
                  </View>
                  {/* Information Container */}
                  <View>
                    {/* Name Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)[
                        'Profile Name Container'
                      ].props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Profile Name Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Name Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Title 5'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Title 5'].style,
                            {
                              color: theme.colors['hs_grey_main'],
                              marginRight: 8,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Benjamin Sterling'}
                      </Text>
                      {/* Verified Icon */}
                      <Image
                        resizeMode={'cover'}
                        {...GlobalStyles.ImageStyles(theme)['Icon 18 x 18']
                          .props}
                        source={Images.Verified}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ImageStyles(theme)['Icon 18 x 18'].style,
                          dimensions.width
                        )}
                      />
                    </View>
                    {/* Email Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 7'].style,
                          {
                            color: theme.colors['hs_grey_third'],
                            textAlign: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'ben@sterling.com'}
                    </Text>
                  </View>
                </View>
              </>
            );
          }}
        </InterimAPIApi.FetchPropertiesGET>
        {/* Home Search Section */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Profile Section Container'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Profile Section Container'].style,
            dimensions.width
          )}
        >
          {/* Profile Section Title */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Section Title'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Section Title'].style,
              dimensions.width
            )}
          >
            {/* Section Title Text */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Title 7'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Title 7'].style,
                  { color: theme.colors['hs_grey_main'] }
                ),
                dimensions.width
              )}
            >
              {'Home Search'}
            </Text>
          </View>
          {/* Recently Viewed */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.Eye}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'Recently Viewed'}
              </Text>
            </View>

            <Pressable>
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* My Favorites */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.HeartLineBlue}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'My Favorites'}
              </Text>
            </View>

            <Pressable
              onPress={() => {
                try {
                  navigation.navigate('BottomTabNavigator', {
                    screen: 'FavoritesStack',
                    params: { screen: 'FavoritesScreen' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* Past Tour */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.Video}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'Past Tour'}
              </Text>
            </View>

            <Pressable>
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
        </View>
        {/* General Section */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Profile Section Container'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['Profile Section Container'].style,
              { marginBottom: 8 }
            ),
            dimensions.width
          )}
        >
          {/* General Section Title */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Section Title'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Section Title'].style,
              dimensions.width
            )}
          >
            {/* Section Title Text */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Title 7'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Title 7'].style,
                  { color: theme.colors['hs_grey_main'] }
                ),
                dimensions.width
              )}
            >
              {'General'}
            </Text>
          </View>
          {/* My Listings */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.Building}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'My Listings'}
              </Text>
            </View>

            <Pressable>
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* Sell my Home */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.Home}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'Sell my Home'}
              </Text>
            </View>

            <Pressable>
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* Profile Information */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.UserLineBlue}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'Profile Information'}
              </Text>
            </View>

            <Pressable>
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* Settings */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.Settings}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'Settings'}
              </Text>
            </View>

            <Pressable
              onPress={() => {
                try {
                  navigation.navigate('SettingsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* Password */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.Key}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'Forgot Password'}
              </Text>
            </View>

            <Pressable>
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* Notifications */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.NotificationSms}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'Notification Settings'}
              </Text>
            </View>

            <Pressable
              onPress={() => {
                try {
                  navigation.navigate('NotificationSettingsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
        </View>
        {/* Support Section */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Profile Section Container'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['Profile Section Container'].style,
              { marginBottom: 8 }
            ),
            dimensions.width
          )}
        >
          {/* Support Section Title */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Section Title'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Section Title'].style,
              dimensions.width
            )}
          >
            {/* Section Title Text */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Title 7'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Title 7'].style,
                  { color: theme.colors['hs_grey_main'] }
                ),
                dimensions.width
              )}
            >
              {'Support & Feedback'}
            </Text>
          </View>
          {/* Rate Us */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.Quote}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'Rate Us'}
              </Text>
            </View>

            <Pressable>
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* Help Center */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.Information}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'Help Center'}
              </Text>
            </View>

            <Pressable>
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* Log Out */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Profile Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Profile Item'].style,
              dimensions.width
            )}
          >
            {/* Item Left */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Profile Item Left Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Icon View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Profile Item Icon'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Profile Item Icon'].style,
                    { marginRight: 12 }
                  ),
                  dimensions.width
                )}
              >
                {/* Item Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  source={Images.Logout}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Item Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 7'].style,
                    { color: theme.colors['hs_grey_second'] }
                  ),
                  dimensions.width
                )}
              >
                {'Log Out'}
              </Text>
            </View>

            <Pressable>
              {/* Icon Right Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Icon Right Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Icon Right Container'].style,
                  dimensions.width
                )}
              >
                {/* Icon Right */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                  source={Images.ArrowRight}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ProfileScreen);
