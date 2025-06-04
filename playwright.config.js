// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

const config=({
  testDir: './tests/student',
  //timeout: 40*1000, // we can define our own timeout, by default is set 30sec we can over ride that here
  //above timeout is for every step
  /*expect:{
    timeout:40*1000,
  },*/   //this one is for assertion validation
//  fullyParallel:false,

  //shift+option+a to do multi line comment
  use: {

   // browserName: 'chromium', //here we define out browser to run test on like Firefox, safari etc
 
  },

  

  
});
module.exports =config
