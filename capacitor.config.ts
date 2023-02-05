import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Calculator',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.68.1:6200',
    cleartext: true,
  },
};

export default config;
