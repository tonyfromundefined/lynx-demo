import { pluginLynxConfig } from '@lynx-js/config-rsbuild-plugin';
import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';
import { defineConfig } from '@lynx-js/rspeedy';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginLynxIcon } from '@seed-design/rsbuild-plugin-lynx-icon';

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
    pluginReactLynx({ engineVersion: '3.6' }),
    pluginLynxIcon({
      include: /node_modules\/@karrotmarket\/assets-monochrome\/svg\//,
    }),
    pluginLynxConfig({
      enableCSSInheritance: true,
      enableCSSInlineVariables: true,
      fontScaleEffectiveOnlyOnSp: true,
    }),
    pluginTypeCheck(),
  ],
});
