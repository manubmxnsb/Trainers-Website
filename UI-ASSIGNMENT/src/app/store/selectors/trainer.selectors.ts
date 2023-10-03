import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TrainerStateInterface } from "../interfaces/trainers.interface";


export const selectFeature = createFeatureSelector<TrainerStateInterface>('trainers');
export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
);
export const trainersSelector = createSelector(
    selectFeature,
    (state) => state.trainers
);
export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
);