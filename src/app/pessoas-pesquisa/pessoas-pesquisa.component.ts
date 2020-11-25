import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  pessoas: any = [
    {nome: 'Amarildo Ferreira', cidade: 'Belas', estado: 'Luanda', status: 'Ativo'},
    {nome: 'Tabita Kuyanga Ferreira', cidade: 'Belas', estado: 'Luanda', status: 'Inativo'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
