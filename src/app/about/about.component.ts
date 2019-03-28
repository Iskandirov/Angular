import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ownerName = "Ivanov Vasya Pypkin ";
  workplace = "Programmer";
  phonenumber = "+8805553535";
  email = "vasyapypkinthebest@gmail.com";
  age = "28";
  Living = "v.Zahalystie";
  WantedSalary = "999999999$";
  citizenship = "Ukraine";
  Language = "Russian(good),Ukrainian(native),English(colloquial)";
  constructor() { }

  ngOnInit() {
  }

}
