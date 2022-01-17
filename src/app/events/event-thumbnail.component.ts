import { utf8Encode } from '@angular/compiler/src/util'
import { Component, Input } from '@angular/core'
import { IEvent } from './shared'

@Component({
    selector : 'event-thumbnail',
    template: `
    <div [routerLink]= "['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span [ngStyle]="getStartTimeStyle()" *ngSwitchCase="'8:00 am'">(Early Event)</span>
            <span [ngStyle]="getLateTimeStyle()" *ngSwitchCase="'10:00 am'">(Late Event)</span>
            <span [ngStyle]="getNormalTimeStyle()" *ngSwitchDefault>(Normal Event)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span>&nbsp;</span>
            <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
        Online URL : {{event?.onlineUrl}}
        </div>
   </div>
    `
})

export class EventThumbnailComponent{
    @Input() event : IEvent

    getStartTimeStyle()
    {
        if(this.event && this.event.time === '8:00 am')
            return {color: 'lightgreen','font-weight':'bold'}
        return {}
    }

    getNormalTimeStyle()
    {
        if(this.event)
            return {color: 'orange','font-weight':'bold'}
        return {}
    }

    getLateTimeStyle()
    {
        if(this.event && this.event.time === '10:00 am')
            return {color: 'red','font-weight':'bold'}
        return {}
    }
}
