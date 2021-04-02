import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/interfaces/produto.interface';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {

  produtos: Produto[] | undefined;

  constructor(private produtoService: ProdutoService) { }

  createImageFromBlob(produto: Produto, image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      produto.imagem = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService(produto: Produto) {
    this.produtoService.getImagem(produto.id, produto.imagem).subscribe(data => {
      this.createImageFromBlob(produto, data);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.produtoService.getProdutos()
      .then(produtos => this.produtos = produtos)
      .then(() => {
        if (this.produtos)
          this.produtos.forEach(produto => this.getImageFromService(produto)
          )
      })
  }
};