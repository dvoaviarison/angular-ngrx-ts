import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-statesummary',
  imports: [
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './statesummary.component.html',
  styleUrl: './statesummary.component.css'
})
export class StatesummaryComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
}
