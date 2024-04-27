import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as InterimAPIApi from '../apis/InterimAPIApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Circle,
  Pressable,
  ScreenContainer,
  Shadow,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const FavoritesScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

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
            GlobalStyles.TextStyles(theme)['Title 6'].style,
            dimensions.width
          )}
        >
          {'Favorites'}
        </Text>
        {/* Notification Button */}
        <Pressable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'NotificationsStack',
                params: { screen: 'NotificationsScreen' },
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Notification Button Circle */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Back Button Circle'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Back Button Circle'].style,
                {
                  backgroundColor: theme.colors['hs_white'],
                  borderColor: theme.colors['hs_grey_fifth'],
                  borderWidth: 1,
                }
              ),
              dimensions.width
            )}
          >
            {/* Notification Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Notification Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Notification Container'].style,
                dimensions.width
              )}
            >
              {/* Notification Image */}
              <Image
                {...GlobalStyles.ImageStyles(theme)['Notification Image'].props}
                resizeMode={'contain'}
                source={Images.Notification}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ImageStyles(theme)['Notification Image'].style,
                  dimensions.width
                )}
              />
              {/* Notification Dot */}
              <Circle
                {...GlobalStyles.CircleStyles(theme)['Notification Dot'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.CircleStyles(theme)['Notification Dot'].style,
                  dimensions.width
                )}
              />
            </View>
          </View>
        </Pressable>
      </View>
      {/* Section Title */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Featured Section Title'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Featured Section Title'].style,
          dimensions.width
        )}
      >
        {/* Favorites Result Title */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Body 4'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Body 4'].style,
            dimensions.width
          )}
        >
          {'Showing'}
          {/* Favorites Result Title 2 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Body 4'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Body 4'].style,
                { color: theme.colors['hs_blue_main'] }
              ),
              dimensions.width
            )}
          >
            {' 545 Featured'}
          </Text>
        </Text>
        {/* Sort Button */}
        <Pressable>
          {/* Sort Button Container */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Sort Button Container'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Sort Button Container'].style,
                { alignItems: 'center', flexDirection: 'row' }
              ),
              dimensions.width
            )}
          >
            {/* Sort Text */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Body 6'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Body 6'].style,
                  { marginRight: 8 }
                ),
                dimensions.width
              )}
            >
              {'Sort'}
            </Text>
            {/* Sort Icon */}
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Icon 18 x 18'].props}
              source={Images.FilterArrow}
              style={StyleSheet.applyWidth(
                GlobalStyles.ImageStyles(theme)['Icon 18 x 18'].style,
                dimensions.width
              )}
            />
          </View>
        </Pressable>
      </View>
      {/* Favorites Fetch */}
      <InterimAPIApi.FetchPropertiesGET>
        {({ loading, error, data, refetchProperties }) => {
          const favoritesFetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <>
              {/* Favorites List */}
              <FlatList
                data={favoritesFetchData}
                horizontal={false}
                inverted={false}
                keyExtractor={(favoritesListData, index) =>
                  favoritesListData?.id ??
                  favoritesListData?.uuid ??
                  index.toString()
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'xdEaPh63'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const favoritesListData = item;
                  return (
                    <>
                      {/* Favorite Item Button */}
                      <Pressable
                        onPress={() => {
                          try {
                            navigation.navigate('BottomTabNavigator', {
                              screen: 'HomeStack',
                              params: { screen: 'PropertyDetailScreen' },
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { marginBottom: 16 },
                          dimensions.width
                        )}
                      >
                        {/* Favorite Item */}
                        <View
                          {...GlobalStyles.ViewStyles(theme)['Favorite Item']
                            .props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ViewStyles(theme)['Favorite Item']
                              .style,
                            dimensions.width
                          )}
                        >
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
                              'Favorite Shadow'
                            ].props}
                            distance={30}
                            startColor={theme.colors['hs_shadow']}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ShadowStyles(theme)[
                                  'Favorite Shadow'
                                ].style,
                                { opacity: 0.3 }
                              ),
                              dimensions.width
                            )}
                          />
                          {/* Favorite Container */}
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Favorite Item Container'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Favorite Item Container'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Image Container */}
                            <View
                              {...GlobalStyles.ViewStyles(theme)[
                                'Featured Image Container'
                              ].props}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ViewStyles(theme)[
                                  'Featured Image Container'
                                ].style,
                                dimensions.width
                              )}
                            >
                              {/* Item Image */}
                              <Image
                                resizeMode={'cover'}
                                {...GlobalStyles.ImageStyles(theme)['Image']
                                  .props}
                                source={{ uri: `${favoritesListData?.image}` }}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ImageStyles(theme)['Image']
                                      .style,
                                    { height: '100%', width: '100%' }
                                  ),
                                  dimensions.width
                                )}
                              />
                              {/* Item Tag */}
                              <View
                                {...GlobalStyles.ViewStyles(theme)[
                                  'Featured Tag Item'
                                ].props}
                                style={StyleSheet.applyWidth(
                                  GlobalStyles.ViewStyles(theme)[
                                    'Featured Tag Item'
                                  ].style,
                                  dimensions.width
                                )}
                              >
                                {/* Tag Text */}
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 11']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Body 11']
                                        .style,
                                      { color: theme.colors['hs_blue_main'] }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {favoritesListData?.tag}
                                </Text>
                              </View>
                            </View>
                            {/* Item Info Top Container */}
                            <View
                              {...GlobalStyles.ViewStyles(theme)[
                                'Feature Item Info Container'
                              ].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ViewStyles(theme)[
                                    'Feature Item Info Container'
                                  ].style,
                                  { marginBottom: 12 }
                                ),
                                dimensions.width
                              )}
                            >
                              {/* Info Left Container */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { alignItems: 'flex-start' },
                                  dimensions.width
                                )}
                              >
                                {/* Item Title */}
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Title 7']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Title 7']
                                        .style,
                                      {
                                        color: theme.colors['hs_grey_main'],
                                        marginBottom: 4,
                                        textAlign: 'left',
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {favoritesListData?.name}
                                </Text>
                                {/* Item Location Button */}
                                <Pressable
                                  onPress={() => {
                                    try {
                                      navigation.navigate(
                                        'BottomTabNavigator',
                                        {
                                          screen: 'SearchStack',
                                          params: { screen: 'MapResultScreen' },
                                        }
                                      );
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* Item Location Container */}
                                  <View
                                    {...GlobalStyles.ViewStyles(theme)[
                                      'Item Location Container'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.ViewStyles(theme)[
                                        'Item Location Container'
                                      ].style,
                                      dimensions.width
                                    )}
                                  >
                                    {/* Pin Image */}
                                    <Image
                                      {...GlobalStyles.ImageStyles(theme)[
                                        'Pin IMage'
                                      ].props}
                                      resizeMode={'contain'}
                                      source={Images.LocationPinSolid}
                                      style={StyleSheet.applyWidth(
                                        GlobalStyles.ImageStyles(theme)[
                                          'Pin IMage'
                                        ].style,
                                        dimensions.width
                                      )}
                                    />
                                    {/* Location Text */}
                                    <Text
                                      accessible={true}
                                      {...GlobalStyles.TextStyles(theme)[
                                        'Body 10'
                                      ].props}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Body 10'
                                          ].style,
                                          {
                                            color:
                                              theme.colors['hs_grey_second'],
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {favoritesListData?.location}
                                    </Text>
                                  </View>
                                </Pressable>
                              </View>
                              {/* Heart Fill Button */}
                              <Pressable
                                onPress={() => {
                                  try {
                                    /* 'If/Else' action requires configuration: select If Condition */
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* Heart Button Container */}
                                <View
                                  {...GlobalStyles.ViewStyles(theme)[
                                    'Favorite Item Heart Button Contianer'
                                  ].props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ViewStyles(theme)[
                                        'Favorite Item Heart Button Contianer'
                                      ].style,
                                      {
                                        backgroundColor:
                                          theme.colors['hs_grey_sixth'],
                                        borderRadius: 20,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {/* Heart Fill Image */}
                                  <>
                                    {!favoritesListData?.liked ? null : (
                                      <Image
                                        {...GlobalStyles.ImageStyles(theme)[
                                          'Icon 20 x 20'
                                        ].props}
                                        resizeMode={'contain'}
                                        source={Images.HeartSolidShine}
                                        style={StyleSheet.applyWidth(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Icon 20 x 20'
                                          ].style,
                                          dimensions.width
                                        )}
                                      />
                                    )}
                                  </>
                                  {/* Heart Line Image */}
                                  <>
                                    {!!favoritesListData?.liked ? null : (
                                      <Image
                                        {...GlobalStyles.ImageStyles(theme)[
                                          'Icon 18 x 18'
                                        ].props}
                                        resizeMode={'contain'}
                                        source={Images.HeartLineBlue}
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
                              </Pressable>
                            </View>
                            {/* Item Price Container */}
                            <View
                              {...GlobalStyles.ViewStyles(theme)[
                                'Feature intem Price Container'
                              ].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ViewStyles(theme)[
                                    'Feature intem Price Container'
                                  ].style,
                                  { paddingLeft: 16, paddingRight: 16 }
                                ),
                                dimensions.width
                              )}
                            >
                              {/* Item Price Text */}
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Body 2']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Body 2']
                                      .style,
                                    {
                                      color: theme.colors['hs_blue_main'],
                                      lineHeight: 22,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'$19,320'}
                                {/* Item Month Text */}
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 9']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Body 9']
                                        .style,
                                      {
                                        color: theme.colors['hs_grey_second'],
                                        lineHeight: 22,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'/month'}
                                </Text>
                              </Text>
                              {/* Ratings View */}
                              <View
                                {...GlobalStyles.ViewStyles(theme)[
                                  'Ratings View'
                                ].props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ViewStyles(theme)[
                                      'Ratings View'
                                    ].style,
                                    {
                                      alignItems: 'center',
                                      justifyContent: 'flex-start',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {/* Star Icon */}
                                <Image
                                  {...GlobalStyles.ImageStyles(theme)[
                                    'Icon 14 x 14'
                                  ].props}
                                  resizeMode={'contain'}
                                  source={Images.Star}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ImageStyles(theme)[
                                        'Icon 14 x 14'
                                      ].style,
                                      { marginRight: 8 }
                                    ),
                                    dimensions.width
                                  )}
                                />
                                {/* Ratings Text */}
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 5']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Body 5']
                                        .style,
                                      { color: theme.colors['hs_grey_second'] }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'4.5'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </Pressable>
                    </>
                  );
                }}
                contentContainerStyle={StyleSheet.applyWidth(
                  { paddingLeft: 24, paddingRight: 24, paddingTop: 24 },
                  dimensions.width
                )}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              />
            </>
          );
        }}
      </InterimAPIApi.FetchPropertiesGET>
    </ScreenContainer>
  );
};

export default withTheme(FavoritesScreen);
