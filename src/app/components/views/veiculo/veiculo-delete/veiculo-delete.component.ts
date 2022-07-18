import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Veiculo } from "../veiculo.model";
import { VeiculoService } from "../veiculo.service";


@Component({
  selector: "app-veiculo-delete",
  templateUrl: "./veiculo-delete.component.html",
  styleUrls: ["./veiculo-delete.component.css"],
})
export class VeiculoDeleteComponent implements OnInit {
  id_veiculo: String = "";

  veiculoObj: Veiculo = {     
    veiculo: "",
    marca: "",
    ano: "",
    cor: "",
    descricao: "",
    vendido: false,
    created: new Date(),
    updated: new  Date(),  
  };

  constructor(
    private service: VeiculoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_veiculo = this.route.snapshot.paramMap.get("id")!;
    this.veiculoObj.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.veiculoObj.id!).subscribe((resposta) => {
      this.veiculoObj = resposta;
    });
  }

  delete(): void {
    this.service.delete(this.veiculoObj.id!).subscribe(
      () => {
        this.router.navigate([`veiculo`]);
        this.service.mensagem("Veiculo Deletado com Sucesso!");
      },
      (err) => {
        this.router.navigate([`veiculo`]);
        this.service.mensagem("Falha ao Deletar Veiculo! Tente novamente !");
      }
    );
  }

  cancel(): void {
    this.router.navigate([`veiculo`]);
  }
}
