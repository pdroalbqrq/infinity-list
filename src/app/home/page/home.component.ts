import { InfinityBase } from './../../shared/components/infinity-scroll/infinity-scroll.class';
import { UserDTO } from './../../shared/dto/user.dto';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends InfinityBase implements OnInit {
  loading = new BehaviorSubject<boolean>(false);
  private _$destroy: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private _dataService: DataService) {
    super();
  }

  ngOnInit(): void {
    this.addItems();
  }

  // SOBRESCREVE O METODO addItems DA CLASSE InfinityBase SETANDO
  // NO ARRAY O VALOR QUE SERÁ EXIBIDO NA LISTA
  addItems(): void {
    this.loading.next(true);
    this._dataService
      .getUsers()
      .pipe(takeUntil(this._$destroy))
      .subscribe(
        (data) => {
          for (let i = 0; i < this.sum; ++i) {
            this.array.push(data[i]);
            this.storeArray.push(data[i]);
          }
          this.loading.next(false);
        },
        (e) => this.loading.next(false),
      );
  }

  // EVENTO DE KEY DOWN DO INPUT DE PESQUISA PARA
  // PESQUISAR ITENS DA LISTA PELO NOME
  handleKeyDown(event): void {
    const key = event.keyCode || event.charCode;

    const searchText = event.target.value;
    const found = this.array.filter((user) =>
      user.name.first.match(searchText),
    );
    if (key === 8 || key === 46) {
      this.array = this.storeArray;
      return;
    }
    this.array = found;
  }

  // EVENTO DE CLICK PARA CHAMAR OS METODOS DE ORDENAÇÃO
  // DEPENDENDO DO PARAMETRO
  handleSort(filter: string): void {
    if (filter === 'age') {
      this.array = this.array.sort(this.compareAge);
    }
    if (filter === 'name') {
      this.array = this.array.sort(this.compareName);
    }
  }

  // METODO PARA ORDENAR A LISTA PELO VALOR DA IDADE
  compareAge(a, b): number {
    const userA = a.dob.age;
    const userB = b.dob.age;

    let comparison = 0;
    if (userA > userB) {
      comparison = 1;
    } else if (userA < userB) {
      comparison = -1;
    }
    return comparison;
  }

  // METODO PARA ORDENAR A LISTA PELO VALOR DO NOME
  compareName(a, b): number {
    const userA = a.name.first.toUpperCase();
    const userB = b.name.first.toUpperCase();

    let comparison = 0;
    if (userA > userB) {
      comparison = 1;
    } else if (userA < userB) {
      comparison = -1;
    }
    return comparison;
  }
}
