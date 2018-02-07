import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://loremflickr.com/320/240/dog';



  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  
  constructor() { }

  ngOnInit() {
  }

}
