import { Component } from '@angular/core';
import { User } from '@api/users/models';
import { UsersService } from '@api/users/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';

  showUsers = false;

  users$: Observable<User[]> = this.users.listUsers();

  constructor(private readonly users: UsersService) {}
}
