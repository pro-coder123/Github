import { Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { Component, OnInit} from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  public test:boolean;
  public res: any;
  private rep_url = "https://api.github.com/users/pro-coder123/repos";
  private _url = " https://api.github.com/user/repos";

  private search_url = "";

  public search_results: any;

  public clicked : any;
  public isclicked = false;

  public toDelete : string;
  

  
  ngOnInit() {
    
    this.test=false;
    this.http.get(this.rep_url).subscribe(res => {
      this.res = res;
    });
    
  }
  options = {
    headers: new HttpHeaders({ 'Authorization': 'token ' })
  }

  
  myObj: any;
  fire(val) {
   
    this.myObj = {
      "name": val,
      "auto_init": true,
      "private": false,
      "gitignore_template": "nanoc"

    };
    
    this.http.post(this._url, this.myObj, this.options).subscribe(s => {
      this.res.push(s);
    });

  }


  change(reps)
  {
    this.clicked=reps;
    this.isclicked=true;
  }
  set(value)
  {
    this.toDelete = value;
  }
  del()
  {
    console.log(this.toDelete);
    let delete_url="https://api.github.com/repos/pro-coder123/"+this.toDelete;
    this.http.delete(delete_url,this.options).subscribe(x => {

      this.res = this.res.filter(item => item.name !== this.toDelete);

    });

  }
  Search(_search)
  {
      if(_search == "")
        return;
      this.search_url="https://api.github.com/search/repositories?q="+_search+"&sort=stars&order=desc";
      this.http.get(this.search_url).subscribe(res => {this.search_results=res;});
      this.test=true;
     
  }
}
