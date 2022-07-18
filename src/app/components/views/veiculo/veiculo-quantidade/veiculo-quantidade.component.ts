import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Veiculo } from "../veiculo.model";
import { VeiculoService } from "../veiculo.service";

@Component({
  selector: "app-veiculo-quantidade",
  templateUrl: "./veiculo-quantidade.component.html",
  styleUrls: ["./veiculo-quantidade.component.css"],
})
export class VeiculoQuantidadeComponent implements OnInit {
  
  veiculoObj: Veiculo[] = [];

  displayedColumns: string[] = ["arca", "quantidade", "marca", "ano", "cor", "descricao", "vendido", "created", "updated", "acoes"];

  constructor(private service: VeiculoService, private router: Router) {}

  ngOnInit(): void {
   
  }


  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.veiculoObj = resposta;
    });
  }
}
