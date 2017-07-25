/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  CREATE_MESSAGE,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from './constants';
import { reducer as reduxFormReducer } from 'redux-form/immutable'



import languageProviderReducer from 'containers/LanguageProvider/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

const contactInitialState = fromJS({
  isCreatingMessage: false,
  modalIsOpen: false,
});

function contactReducer(state = contactInitialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return state.set('isCreatingMessage', fromJS(action.payload));
    case CREATE_MESSAGE_SUCCESS:
      return state.set('isCreatingMessage', fromJS(action.payload));
    case CREATE_MESSAGE_FAILURE:
      return state.set('isCreatingMessage', fromJS(action.payload));
    case OPEN_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload));
    case CLOSE_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload));
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    contact: contactReducer,
    form: reduxFormReducer,
    ...asyncReducers,
  });
}
