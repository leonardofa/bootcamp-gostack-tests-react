import { runSaga } from 'redux-saga';
import { getTechs } from '~/store/modules/techs/saga';
import { getTechsSuccess } from '~/store/modules/techs/actions';

describe('Techs sagas', () => {
  it('Should be able to fetch techs', async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['Node.js']));

  });
});