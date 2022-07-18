export interface Veiculo {
    id?: String; // ? para tornar opcional   
    veiculo: String;
    marca: String;
    ano: String;
    cor: String;
    descricao: String;
    vendido: boolean;
    created: Date;
    updated: Date;
  }