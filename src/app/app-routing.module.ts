import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/views/home/home.component";
import { VeiculoCreateComponent } from "./components/views/veiculo/veiculo-create/veiculo-create.component";
import { VeiculoDeleteComponent } from "./components/views/veiculo/veiculo-delete/veiculo-delete.component";
import { VeiculoReadComponent } from "./components/views/veiculo/veiculo-read/veiculo-read.component";
import { VeiculoUpdateComponent } from "./components/views/veiculo/veiculo-update/veiculo-update.component";



const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "veiculo",
    component: VeiculoReadComponent,
  },
  {
    path: "veiculo/create",
    component: VeiculoCreateComponent,
  },
  {
    path: "veiculo/delete/:id",
    component: VeiculoDeleteComponent,
  },
  {
    path: "veiculo/update/:id",
    component: VeiculoUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
