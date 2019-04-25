import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService]
})

export class UserComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
  this.userService.getUsers().subscribe((data: any[]) => {
    console.log(data);
    this.users = data;
  });
  }
}
