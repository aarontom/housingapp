import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as InterimAPIApi from '../apis/InterimAPIApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  Pressable,
  ScreenContainer,
  Spacer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const SearchScreen = props => {
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
            GlobalStyles.TextStyles(theme)['Title 6'].style,
            dimensions.width
          )}
        >
          {'Search'}
        </Text>
        <Spacer bottom={25} left={25} right={25} top={25} />
      </View>
      {/* Search Section */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Search Section'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Search Section'].style,
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
          <Pressable>
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
                GlobalStyles.TextInputStyles(theme)['Search Text Input'].style,
                dimensions.width
              )}
            />
          </View>
          {/* Filter Button */}
          <Pressable>
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
      {/* Recent Fetch */}
      <InterimAPIApi.FetchPropertiesGET>
        {({ loading, error, data, refetchProperties }) => {
          const recentFetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <>
              {/* Search Scroll */}
              <ScrollView
                bounces={true}
                horizontal={false}
                keyboardShouldPersistTaps={'never'}
                nestedScrollEnabled={false}
                {...GlobalStyles.ScrollViewStyles(theme)['Search Scroll'].props}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ScrollViewStyles(theme)['Search Scroll'].style,
                  dimensions.width,
                  ['width', 'height', 'flexGrow']
                )}
                contentContainerStyle={StyleSheet.applyWidth(
                  GlobalStyles.ScrollViewStyles(theme)['Search Scroll'].style,
                  dimensions.width
                )}
              >
                {/* Recent Search Container */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginBottom: 24 },
                    dimensions.width
                  )}
                >
                  {/* Recent Search Title */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Title 4'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Title 4'].style,
                        {
                          color: theme.colors['hs_grey_main'],
                          marginBottom: 12,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Recent Search'}
                  </Text>
                  {/* Recent Search List */}
                  <FlatList
                    data={recentFetchData}
                    horizontal={false}
                    inverted={false}
                    keyExtractor={(recentSearchListData, index) =>
                      recentSearchListData?.id ??
                      recentSearchListData?.uuid ??
                      index.toString()
                    }
                    keyboardShouldPersistTaps={'never'}
                    listKey={'acualYha'}
                    nestedScrollEnabled={false}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const recentSearchListData = item;
                      return (
                        <>
                          {/* Recent Search Item */}
                          <>
                            {!(recentSearchListData?.id <= 3) ? null : (
                              <View
                                {...GlobalStyles.ViewStyles(theme)[
                                  'Recent Search Items Container'
                                ].props}
                                style={StyleSheet.applyWidth(
                                  GlobalStyles.ViewStyles(theme)[
                                    'Recent Search Items Container'
                                  ].style,
                                  dimensions.width
                                )}
                              >
                                {/* Search Item Text */}
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 7']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Body 7']
                                        .style,
                                      { color: theme.colors['hs_grey_main'] }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {recentSearchListData?.name}
                                </Text>
                                {/* Remove Button */}
                                <Pressable>
                                  {/* Remove Button Container */}
                                  <View
                                    {...GlobalStyles.ViewStyles(theme)[
                                      'Button Container 24'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.ViewStyles(theme)[
                                        'Button Container 24'
                                      ].style,
                                      dimensions.width
                                    )}
                                  >
                                    {/* Button Icon */}
                                    <Icon name={'Ionicons/close'} size={16} />
                                  </View>
                                </Pressable>
                              </View>
                            )}
                          </>
                        </>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                </View>
                {/* Recent Viewed Container */}
                <View>
                  {/* Recent Viewed Title */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Title 4'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Title 4'].style,
                        {
                          color: theme.colors['hs_grey_main'],
                          marginBottom: 12,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Recent Viewed'}
                  </Text>
                  {/* Recent Viewed List */}
                  <FlatList
                    data={recentFetchData}
                    horizontal={false}
                    inverted={false}
                    keyExtractor={(recentViewedListData, index) =>
                      recentViewedListData?.id ??
                      recentViewedListData?.uuid ??
                      index.toString()
                    }
                    keyboardShouldPersistTaps={'never'}
                    listKey={'7PXLYGNu'}
                    nestedScrollEnabled={false}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const recentViewedListData = item;
                      return (
                        <>
                          {/* Viewed Item Button */}
                          <>
                            {!(recentViewedListData?.id <= 5) ? null : (
                              <Pressable
                                onPress={() => {
                                  try {
                                    navigation.navigate('BottomTabNavigator', {
                                      screen: 'HomeStack',
                                      params: {
                                        screen: 'PropertyDetailScreen',
                                      },
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
                                {/* Recent Viewed Item */}
                                <View
                                  {...GlobalStyles.ViewStyles(theme)[
                                    'Recent Viewed Item Container'
                                  ].props}
                                  style={StyleSheet.applyWidth(
                                    GlobalStyles.ViewStyles(theme)[
                                      'Recent Viewed Item Container'
                                    ].style,
                                    dimensions.width
                                  )}
                                >
                                  {/* Item Image */}
                                  <Image
                                    resizeMode={'cover'}
                                    {...GlobalStyles.ImageStyles(theme)[
                                      'Viewed image'
                                    ].props}
                                    source={{
                                      uri: `${recentViewedListData?.image}`,
                                    }}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.ImageStyles(theme)[
                                          'Viewed image'
                                        ].style,
                                        { marginRight: 12 }
                                      ),
                                      dimensions.width
                                    )}
                                  />
                                  {/* Item Info */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flex: 1,
                                        height: '100%',
                                        justifyContent: 'space-between',
                                        position: 'relative',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Info Top */}
                                    <View
                                      {...GlobalStyles.ViewStyles(theme)[
                                        'Recent Info Top Container'
                                      ].props}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.ViewStyles(theme)[
                                            'Recent Info Top Container'
                                          ].style,
                                          {
                                            alignItems: 'flex-start',
                                            marginBottom: 8,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {/* Title Section */}
                                      <View>
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
                                                  theme.colors[
                                                    'hs_grey_second'
                                                  ],
                                                marginBottom: 8,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {recentViewedListData?.location}
                                        </Text>
                                        {/* Title Text */}
                                        <Text
                                          accessible={true}
                                          {...GlobalStyles.TextStyles(theme)[
                                            'Title 5'
                                          ].props}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Title 5'
                                              ].style,
                                              {
                                                color:
                                                  theme.colors['hs_grey_main'],
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {recentViewedListData?.name}
                                        </Text>
                                      </View>
                                      {/* More Button */}
                                      <Pressable>
                                        {/* Button Container */}
                                        <View
                                          {...GlobalStyles.ViewStyles(theme)[
                                            'Button Container 24'
                                          ].props}
                                          style={StyleSheet.applyWidth(
                                            GlobalStyles.ViewStyles(theme)[
                                              'Button Container 24'
                                            ].style,
                                            dimensions.width
                                          )}
                                        >
                                          {/* Button Icon */}
                                          <Icon
                                            name={
                                              'MaterialCommunityIcons/dots-vertical'
                                            }
                                            size={20}
                                          />
                                        </View>
                                      </Pressable>
                                    </View>
                                    {/* Info Bottom */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          flexDirection: 'row',
                                          justifyContent: 'space-between',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Price Text */}
                                      <Text
                                        accessible={true}
                                        {...GlobalStyles.TextStyles(theme)[
                                          'Body 7'
                                        ].props}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Body 7'
                                            ].style,
                                            {
                                              color:
                                                theme.colors['hs_grey_main'],
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {'$'}
                                        {recentViewedListData?.price}
                                        {/* Price Text 2 */}
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
                                                    'hs_grey_second'
                                                  ],
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'/Month'}
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
                                          resizeMode={'cover'}
                                          {...GlobalStyles.ImageStyles(theme)[
                                            'Icon 12 x 12'
                                          ].props}
                                          source={Images.Star}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.ImageStyles(theme)[
                                                'Icon 12 x 12'
                                              ].style,
                                              { marginRight: 6 }
                                            ),
                                            dimensions.width
                                          )}
                                        />
                                        {/* Ratings Text */}
                                        <Text
                                          accessible={true}
                                          {...GlobalStyles.TextStyles(theme)[
                                            'Body 8'
                                          ].props}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Body 8'
                                              ].style,
                                              {
                                                color:
                                                  theme.colors['hs_orange'],
                                                lineHeight: 18,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {recentViewedListData?.rating}
                                          {/* Ratings Text 2 */}
                                          <Text
                                            accessible={true}
                                            {...GlobalStyles.TextStyles(theme)[
                                              'Body 8'
                                            ].props}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Body 8'
                                                ].style,
                                                {
                                                  color:
                                                    theme.colors[
                                                      'hs_grey_second'
                                                    ],
                                                  lineHeight: 18,
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {' (32)'}
                                          </Text>
                                        </Text>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </Pressable>
                            )}
                          </>
                        </>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                </View>
              </ScrollView>
            </>
          );
        }}
      </InterimAPIApi.FetchPropertiesGET>
    </ScreenContainer>
  );
};

export default withTheme(SearchScreen);
