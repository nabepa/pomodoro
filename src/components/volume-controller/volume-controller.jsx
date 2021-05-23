import styles from './volume-controller.module.css';
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

  const onMute = (event) => {
    handdleVolume(event, 0);
  };
  const onMax = (event) => {
    handdleVolume(event, 100);
  };

  return (
    <div className={styles.controller}>
      <button onClick={onMute} className={`${styles.button} material-icons`}>
        volume_down
      </button>
      <ThemeProvider theme={theme}>
        <Slider
          valueLabelDisplay='auto'
          value={volume}
          onChange={handdleVolume}
          aria-labelledby='continuous-slider'
          color={sessionType === 'Focus' ? 'primary' : 'secondary'}
        />
      </ThemeProvider>
      <button onClick={onMax} className={`${styles.button} material-icons`}>
        volume_up
      </button>
    </div>
  );
});

export default VolumeController;
