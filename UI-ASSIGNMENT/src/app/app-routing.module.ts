import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerModule } from './features/trainer/trainer.module';
import { TrainerComponent } from './features/trainer/trainer.component';

const routes: Routes = [
  { path: '', component:TrainerComponent}
/*   { path: '/{id}'}
 */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
