import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/interfaces/produto.interface';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  produto: Produto = {
    id: 0,
    nome: "",
    descricao: "",
    valor: 0,
    imagem: ""
  }
  produtoCadastrado: boolean = false;
  file: File | undefined;
  formData = new FormData();

  constructor(private router: Router, private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  private montaFormData(): void {
    if (this.file)
      this.formData.append("file", this.file);
    this.formData.append("produto", new Blob([JSON.stringify(this.produto)], { type: "application/json" }));
  }

  cadastraProduto(): void {
    this.montaFormData();
    this.produtoService.addProduto(this.formData).then(response => {
      this.produtoCadastrado = true;
      console.log(response);
      this.router.navigateByUrl("/");
    });
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      this.file = event.target.files.item(0);
    }
  }
}
