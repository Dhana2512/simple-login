import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  customers: any = [];

  constructor(private formService: FormService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retriveUser();
  }


  //retrive userlist
  async retriveUser() {
    try {
      const result = await this.formService.retriveUserList();
      this.customers = result;
    }
    catch (error) {
      console.error(error);
    }
  }

  //delete user
  async delete(id, index) {
    try {
      await this.formService.deleteUserList(id);
       this.customers.splice(index, 1);
    }
    catch (error) {
      console.error(error);
    }
  }

  //update user
  async update(id) {
    try {
      this.router.navigate([`/form/${id}`])
    }
    catch (error) {
      console.error(error);
    }
  }
}
