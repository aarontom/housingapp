import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as InterimAPIApi from '../apis/InterimAPIApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Divider,
  Link,
  Pressable,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const NotificationsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [switch1, setSwitch1] = React.useState(false);
  const [switch2, setSwitch2] = React.useState(false);
  const [switch3, setSwitch3] = React.useState(false);
  const [switch4, setSwitch4] = React.useState(false);

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
        {...GlobalStyles.ViewStyles(theme)['Top Container No Margin Bottom']
          .props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['Top Container No Margin Bottom']
              .style,
            { marginBottom: 24 }
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
          {'Notifications'}
        </Text>
        <Spacer bottom={25} left={25} right={25} top={25} />
      </View>
      {/* Section Title */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Home Section Title'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['Home Section Title'].style,
            { marginBottom: 24 }
          ),
          dimensions.width
        )}
      >
        {/* Title Left View */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Notification Title Container']
            .props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Notification Title Container']
              .style,
            dimensions.width
          )}
        >
          {/* Title Text */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Title 4'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Title 4'].style,
                { marginRight: 8 }
              ),
              dimensions.width
            )}
          >
            {'Recent Notifications'}
          </Text>
          {/* Item Count */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Notification Count View'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Notification Count View'].style,
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Body 9'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Body 9'].style,
                  { color: theme.colors['hs_white'] }
                ),
                dimensions.width
              )}
            >
              {'2'}
            </Text>
          </View>
        </View>
        {/* Clear All Link */}
        <Link
          accessible={true}
          {...GlobalStyles.LinkStyles(theme)['Link'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
              color: theme.colors['hs_blue_main'],
              fontFamily: 'Inter_500Medium',
              fontSize: 16,
            }),
            dimensions.width
          )}
          title={'Clear All'}
        />
      </View>
      {/* Notifications Fetch */}
      <InterimAPIApi.FetchPropertiesGET>
        {({ loading, error, data, refetchProperties }) => {
          const notificationsFetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <>
              {/* Notifications List */}
              <FlatList
                data={notificationsFetchData}
                horizontal={false}
                inverted={false}
                keyExtractor={(notificationsListData, index) =>
                  notificationsListData?.id ??
                  notificationsListData?.uuid ??
                  index.toString()
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'y5wVeEIC'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const notificationsListData = item;
                  return (
                    <>
                      {/* Item Container */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)[
                          'Notification Item Container'
                        ].props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)[
                            'Notification Item Container'
                          ].style,
                          dimensions.width
                        )}
                      >
                        {/* Item View */}
                        <View
                          {...GlobalStyles.ViewStyles(theme)[
                            'Notification Settings Item'
                          ].props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ViewStyles(theme)[
                              'Notification Settings Item'
                            ].style,
                            dimensions.width
                          )}
                        >
                          {/* Notification Icon */}
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Notification Icon View'
                            ].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ViewStyles(theme)[
                                  'Notification Icon View'
                                ].style,
                                { marginRight: 14 }
                              ),
                              dimensions.width
                            )}
                          >
                            {/* Message Icon */}
                            <>
                              {!notificationsListData?.message ? null : (
                                <Image
                                  resizeMode={'cover'}
                                  {...GlobalStyles.ImageStyles(theme)[
                                    'Icon 18 x 18'
                                  ].props}
                                  source={Images.NotificaitonSmsSolid}
                                  style={StyleSheet.applyWidth(
                                    GlobalStyles.ImageStyles(theme)[
                                      'Icon 18 x 18'
                                    ].style,
                                    dimensions.width
                                  )}
                                />
                              )}
                            </>
                            {/* Transaction Icon */}
                            <>
                              {!!notificationsListData?.message ? null : (
                                <Image
                                  resizeMode={'cover'}
                                  {...GlobalStyles.ImageStyles(theme)[
                                    'Icon 18 x 18'
                                  ].props}
                                  source={Images.Discount}
                                  style={StyleSheet.applyWidth(
                                    GlobalStyles.ImageStyles(theme)[
                                      'Icon 18 x 18'
                                    ].style,
                                    dimensions.width
                                  )}
                                />
                              )}
                            </>
                          </View>
                          {/* Item Info */}
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Notificaiton Items Left'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Notificaiton Items Left'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Message Text */}
                            <>
                              {!notificationsListData?.message ? null : (
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 3']
                                    .props}
                                  numberOfLines={1}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Body 3']
                                        .style,
                                      { marginBottom: 4 }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'You have a new message!'}
                                </Text>
                              )}
                            </>
                            {/* Offer Text */}
                            <>
                              {!!notificationsListData?.message ? null : (
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 3']
                                    .props}
                                  numberOfLines={1}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Body 3']
                                        .style,
                                      { marginBottom: 4 }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'You have a new offer!'}
                                </Text>
                              )}
                            </>
                            {/* Item Subtitle */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Body 9']
                                .props}
                              numberOfLines={1}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Body 9']
                                    .style,
                                  { color: theme.colors['hs_grey_second'] }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Patrick Leone just messaged you! Reply here'}
                            </Text>
                          </View>
                          {/* Time Text */}
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Body 8'].style,
                                { color: theme.colors['hs_grey_third'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'2m ago'}
                          </Text>
                        </View>
                        <Divider
                          {...GlobalStyles.DividerStyles(theme)['Divider']
                            .props}
                          color={theme.colors['hs_grey_sixth']}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.DividerStyles(theme)['Divider']
                                .style,
                              { height: 2, width: '100%' }
                            ),
                            dimensions.width
                          )}
                        />
                      </View>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            </>
          );
        }}
      </InterimAPIApi.FetchPropertiesGET>
    </ScreenContainer>
  );
};

export default withTheme(NotificationsScreen);
