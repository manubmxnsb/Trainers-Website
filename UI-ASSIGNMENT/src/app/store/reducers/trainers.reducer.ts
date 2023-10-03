import { createReducer, on } from '@ngrx/store';
import { TrainerStateInterface } from '../interfaces/trainers.interface';
import * as TrainerActions from '../actions/trainers.actions';


const initialTrainersState: TrainerStateInterface = {
  isLoading: false,
  trainers: [],
  error: null,
};

export const trainerReducer = createReducer(
    initialTrainersState,
  on(TrainerActions.getTrainers, (state) => ({ ...state, isLoading: true })),
  on(TrainerActions.getTrainersSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    trainers: action.trainers,
  })),
  on(TrainerActions.getTrainersFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
