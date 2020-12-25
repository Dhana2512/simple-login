import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import {Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data: any = {
    email: '',
    password: '',
  }
  id = ''
  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    if(id) this.getUserDetail(id);
  }

  //createUser
  async createUser() {
    try {
      if(!this.id){
        await this.formService.createUserList(this.data);
      Swal.fire('Created');
        return this.router.navigate(['/table']);
      }
      await this.formService.updateUserList(this.data);
      Swal.fire('Updated');
        return this.router.navigate(['/table']);

    }
    catch (error) {
      console.error(error);
    }
  }

  //login user
  async login() {
    try {
      await this.formService.loginUserList(this.data);
      Swal.fire('success!');
      this.router.navigate(['/table']);
    }
    catch (error) {
      console.error(error);
      Swal.fire('Invalid Credentials!');
      // alert('Invalid Credentials');
    }
  }

  async getUserDetail(id) {
    try {
      const result: any = await this.formService.retriveParticularUser(id);
      delete result.password;
      this.data = result;
    }
    catch (error) {
      console.error(error);
    }
  }

}
