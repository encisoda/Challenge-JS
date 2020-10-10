
import { Component, HostBinding, OnInit } from '@angular/core';
import { Operation } from './../../models/operations';
import { OperationsService } from '../../services/operations.service';
import { Router, RouterPreloader } from '@angular/router';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css']
})
export class OperationFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  operation: Operation = {
    id: 0,
    concept: '',
    amount: 0,
    type: '',
    id_category: 1,
    id_user: 1,
    date: new Date()

  };

  constructor(private operationsService: OperationsService, private router: Router) { }

  ngOnInit(): void {
  }

  saveNewOperation() {
    delete this.operation.date;
    delete this.operation.id;

    this.operationsService.saveOperation(this.operation).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.error(err)
    )

  }

}
