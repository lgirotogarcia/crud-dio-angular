import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  
  usersArr: Array<User> = [];
  
  constructor(private UserService: UserService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void {
    this.UserService.getUsers().subscribe(resp => {
      this.usersArr = resp;
    }, err => {
      console.log('Execution error', err)
    })
  }

  deleteUser(id: string):void {
    this.UserService.deleteUser(id).subscribe(resp => {
      console.log('User deleted');
      resp
    }, err => {
      console.log(err)
    }, () => {
      this.getUsers()
    })
  }
}
