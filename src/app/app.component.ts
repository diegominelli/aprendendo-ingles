import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public jogoEmAndamento: boolean = true;

  public encerrarJogoPai(tipo: string): void {
    this.jogoEmAndamento = false;
  }
}
