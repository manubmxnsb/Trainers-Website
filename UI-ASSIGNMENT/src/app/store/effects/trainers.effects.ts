import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { TrainerService } from "src/app/features/trainer/trainer.service";
import * as TrainerActions from 'src/app/store/actions/trainers.actions';


@Injectable()
export class trainerEffects {
    getTrainers$ = createEffect(() => 
        this.actions$.pipe(
            ofType(TrainerActions.getTrainers), 
            mergeMap(() => {
                return this.trainerService.getTrainers().pipe(
                    map(trainers => TrainerActions.getTrainersSuccess({trainers})),
                        catchError((error) =>
                            of(TrainerActions.getTrainersFailure({error : 'Action Get Trainers Failed'}))
                    )
                );
            })
        )
    );
    constructor(private actions$ : Actions, private trainerService:TrainerService) {}
}
