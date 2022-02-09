import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public loginForm: FormGroup|any;
  constructor(private router: Router, private formBuilder:FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['',Validators.required]

    })
  }

  get email(){ return this.loginForm.get("email");}
  get password(){ return this.loginForm.get("password");}

  ngOnInit(): void {}
  
  //Reactive Approach
  
  
  loginReactiveApproach():void{
    let userData = this.loginForm.value;
    console.log(userData);
    if(userData.email !== 'chamans@interrait.com'){
      this.loginForm.controls['email'].setErrors({'incorrect':true});
     } else if(userData.password !== 'chaman'){
      this.loginForm.controls['password'].setErrors({'incorrect':true});
     } else if(userData.email==='chamans@interrait.com' && userData.password ==='chaman' ){
       this.router.navigate(['private']);
     }
    // console.log(this.loginForm.value);
    // if (this.loginForm.value.email?.length > 0 && this.loginForm.value.password?.length > 0){
    //   this.router.navigate(['private']);
    // }

  }

  
  //Reactive Approach

}
