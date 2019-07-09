import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IAppState} from '../store/state/app.state';
import {select, Store} from '@ngrx/store';
import {selectSuggestions, selectSuggestionsLoading, selectText} from '../store/selectors/text.selector';
import {GetSynonimus, GetText} from '../store/actions/text.actions';

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
    modalOffset = 20;

    suggestions$ = this.store.pipe(select(selectSuggestions));
    showDialog: boolean;
    isLoading$ =  this.store.pipe(select(selectSuggestionsLoading));

    xPosition: string;
    yPosition: string;

    @ViewChild('content') content: ElementRef;


    text$ = this.store.pipe(select(selectText));

    constructor(private store: Store<IAppState>) {
    }

    ngOnInit() {
        this.store.dispatch(new GetText());
    }


    handleDblClick($event) {
        const word = window.getSelection().toString().trim();
        if (word) {
            this.showDialog = true;
            this.store.dispatch(new GetSynonimus({tags: null, isLoading: true, word: word}));
            this.xPosition = `${$event.pageX + this.modalOffset}px`;
            this.yPosition = `${$event.pageY + this.modalOffset}px`;
        }
    }
}
