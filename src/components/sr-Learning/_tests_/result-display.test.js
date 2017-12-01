import React from 'react';
import { shallow } from 'enzyme';

import { ResultDisplay } from '../result-display';

describe('<ResultDisplay />', () => {

  it('Smoke test', () => {
    shallow(<ResultDisplay />)
  })

})