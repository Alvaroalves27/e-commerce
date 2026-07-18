import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import { NOMEM } from 'node:dns/promises';
import { signal } from '@angular/core';
import { computed } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import{ PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto,PrecoFormatadoPipe,UpperCasePipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  //Lista com dados -Array
  produtos = signal( [
    {nome:'Teclado Gamer', preco:229.99},
    {nome:'Mouse Gamer', preco:129.99},
    {nome:'Monitor Gamer', preco:2000},
    {nome:'Desktop Gamer', preco:499.99},
  ]);
  //!função para exibir produtos selecionados pelo usuario no controle
exibirProduto(nome: string){
  console.log('Produto Selecionado:', nome);
  this.produtoSelecionado.set(nome);
}
//!função que adiciona produto usando metodo update()
adicionarProduto(){
  this.produtos.update(listaAtual=>[
    ...listaAtual,
    {nome:'Playstation 5', preco:3000},
  ]);
}
//!fução que contabiliza a quantidade de produtos na lista com metodocomputed()
totalProduto = computed(() => this.produtos().length);
//!função que calcula o valor total dom produtos usando metodo computed()
valorTotal = computed(() =>
{return this.produtos().reduce((total,item) =>
  total + item.preco,0)});
  //!função para que substitui a lista atual usando o metodo set()
  substituirProdutos(){
    this.produtos.set([
      {nome:'Teclado',preco:50 },
      {nome:'Mouse',preco:15 },
      {nome:'Monitor',preco:500 },
      {nome:'Desktop',preco:1500 },
      {nome:'headset',preco:30},

 ]);
}
constructor(){
  effect(() => {});
  console.log('Lista de Produtos Lterados:', this.produtos());
  effect(() => {
  console.log('Valor Total atualizado: ', this.valorTotal());
  });
  effect(() => {
    if (typeof document !== 'undefined'){
      document.title = `(${this.totalProduto()})- Loja do Alvaro`;
    }
  });
}
//! Metodo para criar um estado de seleção com signal string | null
produtoSelecionado = signal <string | null>(null);

}