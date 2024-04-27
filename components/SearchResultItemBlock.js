import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Pressable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const SearchResultItemBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Recent Viewed Item Container'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['Recent Viewed Item Container'].style,
        dimensions.width
      )}
    >
      {/* Item Image */}
      <Image
        resizeMode={'cover'}
        {...GlobalStyles.ImageStyles(theme)['Viewed image'].props}
        source={{
          uri: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=174&q=80',
        }}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ImageStyles(theme)['Viewed image'].style,
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
          {...GlobalStyles.ViewStyles(theme)['Recent Info Top Container'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['Recent Info Top Container'].style,
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
              {...GlobalStyles.TextStyles(theme)['Body 10'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Body 10'].style,
                  { color: theme.colors['hs_grey_second'], marginBottom: 8 }
                ),
                dimensions.width
              )}
            >
              {'Vancouver, Canada'}
            </Text>
            {/* Title Text */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Title 5'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Title 5'].style,
                  { color: theme.colors['hs_grey_main'] }
                ),
                dimensions.width
              )}
            >
              {'Joneore Garden'}
            </Text>
          </View>
          {/* More Button */}
          <Pressable>
            {/* Button Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Button Container 24'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Button Container 24'].style,
                dimensions.width
              )}
            >
              {/* Button Icon */}
              <Icon name={'MaterialCommunityIcons/dots-vertical'} size={20} />
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
            {'$1,900'}
            {/* Price Text 2 */}
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
              {'/Month'}
            </Text>
          </Text>
          {/* Ratings View */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Ratings View'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Ratings View'].style,
                {
                  alignItems: 'center',
                  height: 12,
                  justifyContent: 'flex-start',
                }
              ),
              dimensions.width
            )}
          >
            {/* Star Icon */}
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Icon 12 x 12'].props}
              source={Images.Star}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Icon 12 x 12'].style,
                  { marginRight: 6 }
                ),
                dimensions.width
              )}
            />
            {/* Ratings Text */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Body 8'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Body 8'].style,
                  { color: theme.colors['hs_orange'] }
                ),
                dimensions.width
              )}
            >
              {'4.3'}
              {/* Ratings Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 8'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 8'].style,
                    { color: theme.colors['hs_grey_second'] }
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
  );
};

export default withTheme(SearchResultItemBlock);
