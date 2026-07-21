import { Routes } from '@angular/router';
import { ListaProdutos } from './feautures/produtos/lista-produtos/lista-produtos';
import { Carrinho } from './feautures/carrinho/carrinho/carrinho';

export const routes: Routes = [
    {
        path:'',
        component: ListaProdutos,
    }
    {
        path:'carrinho',
        component: Carrinho,
    },
];
