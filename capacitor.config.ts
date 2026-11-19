import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bestmefasting.app',
  appName: 'Best Me Fasting',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#E6F7F4',
      showSpinner: false,
    },
  },
};

export default config;
