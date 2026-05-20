'use strict';

let valor_compra = 500
let desconto0 = 0
let desconto10 = valor_compra * 10 / 100
let desconto20 = valor_compra * 20 / 100

if (valor_compra > 300) { //Desconto de 20%
    console.log(`Valor de compra: R$ ${valor_compra}`)
    console.log(`Desconto de 20%`)
    console.log(`Valor final da compra: R$${valor_compra - desconto20}`)    
    console.log(`Economizou: ${desconto20}`)

} else if (valor_compra > 100) { // Desconto de 10%
    console.log(`Valor de compra: R$ ${valor_compra}`)
    console.log(`Desconto de 10%`)
    console.log(`Valor final da compra: R$${valor_compra - desconto10}`)    
    console.log(`Economizou: ${desconto10}`)

} else {
    console.log(`Valor de compra: R$ ${valor_compra}`)
    console.log(`Desconto de 0%`)
    console.log(`Valor final da compra: R$${valor_compra - desconto}`)    
    console.log(`Economizou: ${desconto0}`)
}
