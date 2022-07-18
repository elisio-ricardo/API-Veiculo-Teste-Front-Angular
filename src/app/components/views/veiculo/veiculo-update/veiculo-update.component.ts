import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Veiculo } from "../veiculo.model";
import { VeiculoService } from "../veiculo.service";

@Component({
  selector: "app-veiculo-update",
  templateUrl: "./veiculo-update.component.html",
  styleUrls: ["./veiculo-update.component.css"],
})
export class VeiculoUpdateComponent implements OnInit {
  id_veiculo: String = "";

  veiculoModel: Veiculo = {
    veiculo: "",
    marca: "",
    ano: "",
    cor: "",
    descricao: "",
    vendido: false,
    created: new Date(),
    updated: new Date(),
  };

  veiculo = new FormControl("", [Validators.minLength(3)]);
  marca = new FormControl("", [Validators.minLength(3)]);
  ano = new FormControl("", [Validators.minLength(4)]);
  cor = new FormControl("", [Validators.minLength(3)]);
  descricao = new FormControl("", [Validators.minLength(3)]);
  created = new FormControl("", [Validators.minLength(8)]);

  constructor(
    private service: VeiculoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Sempre que a pagina carrega inicia esses metodos
    this.veiculoModel.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.veiculoModel.id!).subscribe((resposta) => {
      this.veiculoModel = resposta;
    });
  }

  update(): void {
    this.service.update(this.veiculoModel).subscribe(
      (resposta) => {
        this.router.navigate([`veiculo`]);
        this.service.mensagem("Veiculo alterado com sucesso");
      },
      (err) => {
        this.router.navigate([`veiculo`]);
        this.service.mensagem("Erro ao alterar Veiculo, Tente novamente !!");
      }
    );
  }

  cancel(): void {
    this.router.navigate([`veiculo`]);
  }

  getMessage() {
    if (this.veiculo.invalid) {
      return "Campo Obrigatorio";
    } else if (this.marca.invalid) {
      return "*Campo Obrigatorio";
    } else if (this.ano.invalid) {
      return "Campo Obrigatorio";
    } else if (this.cor.invalid) {
      return "Campo Obrigatorio";
    } else if (this.descricao.invalid) {
      return "Campo Obrigatorio";
    }else if (this.created.invalid) {
      return "Campo Obrigatorio";
    }

    return false;
  }
}
