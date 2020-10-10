
import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../services/operations.service';
import { UsersService } from './../../services/users.service';
import { Operation } from '../../models/operations';
import { User } from '../../models/users';

@Component({
  selector: 'app-operation-list-init',
  templateUrl: './operation-list-init.component.html',
  styleUrls: ['./operation-list-init.component.css']
})
export class OperationListInitComponent implements OnInit {

  user: User;
  operations: Operation[] = [];

  constructor(private operationsService: OperationsService, private usersService: UsersService) { }

  ngOnInit(){

    this.usersService.getUser(1).subscribe(
      res => {
        this.user = res;
      },
      err => console.error(err)
    );


    this.operationsService.getOperations().subscribe(
      res => {
        this.operations = res;
      },
      err => console.error(err)
    );
  }

}
