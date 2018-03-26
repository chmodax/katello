import Immutable from 'seamless-immutable';

import {
  GET_ORGANIZATION_REQUEST,
  GET_ORGANIZATION_SUCCESS,
  GET_ORGANIZATION_FAILURE,
  SAVE_ORGANIZATION_REQUEST,
  SAVE_ORGANIZATION_SUCCESS,
  SAVE_ORGANIZATION_FAILURE,
} from './OrganizationConstants';

const initialState = Immutable({ loading: false });

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORGANIZATION_REQUEST:
    case SAVE_ORGANIZATION_REQUEST:
      return state.set('loading', true);

    case GET_ORGANIZATION_SUCCESS:
    case SAVE_ORGANIZATION_SUCCESS: {
      return Immutable({ loading: false, ...action.response });
    }

    case GET_ORGANIZATION_FAILURE:
    case SAVE_ORGANIZATION_FAILURE:
      return Immutable({ error: action.error });

    default:
      return state;
  }
};
