class Arboles {
  generator() {
    //Crear propio árbol binario
    const ap = new NodoArbol("p", null, null);
    const bp = new NodoArbol("p", null, null);
    const ah3 = new NodoArbol("h3", null, null);
    const bh3 = new NodoArbol("h3", null, null);
    const aDiv = new NodoArbol("div", ah3, ap);
    const bDiv = new NodoArbol("div", bh3, bp);
    const body = new NodoArbol("body", aDiv, bDiv);

    //Probar los 3 recorridos
    const c = new NodoArbol("Pan", null, null);
    const a = new NodoArbol("Gohan", c, null);
    const b = new NodoArbol("Goten", null, null);
    const root = new NodoArbol("Goku", a, b);

    this.recorridoPreOrden(body);
    this.recorridoEnOrden(body);
    this.recorridoPostOrden(body);

    //Probar las 3 búsquedas
    this.buscarPreOrden(body, "div");
    this.buscarEnOrden(aDiv, "p");
    this.buscarPostOrden(aDiv, "h3");
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

  buscarEnOrden(node, busqueda) {
    if (node.arbolIzq !== null) {
      let encontrado = this.buscarPreOrden(node.arbolIzq, busqueda);
      if (encontrado !== null) {
        return encontrado;
      }
    }
    if (node.dato === busqueda) {
      return node;
    }
    if (node.arbolDer !== null) {
      let encontrado = this.buscarPreOrden(node.arbolDer, busqueda);
      if (encontrado !== null) {
        return encontrado;
      }
    }
  }

  buscarPostOrden(node, busqueda) {
    if (node.arbolIzq !== null) {
      let encontrado = this.buscarPreOrden(node.arbolIzq, busqueda);
      if (encontrado !== null) {
        return encontrado;
      }
    }
    if (node.arbolDer !== null) {
      let encontrado = this.buscarPreOrden(node.arbolDer, busqueda);
      if (encontrado !== null) {
        return encontrado;
      }
    }
    if (node.dato === busqueda) {
      return node;
    }
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
