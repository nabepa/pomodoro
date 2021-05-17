import styles from './volume-controller.module.css';
import './slidebar-style.css';
import React, { memo } from 'react';
import Slider from '@material-ui/core/Slider';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const VolumeController = memo(({ volume, handdleVolume, sessionType }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#8c2f2c',
        main: '#c84440',
        dark: '#d36966',
        contrastText: '#fff',
      },
      secondary: {
        light: '#0c4e2e',
        main: '#127042',
        dark: '#418c67',
        contrastText: '#fff',
      },
    },
  });

  return (
    <div className={styles.controller}>
      <i className={`${styles.icon} material-icons`}>volume_down</i>
      <ThemeProvider theme={theme}>
        <Slider
          valueLabelDisplay='auto'
          value={volume}
          onChange={handdleVolume}
          aria-labelledby='continuous-slider'
          color={sessionType === 'Focus' ? 'primary' : 'secondary'}
        />
      </ThemeProvider>
      <i className={`${styles.icon} material-icons`}>volume_up</i>
    </div>
  );
});

export default VolumeController;
