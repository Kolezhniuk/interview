import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, tap} from 'rxjs/operators';
import {
    BoldButtonChanged,
    EFontButtonsAction,
    ItalicButtonChanged,
    UnderlineButtonChanged
} from '../actions/fontButtons.actions';

@Injectable()
export class FontButtonsEffect {
    @Effect({dispatch: false})
    getItalic$ = this.actions$.pipe(
        ofType<ItalicButtonChanged>(EFontButtonsAction.ItalicButtonChanged),
        tap(() => FontButtonsEffect.executeCommand('italic')),
        catchError(e => {
            throw new Error(e);
        })
    );

    @Effect({dispatch: false})
    getBold$ = this.actions$.pipe(
        ofType<BoldButtonChanged>(EFontButtonsAction.BoldButtonChanged),
        tap(() => FontButtonsEffect.executeCommand('bold')),
        catchError(e => {
            throw new Error(e);
        })
    );

    @Effect({dispatch: false})
    getUnderline$ = this.actions$.pipe(
        ofType<UnderlineButtonChanged>(EFontButtonsAction.UnderlineButtonChanged),
        tap(() => FontButtonsEffect.executeCommand('underline')),
        catchError(e => {
            throw new Error(e);
        })
    );

    constructor(private actions$: Actions) {
    }

   static executeCommand(command) {
        document.designMode = 'on';
        document.execCommand(command);
        document.designMode = 'off';
    }
}
