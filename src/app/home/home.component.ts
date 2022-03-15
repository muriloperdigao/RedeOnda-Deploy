import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0)
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

}


