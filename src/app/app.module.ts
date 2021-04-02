import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ProdutoComponent } from './produto/produto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    NavbarComponent,
    CadastroProdutoComponent,
    ProdutoComponent,
    DetalhesProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
