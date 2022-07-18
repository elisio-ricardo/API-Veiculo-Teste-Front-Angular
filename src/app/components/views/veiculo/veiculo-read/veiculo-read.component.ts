import {  Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Veiculo } from "../veiculo.model";
import { VeiculoService } from "../veiculo.service";


@Component({
  selector: "app-veiculo-read",
  templateUrl: "./veiculo-read.component.html",
  styleUrls: ["./veiculo-read.component.css"],
})
export class VeiculoReadComponent implements OnInit {
  veiculoLista: Veiculo[] = [];

  marcas  = ['Alfa Romeo','Aston Martin', 'Audi','BMW', 'Citroën',
  'Ferrari','Fiat','Ford', 'Honda','Hyundai','Jaguar','JEEP','KIA','Lamborghini','Land Rover','Lexus','Maserati','Mazda','Mercedes-Benz','MINI','Mitsubishi','Nissan','Opel', 'Peugeot','Porsche','Renault','Suzuki','TESLA','Toyota','Volkswagen',
  'Volvo'];

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

  displayedColumns: string[] = ["id", "veiculo", "marca", "ano", "cor", "descricao", "vendido", "created", "updated", "acoes"];
 

  constructor(private service: VeiculoService, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.findAll();
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);     
      this.veiculoLista = resposta;
    });
  }

  findAllRemoverfiltros() {
    window.location.reload()   
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);        
      this.veiculoLista = resposta;
    });
  }

  findAllFilter() {          
    this.service.findAllFilter(this.veiculoObj.marca, this.veiculoObj.ano, this.veiculoObj.cor).subscribe((resposta) => {      
      this.veiculoLista = resposta;
    });
  }

  findAllRecentes(){
    this.service.findAllRecente().subscribe((resposta) => {
      console.log(resposta);     
      this.veiculoLista = resposta;
    });

  }


  navegarParaVeiculoCreate() {
    this.router.navigate(["veiculo/create"]);
  }
  navegarParaQuantidadeVeiculo(){
    this.router.navigate(["veiculo/quantidade"])
  }
}
