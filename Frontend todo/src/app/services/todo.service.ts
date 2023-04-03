import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  entityUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  public createTodo(todoItem: any): Observable<any> {
    return this.http.post(this.entityUrl + 'todo', todoItem);
  }

  public updateTodo(todoItem: any): Observable<any> {
    return this.http.post(this.entityUrl + 'todo/updateStatus', todoItem);
  }

  public delete(id: any): Observable<any> {
    return this.http.post(this.entityUrl + 'todo/deleteById', id);
  }

  public getTodo(parms:any): Observable<any> {

    const headers = new HttpHeaders().append('header', 'value');
const params = new HttpParams().append('filterby',parms);
    return this.http.get(this.entityUrl + 'todo?'+new URLSearchParams(parms).toString() );
  }
}
