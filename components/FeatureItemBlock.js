import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const FeatureItemBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Featured Item Container'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.ViewStyles(theme)['Featured Item Container'].style,
          { borderColor: theme.colors['hs_grey_fifth'], borderWidth: 0.5 }
        ),
        dimensions.width
      )}
    >
      {/* Image Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Image Container'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Image Container'].style,
          dimensions.width
        )}
      >
        {/* Item Image */}
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={{
            uri: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=370&q=80',
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: '100%',
              width: '100%',
            }),
            dimensions.width
          )}
        />
        {/* Rating Container */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Rating Container'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['Rating Container'].style,
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
            {...GlobalStyles.ImageStyles(theme)['Star'].props}
            source={Images.Star}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Star'].style,
                { marginRight: 6 }
              ),
              dimensions.width
            )}
          />
          {/* Rating Number */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Body 10'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Body 10'].style,
              dimensions.width
            )}
          >
            {'4.3'}
          </Text>
        </View>
      </View>
      {/* Item Info Top Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Item Info Top Container'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['Item Info Top Container'].style,
            { marginBottom: 12 }
          ),
          dimensions.width
        )}
      >
        {/* Item Tag */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Item Tag'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['Item Tag'].style,
              { backgroundColor: theme.colors['hs_blue_second'] }
            ),
            dimensions.width
          )}
        >
          {/* Tag Text */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Body 11'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Body 11'].style,
                { color: theme.colors['hs_blue_main'] }
              ),
              dimensions.width
            )}
          >
            {'Apartment'}
          </Text>
        </View>
        {/* Item Price Text */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Body 5'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Body 5'].style, {
              color: theme.colors['hs_blue_main'],
            }),
            dimensions.width
          )}
        >
          {'$1,900'}
          {/* Item Month Text */}
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
            {'/month'}
          </Text>
        </Text>
      </View>
      {/* Item Title */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Title 8'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Title 8'].style, {
            color: theme.colors['hs_grey_main'],
            marginBottom: 12,
            paddingLeft: 12,
            paddingRight: 12,
          }),
          dimensions.width
        )}
      >
        {'Lavender Manor'}
      </Text>
      {/* Item Info Bottom Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['item Info Bottom Container'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['item Info Bottom Container'].style,
          dimensions.width
        )}
      >
        {/* Item Location Button */}
        <Pressable>
          {/* Item Location Container */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Item Location Container'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Item Location Container'].style,
              dimensions.width
            )}
          >
            {/* Pin Image */}
            <Image
              {...GlobalStyles.ImageStyles(theme)['Pin IMage'].props}
              resizeMode={'contain'}
              source={Images.LocationPinSolid}
              style={StyleSheet.applyWidth(
                GlobalStyles.ImageStyles(theme)['Pin IMage'].style,
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
        {/* Heart Button Container */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Heart Button Container'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Heart Button Container'].style,
            dimensions.width
          )}
        >
          {/* Heart Fill Container */}
          <View
            style={StyleSheet.applyWidth(
              { position: 'absolute' },
              dimensions.width
            )}
          >
            {/* Heart Fill Button */}
            <Pressable>
              {/* Heart Fill Image */}
              <Image
                {...GlobalStyles.ImageStyles(theme)['Icon 18 x 18'].props}
                resizeMode={'contain'}
                source={Images.HearSolid}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ImageStyles(theme)['Icon 18 x 18'].style,
                  dimensions.width
                )}
              />
            </Pressable>
          </View>
          {/* Heart Line Container */}
          <View
            style={StyleSheet.applyWidth(
              { position: 'absolute' },
              dimensions.width
            )}
          >
            {/* Heart Line Button */}
            <Pressable>
              {/* Heart Line Image */}
              <Image
                {...GlobalStyles.ImageStyles(theme)['Icon 16 x 16'].props}
                resizeMode={'contain'}
                source={Images.HeartLineBlue}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ImageStyles(theme)['Icon 16 x 16'].style,
                  dimensions.width
                )}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withTheme(FeatureItemBlock);
