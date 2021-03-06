import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/interfaces/produto.interface';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: Produto | undefined;


  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  createImageFromBlob(produto: Produto, image: Blob): void {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      produto.imagem = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService(produto: Produto): void {
    this.produtoService.getImagem(produto.id, produto.imagem).subscribe(data => {
      this.createImageFromBlob(produto, data);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.produtoService.getProdutoById(id)
        .then(produto => { if (produto) this.produto = produto })
        .then(() => { if (this.produto) this.getImageFromService(this.produto) });
  }

  editarProduto(id: number): void {
    this.router.navigateByUrl(`editar-produto/${id}`);
  }

}
