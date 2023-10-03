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
}