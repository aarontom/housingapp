import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as InterimAPIApi from '../apis/InterimAPIApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { MapView } from '@draftbit/maps';
import {
  Checkbox,
  Icon,
  Link,
  Pressable,
  ScreenContainer,
  Shadow,
  Spacer,
  Swiper,
  SwiperItem,
  TabView,
  TabViewItem,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const PropertyDetailScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [checkboxValue2, setCheckboxValue2] = React.useState(false);
  const [isVideo, setIsVideo] = React.useState(false);
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [propertyHeart, setPropertyHeart] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      {...GlobalStyles.ScreenContainerStyles(theme)['Screen No Padding'].props}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.ScreenContainerStyles(theme)['Screen No Padding'].style,
          { backgroundColor: theme.colors['hs_white'] }
        ),
        dimensions.width
      )}
    >
      {/* Property Fetch */}
      <InterimAPIApi.FetchPropertiesGET>
        {({ loading, error, data, refetchProperties }) => {
          const propertyFetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <>
              {/* Details Scrollview */}
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
                  GlobalStyles.ScrollViewStyles(theme)['Detail Scroll'].style,
                  dimensions.width
                )}
              >
                {/* Top Image Container */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Top Image Container']
                    .props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Top Image Container'].style,
                    dimensions.width
                  )}
                >
                  {/* Image Swiper */}
                  <Swiper
                    data={propertyFetchData}
                    dotsTouchable={true}
                    keyExtractor={(imageSwiperData, index) =>
                      imageSwiperData?.id ??
                      imageSwiperData?.uuid ??
                      index.toString()
                    }
                    listKey={'ahdDJOET'}
                    loop={false}
                    minDistanceForAction={0.2}
                    minDistanceToCapture={5}
                    renderItem={({ item, index }) => {
                      const imageSwiperData = item;
                      return (
                        <SwiperItem
                          {...GlobalStyles.SwiperItemStyles(theme)[
                            'Property Swiper Item'
                          ].props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.SwiperItemStyles(theme)[
                              'Property Swiper Item'
                            ].style,
                            dimensions.width
                          )}
                        >
                          {/* Property Image */}
                          <Image
                            resizeMode={'cover'}
                            {...GlobalStyles.ImageStyles(theme)[
                              'Property Image'
                            ].props}
                            source={{
                              uri: 'https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
                            }}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ImageStyles(theme)['Property Image']
                                .style,
                              dimensions.width
                            )}
                          />
                        </SwiperItem>
                      );
                    }}
                    timeout={0}
                    vertical={false}
                    {...GlobalStyles.SwiperStyles(theme)['Property Swiper']
                      .props}
                    dotActiveColor={theme.colors['hs_blue_fourth']}
                    dotColor={theme.colors['hs_blue_main']}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.SwiperStyles(theme)['Property Swiper'].style,
                      dimensions.width
                    )}
                  />
                  {/* Image Top Buttons iOS */}
                  <>
                    {!(Platform.OS === 'ios') ? null : (
                      <View
                        {...GlobalStyles.ViewStyles(theme)['Image Top Section']
                          .props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ViewStyles(theme)['Image Top Section']
                              .style,
                            { top: 46 }
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
                            {...GlobalStyles.ViewStyles(theme)[
                              'Back Button Circle'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Back Button Circle'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Back Arrow */}
                            <Image
                              {...GlobalStyles.ImageStyles(theme)['Arrow Back']
                                .props}
                              resizeMode={'contain'}
                              source={Images.ArrowLeft}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['Arrow Back']
                                    .style,
                                  { height: 16, width: 16 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </Pressable>
                        {/* Heart Button Circle */}
                        <View
                          {...GlobalStyles.ViewStyles(theme)[
                            'Back Button Circle'
                          ].props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ViewStyles(theme)['Back Button Circle']
                              .style,
                            dimensions.width
                          )}
                        >
                          {/* Heart Line Button */}
                          <>
                            {!!propertyHeart ? null : (
                              <Pressable
                                onPress={() => {
                                  try {
                                    setPropertyHeart(true);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* Heart Line Icon */}
                                <>
                                  {!!(propertyFetchData && propertyFetchData[0])
                                    ?.liked ? null : (
                                    <Image
                                      {...GlobalStyles.ImageStyles(theme)[
                                        'Icon 16 x 16'
                                      ].props}
                                      resizeMode={'contain'}
                                      source={Images.HeartLineBlue}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Icon 16 x 16'
                                          ].style,
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
                                  )}
                                </>
                                {/* Heart Fill Icon */}
                                <>
                                  {!(propertyFetchData && propertyFetchData[0])
                                    ?.liked ? null : (
                                    <Image
                                      {...GlobalStyles.ImageStyles(theme)[
                                        'Icon 20 x 20'
                                      ].props}
                                      resizeMode={'contain'}
                                      source={Images.HearSolid}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Icon 20 x 20'
                                          ].style,
                                          {
                                            marginBottom: 6,
                                            marginLeft: 6,
                                            marginRight: 6,
                                            marginTop: 6,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    />
                                  )}
                                </>
                              </Pressable>
                            )}
                          </>
                        </View>
                      </View>
                    )}
                  </>
                  {/* Image Top Buttons Android */}
                  <>
                    {!(Platform.OS === 'android') ? null : (
                      <View
                        {...GlobalStyles.ViewStyles(theme)['Image Top Section']
                          .props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ViewStyles(theme)['Image Top Section']
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
                        >
                          {/* Back Button Circle */}
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Back Button Circle'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Back Button Circle'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Back Arrow */}
                            <Image
                              {...GlobalStyles.ImageStyles(theme)['Arrow Back']
                                .props}
                              resizeMode={'contain'}
                              source={Images.ArrowLeft}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['Arrow Back']
                                    .style,
                                  { height: 16, width: 16 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </Pressable>
                        {/* Heart Button Circle */}
                        <View
                          {...GlobalStyles.ViewStyles(theme)[
                            'Back Button Circle'
                          ].props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ViewStyles(theme)['Back Button Circle']
                              .style,
                            dimensions.width
                          )}
                        >
                          {/* Heart Line Button */}
                          <>
                            {!!propertyHeart ? null : (
                              <Pressable
                                onPress={() => {
                                  try {
                                    setPropertyHeart(true);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* Heart Line Icon */}
                                <>
                                  {!!(propertyFetchData && propertyFetchData[0])
                                    ?.liked ? null : (
                                    <Image
                                      {...GlobalStyles.ImageStyles(theme)[
                                        'Icon 16 x 16'
                                      ].props}
                                      resizeMode={'contain'}
                                      source={Images.HeartLineBlue}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Icon 16 x 16'
                                          ].style,
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
                                  )}
                                </>
                                {/* Heart Fill Icon */}
                                <>
                                  {!(propertyFetchData && propertyFetchData[0])
                                    ?.liked ? null : (
                                    <Image
                                      {...GlobalStyles.ImageStyles(theme)[
                                        'Icon 20 x 20'
                                      ].props}
                                      resizeMode={'contain'}
                                      source={Images.HearSolid}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Icon 20 x 20'
                                          ].style,
                                          {
                                            marginBottom: 6,
                                            marginLeft: 6,
                                            marginRight: 6,
                                            marginTop: 6,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    />
                                  )}
                                </>
                              </Pressable>
                            )}
                          </>
                        </View>
                      </View>
                    )}
                  </>
                  {/* Image Top Buttons Web */}
                  <>
                    {!(Platform.OS === 'web') ? null : (
                      <View
                        {...GlobalStyles.ViewStyles(theme)['Image Top Section']
                          .props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ViewStyles(theme)['Image Top Section']
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
                        >
                          {/* Back Button Circle */}
                          <View
                            {...GlobalStyles.ViewStyles(theme)[
                              'Back Button Circle'
                            ].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ViewStyles(theme)[
                                'Back Button Circle'
                              ].style,
                              dimensions.width
                            )}
                          >
                            {/* Back Arrow */}
                            <Image
                              {...GlobalStyles.ImageStyles(theme)['Arrow Back']
                                .props}
                              resizeMode={'contain'}
                              source={Images.ArrowLeft}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['Arrow Back']
                                    .style,
                                  { height: 16, width: 16 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </Pressable>
                        {/* Heart Button Circle */}
                        <View
                          {...GlobalStyles.ViewStyles(theme)[
                            'Back Button Circle'
                          ].props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ViewStyles(theme)['Back Button Circle']
                              .style,
                            dimensions.width
                          )}
                        >
                          {/* Heart Line Button */}
                          <>
                            {!!propertyHeart ? null : (
                              <Pressable>
                                {/* Heart Line Icon */}
                                <>
                                  {!!(propertyFetchData && propertyFetchData[0])
                                    ?.liked ? null : (
                                    <Image
                                      {...GlobalStyles.ImageStyles(theme)[
                                        'Icon 16 x 16'
                                      ].props}
                                      resizeMode={'contain'}
                                      source={Images.HeartLineBlue}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Icon 16 x 16'
                                          ].style,
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
                                  )}
                                </>
                                {/* Heart Fill Icon */}
                                <>
                                  {!(propertyFetchData && propertyFetchData[0])
                                    ?.liked ? null : (
                                    <Image
                                      {...GlobalStyles.ImageStyles(theme)[
                                        'Icon 20 x 20'
                                      ].props}
                                      resizeMode={'contain'}
                                      source={Images.HearSolid}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Icon 20 x 20'
                                          ].style,
                                          {
                                            marginBottom: 6,
                                            marginLeft: 6,
                                            marginRight: 6,
                                            marginTop: 6,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    />
                                  )}
                                </>
                              </Pressable>
                            )}
                          </>
                        </View>
                      </View>
                    )}
                  </>
                  {/* Camera Flip Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)[
                      'Camera Switch Container'
                    ].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Camera Switch Container']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Flip Button Background */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)[
                        'Flip Button Background'
                      ].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ViewStyles(theme)[
                            'Flip Button Background'
                          ].style,
                          {
                            alignItems: 'center',
                            backgroundColor: theme.colors['hs_blue_second'],
                            height: '100%',
                            justifyContent: 'center',
                            opacity: 0.8,
                            position: 'absolute',
                            width: '100%',
                          }
                        ),
                        dimensions.width
                      )}
                    />
                    {/* Camera Flip Pressable */}
                    <Pressable>
                      {/* Camera Flip Icon */}
                      <Image
                        {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                          .props}
                        resizeMode={'contain'}
                        source={Images.CameraFlip}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                          dimensions.width
                        )}
                      />
                    </Pressable>
                  </View>
                </View>
                {/* Property Title Section */}
                <View>
                  {/* Property Detail Title */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Property Title Section']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Property Title Section']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Title Left Side */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)[
                        'Title Section Left Side'
                      ].props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)[
                          'Title Section Left Side'
                        ].style,
                        dimensions.width
                      )}
                    >
                      {/* Title Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Title 3'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Title 3'].style,
                            {
                              color: theme.colors['hs_grey_main'],
                              marginBottom: 8,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Rosewood Retreat'}
                      </Text>
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
                            {...GlobalStyles.ImageStyles(theme)['Pin IMage']
                              .props}
                            resizeMode={'contain'}
                            source={Images.LocationPinSolid}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ImageStyles(theme)['Pin IMage']
                                .style,
                              dimensions.width
                            )}
                          />
                          {/* Location Text */}
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Body 10'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Body 10'].style,
                                { color: theme.colors['hs_grey_second'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Reykjavik, Iceland'}
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                    {/* Title Right Side */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)[
                        'Title Sectio Right Side'
                      ].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ViewStyles(theme)[
                            'Title Sectio Right Side'
                          ].style,
                          { alignItems: 'flex-end', justifyContent: 'center' }
                        ),
                        dimensions.width
                      )}
                    >
                      {/* Price Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 1'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 1'].style,
                            {
                              color: theme.colors['hs_blue_main'],
                              marginBottom: 8,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'$1,900'}
                      </Text>
                      {/* Price Sub Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 9'].style,
                            { color: theme.colors['hs_grey_second'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Per Month'}
                      </Text>
                    </View>
                  </View>
                  {/* Property Detail Icons */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Property Icons Section']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Property Icons Section']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Icon Item 1 Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Icon Item Container']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Icon Item Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Icon Circle */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['icon Circle'].props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['icon Circle'].style,
                          dimensions.width
                        )}
                      >
                        {/* Item Icon */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Icon 16 x 16']
                            .props}
                          resizeMode={'contain'}
                          source={Images.Bed}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 16 x 16']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Item Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 8'].style,
                            { color: theme.colors['hs_grey_main'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'8 Beds'}
                      </Text>
                    </View>
                    <Spacer bottom={8} left={8} right={8} top={8} />
                    {/* Icon Item 2 Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Icon Item Container']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Icon Item Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Icon Circle */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['icon Circle'].props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['icon Circle'].style,
                          dimensions.width
                        )}
                      >
                        {/* Item Icon */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Icon 16 x 16']
                            .props}
                          resizeMode={'contain'}
                          source={Images.Bath}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 16 x 16']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Item Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 8'].style,
                            { color: theme.colors['hs_grey_main'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'3 Bath'}
                      </Text>
                    </View>
                    <Spacer bottom={8} left={8} right={8} top={8} />
                    {/* Icon Item 3 Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Icon Item Container']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Icon Item Container']
                          .style,
                        dimensions.width
                      )}
                    >
                      {/* Icon Circle */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['icon Circle'].props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['icon Circle'].style,
                          dimensions.width
                        )}
                      >
                        {/* Item Icon */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Icon 16 x 16']
                            .props}
                          resizeMode={'contain'}
                          source={Images.Fullscreen}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 16 x 16']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Item Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 8'].style,
                            { color: theme.colors['hs_grey_main'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'2000 sqft'}
                      </Text>
                    </View>
                  </View>
                  {/* Property Detail Info */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Property Detail Info']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Property Detail Info']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Detail Title Text */}
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
                      {'Overview'}
                    </Text>
                    {/* Detail Paragraph Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 7'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 7'].style,
                          {
                            color: theme.colors['hs_grey_second'],
                            lineHeight: 22,
                            marginBottom: 12,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {
                        'This house is minimalistic and easy to upkeep. Previous owner, Mark Walkingberd is keeping this house alive. Learn More'
                      }
                    </Text>
                    {/* See More Button */}
                    <Pressable>
                      {/* See More Button Container */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)[
                          'See More Button Container'
                        ].props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)[
                            'See More Button Container'
                          ].style,
                          dimensions.width
                        )}
                      >
                        {/* See More Text */}
                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Body 6'].style,
                              {
                                color: theme.colors['hs_blue_main'],
                                marginRight: 8,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'See More'}
                        </Text>
                        {/* Arrow Right */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Arrow Right 2']
                            .props}
                          resizeMode={'contain'}
                          source={Images.ArrowRight3}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Arrow Right 2']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                    </Pressable>
                  </View>
                </View>
                {/* Property Gallery Section */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Detail Section'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Detail Section'].style,
                    dimensions.width
                  )}
                >
                  {/* Gallery Title Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Detail Section Title']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Detail Section Title']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Gallery Title */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 4'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 4'].style,
                          { color: theme.colors['hs_grey_main'] }
                        ),
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
                  {/* Gallery List */}
                  <FlatList
                    data={propertyFetchData}
                    inverted={false}
                    keyExtractor={(galleryListData, index) =>
                      galleryListData?.id ??
                      galleryListData?.uuid ??
                      index.toString()
                    }
                    keyboardShouldPersistTaps={'never'}
                    listKey={'vvkPKaxa'}
                    nestedScrollEnabled={false}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const galleryListData = item;
                      return (
                        <>
                          {/* Gallery Item */}
                          <>
                            {!(galleryListData?.id < 4) ? null : (
                              <View
                                {...GlobalStyles.ViewStyles(theme)[
                                  'Gallery Item'
                                ].props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ViewStyles(theme)[
                                      'Gallery Item'
                                    ].style,
                                    { marginRight: 12 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {/* Item Image */}
                                <Image
                                  resizeMode={'cover'}
                                  {...GlobalStyles.ImageStyles(theme)[
                                    'Gallery Image'
                                  ].props}
                                  source={{
                                    uri: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=370&q=80',
                                  }}
                                  style={StyleSheet.applyWidth(
                                    GlobalStyles.ImageStyles(theme)[
                                      'Gallery Image'
                                    ].style,
                                    dimensions.width
                                  )}
                                />
                                {/* Overlay Container */}
                                <>
                                  {!isVideo ? null : (
                                    <View
                                      {...GlobalStyles.ViewStyles(theme)[
                                        'Gallery Item Overlay'
                                      ].props}
                                      style={StyleSheet.applyWidth(
                                        GlobalStyles.ViewStyles(theme)[
                                          'Gallery Item Overlay'
                                        ].style,
                                        dimensions.width
                                      )}
                                    >
                                      {/* Video Icon */}
                                      <Icon
                                        size={24}
                                        color={theme.colors['hs_white']}
                                        name={'FontAwesome/play-circle'}
                                      />
                                    </View>
                                  )}
                                </>
                                {/* More Container */}
                                <>
                                  {!(galleryListData?.id === 3) ? null : (
                                    <View
                                      {...GlobalStyles.ViewStyles(theme)[
                                        'Gallery Item Overlay'
                                      ].props}
                                      style={StyleSheet.applyWidth(
                                        GlobalStyles.ViewStyles(theme)[
                                          'Gallery Item Overlay'
                                        ].style,
                                        dimensions.width
                                      )}
                                    >
                                      {/* More Number */}
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
                                            { color: theme.colors['hs_white'] }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {'+'}
                                        {propertyFetchData?.length - 1 - 1 - 1}
                                      </Text>
                                    </View>
                                  )}
                                </>
                              </View>
                            )}
                          </>
                        </>
                      );
                    }}
                    horizontal={true}
                    initialNumToRender={2}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
                {/* Map Section */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Detail Section'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Detail Section'].style,
                    dimensions.width
                  )}
                >
                  {/* Section Title */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Detail Section Title']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Detail Section Title']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Section Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 4'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 4'].style,
                          { color: theme.colors['hs_grey_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Maps'}
                    </Text>
                  </View>
                  {/* Map Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Map Container'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Map Container'].style,
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
                      {...GlobalStyles.MapViewStyles(theme)['Map View'].props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.MapViewStyles(theme)['Map View'].style,
                        dimensions.width
                      )}
                    />
                  </View>
                </View>
                {/* Ratings Section */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Detail Section'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Detail Section'].style,
                    dimensions.width
                  )}
                >
                  {/* Section Title */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Detail Section Title']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Detail Section Title']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Ratings Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 4'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 4'].style,
                          { color: theme.colors['hs_grey_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Ratings'}
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
                  {/* Ratings View */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Ratings View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Ratings View'].style,
                        { alignItems: 'center', justifyContent: 'flex-start' }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Star Icon */}
                    <Image
                      resizeMode={'cover'}
                      {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].props}
                      source={Images.Star}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Icon 20 x 20'].style,
                          { marginRight: 12 }
                        ),
                        dimensions.width
                      )}
                    />
                    {/* Ratings Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 5'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 5'].style,
                          { color: theme.colors['hs_grey_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'4.8 (1,275 reviews)'}
                    </Text>
                  </View>
                </View>
                {/* Facilities Section */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Detail Section'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Detail Section'].style,
                    dimensions.width
                  )}
                >
                  {/* Section Title */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Detail Section Title']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Detail Section Title']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Facilities Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 4'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 4'].style,
                          { color: theme.colors['hs_grey_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Facilities'}
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
                  {/* Facilities Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Facilities Container']
                      .props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Facilities Container']
                          .style,
                        { overflow: 'hidden' }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Parking Item */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Facilities Item']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Facilities Item'].style,
                        dimensions.width
                      )}
                    >
                      {/* Icon Circle */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Item Icon */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                            .props}
                          resizeMode={'contain'}
                          source={Images.Parking}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Item Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 8'].style,
                            {
                              color: theme.colors['hs_grey_main'],
                              textAlign: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Car Parking'}
                      </Text>
                    </View>
                    {/* Pool Item */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Facilities Item']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Facilities Item'].style,
                        dimensions.width
                      )}
                    >
                      {/* Icon Circle */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Item Icon */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                            .props}
                          resizeMode={'contain'}
                          source={Images.Swimming}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Item Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 8'].style,
                            {
                              color: theme.colors['hs_grey_main'],
                              textAlign: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Pool'}
                      </Text>
                    </View>
                    {/* Gym Item */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Facilities Item']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Facilities Item'].style,
                        dimensions.width
                      )}
                    >
                      {/* Icon Circle */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Item Icon */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                            .props}
                          resizeMode={'contain'}
                          source={Images.Gym}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Item Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 8'].style,
                            {
                              color: theme.colors['hs_grey_main'],
                              textAlign: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Gym'}
                      </Text>
                    </View>
                    {/* Restaurant Item */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Facilities Item']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Facilities Item'].style,
                        dimensions.width
                      )}
                    >
                      {/* Icon Circle */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Item Icon */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                            .props}
                          resizeMode={'contain'}
                          source={Images.Dinner}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Item Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 8'].style,
                            {
                              color: theme.colors['hs_grey_main'],
                              textAlign: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Restaurant'}
                      </Text>
                    </View>
                    {/* Wi-fi Item */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Facilities Item']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Facilities Item'].style,
                        dimensions.width
                      )}
                    >
                      {/* Icon Circle */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Item Icon */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                            .props}
                          resizeMode={'contain'}
                          source={Images.Wifi}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Item Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 8'].style,
                            {
                              color: theme.colors['hs_grey_main'],
                              textAlign: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Wi-Fi'}
                      </Text>
                    </View>
                    {/* Pets Center Item */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Facilities Item']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Facilities Item'].style,
                        dimensions.width
                      )}
                    >
                      {/* Icon Circle */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Item Icon */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                            .props}
                          resizeMode={'contain'}
                          source={Images.Pet}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Item Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 8'].style,
                            {
                              color: theme.colors['hs_grey_main'],
                              textAlign: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Pet Center'}
                      </Text>
                    </View>
                    {/* Sport Center Item */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Facilities Item']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Facilities Item'].style,
                        dimensions.width
                      )}
                    >
                      {/* Icon Circle */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Item Icon */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                            .props}
                          resizeMode={'contain'}
                          source={Images.Sport}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Item Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 8'].style,
                            {
                              color: theme.colors['hs_grey_main'],
                              textAlign: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Sport Center'}
                      </Text>
                    </View>
                    {/* Laundry Item */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Facilities Item']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ViewStyles(theme)['Facilities Item'].style,
                        dimensions.width
                      )}
                    >
                      {/* Icon Circle */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['FAcilities Icon']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Item Icon */}
                        <Image
                          {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                            .props}
                          resizeMode={'contain'}
                          source={Images.Laundry}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ImageStyles(theme)['Icon 24 x 24']
                              .style,
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Item Text */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Body 8'].style,
                            {
                              color: theme.colors['hs_grey_main'],
                              textAlign: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Laundry'}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* Contact Section */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Detail Section'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Detail Section'].style,
                    dimensions.width
                  )}
                >
                  {/* Section Title */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Detail Section Title']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Detail Section Title']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Contact Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 4'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 4'].style,
                          { color: theme.colors['hs_grey_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Contact'}
                    </Text>
                  </View>
                  {/* Contact Card */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Contact Card View']
                      .props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Contact Card View']
                          .style,
                        { justifyContent: 'space-between' }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Profile Container */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      {/* Profile Image */}
                      <Image
                        resizeMode={'cover'}
                        {...GlobalStyles.ImageStyles(theme)['Profile Image']
                          .props}
                        source={Images.WarrenVVEwJJRRHgkUnsplash}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Profile Image']
                              .style,
                            {
                              borderRadius: 24,
                              height: 48,
                              marginRight: 16,
                              width: 48,
                            }
                          ),
                          dimensions.width
                        )}
                      />
                      {/* Profile Text */}
                      <View>
                        {/* Name Text */}
                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Title 7'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Title 7'].style,
                              {
                                color: theme.colors['hs_grey_main'],
                                marginBottom: 8,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Jackson "Jack" Reynolds'}
                        </Text>
                        {/* Profession Text */}
                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Body 6'].style,
                              { color: theme.colors['hs_grey_second'] }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Exclusive Property Consultant'}
                        </Text>
                      </View>
                    </View>
                    {/* Buttons Container */}
                    <View
                      {...GlobalStyles.ViewStyles(theme)['Buttons Container']
                        .props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ViewStyles(theme)['Buttons Container']
                            .style,
                          { height: 100 }
                        ),
                        dimensions.width
                      )}
                    >
                      {/* Message Button View */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)[
                          'Contact Button View'
                        ].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ViewStyles(theme)[
                              'Contact Button View'
                            ].style,
                            { alignItems: 'center', justifyContent: 'center' }
                          ),
                          dimensions.width
                        )}
                      >
                        {/* Button Icon */}
                        <Image
                          resizeMode={'cover'}
                          {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                            .props}
                          source={Images.Message}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                                .style,
                              { marginRight: 12 }
                            ),
                            dimensions.width
                          )}
                        />
                        {/* Button Text */}
                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Body 6'].style,
                              { color: theme.colors['hs_grey_second'] }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Message'}
                        </Text>
                      </View>
                      {/* Phone Button View */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)[
                          'Contact Button View'
                        ].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ViewStyles(theme)[
                              'Contact Button View'
                            ].style,
                            { alignItems: 'center', justifyContent: 'center' }
                          ),
                          dimensions.width
                        )}
                      >
                        {/* Button Icon */}
                        <Image
                          resizeMode={'cover'}
                          {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                            .props}
                          source={Images.Calling}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                                .style,
                              { marginRight: 12 }
                            ),
                            dimensions.width
                          )}
                        />
                        {/* Button Text */}
                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Body 6'].style,
                              { color: theme.colors['hs_grey_second'] }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Phone'}
                        </Text>
                      </View>
                      {/* Question Button View */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)[
                          'Question Button View'
                        ].props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['Question Button View']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Button Icon */}
                        <Image
                          resizeMode={'cover'}
                          {...GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                            .props}
                          source={Images.MessageQuestion}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ImageStyles(theme)['Icon 20 x 20']
                                .style,
                              { marginRight: 12 }
                            ),
                            dimensions.width
                          )}
                        />
                        {/* Button Text */}
                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Body 6'].style,
                              { color: theme.colors['hs_grey_second'] }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Ask a question'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* Sales Section */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Detail Section'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Detail Section'].style,
                    dimensions.width
                  )}
                >
                  {/* Section Title */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Detail Section Title']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Detail Section Title']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Sales Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 4'].props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TextStyles(theme)['Title 4'].style,
                        dimensions.width
                      )}
                    >
                      {'Sales & Tax History'}
                    </Text>
                  </View>

                  <TabView
                    activeColor={theme.colors.primary}
                    initialTabIndex={0}
                    keyboardDismissMode={'auto'}
                    pressColor={theme.colors.primary}
                    scrollEnabled={false}
                    swipeEnabled={true}
                    tabBarPosition={'top'}
                    tabsBackgroundColor={theme.colors.background}
                    {...GlobalStyles.TabViewStyles(theme)['Tab View'].props}
                    inactiveColor={theme.colors['hs_grey_third']}
                    indicatorColor={theme.colors['hs_blue_main']}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.TabViewStyles(theme)['Tab View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Sales Tab */}
                    <TabViewItem
                      {...GlobalStyles.TabViewItemStyles(theme)['Tab View Item']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TabViewItemStyles(theme)['Tab View Item']
                          .style,
                        dimensions.width
                      )}
                      title={'Sale History'}
                    >
                      {/* Notification View */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['Notification View']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['Notification View']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Notification Checkbox */}
                        <Checkbox
                          {...GlobalStyles.CheckboxStyles(theme)['Checkbox 2']
                            .props}
                          checkedIcon={'Ionicons/checkbox'}
                          color={theme.colors['hs_blue_main']}
                          size={20}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.CheckboxStyles(theme)['Checkbox 2']
                              .style,
                            dimensions.width
                          )}
                          uncheckedColor={theme.colors['hs_blue_second']}
                          uncheckedIcon={'FontAwesome/square'}
                        />
                        {/* Notification Text */}
                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Body 6'].style,
                              { color: theme.colors['hs_grey_main'] }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Notify me when the price changes'}
                        </Text>
                      </View>
                      {/* Sales List */}
                      <FlatList
                        data={propertyFetchData}
                        horizontal={false}
                        inverted={false}
                        keyExtractor={(salesListData, index) =>
                          salesListData?.id ??
                          salesListData?.uuid ??
                          index.toString()
                        }
                        keyboardShouldPersistTaps={'never'}
                        listKey={'pS3zESWl'}
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, index }) => {
                          const salesListData = item;
                          return (
                            <>
                              {/* Sales Item */}
                              <View
                                {...GlobalStyles.ViewStyles(theme)[
                                  'Sales Item View'
                                ].props}
                                style={StyleSheet.applyWidth(
                                  GlobalStyles.ViewStyles(theme)[
                                    'Sales Item View'
                                  ].style,
                                  dimensions.width
                                )}
                              >
                                {/* Item Date */}
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 6']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Body 6']
                                        .style,
                                      {
                                        color: theme.colors['hs_grey_second'],
                                        marginBottom: 8,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'12/28/2021\n'}
                                </Text>
                                {/* Item Details */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      marginBottom: 8,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Detail Title */}
                                  <Text
                                    accessible={true}
                                    {...GlobalStyles.TextStyles(theme)['Body 3']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextStyles(theme)['Body 3']
                                        .style,
                                      dimensions.width
                                    )}
                                  >
                                    {'Listed for Sale'}
                                  </Text>
                                  {/* Detail Price */}
                                  <Text
                                    accessible={true}
                                    {...GlobalStyles.TextStyles(theme)['Body 3']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Body 3']
                                          .style,
                                        { color: theme.colors['hs_red'] }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {'$2,400'}
                                  </Text>
                                </View>
                                {/* Item Company */}
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 6']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Body 6']
                                        .style,
                                      { color: theme.colors['hs_blue_main'] }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'Realix'}
                                </Text>
                              </View>
                            </>
                          );
                        }}
                        showsHorizontalScrollIndicator={true}
                        showsVerticalScrollIndicator={true}
                      />
                    </TabViewItem>
                    {/* Taxes Tab */}
                    <TabViewItem
                      {...GlobalStyles.TabViewItemStyles(theme)['Tab View Item']
                        .props}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TabViewItemStyles(theme)['Tab View Item']
                          .style,
                        dimensions.width
                      )}
                      title={'Tax History'}
                    >
                      {/* Notification View */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['Notification View']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['Notification View']
                            .style,
                          dimensions.width
                        )}
                      >
                        {/* Notification Checkbox */}
                        <Checkbox
                          {...GlobalStyles.CheckboxStyles(theme)['Checkbox 2']
                            .props}
                          checkedIcon={'Ionicons/checkbox'}
                          color={theme.colors['hs_blue_main']}
                          size={20}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.CheckboxStyles(theme)['Checkbox 2']
                              .style,
                            dimensions.width
                          )}
                          uncheckedColor={theme.colors['hs_blue_second']}
                          uncheckedIcon={'FontAwesome/square'}
                        />
                        {/* Notification Text */}
                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Body 6'].style,
                              { color: theme.colors['hs_grey_main'] }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Notify me when the price changes'}
                        </Text>
                      </View>
                      {/* Taxes List */}
                      <FlatList
                        data={propertyFetchData}
                        horizontal={false}
                        inverted={false}
                        keyExtractor={(taxesListData, index) =>
                          taxesListData?.id ??
                          taxesListData?.uuid ??
                          index.toString()
                        }
                        keyboardShouldPersistTaps={'never'}
                        listKey={'t7lowy4i'}
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, index }) => {
                          const taxesListData = item;
                          return (
                            <>
                              {/* Sales Item */}
                              <View
                                {...GlobalStyles.ViewStyles(theme)[
                                  'Sales Item View'
                                ].props}
                                style={StyleSheet.applyWidth(
                                  GlobalStyles.ViewStyles(theme)[
                                    'Sales Item View'
                                  ].style,
                                  dimensions.width
                                )}
                              >
                                {/* Item Date */}
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 6']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Body 6']
                                        .style,
                                      {
                                        color: theme.colors['hs_grey_second'],
                                        marginBottom: 8,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'28/12/2021'}
                                </Text>
                                {/* Item Details */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      marginBottom: 8,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Detail Title */}
                                  <Text
                                    accessible={true}
                                    {...GlobalStyles.TextStyles(theme)['Body 3']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextStyles(theme)['Body 3']
                                        .style,
                                      dimensions.width
                                    )}
                                  >
                                    {'Listed for Sale'}
                                  </Text>
                                  {/* Detail Price */}
                                  <Text
                                    accessible={true}
                                    {...GlobalStyles.TextStyles(theme)['Body 3']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Body 3']
                                          .style,
                                        { color: theme.colors['hs_red'] }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {'$2,400'}
                                  </Text>
                                </View>
                                {/* Item Company */}
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Body 6']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Body 6']
                                        .style,
                                      { color: theme.colors['hs_blue_main'] }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'Realix'}
                                </Text>
                              </View>
                            </>
                          );
                        }}
                        showsHorizontalScrollIndicator={true}
                        showsVerticalScrollIndicator={true}
                      />
                    </TabViewItem>
                  </TabView>
                </View>
              </ScrollView>
              {/* Bottom Section Shadow */}
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
                {...GlobalStyles.ShadowStyles(theme)['Bottom Section Shadow']
                  .props}
                distance={6}
                endColor={'rgba(0, 0, 0, 0)'}
                paintInside={false}
                startColor={theme.colors['hs_shadow']}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ShadowStyles(theme)['Bottom Section Shadow']
                    .style,
                  dimensions.width
                )}
              />
              {/* Bottom Section Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Bottom Section'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Bottom Section'].style,
                    {
                      backgroundColor: theme.colors['hs_white'],
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }
                  ),
                  dimensions.width
                )}
              >
                {/* Price Container */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Price Container'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Price Container'].style,
                    dimensions.width
                  )}
                >
                  {/* Price Text */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Body 1'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Body 1'].style,
                        { color: theme.colors['hs_blue_main'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {'$1,900'}
                  </Text>
                  {/* Price Sub Text */}
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
                    {'Total Price'}
                  </Text>
                </View>
                {/* Book Button */}
                <Pressable>
                  {/* Book Button View */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Book Button View']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Book Button View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Button Text */}
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
                      {'Apply Now'}
                    </Text>
                  </View>
                </Pressable>
              </View>
            </>
          );
        }}
      </InterimAPIApi.FetchPropertiesGET>
    </ScreenContainer>
  );
};

export default withTheme(PropertyDetailScreen);
