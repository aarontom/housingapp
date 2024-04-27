import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Link, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const SectionTitleBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
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
          StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
            color: theme.colors['hs_blue_main'],
            fontFamily: 'Inter_500Medium',
            fontSize: 16,
          }),
          dimensions.width
        )}
        title={'See All'}
      />
    </View>
  );
};

export default withTheme(SectionTitleBlock);
