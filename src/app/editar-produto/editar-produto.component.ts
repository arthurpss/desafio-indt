import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/interfaces/produto.interface';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto = {
    id: 0,
    nome: "",
    descricao: "",
    valor: 0,
    imagem: ""
  }

  file: File | undefined;
  formData = new FormData();

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

  onFileSelected(event: any) {
    if (event.target.files) {
      this.file = event.target.files.item(0);
    }
  }

  private montaFormData(): void {
    if (this.file)
      this.formData.append("file", this.file);
    this.formData.append("produto", new Blob([JSON.stringify(this.produto)], { type: "application/json" }));
  }

  editarProduto(): void {
    this.montaFormData();
    this.produtoService.updateProduto(this.produto.id, this.formData).then(() => {
      this.router.navigateByUrl("/");
    });
  }

}

