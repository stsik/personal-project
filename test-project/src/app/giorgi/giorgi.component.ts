import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giorgi',
  templateUrl: './giorgi.component.html',
  styleUrls: ['./giorgi.component.css']
})
export class GiorgiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  String1: string

  changePage() {
    this.router.navigateByUrl('');
  }

}
