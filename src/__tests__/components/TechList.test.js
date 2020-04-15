import React from 'react';
// render cria um dom fake para teste
import {render, fireEvent, cleanup } from '@testing-library/react';

import TechList from '~/components/TechList';

// describe para descrição dos testes
describe('TechList component', () => {

  beforeEach(() => {
    localStorage.clear();
  })

  //it -> descrever a funcionalidade que se esperá ou comportamento esperado
  it('should be able to add new tech', () => {
    const { getByText, getByTestId, getByLabelText }  = render(<TechList/>);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByLabelText('Tech')).toHaveValue('');

  });

  it('should store techs in storage', async () => {
    let { getByText, getByTestId, getByLabelText }  = render(<TechList/>);
    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));
    
    await cleanup();
    ({ getByText, getByTestId, getByLabelText } = render(<TechList/>));

    expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['Node.js']));
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));

  });
});