import { Injectable, OnInit } from '@angular/core';
import { TrainerInterface } from './trainer.model';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TrainerService {
  getTrainers(): Observable<TrainerInterface[]> {
    const trainers = [
      {name:'Alexandru Dumitrescu',sex:'male',age:25,yearsOfExperience:5,isAvailable:true,city:'Cluj'},
      {name:'Anuța Pop',sex:'female',age:26,yearsOfExperience:3,isAvailable:true,city:'Cluj'},
      {name:'Cătălin Pârvu',sex:'male',age:28,yearsOfExperience:1,isAvailable:true,city:'Cluj'},
    ];
    return of(trainers).pipe(delay(1000));
  }
  
  getAllTrainers(trainers$: Observable<TrainerInterface[]>): Observable<TrainerInterface[]> {
    return trainers$;}
}