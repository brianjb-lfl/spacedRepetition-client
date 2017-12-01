import React from 'react';
import { shallow } from 'enzyme';

import { ScoreDisplay } from '../score-display';

describe('<ScoreDisplay />', () => {

  it('Smoke test', () => {
    shallow(<ScoreDisplay />)
  })

})