import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../services/operations.service';
import { Operation } from '../../models/operations';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  operations: Operation[] = [];

  constructor(private operationsService: OperationsService) {}

  ngOnInit(){
    this.operationsService.getOperations().subscribe(
      res => {
        this.operations = res;
      },
      err => console.error(err)
    );
  }

  delete(id: string){
    this.operationsService.deleteOperation(id).subscribe(
      res => {
        this.operations = res;
      },
      err => console.error(err)
    );
  }


}
