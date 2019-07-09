import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {DataMuseActionsEnum, GetSynonimus, GetSynonimusSuccess} from '../actions/text.actions';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {DataMuseAPIService} from '../../services/data-muse-api.service';

@Injectable()
export class SuggestionEffect {
    @Effect()
    getSuggestions$ = this.actions$.pipe(
        ofType<GetSynonimus>(DataMuseActionsEnum.GetSynonimus),
        switchMap(state => this.dataMuseAPI.getSynonymus(state.payload.word)),
        switchMap(payload => of(new GetSynonimusSuccess(payload))),
    );

    constructor(private dataMuseAPI: DataMuseAPIService, private actions$: Actions) {
    }
}
