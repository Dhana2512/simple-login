import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http: HttpClient
  ) { }

  //create
  createUserList(data) {
    return this.http.post('http://localhost:4000/customers', data).toPromise();
  }

  //login
  loginUserList(data) {
    return this.http.post('http://localhost:4000/customers', data).toPromise();
  }

  //retrive
  retriveUserList() {
    return this.http.get('http://localhost:4000/customers').toPromise();
  }

  //delete
  deleteUserList(id){
    return this.http.delete(`http://localhost:4000/customers/${id}`).toPromise();
  } 

  //update
  updateUserList(data){
    return this.http.put(`http://localhost:4000/customers/${data.id}`,data).toPromise();
  }

  //retrive particular user
  retriveParticularUser(id){
    return this.http.get(`http://localhost:4000/users/${id}`).toPromise();
  }

}
