import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Veiculo } from "../veiculo.model";
import { VeiculoService } from "../veiculo.service";

@Component({
  selector: "app-veiculo-create",
  templateUrl: "./veiculo-create.component.html",
  styleUrls: ["./veiculo-create.component.css"],
})
export class VeiculoCreateComponent implements OnInit {
  id_veiculo: String = "";  
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

  veiculo = new FormControl("", [Validators.minLength(10)]);
  marca = new FormControl("", [Validators.minLength(10)]);
  ano = new FormControl("", [Validators.minLength(4)]);
  cor = new FormControl("", [Validators.minLength(3)]);
  descricao = new FormControl("", [Validators.minLength(10)]);

  constructor(private service: VeiculoService, private router: Router) {}

  ngOnInit(): void {}

  create(): void {
    console.log(this.veiculoObj);
    this.service.create(this.veiculoObj).subscribe(
      (resposta) => {
        console.log(this.veiculoObj);
        this.router.navigate(["veiculo"]);
        this.service.mensagem("Veiculo criado com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message);
        }
        this.router.navigate([`veiculo`]);
        this.service.mensagem("Erro ao criar novo Veiculo! tente novamente!");
      }
    );
  }

  cancel(): void {
    this.router.navigate(["veiculo"]);
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
    }
    return false;
  }
}
