import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { VitrineComponent } from './vitrine/vitrine.component';

const routes: Routes = [
  { path: 'home', component: VitrineComponent },
  { path: '', component: VitrineComponent },
  { path: 'cadastro-produto', component: CadastroProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
