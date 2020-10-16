import { UserDTO } from './../../dto/user.dto';

export class InfinityBase {
  _array: any[] = [];
  sum = 10;
  throttle = 2;
  scrollDistance = 1;
  scrollUpDistance = 1;

  // VARIAVEL PARA GUARDAR O VALOR ANTERIOR DO ARRAY
  // PARA QUANDO APAGAR A PESQUISA VOLTAR A MOSTRAR O ARRAT INTEIRO
  private _storeArray: UserDTO[] = [];
  constructor() {}

  // RETORNA O VALOR DO ARRAY PASSADO NO COMPONENTE
  // EM QUE O InfinityBase SERÁ HERDADO
  get array(): UserDTO[] {
    return this._array;
  }

  // MUDA O VALOR DO ARRAY
  set array(value: UserDTO[]) {
    this._array = value;
  }

  get storeArray(): UserDTO[] {
    return this._storeArray;
  }
  set storeArray(value: UserDTO[]) {
    this._storeArray = value;
  }

  // METODO PARA SER SOBRESCRITO NO COMPONENTE QUE HERDARÁ
  addItems(): void {}

  // METODO QUE É CHAMADO AO SCROLL CHEGAR NO FUNDO DA LISTA
  // CHAMANDO O 'addItems' QUE ADICIONA MAIS VALORES AO ARRAY
  onScrollDown(): void {
    this.addItems();
  }
}
