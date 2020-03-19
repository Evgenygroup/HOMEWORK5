import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor() { }

  public  print(requestDataForm: any): void  {
    console.log( requestDataForm);

  }
}
