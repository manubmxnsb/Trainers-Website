import { createAction, props } from '@ngrx/store';
import { TrainerInterface } from 'src/app/features/trainer/trainer.model';

export const getTrainers = createAction('[Trainers] Get Trainers');
export const getTrainersSuccess = createAction('[Trainers] Get Trainers Success', props<{trainers:TrainerInterface[]}>());
export const getTrainersFailure = createAction('[Trainers] Get Trainers Failure', props<{error:string}>());