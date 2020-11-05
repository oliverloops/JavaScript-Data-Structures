class Arboles {
  generator() {
    //Probar los 3 recorridos
    const c = new NodoArbol("Pan", null, null);
    const a = new NodoArbol("Gohan", c, null);
    const b = new NodoArbol("Goten", null, null);
    const root = new NodoArbol("Goku", a, b);

    /*this.recorridoPreOrden(root);
    this.recorridoEnOrden(root);
    this.recorridoPostOrden(root);*/

    //Probar las 3 búsquedas
    this.buscarPreOrden(root, "Goku");
  }

  //Recorridos
  recorridoPreOrden(node) {
    console.log(node.dato);
    if (node.arbolIzq !== null) this.recorridoPreOrden(node.arbolIzq);
    if (node.arbolDer !== null) this.recorridoPreOrden(node.arbolDer);
  }

  recorridoEnOrden(node) {
    if (node.arbolIzq !== null) this.recorridoEnOrden(node.arbolIzq);
    console.log(node.dato);
    if (node.arbolDer !== null) this.recorridoEnOrden(node.arbolDer);
  }

  recorridoPostOrden(node) {
    if (node.arbolIzq !== null) this.recorridoEnOrden(node.arbolIzq);
    if (node.arbolDer !== null) this.recorridoEnOrden(node.arbolDer);
    console.log(node.dato);
  }
  //Busquedas -> console.log() para debuggear rapidamente
  buscarPreOrden(node, busqueda) {
    if (node.dato === busqueda) {
      console.log(node);
      return node;
    }
    if (node.arbolIzq !== null) {
      let encontrado = this.buscarPreOrden(node.arbolIzq, busqueda);
      if (encontrado !== null) {
        console.log(encontrado);
        return encontrado;
      }
    }
    if (node.arbolDer !== null) {
      let encontrado = this.buscarPreOrden(node.arbolDer, busqueda);
      if (encontrado !== null) {
        console.log(encontrado);
        return encontrado;
      }
    }
    return null;
  }
}

//Generador de Nodo
class NodoArbol {
  constructor(dato, arbolIzq, arbolDer) {
    this.dato = dato;
    this.arbolIzq = arbolIzq;
    this.arbolDer = arbolDer;
  }
}

const arboles = new Arboles();
arboles.generator();
