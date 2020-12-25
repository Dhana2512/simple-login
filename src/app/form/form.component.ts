import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data: any = {
    email: '',
    password: '',
    id: ''
  }
  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) this.getUserDetail(id);
  }

  //createUser
  async createUser() {
    try {
      if(!this.data.id){
        await this.formService.createUserList(this.data);
        return this.router.navigate(['/table']);
      }
      await this.formService.updateUserList(this.data);
        return this.router.navigate(['/table']);
    }
    catch (error) {
      console.error(error);
    }
  }

  //login user
  async login() {
    try {
      const result = await this.formService.loginUserList(this.data);
      alert('success');
      this.router.navigate(['/table']);
    }
    catch (error) {
      console.error(error);
      alert('Invalid Credentials');
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
      alert('Invalid Credentials');
    }
  }

}
