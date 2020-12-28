import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {CreateUser} from '../user-interface/user-interface'



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data: CreateUser = {
    email: '',
    password: '',
  }
  id = '';
  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    if (id) this.getParticularUser(id);
  }

  //createUser
  async create(): Promise<void> {
    try {
      if (!this.id) {
        await this.formService.create(this.data);
        Swal.fire('Created');
        this.router.navigate(['/table']);
        return;
      }
      await this.formService.update(this.data);
      Swal.fire('Updated');
      this.router.navigate(['/table']);
    }
    catch (error) {
      console.error(error);
    }
  }

  //login user
  async login(): Promise<void> {
    try {
     const res: any = await this.formService.login(this.data);
      localStorage.setItem('AUTH_TOKEN',res.token)
      Swal.fire('success');
      this.router.navigate(['/table']);
    }
    catch (error) {
      console.error(error);
      Swal.fire('Invalid Credentials');
      // alert('Invalid Credentials');
    }
  }

  async getParticularUser(id):Promise<void> {
    try {
      const result: any = await this.formService.getParticularUser(id);
      delete result.password;
      this.data = result;
    }
    catch (error) {
      console.error(error);
    }
  }

}
