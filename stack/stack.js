// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(element) {
//     this.items.push(element);
//   }
//   pop() {
//     return this.items.pop;
//   }
//   peek() {
//     return this.items[this.items.length - 1];
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   size() {
//     return this.items.length;
//   }
//   clear() {
//     this.items = [];
//   }
// }

// const stack = new Stack();

//Esta forma utiliza um princípio de encontrar o elemento exato que está procurando no array, sem a necessidade de precisar iterar todo o array para acha-lo.
export default class Stack {
  constructor() {
    //O count ajuda a manter o controle do tamanho da pilha
    this.count = 0;
    //a pilha é incializada como um objeto, e não um array
    this.items = {};
  }
  push(element) {
    //o push cria um conjunto de pares chaves e valor, utilizando o count e o elemento do push.
    this.items[this.count] = element; //
    this.count++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  isEmpty() {
    return this.count === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
