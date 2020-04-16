import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import TechList from '~/components/TechList';

jest.mock('react-redux');

describe('TechList component', () => {
  it('should render tech list', () => {

    //mocando o comportamento para o useSelector do compoennte - Teste End to End
    useSelector.mockImplementation(cb => cb({
      techs:['Node.js', 'ReactJS']
    }));

    const { getByText, getByTestId, getByLabelText }  = render(<TechList/>);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
    expect(getByLabelText('Tech')).toHaveValue('');
  });
});