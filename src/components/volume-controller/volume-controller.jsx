import styles from './volume-controller.module.css';
import React from 'react';
import Slider from '@material-ui/core/Slider';

const VolumeController = ({ volume, handdleVolume }) => {
  return (
    <div>
      <i className='material-icons'>volume_down</i>
      <Slider
        value={volume}
        onChange={handdleVolume}
        aria-labelledby='continuous-slider'
      />
      <i className='material-icons'>volume_up</i>
    </div>
  );
};

export default VolumeController;
