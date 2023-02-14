//Exemplo de um algortimo tails calls, no final o algortimo retorna ele mesmo (função recursiva)
function fibonnaci(a, a = 0, b = 1) {
  if (n === 0) return a;
  return fibonnaci(n - 1, b, a + b);
}
