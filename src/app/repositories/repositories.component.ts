import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../functions.service';
import { Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor(private _service : FunctionsService, private http : HttpClient) {

   }
   public header = "Authorization: token 03e0f9340303b001a87b63a0fbad1b0c21732b46"

   public res : any;
   private rep_url ="https://api.github.com/users/pro-coder123/repos";
  ngOnInit() {

      this.http.get(this.rep_url).subscribe(res => this.res = res);
  }

  _url = " https://api.github.com/user/repos";
  myObj: any;
  fire(val) {
    this.myObj = {
      "name": val,
      "auto_init": true,
      "private": false,
      "gitignore_template": "nanoc"

    };
    let options = { 
      headers: new HttpHeaders({ 'Authorization': 'token 03e0f9340303b001a87b63a0fbad1b0c21732b46' }) 
    }

    this.http.post(this._url, this.myObj, options).subscribe(s => this.res.push(s));
    
  }
}
