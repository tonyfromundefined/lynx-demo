import '@lynx-js/preact-devtools';
import '@lynx-js/react/debug';
import '@seed-design/lynx-css/base.css';
import '@seed-design/lynx-css/recipes/action-button.css';
import './App.css';
import { root } from '@lynx-js/react';

import { App } from './App.js';

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
