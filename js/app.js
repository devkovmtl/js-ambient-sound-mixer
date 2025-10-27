import { sounds, defaultPresets } from "./soundData.js";
import { SoundManager } from "./soundManager.js";

class AmbientMixer {
  constructor() {
    this.soundManager = new SoundManager();
    this.currentSoundState = {};
    this.masterVolume = 100;
    this.isInitialized = false;
  }

  init() {
    try {
      sounds.forEach((sound) => {
        this.currentSoundState[sound.id] = 0;
      });
    } catch (err) {
      console.error("failed to initialize app: ", err);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new AmbientMixer();
  app.init();
});
