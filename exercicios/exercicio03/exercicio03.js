const alunos = [
    {
        nome_completo: "Fulano de Tal",
        data_de_nascimento: '25/12/2005',
        telefones: [
            {
                telefone_fixo: '(11) 2314-1234',
                telefone_celular: '(11) 91234-1234',
            },
        ],
        endereco: [
            {
                rua: 'Rua Aleatoria',
                numero: 22,
                bairro: 'Penha'
            },
        ],
    },
    {
        nome_completo: "Ciclano Beltrano",
        data_de_nascimento: '29/02/2003',
        telefones: [
            {
                telefone_fixo: '(11) 2314-1234',
                telefone_celular: '(11) 91234-1234',
            },
            {
                telefone_fixo: '(11) 2314-6789',
                telefone_celular: '(11) 91234-6789',
            }
        ],
        endereco: [
            {
                rua: 'Rua de Trás',
                numero: 67,
                bairro: 'Penha'
            },
            {
                rua: 'Rua da Frente',
                numero: 76,
                bairro: 'Tatuapé'
            },
        ],
    },
]

console.log(`O nome do aluno é: ${alunos[1].nome_completo}, o telefone celular é: ${alunos[1].telefones[1].telefone_celular} e o bairro é ${alunos[1].endereco[1].bairro}`)