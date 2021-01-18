import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Cliente {
  nome: string;
  email: string;
  profissao: string;
}

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})

export class FuncionarioFormComponent implements OnInit {


  profissoes: any[] = ['Programador','Empresário','Outra'];
  cliente: Cliente = {
    nome: '',
    email: '',
    profissao: ''
  };

  profissaoSelecionada: any;

  constructor() {

  }

  salvar(form: NgForm): void{

    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.email;

    console.log(form);
    console.log(this.cliente);
  }

  ngOnInit(): void {
  }

}
