import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PreFilledForm';

  userData = {
    name:'Priya Bharambe',
    email: 'priyabharambe70@gmail.com',
    
    password: 'priya@123',
    address: '301, Waghjai Nagar, Pune, Maharashtra',
    mobile: 856048321
    }
}
