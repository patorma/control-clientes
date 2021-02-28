import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../model/clente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteServicio: ClienteService) { }

  ngOnInit(): void {

    this.clienteServicio.getClientes().subscribe(
      clientes =>{
        //inicializamos la variable clientes de tipo Cliente[]
        this.clientes = clientes

      }
    )
  }

  getSaldoTotal() {
       let saldoTotal: number = 0;
       if(this.clientes){
         this.clientes.forEach( cliente => {
           saldoTotal += cliente.saldo;
         })
       }
       return saldoTotal;

  }

}
