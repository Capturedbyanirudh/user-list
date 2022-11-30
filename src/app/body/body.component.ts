import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  user:any
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getlist().subscribe((result: any)=>{

      console.log(result.users);
      this.user=result.users
      
    })



  }

}
