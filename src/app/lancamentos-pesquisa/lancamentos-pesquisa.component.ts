import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    {tipo:'DESPESA', descricao:'Compra de pão', dataVencimento:'30/06/2017', dataPagamento:null, valor:4.55, pessoa:'Padaria do Jose'},
    {tipo:'RECEITA', descricao:'Venda de Software', dataVencimento:'10/06/2017', dataPagamento:'09/06/2017', valor:80000, pessoa:'Atacado Angola'},
    {tipo:'DESPESA', descricao:'Impostos', dataVencimento:'20/07/2017', dataPagamento:null, valor:14315, pessoa:'Ministerio das Finanças'}
  ];

  constructor() { }

}
