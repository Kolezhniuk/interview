import { ChangeDetectionStrategy, Component, OnInit, Inject, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { EventBusService } from '../services/event-bus.service';
import { Events, EmitEvent } from '../models/EmitEvent';
import { TextPreprocessingService } from '../services/text-preprocesing.service';
import { from } from 'rxjs/internal/observable/from';
import { Observable } from 'rxjs';
import { DataMuseAPIService } from '../services/data-muse-api.service';
import { ModalService } from '../services/modal.service';
import { DataMuseResponse } from '../models/DataMuseResponse';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  selectedText: string;
  wholeText: string;
  selectedWordId: string;
  bodyText: string;
  suggestions$: Observable<DataMuseResponse[]>
  @ViewChild('content') content: ElementRef

  constructor(private textService: TextService,
    private eventBusService: EventBusService,
    private textPreprocesingService: TextPreprocessingService,
    private dataMuseAPIService: DataMuseAPIService,
    private modalService: ModalService) {
  }

  ngOnInit() {
    from(this.textService.getMockText()).subscribe(data => {
      this.wholeText = this.textPreprocesingService.wrapWordsWithSpan(data);
      this.content.nativeElement.innerHTML = this.wholeText
    });
    this.dataMuseAPIService.getSynonyms('test');
    this.subscribeEvents();
    this.bodyText = 'This text can be updated in modal 1';

  }

  subscribeEvents() {
    this.eventBusService.on(Events.BoldChoosed, () => {
      this.textPreprocesingService.makeBold(this.selectedWordId);
    });
    this.eventBusService.on(Events.ItalicChoosed, () => {
      this.textPreprocesingService.makeItalic(this.selectedWordId);
    });
    this.eventBusService.on(Events.UnderlineChoosed, () => {
      this.textPreprocesingService.makeUnderline(this.selectedWordId);
    });
  }

  handleDblClick($event) {
    this.selectedWordId = $event.target.id;
    const word = $event.target.innerText;
    this.suggestions$ = this.dataMuseAPIService.getSynonyms(word)

  }


  openModal(id: string) {
    this.eventBusService.on(Events.UnderlineChoosed, () => {
      this.textPreprocesingService.makeUnderline(this.selectedWordId);
    });
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
