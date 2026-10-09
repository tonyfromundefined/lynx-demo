// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
import '@testing-library/jest-dom';
import { fireEvent, render } from '@lynx-js/react/testing-library';
import { expect, test } from '@rstest/core';

import { App } from '../App';

test('shows the greeting and starts at zero', async () => {
  const { findByText } = render(<App />);
  expect(await findByText('Hello, FEConf')).toBeInTheDocument();
  expect(await findByText('0')).toBeInTheDocument();
});

test('increments and decrements on repeated taps, including negative numbers', async () => {
  const { container, findByText } = render(<App />);
  await findByText('0');
  const increment = container.querySelector(
    '[accessibility-label="숫자 1 증가"]',
  );
  const decrement = container.querySelector(
    '[accessibility-label="숫자 1 감소"]',
  );
  if (!increment || !decrement) {
    throw new Error('Counter buttons must have accessible labels');
  }

  fireEvent.tap(increment);
  fireEvent.tap(increment);
  expect(await findByText('2')).toBeInTheDocument();

  fireEvent.tap(decrement);
  expect(await findByText('1')).toBeInTheDocument();

  fireEvent.tap(decrement);
  fireEvent.tap(decrement);
  expect(await findByText('-1')).toBeInTheDocument();
});
