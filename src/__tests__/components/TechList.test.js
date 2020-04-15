import React from 'react';
// render cria um dom fake para teste
import {render, fireEvent} from '@testing-library/react';

import TechList from '~/components/TechList';

// describe para descrição dos testes
describe('TechList component', () => {

  //it -> descrever a funcionalidade que se esperá ou comportamento esperado
  it('should be able to add new tech', () => {
    const { getByText, getByTestId, getByLabelText, debug }  = render(<TechList/>);

    // debug();
    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));
    // debug();

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByLabelText('Tech')).toHaveValue('');

  });

});