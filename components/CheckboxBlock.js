import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Checkbox, withTheme } from '@draftbit/ui';

const CheckboxBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Checkbox
      {...GlobalStyles.CheckboxStyles(theme)['Checkbox 2'].props}
      checkedIcon={'Ionicons/checkbox'}
      color={theme.colors['hs_blue_main']}
      style={StyleSheet.applyWidth(
        GlobalStyles.CheckboxStyles(theme)['Checkbox 2'].style,
        dimensions.width
      )}
      uncheckedColor={theme.colors['hs_blue_fourth']}
      uncheckedIcon={'FontAwesome/square'}
    />
  );
};

export default withTheme(CheckboxBlock);
