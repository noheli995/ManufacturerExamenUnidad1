import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private router: Router,
    // public apiService: ApiService,
    // private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.Clientes
  }

  login() {

    this.router.navigate(['/login']);
    
  }
  Clientes (){
    
    let data = {
          "appname": "",
          "sp": "dbo.Clientes",
          "params": [1]

    }
  }



}
