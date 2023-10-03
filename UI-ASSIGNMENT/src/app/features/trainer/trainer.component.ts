import { Component, OnInit } from '@angular/core';
import { TrainerInterface } from './trainer.model';
import { Observable } from 'rxjs';
import * as TrainerActions from 'src/app/store/actions/trainers.actions';
import { Store, select } from '@ngrx/store';
import { TrainerService } from './trainer.service';
import { errorSelector, isLoadingSelector, trainersSelector } from 'src/app/store/selectors/trainer.selectors';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit{
  displayedColumns: string[] = ['Trainer Name', 'Sex', 'Age', 'Years of Experience', 'isAvailable','City'];
  $isLoading: Observable<boolean>;
  $error: Observable<string | null>;
  $trainers: Observable<TrainerInterface[]>;

  constructor(private store:Store, public trainerService:TrainerService) {
    this.$isLoading = this.store.pipe(select(isLoadingSelector));
    this.$error = this.store.pipe(select(errorSelector));
    this.$trainers = this.store.pipe(select(trainersSelector));
  }
  ngOnInit() {
    this.store.dispatch(TrainerActions.getTrainers());
  }

}
