import { TrainerInterface } from "src/app/features/trainer/trainer.model";

export interface TrainerStateInterface {
    isLoading : boolean;
    trainers : TrainerInterface[];
    error : string | null;
}