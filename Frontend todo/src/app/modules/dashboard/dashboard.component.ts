import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TodoService } from 'src/app/services/todo.service';
import * as _ from 'lodash';
import { TosterService } from 'src/app/services/toster.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private TodoService: TodoService,
    private TosterService: TosterService,
  ) {}
  createTodo = false;
  EditTodo=false;
  allItems: any;
  pagination: any;
  filter: any;
  totalPage = 0;
  paginationAray: any;
  toUpdateId=''
  todoItem = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(false),
  });
  parms = {};
  ngOnInit() {
    this.getTodo(this.parms);
  }

  filters() {
    this.parms = { ...{ sort: this.filter } };
    this.getTodo(this.parms);
  }
  updateTodo(item:any){
    console.log(item)
    this.EditTodo=true;
    this.toUpdateId=item._id
    this.todoItem.controls['name'].setValue(item.name);
    this.todoItem.controls['description'].setValue(item.description);
  }
  getTodo(parms: any) {
    parms = { ...parms, limit: 6 };
    this.TodoService.getTodo(parms).subscribe((res: any) => {
      console.log(res);
      this.allItems = res.data;
      if (this.filter == '-name')
        this.allItems = _.sortBy(this.allItems, [
          function (o) {
            return o.name;
          },
        ]);
      if (this.filter == '-createdAt')
        this.allItems = _.sortBy(this.allItems, [
          function (o:any) {
            return o.createdAt;
          },
        ]);

      this.pagination = res.pagination;
      this.totalPage = Math.ceil(this.pagination.total / this.pagination.limit);

      this.paginationAray = Array.from({ length: this.totalPage }, () =>
        Math.floor(Math.random() * 39)
      );
    });
  }

  updateStatus(item: any) {
    item.status = !item.status;
    this.TodoService.updateTodo(item).subscribe((res: any) => {
      this.getTodo(this.parms);
      this.TosterService.showSuccess(
        'Update Successfully'
      );
    });
  }

  deleteItem(id: any) {
    console.log(id);
    this.TodoService.delete({ _id: id.toString() }).subscribe((res) => {
      this.getTodo(this.parms);
      this.TosterService.showWarning(
        'Delete Successfully'
      );
    });
  }
  logout() {
    this.authService.logout();
  }

  paginations(page: number) {
    this.parms = { ...{ page: page } };
    this.getTodo(this.parms);
  }

  createAndUpdateTodoItem() {
    console.log(this.todoItem.value);
if(this.EditTodo)
{
  let item={_id:this.toUpdateId,
...this.todoItem.value
  }
  this.TodoService.updateTodo(item).subscribe((res: any) => {
    this.getTodo(this.parms);
    this.createTodo = !this.createTodo;
    this.TosterService.showSuccess(
      'Updated  Successfully'
    );
  });
  this.EditTodo=false
}else{
    this.TodoService.createTodo(this.todoItem.value).subscribe((res: any) => {
      this.getTodo(this.parms);
      this.createTodo = !this.createTodo;
      this.TosterService.showSuccess(
        'Item Added Successfully'
      );
    });
  }
  }
}
