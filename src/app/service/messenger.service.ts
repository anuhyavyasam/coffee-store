import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class MessengerService{
subject = new Subject<any>();

    constructor(){}

    sendMessage(message: any){
        // console.log(product);
        this.subject.next(message); //Triggering an event
    }

    getMessage(): Observable<any>{
         return this.subject.asObservable();
    }

}