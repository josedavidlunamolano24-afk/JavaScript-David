// Implementar una lista enlazada doble
function Nodo(valor) {
  this.valor = valor;
  this.siguiente = null;
  this.anterior = null;
}
function ListaDoble() {
  this.primero = null;
  this.ultimo = null;

  this.agregar = function(valor) {
    if (this.existe(valor)) {
      console.log("El valor ya existe:", valor);
      return;
    }

    let nuevo = new Nodo(valor);
    if (this.primero === null) {
      this.primero = nuevo;
      this.ultimo = nuevo;
    } else {
      nuevo.anterior = this.ultimo;
      this.ultimo.siguiente = nuevo;
      this.ultimo = nuevo;
    }
  };
  this.borrar = function() {
    if (this.ultimo === null) return; 

    if (this.primero === this.ultimo) {
      this.primero = null;
      this.ultimo = null;
    } else {
      this.ultimo = this.ultimo.anterior;
      this.ultimo.siguiente = null;
    }
  };
  this.borrarValor = function(valor) {
    let actual = this.primero;

    while (actual !== null) {
      if (actual.valor === valor) {
        if (actual === this.primero) {
          this.primero = actual.siguiente;
          if (this.primero) {
            this.primero.anterior = null;
          } else {
            this.ultimo = null; 
          }
        }
        else if (actual === this.ultimo) {
          this.ultimo = actual.anterior;
          this.ultimo.siguiente = null;
        }
        else {
          actual.anterior.siguiente = actual.siguiente;
          actual.siguiente.anterior = actual.anterior;
        }
        return;
      }
      actual = actual.siguiente;
    }
  };
  this.existe = function(valor) {
    let actual = this.primero;
    while (actual !== null) {
      if (actual.valor === valor) return true;
      actual = actual.siguiente;
    }
    return false;
  };
  this.iterarDir = function() {
    let actual = this.primero;
    let lista = [];

    while (actual !== null) {
      lista.push(actual.valor);
      actual = actual.siguiente;
    }

    return lista;
  };
  this.iterarRev = function() {
    let actual = this.ultimo;
    let lista = [];

    while (actual !== null) {
      lista.push(actual.valor);
      actual = actual.anterior;
    }

    return lista;
  };
}
let lista = new ListaDoble();

lista.agregar(10);
lista.agregar(20);
lista.agregar(30);
lista.agregar(40);

console.log(lista.iterarDir()); 
console.log(lista.iterarRev());  
lista.borrarValor(20);
console.log(lista.iterarDir());  

lista.borrar();
console.log(lista.iterarDir()); 

console.log(lista.existe(30));
console.log(lista.existe(99));
