import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { StatesummaryComponent } from './statesummary/statesummary.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'counter',
        component: CounterComponent,
        title: 'Counter'
    },
    {
        path: 'statesummary',
        component: StatesummaryComponent,
        title: 'State Summary'
    }
];
