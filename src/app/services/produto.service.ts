import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  addProduto(formData: FormData): Promise<any> {
    return this.http.post("http://localhost:8080/produto", formData).toPromise();
  }
}
