import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User as UserModel } from '@cv-maker/api-interfaces';

import { UsersDataService } from '../../users-data.service';

@Component({
  selector: 'cv-maker-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users$!: Observable<UserModel[]>;
  constructor(private dataService: UsersDataService) {}

  ngOnInit(): void {
    this.users$ = this.dataService.getAll();
  }
}
