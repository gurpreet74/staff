import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm:FormGroup;
  constructor(public fb:FormBuilder,
    private loginService:LoginService,
    private route:Router
    ) {
 
   }


  ngOnInit(): void {
    this.userForm = this.fb.group({
       email:['',[Validators.required]],
       password:['',[Validators.required]],
       checkbox:['']
    });
  }

  get getControl(){
    return this.userForm.controls;
  }
  
  onSubmit(){
    this.route.navigate(['dashboard']);
    console.log(this.userForm);
    this.loginService.login(this.userForm)
    .subscribe(response => {
      console.log(response);
    },error=>{
      console.log(error);
    });

  }

}
