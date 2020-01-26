import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor(private  router: Router) { }

  gio: string = "asd";
  

  ngOnInit() {
  }

  changePage() {
    this.router.navigateByUrl('/newpage');
  }

}
