import { ChangeDetectionStrategy, Component, OnInit, Inject, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { EventBusService } from '../services/event-bus.service';
import { Events, EmitEvent } from '../models/EmitEvent';
import { TextPreprocessingService } from '../services/text-preprocesing.service';
import { from } from 'rxjs/internal/observable/from';
import { Observable, Subscription } from 'rxjs';
import { DataMuseAPIService } from '../services/data-muse-api.service';
import { DataMuseResponse } from '../models/DataMuseResponse';
import { map, debounceTime, distinctUntilChanged, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit, OnDestroy {


  selectedText: string;
  wholeText: string;
  selectedWordId: string;
  bodyText: string;
  suggestions$: Observable<DataMuseResponse[]>;
  showDialog: boolean;
  boldSubscription$: Subscription;
  italicSubscription$: Subscription;
  underlineSubscription$: Subscription;
  xPosition: string;
  yPosition: string;

  @ViewChild('content') content: ElementRef

  constructor(private textService: TextService,
    private eventBusService: EventBusService,
    private textPreprocesingService: TextPreprocessingService,
    private dataMuseAPIService: DataMuseAPIService) {
  }

  ngOnInit() {
    from(this.textService.getMockText()).subscribe(data => {
      this.wholeText = this.textPreprocesingService.wrapWordsWithSpan(data);
      this.content.nativeElement.innerHTML = this.wholeText
    });
    this.subscribeEvents();

  }

  subscribeEvents() {
    this.boldSubscription$ = this.eventBusService.on(Events.BoldChoosed, () => {
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
    const offset = 20;
    this.xPosition = `${$event.pageX + offset}px`;
    this.yPosition = `${$event.pageY + offset}px`;
    this.suggestions$ = this.dataMuseAPIService.getSynonyms(word)
      .pipe(
        debounceTime(50),
        distinctUntilChanged(),
        finalize(() => this.showDialog = true)
      );
  }



  ngOnDestroy(): void {
    this.boldSubscription$.unsubscribe();
    this.italicSubscription$.unsubscribe();
    this.underlineSubscription$.unsubscribe();
  }
}
