import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IAppState} from '../store/state/app.state';
import {Store} from '@ngrx/store';
import {BoldButtonChanged, ItalicButtonChanged, UnderlineButtonChanged} from '../store/actions/fontButtons.actions';

@Component({
    selector: 'app-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {


    constructor(private store: Store<IAppState>) {
    }

    processBold() {
        this.store.dispatch( new BoldButtonChanged());
    }

    processItalic() {
        this.store.dispatch(new ItalicButtonChanged());
    }

    processUnderline() {
        this.store.dispatch(new UnderlineButtonChanged());
    }
}

