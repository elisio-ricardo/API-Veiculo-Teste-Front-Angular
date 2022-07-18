import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Veiculo } from "./veiculo.model";

@Injectable({
  providedIn: "root",
})
export class VeiculoService {
  baseUrl: String = environment.baseUrl;

  veiculoObj: Veiculo = {
    veiculo: "",
    marca: "",
    ano: "",
    cor: "",
    descricao: "",
    vendido: false,
    created: new Date(),
    updated: new Date(),
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snack: MatSnackBar
  ) {
    //tem que por para poder fazer as requisiçoes http
  }

  findById(id: String): Observable<Veiculo> {
    const url = `${this.baseUrl}/veiculo/${id}`;
    return this.http.get<Veiculo>(url);
  }

  findAll(): Observable<Veiculo[]> {
    const url = `${this.baseUrl}/veiculo`;
    return this.http.get<Veiculo[]>(url);
  }

  findAllRecente(): Observable<Veiculo[]> {
    const url = `${this.baseUrl}/veiculo/ultimasemana`;
    return this.http.get<Veiculo[]>(url);
  }

  findAllFilter(
    marca: String,
    ano: String,
    cor: String
  ): Observable<Veiculo[]> {
    console.log("cheguei no service " + marca + " " + cor + " " + ano);
    const url = `${this.baseUrl}/veiculo`;

    const veic: any = {
      marca: marca,
      ano: ano,
      cor: cor,
    };

    const queryParamsString = new HttpParams({ fromObject: veic }).toString();
    let URL = `${this.baseUrl}/veiculo?` + queryParamsString.toString();
    
    return this.http.get<Veiculo[]>(URL);
  }

  create(Veiculo: Veiculo): Observable<Veiculo> {
    const url = `${this.baseUrl}/veiculo`;
    return this.http.post<Veiculo>(url, Veiculo);
  }

  update(Veiculo: Veiculo): Observable<Veiculo> {
    const url = `${this.baseUrl}/veiculo/${Veiculo.id}`;
    return this.http.patch<Veiculo>(url, Veiculo);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/veiculo/${id}`;
    return this.http.delete<void>(url);
  }

  mensagem(str: String): void {
    //para usar a mensagem confirmando a criação, usando o modulo snack
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
