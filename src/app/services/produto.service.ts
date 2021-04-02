import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/interfaces/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addProduto(formData: FormData): Promise<any> {
    return this.http.post(`${this.baseUrl}/produto`, formData).toPromise();
  }

  getProdutos(): Promise<any> {
    return this.http.get(`${this.baseUrl}/produtos`).toPromise();
  }

  getImagem(id: number, fileName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/imagem/produto/${id}`, { headers: new HttpHeaders({ "fileName": fileName }), responseType: 'blob'});
  }

  getProdutoById(id: string): Promise<any> {
    return this.http.get(`${this.baseUrl}/produto/${id}`).toPromise();
  }

  updateProduto(id: number, formData: FormData): Promise<any> {
    return this.http.put(`${this.baseUrl}/produto/${id}`, formData).toPromise();
  }
}
