import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  todosList: any [] = []; 
      constructor(private http: HttpClient) {
           
      }

      getTodos() {
         this.http.get('https://jsonplaceholder.typicode.com/todos')
            .subscribe((data:any) => {
               console.log(data);
               this.todosList = data;
            });
      }
}
