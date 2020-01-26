import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giorgi',
  templateUrl: './giorgi.component.html',
  styleUrls: ['./giorgi.component.css']
})
export class GiorgiComponent implements OnInit {

tmp: string[] = [];

  constructor(private router: Router) {
    this.tmp.push('aaa');
    this.tmp.push('bbb');
    this.tmp.push('ccc');
   }

  ngOnInit() {
  }

  String1: string;
  first: string;
  second: string;
  third: string;
  showDiv = false;


  changePage() {
    this.router.navigateByUrl('');
  }


  ChangeValue() {
    this.third = this.first;
    this.first = this.second;
    this.second = this.third;

  }

}
