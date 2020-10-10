
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Operation } from '../models/operations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  API_URL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getOperations(): any{
    return this.http.get(this.API_URL + 'operations');
  }

  getOperation(id: string): any{
    return this.http.get(this.API_URL + 'operations/${id}');
  }

  deleteOperation(id: string): any{
    return this.http.delete(this.API_URL + 'operations/${id}');
  }

  saveOperation(operation: Operation): any{
    return this.http.post(this.API_URL + 'operations', operation);
  }
  updateOperation(id: string, updateOperation: Operation): Observable<Operation>{
    return this.http.put(this.API_URL + 'operations/${id}', updateOperation);
  }

}
