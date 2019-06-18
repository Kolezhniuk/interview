import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Events, EmitEvent } from '../models/EmitEvent';
@Injectable()
export class EventBusService {

    private subject = new Subject<any>();
    constructor() { }

    on(event: Events, action: any): Subscription {

        return this.subject.pipe(
            filter((e: EmitEvent) => e.name === event),
            map((e: EmitEvent) => e.value))
            .subscribe(action);
    }
    emit(event: EmitEvent) {
        this.subject.next(event);
    }

}
