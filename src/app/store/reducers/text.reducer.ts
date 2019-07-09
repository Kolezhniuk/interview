import {ETextActions, TextActions} from '../actions/text.actions';
import {initialTextState, ITextState} from '../state/app.state';

export const textReducer = (state = initialTextState, action: TextActions): ITextState => {
    switch (action.type) {
        case ETextActions.GetTextSuccess: {
            return {
                ...state,
                text: action.payload.text
            };
        }
        default:
            return state;
    }
};

