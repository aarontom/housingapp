import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Divider,
  Pressable,
  ScreenContainer,
  Spacer,
  Switch,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, Text, View } from 'react-native';

const SettingsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [switch1, setSwitch1] = React.useState(false);
  const [switch2, setSwitch2] = React.useState('');

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
          {'Settings'}
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
        {/* Preferences Section */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Profile Section Container'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['Profile Section Container'].style,
              { marginBottom: 24 }
            ),
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
                { color: theme.colors['hs_grey_main'], marginBottom: 16 }
              ),
              dimensions.width
            )}
          >
            {'Preferences'}
          </Text>
          {/* Preference Item */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Settings Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Settings Item'].style,
              dimensions.width
            )}
          >
            {/* Item Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Preference Item Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Preference Item Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Text */}
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
                {'Country'}
              </Text>

              <Pressable>
                {/* Icon Right Container */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Item Right Container']
                    .props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Item Right Container']
                        .style,
                      { paddingLeft: 6, paddingRight: 6 }
                    ),
                    dimensions.width
                  )}
                >
                  {/* Item Right Text */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Body 6'].style,
                        {
                          color: theme.colors['hs_grey_third'],
                          marginRight: 8,
                          textAlign: 'right',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'USA'}
                  </Text>
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
            <Divider
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              color={theme.colors['hs_grey_sixth']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 2, width: '100%' }
                ),
                dimensions.width
              )}
            />
          </View>
          {/* Preference Item 2 */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Settings Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Settings Item'].style,
              dimensions.width
            )}
          >
            {/* Item Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Preference Item Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Preference Item Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Text */}
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
                {'Language'}
              </Text>

              <Pressable>
                {/* Icon Right Container */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Item Right Container']
                    .props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Item Right Container']
                        .style,
                      { paddingLeft: 6, paddingRight: 6 }
                    ),
                    dimensions.width
                  )}
                >
                  {/* Item Right Text */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Body 6'].style,
                        {
                          color: theme.colors['hs_grey_third'],
                          marginRight: 8,
                          textAlign: 'right',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'English'}
                  </Text>
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
            {/* Divider 2 */}
            <Divider
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              color={theme.colors['hs_grey_sixth']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 2, width: '100%' }
                ),
                dimensions.width
              )}
            />
          </View>
        </View>
        {/* Settings Section */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Profile Section Container'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['Profile Section Container'].style,
              { marginBottom: 24 }
            ),
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
                { color: theme.colors['hs_grey_main'], marginBottom: 16 }
              ),
              dimensions.width
            )}
          >
            {'Applications Settings'}
          </Text>
          {/* Settings Item */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Settings Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Settings Item'].style,
              dimensions.width
            )}
          >
            {/* Item Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Preference Item Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Preference Item Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Text */}
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
                {'Notifications'}
              </Text>
              {/* Item Switch */}
              <Switch
                onValueChange={newItemSwitchValue => {
                  try {
                    setSwitch1(newItemSwitchValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                activeThumbColor={theme.colors['hs_white']}
                activeTrackColor={theme.colors['hs_blue_main']}
                inactiveThumbColor={theme.colors['hs_white']}
                inactiveTrackColor={theme.colors['hs_blue_second']}
                value={switch1}
              />
            </View>
            <Divider
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              color={theme.colors['hs_grey_sixth']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 2, width: '100%' }
                ),
                dimensions.width
              )}
            />
          </View>
          {/* Settings Item 2 */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Settings Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Settings Item'].style,
              dimensions.width
            )}
          >
            {/* Item Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Preference Item Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Preference Item Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Text */}
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
                {'Dark Mode'}
              </Text>
              {/* Item Switch */}
              <Switch
                onValueChange={newItemSwitchValue => {
                  try {
                    setSwitch2(newItemSwitchValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                activeThumbColor={theme.colors['hs_white']}
                activeTrackColor={theme.colors['hs_blue_main']}
                inactiveThumbColor={theme.colors['hs_white']}
                inactiveTrackColor={theme.colors['hs_blue_second']}
                value={switch2}
              />
            </View>
            <Divider
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              color={theme.colors['hs_grey_sixth']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 2, width: '100%' }
                ),
                dimensions.width
              )}
            />
          </View>
        </View>
        {/* Support Section */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Profile Section Container'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['Profile Section Container'].style,
              { marginBottom: 12 }
            ),
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
                { color: theme.colors['hs_grey_main'], marginBottom: 16 }
              ),
              dimensions.width
            )}
          >
            {'Support'}
          </Text>
          {/* Support Item */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Settings Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Settings Item'].style,
              dimensions.width
            )}
          >
            {/* Item Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Preference Item Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Preference Item Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Text */}
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
                {'Help Center'}
              </Text>

              <Pressable>
                {/* Icon Right Container */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Item Right Container']
                    .props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Item Right Container']
                        .style,
                      { paddingLeft: 6, paddingRight: 6 }
                    ),
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
            <Divider
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              color={theme.colors['hs_grey_sixth']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 2, width: '100%' }
                ),
                dimensions.width
              )}
            />
          </View>
          {/* Support Item 2 */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Settings Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Settings Item'].style,
              dimensions.width
            )}
          >
            {/* Item Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Preference Item Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Preference Item Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Text */}
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
                {'Terms and conditions'}
              </Text>

              <Pressable>
                {/* Icon Right Container */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Item Right Container']
                    .props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Item Right Container']
                        .style,
                      { paddingLeft: 6, paddingRight: 6 }
                    ),
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
            {/* Divider 2 */}
            <Divider
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              color={theme.colors['hs_grey_sixth']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 2, width: '100%' }
                ),
                dimensions.width
              )}
            />
          </View>
          {/* Support Item 3 */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Settings Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Settings Item'].style,
              dimensions.width
            )}
          >
            {/* Item Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Preference Item Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Preference Item Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Text */}
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
                {'Contact Us'}
              </Text>

              <Pressable>
                {/* Icon Right Container */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Item Right Container']
                    .props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Item Right Container']
                        .style,
                      { paddingLeft: 6, paddingRight: 6 }
                    ),
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
            {/* Divider 2 */}
            <Divider
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              color={theme.colors['hs_grey_sixth']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 2, width: '100%' }
                ),
                dimensions.width
              )}
            />
          </View>
          {/* Support Item 4 */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Settings Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Settings Item'].style,
              dimensions.width
            )}
          >
            {/* Item Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Preference Item Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Preference Item Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Text */}
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
                {'About HouseSage'}
              </Text>

              <Pressable>
                {/* Icon Right Container */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Item Right Container']
                    .props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Item Right Container']
                        .style,
                      { paddingLeft: 6, paddingRight: 6 }
                    ),
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
            {/* Divider 2 */}
            <Divider
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              color={theme.colors['hs_grey_sixth']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 2, width: '100%' }
                ),
                dimensions.width
              )}
            />
          </View>
          {/* Support Item 5 */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Settings Item'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Settings Item'].style,
              dimensions.width
            )}
          >
            {/* Item Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Preference Item Container']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Preference Item Container']
                  .style,
                dimensions.width
              )}
            >
              {/* Item Text */}
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
                {'Version 4.32'}
              </Text>

              <Pressable>
                {/* Icon Right Container */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Item Right Container']
                    .props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Item Right Container']
                        .style,
                      { paddingLeft: 6, paddingRight: 6 }
                    ),
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
            {/* Divider 2 */}
            <Divider
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              color={theme.colors['hs_grey_sixth']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 2, width: '100%' }
                ),
                dimensions.width
              )}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SettingsScreen);
