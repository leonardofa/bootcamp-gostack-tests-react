import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import {addTech} from '~/store/modules/techs/actions';
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

  it('should be able do add new tech', () => {
    const { getByTestId, getByLabelText }  = render(<TechList/>);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    //mocando o comportamento para o useSelector do compoennte - Teste End to End
    useSelector.mockImplementation(cb => cb({
      techs:['Node.js', 'ReactJS']
    }));

    fireEvent.change(getByLabelText('Tech'), { target: { value:  'Node.js'} });
    fireEvent.submit(getByTestId('tech-form'));

    expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'));
  });
});