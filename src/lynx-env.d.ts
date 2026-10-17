import '@lynx-js/types';

declare module '@lynx-js/types' {
  interface GlobalProps {
    /** Theme supplied and updated by the native host. */
    theme?: 'light' | 'dark';
  }
}
