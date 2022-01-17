import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes'
import { ErrorsComponent } from './errors/errors.component'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    ErrorsComponent,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, EventRouteActivator,EventListResolver,AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkModifiedState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkModifiedState(component : CreateEventComponent){
  if(component.isModified)
    return window.confirm('you have not saved this event, do you really wish to cancel?')
  return true
}
