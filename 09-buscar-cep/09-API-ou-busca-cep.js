'use strict';

const formEndereco = document.querySelector("#formulario-endereco")
const inputCep = formEndereco.querySelector("#cep");
const inputEndereco = formEndereco.querySelector("#endereco")
const inputBairro = formEndereco.querySelector("#bairro")
const inputCidade = formEndereco.querySelector("#cidade")
const inputEstado = formEndereco.querySelector("#estado")
const pMensagem = formEndereco.querySelector("#mensagem")

//Aplicando a máscara/masker ao CEP
VMasker(inputCep).maskPattern("99999-999");   //8 digito = CEP

    //Capturando o cep digital
    inputCep.addEventListener("input", function(){
        const cepDigitado = inputCep.value;
       
        //Se a quantidade digitada no campo cep é 9
        if(cepDigitado.length === 9){   //length=tamanho/comprimento
            //Chamamos a função de busca do cep e passamos o cep que foi digitado
            buscarCep(cepDigitado)
        }
    });

    // Quando esta função for chamada, ela receberá o número do cep digitado
    async function buscarCep(numeroCep){
            //feedback para o usuario


        
        //Montar a consulta para a API
        const urlConsulta = `https://viacep.com.br/ws/${numeroCep}/json/`

        // Processo de comunicação com a APi, busca, recebimenti e tratamento de erro
        try {
            // Inicar a comunicação com API
            // obs1: Usamos await para "aguardar" a resposta da API
            // obs2: SEMPRE que usar await, coloque async na declaração da função

            const resposta = await fetch(urlConsulta);  //fetch = comunicação com API
           

            //Acessa a resposta e captura os dados em formato JSON (objeto)
            const dados = await resposta.json();
            
            console.log(dados);

            if(dados.erro){     //se Objeto dados tiver a prop. erro, significa que o CEP não foi encontrado
                //Avisamos o usuário:
                pMensagem.textContent = "CEP não encontrado"
                pMensagem.style.color = "purple"
                return;
            }


            /* Exercicio: faça os dados aparecerem em cada campo do formulario */

            inputEndereco.value = dados.logradouro;
            inputBairro.value = dados.bairro
            inputCidade.value = dados.localidade
            inputEstado.value = dados.uf  //sigla = uf do estado
        
            pMensagem.textContent = "CEP não encontrado";
            
        } catch (error) {
            console.log("Erro na requisição: "+error);
            pMensagem.textContent = "Erro na busca do CEP"
        }
    }


