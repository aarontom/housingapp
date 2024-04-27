import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as InterimAPIApi from '../apis/InterimAPIApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Circle,
  LinearGradient,
  Link,
  Pressable,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { MasonryFlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [allTag, setAllTag] = React.useState(true);
  const [apartmentTag, setApartmentTag] = React.useState(false);
  const [houseTag, setHouseTag] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [villaTag, setVillaTag] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      {...GlobalStyles.ScreenContainerStyles(theme)[
        'Screen Container No Padding Horizontal'
      ].props}
      hasBottomSafeArea={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        GlobalStyles.ScreenContainerStyles(theme)[
          'Screen Container No Padding Horizontal'
        ].style,
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
                {/* Profile Container */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Profile Container'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Profile Container'].style,
                      { alignItems: 'center' }
                    ),
                    dimensions.width
                  )}
                >
                  {/* Profile Image Button */}
                  <Pressable
                    onPress={() => {
                      try {
                        navigation.navigate('ProfileStack');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      { marginRight: 14 },
                      dimensions.width
                    )}
                  >
                    {/* Profile Image Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)[
                        'Profile Image Container'
                      ].props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)[
                          'Profile Image Container'
                        ].style,
                        dimensions.width
                      )}
                    >
                      {/* Profile Image */}
                      <Image
                        resizeMode={'cover'}
                        {...GlobalStyles.ImageStyles(theme)['Profile Image']
                          .props}
                        source={Images.AliMorshedlouWMD64tMfc4kUnsplash}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ImageStyles(theme)['Profile Image']
                            .style,
                          dimensions.width
                        )}
                      />
                    </View>
                  </Pressable>
                  {/* Profile Text */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Profile Text Container']
                      .props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Profile Text Container']
                          .style,
                        { height: 50 }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Name Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 2'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 2'].style,
                          {
                            color: theme.colors['hs_grey_main'],
                            lineHeight: 24,
                            marginBottom: 2,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Hi Benjamin'}
                    </Text>
                    {/* Welcome Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_main'],
                            lineHeight: 20,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Welcome 👋'}
                    </Text>
                  </View>
                </View>
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
                    {...GlobalStyles.ViewStyles(theme)['Back Button Circle']
                      .props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Back Button Circle']
                          .style,
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
                      {...GlobalStyles.ViewStyles(theme)[
                        'Notification Container'
                      ].props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Notification Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Notification Image */}
                      <Image
                        {...GlobalStyles.ImageStyles(theme)[
                          'Notification Image'
                        ].props}
                        resizeMode={'contain'}
                        source={Images.Notification}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ImageStyles(theme)['Notification Image']
                            .style,
                          dimensions.width
                        )}
                      />
                      {/* Notification Dot */}
                      <Circle
                        {...GlobalStyles.CircleStyles(theme)['Notification Dot']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.CircleStyles(theme)['Notification Dot']
                            .style,
                          dimensions.width
                        )}
                      />
                    </View>
                  </View>
                </Pressable>
              </View>
            </>
          );
        }}
      </InterimAPIApi.FetchPropertiesGET>
      {/* Page Scroll */}
      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Section */}
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
                    {
                      marginBottom: 4,
                      marginLeft: 4,
                      marginRight: 4,
                      marginTop: 4,
                    }
                  ),
                  dimensions.width
                )}
              />
            </Pressable>

            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              {/* Search Input */}
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                onChangeText={newSearchInputValue => {
                  try {
                    setSearchInput(newSearchInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                onSubmitEditing={() => {
                  try {
                    if (searchInput) {
                      navigation.navigate('BottomTabNavigator', {
                        screen: 'SearchStack',
                        params: { screen: 'SearchScreen' },
                      });
                    }
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Enter a value...'}
                webShowOutline={true}
                {...GlobalStyles.TextInputStyles(theme)['Search Text Input']
                  .props}
                changeTextDelay={300}
                enablesReturnKeyAutomatically={false}
                keyboardType={'default'}
                placeholder={'Search...'}
                placeholderTextColor={theme.colors['hs_grey_third']}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextInputStyles(theme)['Search Text Input']
                    .style,
                  dimensions.width
                )}
                value={searchInput}
              />
            </View>
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
                    {
                      marginBottom: 8,
                      marginLeft: 8,
                      marginRight: 8,
                      marginTop: 8,
                    }
                  ),
                  dimensions.width
                )}
              />
            </Pressable>
          </View>
        </View>
        {/* Featured Section */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Featured Section'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Featured Section'].style,
            dimensions.width
          )}
        >
          {/* Featured Title */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Home Section Title'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Home Section Title'].style,
              dimensions.width
            )}
          >
            {/* Fetured Text */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Title 4'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Title 4'].style,
                dimensions.width
              )}
            >
              {'Featured'}
            </Text>
            {/* See All Link */}
            <Link
              accessible={true}
              {...GlobalStyles.LinkStyles(theme)['Link'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.LinkStyles(theme)['Link'].style,
                  {
                    color: theme.colors['hs_blue_main'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                  }
                ),
                dimensions.width
              )}
              title={'See All'}
            />
          </View>
          {/* Featured Fetch */}
          <InterimAPIApi.FetchPropertiesGET>
            {({ loading, error, data, refetchProperties }) => {
              const featuredFetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlatList
                  data={featuredFetchData}
                  inverted={false}
                  keyExtractor={(listData, index) =>
                    listData?.id ?? listData?.uuid ?? index.toString()
                  }
                  keyboardShouldPersistTaps={'never'}
                  listKey={'vKfsjBrZ'}
                  nestedScrollEnabled={false}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <>
                        {/* Featured Item Button */}
                        <Pressable
                          onPress={() => {
                            try {
                              navigation.navigate('PropertyDetailScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={StyleSheet.applyWidth(
                            { marginRight: 16 },
                            dimensions.width
                          )}
                        >
                          {/* Featured Item Container */}
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Featured Item Container'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Featured Item Container'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Image Container */}
                            <View
                              {...GlobalStyles.ViewStyles(theme)[
                                'Image Container'
                              ].props}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ViewStyles(theme)[
                                  'Image Container'
                                ].style,
                                dimensions.width
                              )}
                            >
                              {/* Item Image */}
                              <Image
                                resizeMode={'cover'}
                                {...GlobalStyles.ImageStyles(theme)['Image']
                                  .props}
                                source={{ uri: `${listData?.image}` }}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ImageStyles(theme)['Image']
                                      .style,
                                    { height: '100%', width: '100%' }
                                  ),
                                  dimensions.width
                                )}
                              />
                              {/* Rating Container */}
                              <View
                                {...GlobalStyles.ViewStyles(theme)[
                                  'Rating Container'
                                ].props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ViewStyles(theme)[
                                      'Rating Container'
                                    ].style,
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      paddingLeft: 6,
                                      paddingRight: 6,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {/* Star Image */}
                                <Image
                                  resizeMode={'cover'}
                                  {...GlobalStyles.ImageStyles(theme)['Star']
                                    .props}
                                  source={Images.Star}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ImageStyles(theme)['Star']
                                        .style,
                                      { marginRight: 6 }
                                    ),
                                    dimensions.width
                                  )}
                                />
                                {/* Rating Number */}
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 10']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    GlobalStyles.TextStyles(theme)['Body 10']
                                      .style,
                                    dimensions.width
                                  )}
                                >
                                  {listData?.rating}
                                </Text>
                              </View>
                            </View>
                            {/* Item Info Top Container */}
                            <View
                              {...GlobalStyles.ViewStyles(theme)[
                                'Item Info Top Container'
                              ].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ViewStyles(theme)[
                                    'Item Info Top Container'
                                  ].style,
                                  { marginBottom: 12 }
                                ),
                                dimensions.width
                              )}
                            >
                              {/* Item Tag */}
                              <View
                                {...GlobalStyles.ViewStyles(theme)['Item Tag']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ViewStyles(theme)['Item Tag']
                                      .style,
                                    {
                                      backgroundColor:
                                        theme.colors['hs_blue_second'],
                                    }
                                  ),
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
                                  {listData?.tag}
                                </Text>
                              </View>
                              {/* Item Price Text */}
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Body 5']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Body 5']
                                      .style,
                                    { color: theme.colors['hs_blue_main'] }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'$'}
                                {listData?.price}
                                {/* Item Month Text */}
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 9']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Body 9']
                                        .style,
                                      { color: theme.colors['hs_grey_second'] }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'/month'}
                                </Text>
                              </Text>
                            </View>
                            {/* Item Title */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Title 8']
                                .props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Title 8']
                                    .style,
                                  {
                                    color: theme.colors['hs_grey_main'],
                                    marginBottom: 12,
                                    paddingLeft: 12,
                                    paddingRight: 12,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {listData?.name}
                            </Text>
                            {/* Item Info Bottom Container */}
                            <View
                              {...GlobalStyles.ViewStyles(theme)[
                                'item Info Bottom Container'
                              ].props}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ViewStyles(theme)[
                                  'item Info Bottom Container'
                                ].style,
                                dimensions.width
                              )}
                            >
                              {/* Item Location Button */}
                              <Pressable
                                onPress={() => {
                                  try {
                                    navigation.navigate('BottomTabNavigator', {
                                      screen: 'SearchStack',
                                      params: { screen: 'MapResultScreen' },
                                    });
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
                                          color: theme.colors['hs_grey_second'],
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {listData?.location}
                                  </Text>
                                </View>
                              </Pressable>
                              {/* Heart Button Container */}
                              <View
                                {...GlobalStyles.ViewStyles(theme)[
                                  'Heart Button Container'
                                ].props}
                                style={StyleSheet.applyWidth(
                                  GlobalStyles.ViewStyles(theme)[
                                    'Heart Button Container'
                                  ].style,
                                  dimensions.width
                                )}
                              >
                                {/* Heart Button */}
                                <Pressable
                                  onPress={() => {
                                    try {
                                      /* 'If/Else' action requires configuration: select If Condition */
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* Heart Line Image */}
                                  <>
                                    {!!listData?.liked ? null : (
                                      <Image
                                        {...GlobalStyles.ImageStyles(theme)[
                                          'Icon 16 x 16'
                                        ].props}
                                        resizeMode={'contain'}
                                        source={Images.HeartLineBlue}
                                        style={StyleSheet.applyWidth(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Icon 16 x 16'
                                          ].style,
                                          dimensions.width
                                        )}
                                      />
                                    )}
                                  </>
                                  {/* Heart Fill Image */}
                                  <>
                                    {!listData?.liked ? null : (
                                      <Image
                                        {...GlobalStyles.ImageStyles(theme)[
                                          'Icon 18 x 18'
                                        ].props}
                                        resizeMode={'contain'}
                                        source={Images.HearSolid}
                                        style={StyleSheet.applyWidth(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Icon 18 x 18'
                                          ].style,
                                          dimensions.width
                                        )}
                                      />
                                    )}
                                  </>
                                </Pressable>
                              </View>
                            </View>
                          </View>
                        </Pressable>
                      </>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  {...GlobalStyles.FlatListStyles(theme)['Featured List'].props}
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.FlatListStyles(theme)['Featured List'].style,
                    dimensions.width,
                    ['width', 'height', 'flexGrow']
                  )}
                  contentContainerStyle={StyleSheet.applyWidth(
                    GlobalStyles.FlatListStyles(theme)['Featured List'].style,
                    dimensions.width
                  )}
                />
              );
            }}
          </InterimAPIApi.FetchPropertiesGET>
        </View>
        {/* Recommended Section */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Recommended Section'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Recommended Section'].style,
            dimensions.width
          )}
        >
          {/* Recommendation Title */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Home Section Title'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Home Section Title'].style,
              dimensions.width
            )}
          >
            {/* Recommendation Text */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Title 4'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Title 4'].style,
                dimensions.width
              )}
            >
              {'Our Recommendation'}
            </Text>
            {/* See All Link */}
            <Link
              accessible={true}
              {...GlobalStyles.LinkStyles(theme)['Link'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.LinkStyles(theme)['Link'].style,
                  {
                    color: theme.colors['hs_blue_main'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                  }
                ),
                dimensions.width
              )}
              title={'See All'}
            />
          </View>
          {/* Tags Scroll */}
          <ScrollView
            bounces={true}
            keyboardShouldPersistTaps={'never'}
            nestedScrollEnabled={false}
            {...GlobalStyles.ScrollViewStyles(theme)['Tag Scroll'].props}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={StyleSheet.applyWidth(
              GlobalStyles.ScrollViewStyles(theme)['Tag Scroll'].style,
              dimensions.width,
              ['width', 'height', 'flexGrow']
            )}
            contentContainerStyle={StyleSheet.applyWidth(
              GlobalStyles.ScrollViewStyles(theme)['Tag Scroll'].style,
              dimensions.width
            )}
          >
            {/* All Tag Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Tag Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Tag Container'].style,
                dimensions.width
              )}
            >
              {/* Tag Active Button */}
              <>
                {!allTag ? null : (
                  <Pressable
                    {...GlobalStyles.PressableStyles(theme)[
                      'Tag Button Pressable'
                    ].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.PressableStyles(theme)[
                        'Tag Button Pressable'
                      ].style,
                      dimensions.width
                    )}
                  >
                    {/* Tag Active Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Tag Active Container']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Tag Active Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Tag Active Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 6'].style,
                            { color: theme.colors['hs_white'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'All'}
                      </Text>
                    </View>
                  </Pressable>
                )}
              </>
              {/* Tag Inactive Button */}
              <>
                {!!allTag ? null : (
                  <Pressable
                    onPress={() => {
                      try {
                        setAllTag(true);
                        setVillaTag(false);
                        setApartmentTag(false);
                        setHouseTag(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.PressableStyles(theme)[
                      'Tag Button Pressable'
                    ].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.PressableStyles(theme)[
                        'Tag Button Pressable'
                      ].style,
                      dimensions.width
                    )}
                  >
                    {/* Tag Inactive Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)[
                        'Tag Inactive Container'
                      ].props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Tag Inactive Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Tag Inactive Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 6'].style,
                            { color: theme.colors['hs_blue_main'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'All'}
                      </Text>
                    </View>
                  </Pressable>
                )}
              </>
            </View>
            {/* Villa Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Tag Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Tag Container'].style,
                dimensions.width
              )}
            >
              {/* Tag Active Button */}
              <>
                {!villaTag ? null : (
                  <Pressable
                    {...GlobalStyles.PressableStyles(theme)[
                      'Tag Button Pressable'
                    ].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.PressableStyles(theme)[
                        'Tag Button Pressable'
                      ].style,
                      dimensions.width
                    )}
                  >
                    {/* Tag Active Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Tag Active Container']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Tag Active Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Tag Active Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 6'].style,
                            { color: theme.colors['hs_white'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Villa'}
                      </Text>
                    </View>
                  </Pressable>
                )}
              </>
              {/* Tag Inactive Button */}
              <>
                {!!villaTag ? null : (
                  <Pressable
                    onPress={() => {
                      try {
                        setVillaTag(true);
                        setAllTag(false);
                        setApartmentTag(false);
                        setHouseTag(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.PressableStyles(theme)[
                      'Tag Button Pressable'
                    ].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.PressableStyles(theme)[
                        'Tag Button Pressable'
                      ].style,
                      dimensions.width
                    )}
                  >
                    {/* Tag Inactive Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)[
                        'Tag Inactive Container'
                      ].props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Tag Inactive Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Tag Inactive Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 6'].style,
                            { color: theme.colors['hs_blue_main'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Villa'}
                      </Text>
                    </View>
                  </Pressable>
                )}
              </>
            </View>
            {/* Apartment Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Tag Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Tag Container'].style,
                dimensions.width
              )}
            >
              {/* Tag Active Button */}
              <>
                {!apartmentTag ? null : (
                  <Pressable
                    {...GlobalStyles.PressableStyles(theme)[
                      'Tag Button Pressable'
                    ].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.PressableStyles(theme)[
                        'Tag Button Pressable'
                      ].style,
                      dimensions.width
                    )}
                  >
                    {/* Tag Active Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Tag Active Container']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Tag Active Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Tag Active Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 6'].style,
                            { color: theme.colors['hs_white'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Apartment'}
                      </Text>
                    </View>
                  </Pressable>
                )}
              </>
              {/* Tag Inactive Button */}
              <>
                {!!apartmentTag ? null : (
                  <Pressable
                    onPress={() => {
                      try {
                        setApartmentTag(true);
                        setAllTag(false);
                        setVillaTag(false);
                        setHouseTag(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.PressableStyles(theme)[
                      'Tag Button Pressable'
                    ].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.PressableStyles(theme)[
                        'Tag Button Pressable'
                      ].style,
                      dimensions.width
                    )}
                  >
                    {/* Tag Inactive Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)[
                        'Tag Inactive Container'
                      ].props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Tag Inactive Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Tag Inactive Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 6'].style,
                            { color: theme.colors['hs_blue_main'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Apartment'}
                      </Text>
                    </View>
                  </Pressable>
                )}
              </>
            </View>
            {/* House Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Tag Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Tag Container'].style,
                dimensions.width
              )}
            >
              {/* Tag Active Button */}
              <>
                {!houseTag ? null : (
                  <Pressable
                    {...GlobalStyles.PressableStyles(theme)[
                      'Tag Button Pressable'
                    ].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.PressableStyles(theme)[
                        'Tag Button Pressable'
                      ].style,
                      dimensions.width
                    )}
                  >
                    {/* Tag Active Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Tag Active Container']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Tag Active Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Tag Active Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 6'].style,
                            { color: theme.colors['hs_white'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'House'}
                      </Text>
                    </View>
                  </Pressable>
                )}
              </>
              {/* Tag Inactive Button */}
              <>
                {!!houseTag ? null : (
                  <Pressable
                    onPress={() => {
                      try {
                        setHouseTag(true);
                        setAllTag(false);
                        setVillaTag(false);
                        setApartmentTag(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.PressableStyles(theme)[
                      'Tag Button Pressable'
                    ].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.PressableStyles(theme)[
                        'Tag Button Pressable'
                      ].style,
                      dimensions.width
                    )}
                  >
                    {/* Tag Inactive Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)[
                        'Tag Inactive Container'
                      ].props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Tag Inactive Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Tag Inactive Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 6'].style,
                            { color: theme.colors['hs_blue_main'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'House'}
                      </Text>
                    </View>
                  </Pressable>
                )}
              </>
            </View>
          </ScrollView>
          {/* Recommended Grid Container */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Recommended Grid Container']
              .props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Recommended Grid Container']
                .style,
              dimensions.width
            )}
          >
            {/* Recommended Fetch */}
            <InterimAPIApi.FetchPropertiesGET>
              {({ loading, error, data, refetchProperties }) => {
                const recommendedFetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <>
                    {/* Recommended List */}
                    <MasonryFlashList
                      data={recommendedFetchData}
                      estimatedItemSize={50}
                      keyExtractor={(recommendedListData, index) =>
                        recommendedListData?.id ??
                        recommendedListData?.uuid ??
                        index.toString()
                      }
                      listKey={'nMz6RaF3'}
                      onEndReachedThreshold={0.5}
                      renderItem={({ item, index }) => {
                        const recommendedListData = item;
                        return (
                          <>
                            {/* Recommended Item Container */}
                            <View
                              {...GlobalStyles.ViewStyles(theme)[
                                'Recommended Item Container'
                              ].props}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ViewStyles(theme)[
                                  'Recommended Item Container'
                                ].style,
                                dimensions.width
                              )}
                            >
                              {/* Recommended Item Button */}
                              <Pressable
                                onPress={() => {
                                  try {
                                    navigation.navigate('PropertyDetailScreen');
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* Recommended Item View */}
                                <View
                                  {...GlobalStyles.ViewStyles(theme)[
                                    'Recommended Item View'
                                  ].props}
                                  style={StyleSheet.applyWidth(
                                    GlobalStyles.ViewStyles(theme)[
                                      'Recommended Item View'
                                    ].style,
                                    dimensions.width
                                  )}
                                >
                                  {/* Item Image */}
                                  <Image
                                    resizeMode={'cover'}
                                    {...GlobalStyles.ImageStyles(theme)['Image']
                                      .props}
                                    source={{
                                      uri: `${recommendedListData?.image}`,
                                    }}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.ImageStyles(theme)['Image']
                                          .style,
                                        { height: '100%', width: '100%' }
                                      ),
                                      dimensions.width
                                    )}
                                  />
                                  {/* Shadow */}
                                  <LinearGradient
                                    endX={100}
                                    endY={100}
                                    startY={0}
                                    {...GlobalStyles.LinearGradientStyles(
                                      theme
                                    )['Featured Item SHadow'].props}
                                    color1={'"rgba(0, 0, 0, 0)"'}
                                    color2={theme.colors['hs_grey_main']}
                                    startX={100}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.LinearGradientStyles(theme)[
                                        'Featured Item SHadow'
                                      ].style,
                                      dimensions.width
                                    )}
                                  />
                                  {/* Rating Container */}
                                  <View
                                    {...GlobalStyles.ViewStyles(theme)[
                                      'Rating Container'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.ViewStyles(theme)[
                                          'Rating Container'
                                        ].style,
                                        {
                                          alignItems: 'center',
                                          flexDirection: 'row',
                                          paddingLeft: 6,
                                          paddingRight: 6,
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {/* Star Image */}
                                    <Image
                                      resizeMode={'cover'}
                                      {...GlobalStyles.ImageStyles(theme)[
                                        'Star'
                                      ].props}
                                      source={Images.Star}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Star'
                                          ].style,
                                          { marginRight: 6 }
                                        ),
                                        dimensions.width
                                      )}
                                    />
                                    {/* Rating Number */}
                                    <Text
                                      accessible={true}
                                      {...GlobalStyles.TextStyles(theme)[
                                        'Body 10'
                                      ].props}
                                      style={StyleSheet.applyWidth(
                                        GlobalStyles.TextStyles(theme)[
                                          'Body 10'
                                        ].style,
                                        dimensions.width
                                      )}
                                    >
                                      {recommendedListData?.rating}
                                    </Text>
                                  </View>
                                  {/* Item Info Container */}
                                  <View
                                    {...GlobalStyles.ViewStyles(theme)[
                                      'Item Info Container'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.ViewStyles(theme)[
                                        'Item Info Container'
                                      ].style,
                                      dimensions.width
                                    )}
                                  >
                                    {/* Item Title */}
                                    <Text
                                      accessible={true}
                                      {...GlobalStyles.TextStyles(theme)[
                                        'Body 6'
                                      ].props}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Body 6'
                                          ].style,
                                          {
                                            color: theme.colors['hs_white'],
                                            marginBottom: 4,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {recommendedListData?.name}
                                    </Text>
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
                                              theme.colors['hs_grey_sixth'],
                                            marginBottom: 8,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {recommendedListData?.location}
                                    </Text>
                                    {/* Item Info Bottom Container */}
                                    <View
                                      {...GlobalStyles.ViewStyles(theme)[
                                        'Recommended Item Info Bottom'
                                      ].props}
                                      style={StyleSheet.applyWidth(
                                        GlobalStyles.ViewStyles(theme)[
                                          'Recommended Item Info Bottom'
                                        ].style,
                                        dimensions.width
                                      )}
                                    >
                                      {/* Item Price Text */}
                                      <Text
                                        accessible={true}
                                        {...GlobalStyles.TextStyles(theme)[
                                          'Body 2'
                                        ].props}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Body 2'
                                            ].style,
                                            {
                                              color: theme.colors['hs_white'],
                                              lineHeight: 22,
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {'$'}
                                        {recommendedListData?.price}
                                        {/* Item Month Text */}
                                        <Text
                                          accessible={true}
                                          {...GlobalStyles.TextStyles(theme)[
                                            'Body 9'
                                          ].props}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Body 9'
                                              ].style,
                                              {
                                                color:
                                                  theme.colors[
                                                    'hs_blue_fourth'
                                                  ],
                                                lineHeight: 22,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'/month'}
                                        </Text>
                                      </Text>
                                      {/* Heart Fill Button */}
                                      <Pressable>
                                        {/* Heart Button Container */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            { position: 'relative' },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Heart Line Image */}
                                          <>
                                            {!!recommendedListData?.liked ? null : (
                                              <Image
                                                {...GlobalStyles.ImageStyles(
                                                  theme
                                                )['Icon 16 x 16'].props}
                                                resizeMode={'contain'}
                                                source={Images.HeartLineWhite}
                                                style={StyleSheet.applyWidth(
                                                  GlobalStyles.ImageStyles(
                                                    theme
                                                  )['Icon 16 x 16'].style,
                                                  dimensions.width
                                                )}
                                              />
                                            )}
                                          </>
                                          {/* Heart Fill Image */}
                                          <>
                                            {!recommendedListData?.liked ? null : (
                                              <Image
                                                {...GlobalStyles.ImageStyles(
                                                  theme
                                                )['Icon 18 x 18'].props}
                                                resizeMode={'contain'}
                                                source={Images.HearSolid}
                                                style={StyleSheet.applyWidth(
                                                  GlobalStyles.ImageStyles(
                                                    theme
                                                  )['Icon 18 x 18'].style,
                                                  dimensions.width
                                                )}
                                              />
                                            )}
                                          </>
                                        </View>
                                      </Pressable>
                                    </View>
                                  </View>
                                </View>
                              </Pressable>
                            </View>
                          </>
                        );
                      }}
                      initialNumToRender={6}
                      numColumns={2}
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}
                    />
                  </>
                );
              }}
            </InterimAPIApi.FetchPropertiesGET>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
