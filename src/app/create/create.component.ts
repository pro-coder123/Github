import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }
  _url = " https://api.github.com/user/repos";
  fire()
  {
      this.http.post
  }
}
