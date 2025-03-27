import { Component } from '@angular/core';
import { MaterialModule } from '../../materail.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isShowPassword! : boolean
}
