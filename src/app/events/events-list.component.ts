import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Technology Events in India</h1>
            <hr/>
            <div class="row">
              <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event"></event-thumbnail>
              </div>
            </div>
        </div>
    `
})

export class EventsListComponent
{
  events : IEvent[]
  constructor(private eventService : EventService, private route:ActivatedRoute){

  }

  ngOnInit(){
   this.events = this.route.snapshot.data['events']
  } 
}
