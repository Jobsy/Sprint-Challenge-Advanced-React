
import React from 'react';
   import * as rtl from '@testing-library/react';

   afterEach(rtl.cleanup);

   it('renders without crashing', () => {
    const wrapper = rtl.render(
      <h1>Players</h1>
    );

    wrapper.debug()
  });

