import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sebariskode.bookmanagement',
  appName: 'Book Management',
  webDir: 'dist/book-management/browser',
  server: {
    url: 'https://book-management-zeta-steel.vercel.app',
    cleartext: false,
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
