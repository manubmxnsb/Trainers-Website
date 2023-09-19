import { Injectable, OnInit } from '@angular/core';
import { TrainerInterface } from './trainer.model';
import { Observable, delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WebRequestService } from 'src/app/web-request.service';

@Injectable({providedIn: 'root'})
export class TrainerService {

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<TrainerInterface[]> {
    console.log(this.http.get<TrainerInterface[]>("http://localhost:5130/api/trainers/all".toString()));
    return this.http.get<TrainerInterface[]>("http://localhost:5130/api/trainers/all");
  }
/*   getTrainers(): Observable<TrainerInterface[]> {
    const trainers = [
      {name:'Alexandru Dumitrescu',sex:'male',age:25,yearsOfExperience:5,isAvailable:true,city:'Cluj'},
      {name:'Anuța Pop',sex:'female',age:26,yearsOfExperience:3,isAvailable:true,city:'Cluj'},
      {name:'Cătălin Pârvu',sex:'male',age:28,yearsOfExperience:1,isAvailable:true,city:'Cluj'},
    ];
    return of(trainers).pipe(delay(1000));
  } */
  
  getAllTrainers(trainers$: Observable<TrainerInterface[]>): Observable<TrainerInterface[]> {
    return trainers$;}
}