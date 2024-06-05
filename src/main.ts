import Phaser from 'phaser';
import { scenes } from './scenes';
import './style.css';

new Phaser.Game({
  width: 400,
  height: 240,
  title: 'RPG Game',
  scene: scenes,
  url: import.meta.env.BASE_URL || '',
  version: import.meta.env.VERSION || '0.0.1',
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.ENVELOP,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true
})