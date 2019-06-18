import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EventBusService } from '../services/event-bus.service';
import { Events } from '../models/EmitEvent';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {


  constructor(private eventBusService: EventBusService) { }

  processBold() {
    this.eventBusService.emit({ name: Events.BoldChoosed});
  }

  processItalic() {
    this.eventBusService.emit({ name: Events.ItalicChoosed});
  }

  processUnderline() {
    this.eventBusService.emit({ name: Events.UnderlineChoosed });
  }

}
