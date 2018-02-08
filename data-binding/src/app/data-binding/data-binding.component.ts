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

  valorAtual:string = "";
  valorSalvo:string = "";
  isMouseOver:boolean = false;

  nome: string = "abc";

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  //DATA BINDING
  btnClick(){
    console.log("Aprende saporra");
  }

  onKeyUp(evento){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
