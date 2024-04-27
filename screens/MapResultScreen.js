import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as InterimAPIApi from '../apis/InterimAPIApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { MapView } from '@draftbit/maps';
import {
  Icon,
  Pressable,
  ScreenContainer,
  Shadow,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Platform, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const MapResultScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [bookmarkSelect, setBookmarkSelect] = React.useState(false);
  const [documentSelect, setDocumentSelect] = React.useState(true);
  const [likeSelect, setLikeSelect] = React.useState(false);
  const [phoneSelect, setPhoneSelect] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      {...GlobalStyles.ScreenContainerStyles(theme)['Screen No Padding'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.ScreenContainerStyles(theme)['Screen No Padding'].style,
          { backgroundColor: theme.colors['hs_white'], paddingBottom: 12 }
        ),
        dimensions.width
      )}
    >
      <MapView
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        autoClusterMarkers={false}
        autoClusterMarkersDistanceMeters={10000}
        customMapStyle={'Beautiful West Coast Villa'}
        latitude={37.40241}
        loadingEnabled={true}
        longitude={-122.12125}
        moveOnMarkerPress={true}
        rotateEnabled={true}
        scrollEnabled={true}
        showsCompass={false}
        showsPointsOfInterest={true}
        showsUserLocation={false}
        zoom={8}
        zoomEnabled={true}
        {...GlobalStyles.MapViewStyles(theme)['Map View Fullscreen'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.MapViewStyles(theme)['Map View Fullscreen'].style,
            { height: '100%' }
          ),
          dimensions.width
        )}
      />
      {/* Top Container IOS */}
      <>
        {!(Platform.OS === 'ios') ? null : (
          <View
            {...GlobalStyles.ViewStyles(theme)['Map Result Top Container']
              .props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Map Result Top Container'].style,
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
              {...GlobalStyles.PressableStyles(theme)['Map Result Back Button']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.PressableStyles(theme)['Map Result Back Button']
                  .style,
                dimensions.width
              )}
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
            {/* Map Search View */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Map Search View'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Map Search View'].style,
                dimensions.width
              )}
            >
              {/* Search Input Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Map Search Input container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Map Search Input container']
                    .style,
                  dimensions.width
                )}
              >
                {/* Pin Icon */}
                <Image
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  resizeMode={'contain'}
                  source={Images.LocationPinSolid}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                      { marginRight: 8 }
                    ),
                    dimensions.width
                  )}
                />
                {/* Search Input */}
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={true}
                  changeTextDelay={500}
                  onChangeText={newSearchInputValue => {
                    const textInputValue = newSearchInputValue;
                    try {
                      setTextInputValue(newSearchInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'Enter a value...'}
                  webShowOutline={true}
                  {...GlobalStyles.TextInputStyles(theme)[
                    'Map Search Input text'
                  ].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextInputStyles(theme)['Map Search Input text']
                      .style,
                    dimensions.width
                  )}
                  value={textInputValue}
                />
                {/* Remove Button */}
                <Pressable>
                  {/* Remove Button Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Button Container 24']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Button Container 24']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Button Icon */}
                    <Icon name={'Ionicons/close'} size={16} />
                  </View>
                </Pressable>
              </View>

              <Pressable>
                {/* Filter Button View */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Filter Button View']
                    .props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Filter Button View']
                        .style,
                      { overflow: 'hidden' }
                    ),
                    dimensions.width
                  )}
                >
                  <Image
                    {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                    resizeMode={'contain'}
                    source={Images.Preferences}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                      dimensions.width
                    )}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        )}
      </>
      {/* Top Container Android */}
      <>
        {!(Platform.OS === 'android') ? null : (
          <View
            {...GlobalStyles.ViewStyles(theme)['Map Result Top Container']
              .props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Map Result Top Container']
                  .style,
                { top: 26 }
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
              {...GlobalStyles.PressableStyles(theme)['Map Result Back Button']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.PressableStyles(theme)['Map Result Back Button']
                  .style,
                dimensions.width
              )}
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
            {/* Map Search View */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Map Search View'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Map Search View'].style,
                dimensions.width
              )}
            >
              {/* Search Input Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Map Search Input container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Map Search Input container']
                    .style,
                  dimensions.width
                )}
              >
                {/* Pin Icon */}
                <Image
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  resizeMode={'contain'}
                  source={Images.LocationPinSolid}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                      { marginRight: 8 }
                    ),
                    dimensions.width
                  )}
                />
                {/* Search Input */}
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={true}
                  changeTextDelay={500}
                  onChangeText={newSearchInputValue => {
                    const textInputValue = newSearchInputValue;
                    try {
                      setTextInputValue(newSearchInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'Enter a value...'}
                  webShowOutline={true}
                  {...GlobalStyles.TextInputStyles(theme)[
                    'Map Search Input text'
                  ].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextInputStyles(theme)['Map Search Input text']
                      .style,
                    dimensions.width
                  )}
                  value={textInputValue}
                />
                {/* Remove Button */}
                <Pressable>
                  {/* Remove Button Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Button Container 24']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Button Container 24']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Button Icon */}
                    <Icon name={'Ionicons/close'} size={16} />
                  </View>
                </Pressable>
              </View>

              <Pressable>
                {/* Filter Button View */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Filter Button View']
                    .props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Filter Button View']
                        .style,
                      { overflow: 'hidden' }
                    ),
                    dimensions.width
                  )}
                >
                  <Image
                    {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                    resizeMode={'contain'}
                    source={Images.Preferences}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                      dimensions.width
                    )}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        )}
      </>
      {/* Top Container Web */}
      <>
        {!(Platform.OS === 'web') ? null : (
          <View
            {...GlobalStyles.ViewStyles(theme)['Map Result Top Container']
              .props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Map Result Top Container']
                  .style,
                { top: 24 }
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
              {...GlobalStyles.PressableStyles(theme)['Map Result Back Button']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.PressableStyles(theme)['Map Result Back Button']
                  .style,
                dimensions.width
              )}
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
            {/* Map Search View */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Map Search View'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Map Search View'].style,
                dimensions.width
              )}
            >
              {/* Search Input Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Map Search Input container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Map Search Input container']
                    .style,
                  dimensions.width
                )}
              >
                {/* Pin Icon */}
                <Image
                  {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                  resizeMode={'contain'}
                  source={Images.LocationPinSolid}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                      { marginRight: 8 }
                    ),
                    dimensions.width
                  )}
                />
                {/* Search Input */}
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={true}
                  changeTextDelay={500}
                  onChangeText={newSearchInputValue => {
                    const textInputValue = newSearchInputValue;
                    try {
                      setTextInputValue(newSearchInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'Enter a value...'}
                  webShowOutline={true}
                  {...GlobalStyles.TextInputStyles(theme)[
                    'Map Search Input text'
                  ].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextInputStyles(theme)['Map Search Input text']
                      .style,
                    dimensions.width
                  )}
                  value={textInputValue}
                />
                {/* Remove Button */}
                <Pressable>
                  {/* Remove Button Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Button Container 24']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Button Container 24']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Button Icon */}
                    <Icon name={'Ionicons/close'} size={16} />
                  </View>
                </Pressable>
              </View>

              <Pressable>
                {/* Filter Button View */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Filter Button View']
                    .props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Filter Button View']
                        .style,
                      { overflow: 'hidden' }
                    ),
                    dimensions.width
                  )}
                >
                  <Image
                    {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                    resizeMode={'contain'}
                    source={Images.Preferences}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                      dimensions.width
                    )}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        )}
      </>
      {/* Location Result Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Location Result Container'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Location Result Container'].style,
          dimensions.width
        )}
      >
        {/* Item Fetch */}
        <InterimAPIApi.FetchSinglePropertyGET id={1}>
          {({ loading, error, data, refetchSingleProperty }) => {
            const itemFetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <Shadow
                offsetX={0}
                offsetY={0}
                showShadowCornerBottomEnd={true}
                showShadowCornerBottomStart={true}
                showShadowCornerTopEnd={true}
                showShadowCornerTopStart={true}
                showShadowSideBottom={true}
                showShadowSideEnd={true}
                showShadowSideStart={true}
                showShadowSideTop={true}
                {...GlobalStyles.ShadowStyles(theme)['Result Shadow'].props}
                distance={16}
                paintInside={false}
                startColor={theme.colors['hs_shadow']}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ShadowStyles(theme)['Result Shadow'].style,
                  dimensions.width
                )}
              >
                {/* Result View */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Result View'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Result View'].style,
                    dimensions.width
                  )}
                >
                  {/* Result Item Button */}
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
                  >
                    {/* Result Item */}
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
                        {...GlobalStyles.ImageStyles(theme)['Viewed image']
                          .props}
                        source={{ uri: `${itemFetchData?.image}` }}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Viewed image']
                              .style,
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
                              { alignItems: 'flex-start', marginBottom: 8 }
                            ),
                            dimensions.width
                          )}
                        >
                          {/* Title Section */}
                          <View>
                            {/* Location Text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Body 10']
                                .props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Body 10']
                                    .style,
                                  {
                                    color: theme.colors['hs_grey_second'],
                                    marginBottom: 8,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {itemFetchData?.location}
                            </Text>
                            {/* Title Text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Title 5']
                                .props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Title 5']
                                    .style,
                                  { color: theme.colors['hs_grey_main'] }
                                ),
                                dimensions.width
                              )}
                            >
                              {itemFetchData?.name}
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
                                name={'MaterialCommunityIcons/dots-vertical'}
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
                            {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Body 7'].style,
                                { color: theme.colors['hs_grey_main'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'$'}
                            {itemFetchData?.price}
                            {/* Price Text 2 */}
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
                              {'/Year'}
                            </Text>
                          </Text>
                          {/* Ratings View */}
                          <View
                            {...GlobalStyles.ViewStyles(theme)['Ratings View']
                              .props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ViewStyles(theme)['Ratings View']
                                  .style,
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
                              {...GlobalStyles.TextStyles(theme)['Body 8']
                                .props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Body 8']
                                    .style,
                                  {
                                    color: theme.colors['hs_orange'],
                                    lineHeight: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {itemFetchData?.rating}
                              {/* Ratings Text 2 */}
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Body 8']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Body 8']
                                      .style,
                                    { color: theme.colors['hs_grey_second'] }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {' 52'}
                              </Text>
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                  {/* Result Options */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        flexDirection: 'row',
                        height: 48,
                        justifyContent: 'space-between',
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Document Option Button */}
                    <Pressable
                      onPress={() => {
                        try {
                          if (documentSelect) {
                            setDocumentSelect(false);
                          } else {
                            setDocumentSelect(true);
                          }
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      {/* Option Item Active */}
                      <>
                        {!documentSelect ? null : (
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Result Option View'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Result Option View'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Option Icon */}
                            <Image
                              {...GlobalStyles.ImageStyles(theme)[
                                'Icon 20 x 20'
                              ].props}
                              resizeMode={'contain'}
                              source={Images.DocumentSolid}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                                  .style,
                                dimensions.width
                              )}
                            />
                          </View>
                        )}
                      </>
                      {/* Option Item Inactive */}
                      <>
                        {!!documentSelect ? null : (
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Result Option View Inactive'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Result Option View Inactive'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Option Icon */}
                            <Image
                              {...GlobalStyles.ImageStyles(theme)[
                                'Icon 20 x 20'
                              ].props}
                              resizeMode={'contain'}
                              source={Images.DocumentLine}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                                  .style,
                                dimensions.width
                              )}
                            />
                          </View>
                        )}
                      </>
                    </Pressable>
                    {/* Bookmark Option Button */}
                    <Pressable
                      onPress={() => {
                        try {
                          if (bookmarkSelect) {
                            setBookmarkSelect(false);
                          } else {
                            setBookmarkSelect(true);
                          }
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      {/* Option Item Active */}
                      <>
                        {!bookmarkSelect ? null : (
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Result Option View'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Result Option View'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Option Icon */}
                            <Image
                              {...GlobalStyles.ImageStyles(theme)[
                                'Icon 20 x 20'
                              ].props}
                              resizeMode={'contain'}
                              source={Images.Bookmark}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                                  .style,
                                dimensions.width
                              )}
                            />
                          </View>
                        )}
                      </>
                      {/* Option Item Inactive */}
                      <>
                        {!!bookmarkSelect ? null : (
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Result Option View Inactive'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Result Option View Inactive'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Option Icon */}
                            <Image
                              {...GlobalStyles.ImageStyles(theme)[
                                'Icon 20 x 20'
                              ].props}
                              resizeMode={'contain'}
                              source={Images.BookmarkLine}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                                  .style,
                                dimensions.width
                              )}
                            />
                          </View>
                        )}
                      </>
                    </Pressable>
                    {/* Like Option Button */}
                    <Pressable>
                      {/* Option Item */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)[
                          'Result Option View Inactive'
                        ].props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)[
                            'Result Option View Inactive'
                          ].style,
                          dimensions.width
                        )}
                      >
                        {/* Icon Active */}
                        <>
                          {!itemFetchData?.liked ? null : (
                            <Image
                              {...GlobalStyles.ImageStyles(theme)[
                                'Icon 20 x 20'
                              ].props}
                              resizeMode={'contain'}
                              source={Images.HearSolid}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                                  .style,
                                dimensions.width
                              )}
                            />
                          )}
                        </>
                        {/* Icon inactive */}
                        <>
                          {!!itemFetchData?.liked ? null : (
                            <Image
                              {...GlobalStyles.ImageStyles(theme)[
                                'Icon 20 x 20'
                              ].props}
                              resizeMode={'contain'}
                              source={Images.HeartLineBlue}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                                  .style,
                                dimensions.width
                              )}
                            />
                          )}
                        </>
                      </View>
                    </Pressable>
                    {/* Call Option Button */}
                    <Pressable
                      onPress={() => {
                        try {
                          if (phoneSelect) {
                            setPhoneSelect(false);
                          } else {
                            setPhoneSelect(true);
                          }
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      {/* Option Item Active */}
                      <>
                        {!phoneSelect ? null : (
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Result Option View'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Result Option View'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Option Icon */}
                            <Image
                              {...GlobalStyles.ImageStyles(theme)[
                                'Icon 20 x 20'
                              ].props}
                              resizeMode={'contain'}
                              source={Images.PhoneSolid}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                                  .style,
                                dimensions.width
                              )}
                            />
                          </View>
                        )}
                      </>
                      {/* Option Item Inactive */}
                      <>
                        {!!phoneSelect ? null : (
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Result Option View Inactive'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Result Option View Inactive'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Option Icon */}
                            <Image
                              {...GlobalStyles.ImageStyles(theme)[
                                'Icon 20 x 20'
                              ].props}
                              resizeMode={'contain'}
                              source={Images.PhoneLine}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                                  .style,
                                dimensions.width
                              )}
                            />
                          </View>
                        )}
                      </>
                    </Pressable>
                  </View>
                </View>
              </Shadow>
            );
          }}
        </InterimAPIApi.FetchSinglePropertyGET>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MapResultScreen);
