import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor(
  ) {
  }
  
  public getAll() {
    return [{"Id":"1","Question":"Good", "Option1":"Good", "Option2":"Bad", "CorrectAnswer":"2"}];
  }

}
