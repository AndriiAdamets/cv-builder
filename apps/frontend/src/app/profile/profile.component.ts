import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'cv-maker-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser!: any;

  constructor(private usersData: UsersDataService) {}

  ngOnInit() {
    this.usersData.getCurrent().subscribe({
      next: (currentUser) => {
        this.currentUser = currentUser;
      },
    });
  }
}
