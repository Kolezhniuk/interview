import {Action} from '@ngrx/store';

export enum EFontButtonsAction {
    ItalicButtonChanged = '[Control Panel] ItalicButtonChanged',
    BoldButtonChanged = '[Control Panel] BoldButtonChanged',
    UnderlineButtonChanged = '[Control Panel] UnderlineButtonChanged',
    ChangeSelectedText = '[Control Panel] -> [TextActions] Change Selected Text'

}

export class ItalicButtonChanged implements Action {
    public readonly type = EFontButtonsAction.ItalicButtonChanged;
}
export class BoldButtonChanged implements Action {
    public readonly type = EFontButtonsAction.BoldButtonChanged;
}

export class UnderlineButtonChanged implements Action {
    public readonly type = EFontButtonsAction.UnderlineButtonChanged;
}
export class ChangeSelectedText implements Action {
    public readonly type = EFontButtonsAction.ChangeSelectedText;
}
export type FontButtonsAction =
    | ItalicButtonChanged
    | ChangeSelectedText
    | UnderlineButtonChanged
    | BoldButtonChanged;
