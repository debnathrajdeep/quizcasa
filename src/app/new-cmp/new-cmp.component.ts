import { Component, OnInit, Injectable } from '@angular/core';
import { ApiService } from '../apiservice';
import * as _ from 'lodash';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
@Injectable()
export class NewCmpComponent implements OnInit {

  
  questionList:any;
  selectedQuestion:any;
  isUpdateSuccess:String;

  constructor(
    private api: ApiService) { }

  ngOnInit() {
    this.getAllQuestion();
  }

  getAllQuestion(): any {
    this.isUpdateSuccess = "";
    this.questionList = this.api.getAll();
    

    this.selectedQuestion = _.find(this.questionList, {"Id":"1"});
  }

  showPatientDetails(patientId:String) {
    this.selectedQuestion = _.find(this.questionList, {"Id":patientId});
    console.log(this.selectedQuestion);
  }

  saveComments(){
    
  }

  close(patientId:String){
    
  }

}
