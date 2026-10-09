import {
  IconMinusFill,
  IconPlusFill,
} from '@karrotmarket/lynx-monochrome-icon';
import { useState } from '@lynx-js/react';
import { ActionButton, Icon, Text } from '@seed-design/lynx-react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <view className="app">
      <Text fontSize="t12" fontWeight="bold" color="fg.neutral" align="center">
        Hello, FEConf
      </Text>
      <view className="counter">
        <ActionButton
          variant="neutralSolid"
          size="medium"
          layout="iconOnly"
          bindtap={() => {
            setCount((value) => value - 1);
          }}
        >
          <Icon icon={<IconMinusFill />} size="x5" />
        </ActionButton>
        <view className="count">
          <Text
            fontSize="t13"
            fontWeight="bold"
            color="fg.neutral"
            align="center"
          >
            {count}
          </Text>
        </view>
        <ActionButton
          variant="neutralSolid"
          size="medium"
          layout="iconOnly"
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
