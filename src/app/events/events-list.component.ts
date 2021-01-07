import { Component } from '@angular/core';

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
events = 
[
    {
      id: 1,
      name: 'Pharma Tech Expo (PTE)',
      date: '10/10/2020',
      time: '9:00 am',
      price: 5000,
      location: {
        address: 'Parade Ground',
        city: 'Chandigarh',
        country: 'India'
      },
    },
    {
      id: 2,
      name: 'Agile India Conference(AIC)',
      date: '11/10/2020',
      time: '10:00 am',
      price: 10000.00,  
      onlineUrl: 'https://2020.agileindia.org',
      location: {
          address: 'ITC Gardenia',
          city: 'Bengaluru',
          country: 'India'
      }, 
    },
    {
      id: 3,
      name: 'DigiMarCon India',
      date: '08/10/2020',
      time: '10:00 am',
      price: 4500,
      location: {
        address: 'Hyatt Regency',
        city: 'Gurgaon',
        country: 'India'
      }, 
    },
    {
      id: 4,
      name: 'Game Developer Conf(IGDC)',
      date: '31/10/2020',
      time: '8:00 am',
      price: 800.00,
      location: {
        address: 'International Convention Centre',
        city: 'Hyderabad',
        country: 'India'
      },    
    },
    {
      id: 5,
      name: 'Pune Photo Fair',
      date: '11/10/2020',
      time: '9:00 am',
      price: 6000.00,
      location: {
        address: 'Pandit Farms',
        city: 'Pune',
        country: 'India'
      },
    }
]
}
