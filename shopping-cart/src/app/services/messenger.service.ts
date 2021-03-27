import { Injectable } from '@angular/core';
import { Subject } from 'rxjs' //this helps us to trigger something or listen to something, you can know more about messenger service, visit reactivex.io

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  //This method will be called from product Item
  sendMsg(product) {
    this.subject.next(product); //Triggering an event
    // console.log(product);
  }

  //This method will be called inside the cart component
  getMsg() {
    return this.subject.asObservable(); //subscribe whatever is being triggered
  }
}
