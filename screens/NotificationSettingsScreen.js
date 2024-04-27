import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Pressable,
  ScreenContainer,
  Shadow,
  Spacer,
  Switch,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, Text, View } from 'react-native';

const NotificationSettingsScreen = props => {
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
          GlobalStyles.ViewStyles(theme)['Top Container No Margin Bottom']
            .style,
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
          {'Notification Settings'}
        </Text>
        <Spacer bottom={25} left={25} right={25} top={25} />
      </View>
      {/* Items Scroll */}
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
          StyleSheet.compose(
            GlobalStyles.ScrollViewStyles(theme)['Detail Scroll'].style,
            { paddingTop: 24 }
          ),
          dimensions.width
        )}
      >
        {/* Settings Item */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Notification Setting Item'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Notification Setting Item'].style,
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
              'Notification Settings Items Shadow'
            ].props}
            distance={25}
            startColor={theme.colors['hs_shadow']}
            style={StyleSheet.applyWidth(
              GlobalStyles.ShadowStyles(theme)[
                'Notification Settings Items Shadow'
              ].style,
              dimensions.width
            )}
          />
          {/* Item Container */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Notification Item Container']
              .props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Notification Item Container']
                  .style,
                { height: 68, position: 'absolute' }
              ),
              dimensions.width
            )}
          >
            {/* Item View */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Notification Settings Item']
                .props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['Notification Settings Item']
                    .style,
                  {
                    alignItems: 'center',
                    borderRadius: 12,
                    height: 68,
                    padding: 12,
                  }
                ),
                dimensions.width
              )}
            >
              {/* Item View Left */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Notificaiton Items Left']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Notificaiton Items Left']
                    .style,
                  dimensions.width
                )}
              >
                {/* Item Title */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Body 3'].style,
                      { marginBottom: 4 }
                    ),
                    dimensions.width
                  )}
                >
                  {'Allow Notifications'}
                </Text>
                {/* Item Subtitle */}
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
                  {'Get daily update notifications'}
                </Text>
              </View>
              {/* Sitch item */}
              <Switch
                onValueChange={newSitchItemValue => {
                  try {
                    setSwitch1(newSitchItemValue);
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
          </View>
        </View>
        {/* Settings Item 2 */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Notification Setting Item'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Notification Setting Item'].style,
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
              'Notification Settings Items Shadow'
            ].props}
            distance={25}
            startColor={theme.colors['hs_shadow']}
            style={StyleSheet.applyWidth(
              GlobalStyles.ShadowStyles(theme)[
                'Notification Settings Items Shadow'
              ].style,
              dimensions.width
            )}
          />
          {/* Item Container */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Notification Item Container']
              .props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Notification Item Container']
                  .style,
                { height: 68, position: 'absolute' }
              ),
              dimensions.width
            )}
          >
            {/* Item View */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Notification Settings Item']
                .props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['Notification Settings Item']
                    .style,
                  {
                    alignItems: 'center',
                    borderRadius: 12,
                    height: 68,
                    padding: 12,
                  }
                ),
                dimensions.width
              )}
            >
              {/* Item View Left */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Notificaiton Items Left']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Notificaiton Items Left']
                    .style,
                  dimensions.width
                )}
              >
                {/* Item Title */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Body 3'].style,
                      { marginBottom: 4 }
                    ),
                    dimensions.width
                  )}
                >
                  {'Email Notifications'}
                </Text>
                {/* Item Subtitle */}
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
                  {'Get daily update notifications'}
                </Text>
              </View>
              {/* Sitch item */}
              <Switch
                onValueChange={newSitchItemValue => {
                  try {
                    setSwitch2(newSitchItemValue);
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
          </View>
        </View>
        {/* Settings Item 3 */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Notification Setting Item'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Notification Setting Item'].style,
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
              'Notification Settings Items Shadow'
            ].props}
            distance={25}
            startColor={theme.colors['hs_shadow']}
            style={StyleSheet.applyWidth(
              GlobalStyles.ShadowStyles(theme)[
                'Notification Settings Items Shadow'
              ].style,
              dimensions.width
            )}
          />
          {/* Item Container */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Notification Item Container']
              .props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Notification Item Container']
                  .style,
                { height: 68, position: 'absolute' }
              ),
              dimensions.width
            )}
          >
            {/* Item View */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Notification Settings Item']
                .props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['Notification Settings Item']
                    .style,
                  {
                    alignItems: 'center',
                    borderRadius: 12,
                    height: 68,
                    padding: 12,
                  }
                ),
                dimensions.width
              )}
            >
              {/* Item View Left */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Notificaiton Items Left']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Notificaiton Items Left']
                    .style,
                  dimensions.width
                )}
              >
                {/* Item Title */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Body 3'].style,
                      { marginBottom: 4 }
                    ),
                    dimensions.width
                  )}
                >
                  {'Order Notifications'}
                </Text>
                {/* Item Subtitle */}
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
                  {'Get daily update notifications'}
                </Text>
              </View>
              {/* Sitch item */}
              <Switch
                onValueChange={newSitchItemValue => {
                  try {
                    setSwitch3(newSitchItemValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                activeThumbColor={theme.colors['hs_white']}
                activeTrackColor={theme.colors['hs_blue_main']}
                inactiveThumbColor={theme.colors['hs_white']}
                inactiveTrackColor={theme.colors['hs_blue_second']}
                value={switch3}
              />
            </View>
          </View>
        </View>
        {/* Settings Item 4 */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Notification Setting Item'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Notification Setting Item'].style,
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
              'Notification Settings Items Shadow'
            ].props}
            distance={25}
            startColor={theme.colors['hs_shadow']}
            style={StyleSheet.applyWidth(
              GlobalStyles.ShadowStyles(theme)[
                'Notification Settings Items Shadow'
              ].style,
              dimensions.width
            )}
          />
          {/* Item Container */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Notification Item Container']
              .props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Notification Item Container']
                  .style,
                { height: 68, position: 'absolute' }
              ),
              dimensions.width
            )}
          >
            {/* Item View */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Notification Settings Item']
                .props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['Notification Settings Item']
                    .style,
                  {
                    alignItems: 'center',
                    borderRadius: 12,
                    height: 68,
                    padding: 12,
                  }
                ),
                dimensions.width
              )}
            >
              {/* Item View Left */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Notificaiton Items Left']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Notificaiton Items Left']
                    .style,
                  dimensions.width
                )}
              >
                {/* Item Title */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Body 3'].style,
                      { marginBottom: 4 }
                    ),
                    dimensions.width
                  )}
                >
                  {'General Notifications'}
                </Text>
                {/* Item Subtitle */}
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
                  {'Get daily update notifications'}
                </Text>
              </View>
              {/* Sitch item */}
              <Switch
                onValueChange={newSitchItemValue => {
                  try {
                    setSwitch4(newSitchItemValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                activeThumbColor={theme.colors['hs_white']}
                activeTrackColor={theme.colors['hs_blue_main']}
                inactiveThumbColor={theme.colors['hs_white']}
                inactiveTrackColor={theme.colors['hs_blue_second']}
                value={switch4}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(NotificationSettingsScreen);
