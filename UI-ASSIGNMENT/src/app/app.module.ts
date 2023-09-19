import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTrainerComponent } from './features/trainer/edit-trainer/edit-trainer.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { trainerEffects } from './store/effects/trainers.effects';
import { trainerReducer } from './store/reducers/trainers.reducer';
import { HeaderComponent } from './header/header.component';
import { TrainerModule } from './features/trainer/trainer.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TrainerService } from './features/trainer/trainer.service';

@NgModule({
  declarations: [
    AppComponent,
    EditTrainerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    TrainerModule,
    AppRoutingModule,
    StoreModule.forRoot({
      trainer:trainerReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true,
    }),
    EffectsModule.forRoot([trainerEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [TrainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
