import styles from './volume-controller.module.css';
import './slidebar-style.css';
import React, { memo } from 'react';
import Slider from '@material-ui/core/Slider';
import { StylesProvider } from '@material-ui/core/styles';

const VolumeController = memo(({ volume, handdleVolume }) => {
  return (
    <div className={styles.controller}>
      <i className={`${styles.icon} material-icons`}>volume_down</i>
      <StylesProvider injectFirst>
        <Slider
          valueLabelDisplay='auto'
          value={volume}
          onChange={handdleVolume}
          aria-labelledby='continuous-slider'
        />
      </StylesProvider>
      <i className={`${styles.icon} material-icons`}>volume_up</i>
    </div>
  );
});

export default VolumeController;
