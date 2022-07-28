import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number = 0;
  nome: string = "Isaac de Lyra";
  text: string;

  pessoas = [
    {
      nome: "Isaac",
      sobrenome: "Lyra"
    },
    {
      nome: "Julia",
      sobrenome: "Dantas"
    },
    {
      nome: "Douglas",
      sobrenome: "Dantas"
    },
    {
      nome: "Jefferson",
      sobrenome: "Silva"
    }
  ];

  constructor() {

  }

  ngOnInit() {
    console.log(this.pessoas)
    let interval = setInterval(()=> {
      this.count++;
      if(this.count == 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(nome: string): void {
    console.log('Clicou em mim', nome)
  }
}
