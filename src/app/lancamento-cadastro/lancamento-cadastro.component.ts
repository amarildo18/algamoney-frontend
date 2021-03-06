import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  options = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'}
  ];

  categorias = [
    {label: 'Alimentação', valor: '1'},
    {label: 'Transporte', valor: '2'}
  ];

  pessoas = [
    {label: 'Amarildo Ferreira', value: '2'},
    {label: 'Tabita Kuyanga Ferreira', value: '9'},
    {label: 'Judite Kuyanga Ferreira', value: '12'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
