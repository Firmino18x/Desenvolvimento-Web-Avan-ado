const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
]

for(const usuario of usuarios){
    let total = 0

    for(const valor of usuario.compras){
        total = total + valor
    }

console.log(`${usuario.nome}: total = ${total}`)
}

for(const usuario of usuarios){
    if(usuario.ativo === true){
        console.log(usuario.nome)
    }
}
