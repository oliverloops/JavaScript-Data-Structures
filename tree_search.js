class ArbolesBusqueda {
  generate() {
    let numeros = new NodoArbol();
    numeros.dato = 43;

    this.insertar(numeros, 77);
    this.insertar(numeros, 23);
    this.insertar(numeros, 92);
    this.insertar(numeros, 55);
    this.insertar(numeros, 10);
    this.insertar(numeros, 24);
    this.insertar(numeros, 86);
    this.insertar(numeros, 15);
    this.insertar(numeros, 48);

    //Cuando el árbol de busqueda este lleno
    let eliminado = this.eliminarMayor(numeros);
    console.log(eliminado.dato);
  }

  //Método de inserción
  insertar(node, num) {
    if (num === node.dato) {
      return;
    } else {
      if (num < node.dato) {
        //Si num es menor
        if (node.i !== null) {
          //si tiene el arbol izquierdo
          this.insertar(node.i, num);
        } else {
          //Si no tiene arbol izquierdo
          //Crear un nuevo nodo (nuevo arbol), con el dato recibido
          node.i = new NodoArbol();
          node.i.dato = num;
        }
      } else {
        if (node.d !== null) {
          //si tiene el árbol derecho
          this.insertar(node.d, num);
        } else {
          //si no tiene árbol derecho
          //crear un nuevo nodo con el dato recibido
          node.d = new NodoArbol();
          node.d.dato = num;
        }
      }
    }
  }

  //Método de búsqueda
  buscar(node, dato) {
    if (node.dato === dato) {
      return node;
    } else {
      if (dato < node.dato) {
        if (node.i !== null) {
          return this.buscar(node.i, dato);
        } else {
          return null;
        }
      } else {
        if (node.d !== null) {
          return this.buscar(node.d, dato);
        } else {
          return null;
        }
      }
    }
  }

  //Eliminación de los nodos mayor/menor
  eliminarMenor(node) {
    let actual = node;
    let anterior = null;

    while (actual.i !== null) {
      anterior = actual;
      actual = actual.i;
    }
    anterior.i = actual.d;
    return actual;
  }

  eliminarMayor(node) {
    let actual = node;
    let anterior = null;

    while (actual.d !== null) {
      anterior = actual;
      actual = actual.d;
    }
    //Actual apunta al anterior
    anterior.d = actual.i;
    return actual;
  }
}

//Generador de Nodo
class NodoArbol {
  constructor(dato, i, d) {
    this.dato = dato;
    this.i = i;
    this.d = d;
  }
}

const start = new ArbolesBusqueda();
start.generate();
