/*quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
Para isso vamos precisar trabalhar com dois elementos
1- listagem
2- cartão pokémon

precisa criar duas variáveis no JS para trabalhar  com os elementos da tela

precisa trabalhar com evento de clique feito pelo usuário na listagem de pokémon

- remover a classe aberto só do cartão que está aberto
- ao clicar em pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
- remover a classe ativo que marca o pokémon selecionado
- adicionar a classe ativo no item da lista selecionado*/

//criar duas variaveis para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //precisa trabalhar com evento de clique feito pelo usuário na listagem de pokémon
    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
            //ao clicar em pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})