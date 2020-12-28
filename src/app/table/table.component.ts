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
  async retriveUser():Promise<void> {
    try {
      const result = await this.formService.retriveUserList();
      this.customers = result;
    }
    catch (error) {
      console.error(error);
    }
  }

  //delete user
  async delete(id, index):Promise<void> {
    try {
      await this.formService.delete(id);
       this.customers.splice(index, 1);
    }
    catch (error) {
      console.error(error);
    }
  }

  //update user
  async update(id):Promise<void> {
    try {
      this.router.navigate([`/form/${id}`])
    }
    catch (error) {
      console.error(error);
    }
  }
}
