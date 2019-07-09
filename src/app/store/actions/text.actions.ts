import {Action} from '@ngrx/store';
import {ITextState} from '../state/app.state';
import {IDataMuseState} from '../../models/IDataMuseState';

export enum ETextActions {
    GetText = '[TextActions] Get Text',
    GetTextSuccess = '[TextActions] Get Text Success'
}

export class GetText implements Action {
    public readonly type = ETextActions.GetText;
}

export class GetTextSuccess implements Action {
    public readonly type = ETextActions.GetTextSuccess;

    constructor(public  payload: ITextState) {
    }
}

export type TextActions =
    | GetText
    | GetTextSuccess;


export enum DataMuseActionsEnum {
    GetSynonimus = '[DataMuseActionsEnum] Get Synonimus',
    GetSynonimusSuccess = '[DataMuseActionsEnum] Get Synonimus Success'
}

export class GetSynonimus implements Action {
    public readonly type = DataMuseActionsEnum.GetSynonimus;

    constructor(public  payload: IDataMuseState) {
    }
}

export class GetSynonimusSuccess implements Action {
    public readonly type = DataMuseActionsEnum.GetSynonimusSuccess;

    constructor(public  payload: IDataMuseState) {
    }
}

export type DataMuseActions =
    | GetSynonimus
    | GetSynonimusSuccess;
