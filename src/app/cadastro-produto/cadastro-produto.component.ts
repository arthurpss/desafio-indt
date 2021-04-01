import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/interfaces/produto.interface';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = {
    nome: "",
    descricao: "",
    valor: 0,
    imagem_url: ""
  }
  produtoCadastrado: boolean = false;
  file: File | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastraProduto(): void {
  }

  onFileSelected(event: any) {
    if (event.target.file) {
      this.file = event.target.file;
    }
  }
}
