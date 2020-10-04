import React from 'react';
import { render } from '@testing-library/react';
import Hello from '../../components/Hello';

it('should render correct component', () => {
  const { container } = render(<Hello />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <p
      class="Hello"
    >
      Hello World
    </p>
  `);
});
