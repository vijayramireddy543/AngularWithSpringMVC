import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/interfaces';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  users: User[];

      constructor(private userService: UserService) {
      }

      ngOnInit() {
        this.userService.findAll().subscribe(data => {
          this.users = data;
        });
      }

}
