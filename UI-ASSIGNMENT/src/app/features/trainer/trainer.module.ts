import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { TrainerService } from "./trainer.service";
import { TrainerComponent } from "./trainer.component";
import { trainerReducer } from "src/app/store/reducers/trainers.reducer";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [CommonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        StoreModule.forFeature('trainers', trainerReducer)],
    providers: [TrainerService],
    declarations: [TrainerComponent],
    exports: [TrainerComponent, MatInputModule],
})
export class TrainerModule {}