import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Divider,
  Pressable,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const VirtualAppScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [currentStep, setCurrentStep] = React.useState(1);
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState(1);

  return (
    <ScreenContainer
      scrollable={false}
      {...GlobalStyles.ScreenContainerStyles(theme)[
        'Screen Container No Padding Horizontal'
      ].props}
      hasSafeArea={true}
      style={StyleSheet.applyWidth(
        GlobalStyles.ScreenContainerStyles(theme)[
          'Screen Container No Padding Horizontal'
        ].style,
        dimensions.width
      )}
    >
      {/* Top Section No Link */}
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
          {'Select Virtual App'}
        </Text>
        <Spacer bottom={25} left={25} right={25} top={25} />
      </View>
      {/* Virtual App Step 1 */}
      <>
        {!(currentStep === 1) ? null : (
          <View
            {...GlobalStyles.ViewStyles(theme)['Virtual App Steps'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Virtual App Steps'].style,
              dimensions.width
            )}
          >
            <RadioButtonGroup
              onValueChange={newRadioButtonGroupValue => {
                const radioButtonGroupValue = newRadioButtonGroupValue;
                try {
                  setRadioButtonGroupValue(newRadioButtonGroupValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.RadioButtonGroupStyles(theme)[
                'Radio Button Group'
              ].props}
              direction={'vertical'}
              style={StyleSheet.applyWidth(
                GlobalStyles.RadioButtonGroupStyles(theme)['Radio Button Group']
                  .style,
                dimensions.width
              )}
              value={radioButtonGroupValue}
            >
              {/* Skype App Item */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Virtual App Item Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Virtual App Item Container']
                    .style,
                  dimensions.width
                )}
              >
                {/* Virtual Left View */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Viartual App Left View']
                    .props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Viartual App Left View']
                      .style,
                    dimensions.width
                  )}
                >
                  {/* Virtual App Icon */}
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                    source={Images.Skype}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                        { marginRight: 26 }
                      ),
                      dimensions.width
                    )}
                  />
                  {/* Virtual App Text Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Virtual Text Container']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Virtual Text Container']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Title Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 7'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 7'].style,
                          { color: theme.colors['hs_grey_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Skype'}
                    </Text>
                    {/* Subtitle Text */}
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
                      {'Recommend'}
                    </Text>
                  </View>
                </View>
                <RadioButton
                  size={24}
                  {...GlobalStyles.RadioButtonStyles(theme)['Radio Button']
                    .props}
                  color={theme.colors['hs_blue_main']}
                  selectedIcon={'Ionicons/radio-button-on-outline'}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.RadioButtonStyles(theme)['Radio Button'].style,
                    dimensions.width
                  )}
                  unselectedColor={theme.colors['hs_grey_fourth']}
                  unselectedIcon={'Ionicons/md-radio-button-off-sharp'}
                  value={1}
                />
              </View>
              {/* Google App Item */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Virtual App Item Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Virtual App Item Container']
                    .style,
                  dimensions.width
                )}
              >
                {/* Virtual Left View */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Viartual App Left View']
                    .props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Viartual App Left View']
                      .style,
                    dimensions.width
                  )}
                >
                  {/* Virtual App Icon */}
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                    source={Images.GoogleMeet}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                        { marginRight: 26 }
                      ),
                      dimensions.width
                    )}
                  />
                  {/* Virtual App Text Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Virtual Text Container']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Virtual Text Container']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Title Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 7'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 7'].style,
                          { color: theme.colors['hs_grey_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Google Meet'}
                    </Text>
                    {/* Subtitle Text */}
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
                      {'Recommend'}
                    </Text>
                  </View>
                </View>
                <RadioButton
                  size={24}
                  {...GlobalStyles.RadioButtonStyles(theme)['Radio Button']
                    .props}
                  color={theme.colors['hs_blue_main']}
                  selectedIcon={'Ionicons/radio-button-on-outline'}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.RadioButtonStyles(theme)['Radio Button'].style,
                    dimensions.width
                  )}
                  unselectedColor={theme.colors['hs_grey_fourth']}
                  unselectedIcon={'Ionicons/md-radio-button-off-sharp'}
                  value={2}
                />
              </View>
              {/* Signal App Item */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Virtual App Item Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Virtual App Item Container']
                    .style,
                  dimensions.width
                )}
              >
                {/* Virtual Left View */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Viartual App Left View']
                    .props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Viartual App Left View']
                      .style,
                    dimensions.width
                  )}
                >
                  {/* Virtual App Icon */}
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                    source={Images.Signal}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                        { marginRight: 26 }
                      ),
                      dimensions.width
                    )}
                  />
                  {/* Virtual App Text Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Virtual Text Container']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Virtual Text Container']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Title Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 7'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 7'].style,
                          { color: theme.colors['hs_grey_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Signal'}
                    </Text>
                    {/* Subtitle Text */}
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
                      {'Recommend'}
                    </Text>
                  </View>
                </View>
                <RadioButton
                  size={24}
                  {...GlobalStyles.RadioButtonStyles(theme)['Radio Button']
                    .props}
                  color={theme.colors['hs_blue_main']}
                  selectedIcon={'Ionicons/radio-button-on-outline'}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.RadioButtonStyles(theme)['Radio Button'].style,
                    dimensions.width
                  )}
                  unselectedColor={theme.colors['hs_grey_fourth']}
                  unselectedIcon={'Ionicons/md-radio-button-off-sharp'}
                  value={3}
                />
              </View>
              {/* WhatsApp App Item */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Virtual App Item Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Virtual App Item Container']
                    .style,
                  dimensions.width
                )}
              >
                {/* Virtual Left View */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Viartual App Left View']
                    .props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Viartual App Left View']
                      .style,
                    dimensions.width
                  )}
                >
                  {/* Virtual App Icon */}
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                    source={Images.WhatsApp}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                        { marginRight: 26 }
                      ),
                      dimensions.width
                    )}
                  />
                  {/* Virtual App Text Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Virtual Text Container']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Virtual Text Container']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Title Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 7'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 7'].style,
                          { color: theme.colors['hs_grey_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'WhatsApp'}
                    </Text>
                    {/* Subtitle Text */}
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
                      {'Recommend'}
                    </Text>
                  </View>
                </View>
                <RadioButton
                  size={24}
                  {...GlobalStyles.RadioButtonStyles(theme)['Radio Button']
                    .props}
                  color={theme.colors['hs_blue_main']}
                  selectedIcon={'Ionicons/radio-button-on-outline'}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.RadioButtonStyles(theme)['Radio Button'].style,
                    dimensions.width
                  )}
                  unselectedColor={theme.colors['hs_grey_fourth']}
                  unselectedIcon={'Ionicons/md-radio-button-off-sharp'}
                  value={4}
                />
              </View>
              {/* Telegram App Item */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Virtual App Item Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Virtual App Item Container']
                    .style,
                  dimensions.width
                )}
              >
                {/* Virtual Left View */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['Viartual App Left View']
                    .props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Viartual App Left View']
                      .style,
                    dimensions.width
                  )}
                >
                  {/* Virtual App Icon */}
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                    source={Images.Telegram}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                        { marginRight: 26 }
                      ),
                      dimensions.width
                    )}
                  />
                  {/* Virtual App Text Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Virtual Text Container']
                      .props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Virtual Text Container']
                        .style,
                      dimensions.width
                    )}
                  >
                    {/* Title Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 7'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 7'].style,
                          { color: theme.colors['hs_grey_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Telegram'}
                    </Text>
                    {/* Subtitle Text */}
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
                      {'Recommend'}
                    </Text>
                  </View>
                </View>
                <RadioButton
                  size={24}
                  {...GlobalStyles.RadioButtonStyles(theme)['Radio Button']
                    .props}
                  color={theme.colors['hs_blue_main']}
                  selectedIcon={'Ionicons/radio-button-on-outline'}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.RadioButtonStyles(theme)['Radio Button'].style,
                    dimensions.width
                  )}
                  unselectedColor={theme.colors['hs_grey_fourth']}
                  unselectedIcon={'Ionicons/md-radio-button-off-sharp'}
                  value={5}
                />
              </View>
            </RadioButtonGroup>
          </View>
        )}
      </>
      {/* Virtual App Step 2 */}
      <>
        {!(currentStep === 2) ? null : (
          <View
            {...GlobalStyles.ViewStyles(theme)['Virtual App Steps'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Virtual App Steps'].style,
                { paddingLeft: 24, paddingRight: 24 }
              ),
              dimensions.width
            )}
          >
            {/* Received Message Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Received Message Container']
                .props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['Received Message Container']
                    .style,
                  { backgroundColor: theme.colors['hs_blue_fourth'] }
                ),
                dimensions.width
              )}
            >
              {/* Check Icon Container */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Check Icon Container']
                  .props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Check Icon Container']
                      .style,
                    { marginBottom: 16 }
                  ),
                  dimensions.width
                )}
              >
                {/* Check Icon */}
                <Image
                  {...GlobalStyles.ImageStyles(theme)['Icon 18 x 18'].props}
                  resizeMode={'contain'}
                  source={Images.Checkmark}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ImageStyles(theme)['Icon 18 x 18'].style,
                    dimensions.width
                  )}
                />
              </View>
              {/* Title Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Title 5'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Title 5'].style,
                    { color: theme.colors['hs_grey_main'], marginBottom: 8 }
                  ),
                  dimensions.width
                )}
              >
                {'Request Sent!'}
              </Text>
              {/* Subtitle Text */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 6'].style,
                    { color: theme.colors['hs_grey_second'], marginBottom: 8 }
                  ),
                  dimensions.width
                )}
              >
                {'We’re checking if the home can be seen on '}
              </Text>
              {/* Date Text */}
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
                {'Mon, April 4 4:00 PM'}
                {/* Date Text 2 */}
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
                  {' to'}
                  {/* Date Text 3 */}
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
                    {' 4:45 PM'}
                  </Text>
                </Text>
              </Text>
            </View>
            {/* Contact Container */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Contact Container'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['Contact Container'].style,
                  {
                    borderColor: theme.colors['hs_grey_sixth'],
                    borderWidth: 2,
                    justifyContent: 'space-between',
                    padding: 16,
                  }
                ),
                dimensions.width
              )}
            >
              {/* Contact Message */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Body 6'].style,
                    { color: theme.colors['hs_grey_main'], lineHeight: 22 }
                  ),
                  dimensions.width
                )}
              >
                {
                  'Associate Capital Properties LLC Agent will take you on the tour!'
                }
              </Text>
              <Divider
                {...GlobalStyles.DividerStyles(theme)['Contact divider'].props}
                color={theme.colors['hs_grey_sixth']}
                style={StyleSheet.applyWidth(
                  GlobalStyles.DividerStyles(theme)['Contact divider'].style,
                  dimensions.width
                )}
              />
              {/* Contact Info View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Contact Info View'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['Contact Info View'].style,
                    { width: '100%' }
                  ),
                  dimensions.width
                )}
              >
                {/* Contact Info Left */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  {/* Profile Picture */}
                  <Image
                    {...GlobalStyles.ImageStyles(theme)['Contact Profile Image']
                      .props}
                    resizeMode={'contain'}
                    source={Images.AliMorshedlouWMD64tMfc4kUnsplash}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Contact Profile Image']
                          .style,
                        {
                          borderRadius: 24,
                          height: 48,
                          marginRight: 18,
                          width: 48,
                        }
                      ),
                      dimensions.width
                    )}
                  />
                  {/* Profile Info Container */}
                  <View>
                    {/* Name Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Title 5'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Title 5'].style,
                          {
                            color: theme.colors['hs_grey_main'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Benjamin Sterling'}
                    </Text>
                    {/* Subtitle Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 6'].style,
                          {
                            color: theme.colors['hs_grey_main'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'ben@sterling.com'}
                    </Text>
                  </View>
                </View>
                {/* More Button */}
                <Pressable>
                  {/* More Button Container */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['More Button Container']
                      .props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['More Button Container']
                          .style,
                        {
                          alignItems: 'center',
                          height: 32,
                          justifyContent: 'center',
                          width: 32,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* More Button Icon */}
                    <Image
                      resizeMode={'cover'}
                      {...GlobalStyles.ImageStyles(theme)['Icon 18 x 18'].props}
                      source={Images.ArrowRight}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ImageStyles(theme)['Icon 18 x 18'].style,
                        dimensions.width
                      )}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </>
      {/* Bottom Button Step 1 */}
      <>
        {!(currentStep === 1) ? null : (
          <View
            {...GlobalStyles.ViewStyles(theme)['Bottom Button Container'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Bottom Button Container'].style,
              dimensions.width
            )}
          >
            {/* Send Button */}
            <Pressable
              onPress={() => {
                try {
                  setCurrentStep(2);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Send Button View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Normal Button Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Normal Button Container']
                    .style,
                  dimensions.width
                )}
              >
                {/* Button Text */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Body 2'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Body 2'].style,
                      { color: theme.colors['hs_white'] }
                    ),
                    dimensions.width
                  )}
                >
                  {'Next'}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      </>
      {/* Bottom Button Step 2 */}
      <>
        {!(currentStep === 2) ? null : (
          <View
            {...GlobalStyles.ViewStyles(theme)['Bottom Button Container'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Bottom Button Container'].style,
              dimensions.width
            )}
          >
            {/* Done Button */}
            <Pressable
              onPress={() => {
                try {
                  navigation.navigate('HomeTourScreen');
                  setCurrentStep(1);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Done Button View */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Normal Button Container']
                  .props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Normal Button Container']
                    .style,
                  dimensions.width
                )}
              >
                {/* Button Text */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Body 2'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Body 2'].style,
                      { color: theme.colors['hs_white'] }
                    ),
                    dimensions.width
                  )}
                >
                  {'Done'}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(VirtualAppScreen);
