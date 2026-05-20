'use scrict';

const clientes = [
    {
        identificador: 1,
        cliente: 'Dio'
    },
    {
        identificador: 2,
        cliente: 'Ozzy'
    },
    {
        identificador: 3,
        cliente: 'Ian'
    }
]

for(const propriedade of clientes) {
    console.log(`- Cliente: ${propriedade.cliente}, id: ${propriedade.identificador}`)
}
