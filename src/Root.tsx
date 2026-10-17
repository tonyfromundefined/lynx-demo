import { useSeedClassName } from '@seed-design/lynx-react';

import { App } from './App.js';

export function Root() {
  const themeClassName = useSeedClassName({ colorMode: 'system' });

  return (
    <page className={themeClassName}>
      <App />
    </page>
  );
}
