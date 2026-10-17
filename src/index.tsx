import '@lynx-js/preact-devtools';
import '@lynx-js/react/debug';
import '@seed-design/lynx-css/base.css';
import '@seed-design/lynx-css/recipes/action-button.css';
import './App.css';
import { root } from '@lynx-js/react';

import { Root } from './Root.js';

root.render(<Root />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
