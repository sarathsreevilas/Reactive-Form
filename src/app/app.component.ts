import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'reactive-form';
  constructor(private fb:FormBuilder){}

     regiestrationForm = this.fb.group({

      firstName:['Smugler'],
      lastName:[''],
      phone:[''],
      email:['']
     })

  
     get f(){
      return this.regiestrationForm.controls;
     }
  
     onsubmit(){
      console.log('clicked');
      console.log('f',this.f);
      
      
     }
}
