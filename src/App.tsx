import {
  IconMinusFill,
  IconPlusFill,
} from '@karrotmarket/lynx-monochrome-icon';
import { useState } from '@lynx-js/react';
import { ActionButton, Icon } from '@seed-design/lynx-react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <view className="app">
      <text className="title">Hello, FEConf</text>
      <view className="counter">
        <ActionButton
          variant="neutralSolid"
          size="medium"
          layout="iconOnly"
          accessibility-label="감소"
          bindtap={() => {
            setCount((value) => value - 1);
          }}
        >
          <Icon icon={<IconMinusFill />} size="x5" />
        </ActionButton>
        <text className="count">{count}</text>
        <ActionButton
          variant="neutralSolid"
          size="medium"
          layout="iconOnly"
          accessibility-label="증가"
          bindtap={() => {
            setCount((value) => value + 1);
          }}
        >
          <Icon icon={<IconPlusFill />} size="x5" />
        </ActionButton>
      </view>
    </view>
  );
}
