import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {
  constructor(private authService: AuthService, private route:Router) {}

  ngOnInit(): void {
    this.authService.signOut().subscribe(() => {
      this.route.navigateByUrl('/')
    });
  }
}
