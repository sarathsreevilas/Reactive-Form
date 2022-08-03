import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'reactive-form';
  constructor(private fb:FormBuilder){}

    submit=false

     regiestrationForm = this.fb.group({

      firstName:['Smugler', Validators.required],
      lastName:['', Validators.required],
      phone:['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email:['', [Validators.required, Validators.email]]
     })

  
     get f(){
      return this.regiestrationForm.controls;
     }
  
     onsubmit(){
      this.submit=true
      console.log('clicked');
      console.log('f',this.f);
      
      
     }
}

