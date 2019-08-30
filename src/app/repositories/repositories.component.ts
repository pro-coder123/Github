import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../functions.service';
import { Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor(private _service : FunctionsService, private http : HttpClient) {

   }
   public res : any;
   private rep_url ="https://api.github.com/users/pro-coder123/repos";
  ngOnInit() {

      this.http.get(this.rep_url).subscribe(res => this.res = res);
  }

}
