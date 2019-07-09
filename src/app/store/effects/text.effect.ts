import {Injectable} from '@angular/core';
import {TextService} from '../../text-service/text.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ETextActions, GetText, GetTextSuccess} from '../actions/text.actions';
import {ITextState} from '../state/app.state';

@Injectable()
export class TextEffect {
    @Effect()
    getText$ = this.actions$.pipe(
        ofType<GetText>(ETextActions.GetText),
        switchMap(() => this.textService.getMockText()),
        switchMap((text: ITextState) => {
            return of(new GetTextSuccess(text));
        }),
    );

    constructor(private textService: TextService, private actions$: Actions) {
    }
}
