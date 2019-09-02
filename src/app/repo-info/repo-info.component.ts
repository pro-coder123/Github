import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.css']
})
export class RepoInfoComponent implements OnInit {

  constructor() { }

   @Input("data") public data; 
   @Input("is") public is;

  ngOnInit() {
      console.log(this.is);
    
  }

}
