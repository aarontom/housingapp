import React from 'react';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Switch, withTheme } from '@draftbit/ui';

const SitchItemBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Switch
      activeThumbColor={theme.colors['hs_white']}
      activeTrackColor={theme.colors['hs_blue_main']}
      inactiveThumbColor={theme.colors['hs_white']}
      inactiveTrackColor={theme.colors['hs_blue_second']}
    />
  );
};

export default withTheme(SitchItemBlock);
