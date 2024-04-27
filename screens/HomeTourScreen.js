import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { Image, ScrollView, Text, View } from 'react-native';

const HomeTourScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [dateSelect, setDateSelect] = React.useState(29);
  const [timeSelected, setTimeSelected] = React.useState('0930');
  const [typeSelect, setTypeSelect] = React.useState('Virtual');

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
          {'Request Home Tour'}
        </Text>
        <Spacer bottom={25} left={25} right={25} top={25} />
      </View>
      {/* Schedule Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Home Tour Section Container'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Home Tour Section Container'].style,
          dimensions.width
        )}
      >
        {/* Section Title */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Home Section Title'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Home Section Title'].style,
            dimensions.width
          )}
        >
          {/* Seciton Text */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Title 4'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Title 4'].style,
              dimensions.width
            )}
          >
            {'Schedule'}
          </Text>
          {/* Section Title Button */}
          <Pressable>
            {/* Button Icon */}
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
              source={Images.CalendarEdit}
              style={StyleSheet.applyWidth(
                GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                dimensions.width
              )}
            />
          </Pressable>
        </View>
        {/* Date Scroll */}
        <ScrollView
          bounces={true}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          {...GlobalStyles.ScrollViewStyles(theme)['Date Scroll'].props}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={StyleSheet.applyWidth(
            GlobalStyles.ScrollViewStyles(theme)['Date Scroll'].style,
            dimensions.width,
            ['width', 'height', 'flexGrow']
          )}
          contentContainerStyle={StyleSheet.applyWidth(
            GlobalStyles.ScrollViewStyles(theme)['Date Scroll'].style,
            dimensions.width
          )}
        >
          {/* Date Item Button 26 */}
          <Pressable
            onPress={() => {
              try {
                setDateSelect(26);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Date Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Date item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Date item Container'].style,
                dimensions.width
              )}
            >
              {/* Date Item Unselected */}
              <>
                {!(dateSelect !== 26) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_main'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'26'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Sat'}
                    </Text>
                  </View>
                )}
              </>
              {/* Date Item Selected */}
              <>
                {!(dateSelect === 26) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_main'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_fourth'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'26'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Sat'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
          {/* Date Item Button 27 */}
          <Pressable
            onPress={() => {
              try {
                setDateSelect(27);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Date Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Date item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Date item Container'].style,
                dimensions.width
              )}
            >
              {/* Date Item Unselected */}
              <>
                {!(dateSelect !== 27) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_main'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'27'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Sun'}
                    </Text>
                  </View>
                )}
              </>
              {/* Date Item Selected */}
              <>
                {!(dateSelect === 27) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_main'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_fourth'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'27'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Sun'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
          {/* Date Item Button 28 */}
          <Pressable
            onPress={() => {
              try {
                setDateSelect(28);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Date Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Date item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Date item Container'].style,
                dimensions.width
              )}
            >
              {/* Date Item Unselected */}
              <>
                {!(dateSelect !== 28) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_main'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'28'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Mon'}
                    </Text>
                  </View>
                )}
              </>
              {/* Date Item Selected */}
              <>
                {!(dateSelect === 28) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_main'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_fourth'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'28'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Mon'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
          {/* Date Item Button 29 */}
          <Pressable
            onPress={() => {
              try {
                setDateSelect(29);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Date Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Date item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Date item Container'].style,
                dimensions.width
              )}
            >
              {/* Date Item Unselected */}
              <>
                {!(dateSelect !== 29) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_main'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'29'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Tue'}
                    </Text>
                  </View>
                )}
              </>
              {/* Date Item Selected */}
              <>
                {!(dateSelect === 29) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_main'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_fourth'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'29'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Tue'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
          {/* Date Item Button 30 */}
          <Pressable
            onPress={() => {
              try {
                setDateSelect(30);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Date Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Date item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Date item Container'].style,
                dimensions.width
              )}
            >
              {/* Date Item Unselected */}
              <>
                {!(dateSelect !== 30) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_main'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'30'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Wed'}
                    </Text>
                  </View>
                )}
              </>
              {/* Date Item Selected */}
              <>
                {!(dateSelect === 30) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_main'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_fourth'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'30'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Wed'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
          {/* Date Item Button 31 */}
          <Pressable
            onPress={() => {
              try {
                setDateSelect(31);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Date Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Date item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Date item Container'].style,
                dimensions.width
              )}
            >
              {/* Date Item Unselected */}
              <>
                {!(dateSelect !== 31) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_main'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'31'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_main'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Thu'}
                    </Text>
                  </View>
                )}
              </>
              {/* Date Item Selected */}
              <>
                {!(dateSelect === 31) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Date Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Date Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_main'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Date Number */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 3'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 3'].style,
                          {
                            color: theme.colors['hs_blue_fourth'],
                            marginBottom: 8,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'31'}
                    </Text>
                    {/* Date Day */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 9'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 9'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Thu'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
        </ScrollView>
      </View>
      {/* Time Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Home Tour Section Container'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Home Tour Section Container'].style,
          dimensions.width
        )}
      >
        {/* Section Title */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Home Section Title'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Home Section Title'].style,
            dimensions.width
          )}
        >
          {/* Section Text */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Title 4'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Title 4'].style,
              dimensions.width
            )}
          >
            {'Time'}
          </Text>
          {/* Section Title Button */}
          <Pressable>
            {/* Button Icon */}
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
              source={Images.Timer}
              style={StyleSheet.applyWidth(
                GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                dimensions.width
              )}
            />
          </Pressable>
        </View>
        {/* Time Scroll */}
        <ScrollView
          bounces={true}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          {...GlobalStyles.ScrollViewStyles(theme)['Time Scroll'].props}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={StyleSheet.applyWidth(
            GlobalStyles.ScrollViewStyles(theme)['Time Scroll'].style,
            dimensions.width,
            ['width', 'height', 'flexGrow']
          )}
          contentContainerStyle={StyleSheet.applyWidth(
            GlobalStyles.ScrollViewStyles(theme)['Time Scroll'].style,
            dimensions.width
          )}
        >
          {/* Time Item Button 0900 */}
          <Pressable
            onPress={() => {
              try {
                setTimeSelected('0900');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Time Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Time Item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Time Item Container'].style,
                dimensions.width
              )}
            >
              {/* Time Item Unselected */}
              <>
                {!(timeSelected !== '0900') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Time Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Time Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_third'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Time Text */}
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
                      {'9:00 AM'}
                    </Text>
                  </View>
                )}
              </>
              {/* Time Item Selected */}
              <>
                {!(timeSelected === '0900') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Time Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Time Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Time Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 6'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'9:00 AM'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
          {/* Time Item Button 0930 */}
          <Pressable
            onPress={() => {
              try {
                setTimeSelected('0930');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Time Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Time Item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Time Item Container'].style,
                dimensions.width
              )}
            >
              {/* Time Item Unselected */}
              <>
                {!(timeSelected !== '0930') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Time Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Time Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_third'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Time Text */}
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
                      {'9:30 AM'}
                    </Text>
                  </View>
                )}
              </>
              {/* Time Item Selected */}
              <>
                {!(timeSelected === '0930') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Time Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Time Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Time Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 6'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'9:30 AM'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
          {/* Time Item Button 1000 */}
          <Pressable
            onPress={() => {
              try {
                setTimeSelected(1000);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Time Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Time Item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Time Item Container'].style,
                dimensions.width
              )}
            >
              {/* Time Item Unselected */}
              <>
                {!(timeSelected !== 1000) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Time Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Time Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_third'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Time Text */}
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
                      {'10:00 AM'}
                    </Text>
                  </View>
                )}
              </>
              {/* Time Item Selected */}
              <>
                {!(timeSelected === 1000) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Time Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Time Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Time Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 6'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'10:00 AM'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
          {/* Time Item Button 1030 */}
          <Pressable
            onPress={() => {
              try {
                setTimeSelected(1030);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Time Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Time Item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Time Item Container'].style,
                dimensions.width
              )}
            >
              {/* Time Item Unselected */}
              <>
                {!(timeSelected !== 1030) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Time Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Time Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_third'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Time Text */}
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
                      {'10:30 AM'}
                    </Text>
                  </View>
                )}
              </>
              {/* Time Item Selected */}
              <>
                {!(timeSelected === 1030) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Time Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Time Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Time Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 6'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'10:30 AM'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
          {/* Time Item Button 1100 */}
          <Pressable
            onPress={() => {
              try {
                setTimeSelected(1100);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Time Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Time Item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Time Item Container'].style,
                dimensions.width
              )}
            >
              {/* Time Item Unselected */}
              <>
                {!(timeSelected !== 1100) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Time Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Time Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_third'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Time Text */}
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
                      {'11:00 AM'}
                    </Text>
                  </View>
                )}
              </>
              {/* Time Item Selected */}
              <>
                {!(timeSelected === 1100) ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Time Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Time Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Time Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 6'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'11:00 AM'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
        </ScrollView>
      </View>
      {/* Type Container */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Home Tour Section Container'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Home Tour Section Container'].style,
          dimensions.width
        )}
      >
        {/* Section Title */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Home Section Title'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Home Section Title'].style,
            dimensions.width
          )}
        >
          {/* Section Text */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Title 4'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Title 4'].style,
              dimensions.width
            )}
          >
            {'Type'}
          </Text>
        </View>
        {/* Type Buttons Container */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Type Buttons Container'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['Type Buttons Container'].style,
            dimensions.width
          )}
        >
          {/* Virtual Item Button */}
          <Pressable
            onPress={() => {
              try {
                if (typeSelect !== 'Virtual') {
                  setTypeSelect('Virtual');
                }
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Type Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Type Item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Type Item Container'].style,
                dimensions.width
              )}
            >
              {/* Type Item Unselected */}
              <>
                {!(typeSelect !== 'Virtual') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Type Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Type Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Type Icon */}
                    <Image
                      {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                      resizeMode={'contain'}
                      source={Images.VirtualLineBlack}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                          { marginRight: 8 }
                        ),
                        dimensions.width
                      )}
                    />
                    {/* Type Text */}
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
                      {'Virtual'}
                    </Text>
                  </View>
                )}
              </>
              {/* Type Item Selected */}
              <>
                {!(typeSelect === 'Virtual') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Type Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Type Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_main'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Type Icon */}
                    <Image
                      {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                      resizeMode={'contain'}
                      source={Images.VirtualLineWhite}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                          { marginRight: 8 }
                        ),
                        dimensions.width
                      )}
                    />
                    {/* Type Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 6'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Virtual'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
          {/* Personal Item Button */}
          <Pressable
            onPress={() => {
              try {
                if (typeSelect !== 'Personal') {
                  setTypeSelect('Personal');
                }
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 8 }, dimensions.width)}
          >
            {/* Type Item */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Type Item Container'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Type Item Container'].style,
                dimensions.width
              )}
            >
              {/* Type Item Unselected */}
              <>
                {!(typeSelect !== 'Personal') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Type Item View'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Type Item View'].style,
                      dimensions.width
                    )}
                  >
                    {/* Type Icon */}
                    <Image
                      {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                      resizeMode={'contain'}
                      source={Images.UserLineBlack}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                          { marginRight: 8 }
                        ),
                        dimensions.width
                      )}
                    />
                    {/* Type Text */}
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
                      {'In Person'}
                    </Text>
                  </View>
                )}
              </>
              {/* Type Item Selected */}
              <>
                {!(typeSelect === 'Personal') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Type Item View'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Type Item View'].style,
                        { backgroundColor: theme.colors['hs_blue_main'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Type Icon */}
                    <Image
                      {...GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].props}
                      resizeMode={'contain'}
                      source={Images.UserLineWhite}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Icon 24 x 24'].style,
                          { marginRight: 8 }
                        ),
                        dimensions.width
                      )}
                    />
                    {/* Type Text */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Body 6'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Body 6'].style,
                          { color: theme.colors['hs_blue_fourth'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'In Person'}
                    </Text>
                  </View>
                )}
              </>
            </View>
          </Pressable>
        </View>
      </View>
      {/* Bottom Button */}
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
              navigation.navigate('VirtualAppScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Send Button View */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Normal Button Container'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Normal Button Container'].style,
              dimensions.width
            )}
          >
            {/* Signup Text */}
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
              {'Schedule Tour'}
            </Text>
          </View>
        </Pressable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HomeTourScreen);
