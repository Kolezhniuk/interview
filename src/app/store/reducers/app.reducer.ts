import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {textReducer} from './text.reducer';
import {suggestionsReducer} from './suggestions.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
    text: textReducer,
    suggestions: suggestionsReducer
};
