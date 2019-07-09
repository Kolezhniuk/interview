import {createSelector} from '@ngrx/store';
import {IAppState, ITextState} from '../state/app.state';
import {IDataMuseState} from '../../models/IDataMuseState';

export const selectText = createSelector(
    (state: IAppState) => state.text,
    (state: ITextState) => state.text
);
export const selectSuggestions = createSelector(
    (state: IAppState) => state.suggestions,
    (state: IDataMuseState) => state.tags
);
export const selectSuggestionsLoading = createSelector(
    (state: IAppState) => state.suggestions,
    (state: IDataMuseState) => state.isLoading
);
