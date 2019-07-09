import {IDataMuseState} from '../../models/IDataMuseState';

export interface IAppState {
    text: ITextState;
    suggestions: IDataMuseState;
}

export interface ITextState {
    text: string;
}

export const initialTextState: ITextState = {
    text: null
};
export const initialSuggestionState: IDataMuseState = {
    word: null,
    isLoading: false,
    tags: []
};

