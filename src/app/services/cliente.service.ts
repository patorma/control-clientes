import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cliente } from '../model/clente.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // va a devolver una coleccion de clientes de tipo Cliente
  clientesColeccion: AngularFirestoreCollection<Cliente>

  // se define un documento tipo cliente
  clienteDoc: AngularFirestoreDocument<Cliente>;

  // Se declara los observables del cliente en bd 
  clientes: Observable<Cliente[]>;
  cliente: Observable<Cliente>;

  constructor(private db: AngularFirestore) { 
    // indicar la coleccion a conectarme
    // segundo parametro solicitamos los elementos de forma ordenada
    this.clientesColeccion = db.collection('clientes',ref => ref.orderBy('nombre','asc'))
  }

  getClientes(): Observable<Cliente[]>{
    //Obtener los clientes
    // con pipe se recupera cada uno de los elementos de la coleccion
    //para iterar cada uno de los elementos
    this.clientes = this.clientesColeccion.snapshotChanges().pipe(
      map( cambios => {
        return cambios.map( accion => {
          // se retorna como un objeto tipo Cliente con as
          const datos = accion.payload.doc.data() as Cliente;
          datos.id = accion.payload.doc.id;
          return  datos;

        })
      })
    );
    return this.clientes;
  }
}
