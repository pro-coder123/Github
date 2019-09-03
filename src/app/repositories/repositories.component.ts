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

  public chosen : string;
  public chosen_obj : any;
  
  public favourite : any;

  
  ngOnInit() {
    
    this.test=false;
    this.http.get(this.rep_url).subscribe(res => {
      this.res = res;
    });
    
    this.http.get("http://localhost:3000/favourites").subscribe(x => {
      this.favourite = x;
    console.log(x);
    }
      );
  }
  options = {
    headers: new HttpHeaders({ 'Authorization': 'token 0f0e44cb78c99ca12c529126a62ba5cb756bd7ab' })
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
  set(value,obj)
  {
    this.chosen = value;
    this.chosen_obj=obj;
  }
  del()
  {
    console.log(this.chosen);
    let delete_url="https://api.github.com/repos/pro-coder123/"+this.chosen;
    this.http.delete(delete_url,this.options).subscribe(x => {

      this.res = this.res.filter(item => item.name !== this.chosen);
      this.favourite = this.favourite.filter(item => item.id !== this.chosen_obj.id);
    });

  }
  add()
  {
    let add_url = "http://localhost:3000/favourites";
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})

    }
    this.http.post(add_url,this.chosen_obj,options).subscribe(s => {
      this.favourite.push(s);
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


  remove()
  {
    let del_url="http://localhost:3000/favourites/"+this.chosen_obj.id;
    let opt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})

    }
    this.http.delete(del_url,opt).subscribe(x => {

      this.favourite = this.favourite.filter(item => item.id !== this.chosen_obj.id);

    });

  }
}
