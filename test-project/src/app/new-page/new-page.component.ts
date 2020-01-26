import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  changePage() {
    this.router.navigateByUrl('/giorgi');
  }
}
