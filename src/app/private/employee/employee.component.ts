import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  color="yellow";
  constructor() { }

  ngOnInit(): void {
  }
  value='Custom Pipe.........'
  employee= [
    {
     id:'101',
     name:'chaman',
     designation:'angular trainee',
     salary:'10000',
     dob:'12-10-1998',
     lastname:'singh'
     
    },
    {
     id:'102',
     name:'Abhishek',
     designation:'angular trainee',
     salary:'10000',
     dob:'12-10-1998',
    lastname:'kumar'
    },
    {
     id:'103',
     name:'himanshu',
     designation:'angular trainee',
     salary:'10000',
     dob:'12-10-1998',
     lastname:''
    },
    {
     id:'104',
     name:'Harsh',
     designation:'angular trainee',
     salary:'10000',
     dob:'12-10-1998',
     lastname:''
    },
    {
     id:'105',
     name:'rohan',
     designation:'angular trainee',
     salary:'10000',
     dob:'12-10-1998',
     lastname:''
    }
  ]

}
