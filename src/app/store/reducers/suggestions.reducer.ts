import {initialSuggestionState} from '../state/app.state';
import {DataMuseActions, DataMuseActionsEnum} from '../actions/text.actions';
import {IDataMuseState} from '../../models/IDataMuseState';

export const suggestionsReducer = (state = initialSuggestionState, action: DataMuseActions): IDataMuseState => {
    switch (action.type) {
        case DataMuseActionsEnum.GetSynonimus: {
            return {
                tags: [],
                isLoading: true,
                word: action.payload.word
            };
        }
        case DataMuseActionsEnum.GetSynonimusSuccess: {
            return {
                ...state,
                isLoading: false,
                tags: action.payload.tags
            };
        }
        default:
            return state;
    }

};
