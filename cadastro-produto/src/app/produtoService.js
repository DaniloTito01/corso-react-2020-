const PRODUTOS = '_PRODUTOS'

export function ErrosValidacao(errors) {
    this.errors = errors;
}

export default class ProdutoService {

    validar = (produto) => {
        const errors = []



        if (!produto.nome) {

            errors.push('O Campo Nome é obrigadorio.')
        }

        if (!produto.sku) {

            errors.push('O Campo SKU é obrigadorio.')
        }

        if (!produto.descricao) {

            errors.push('O Campo Descricao é obrigadorio.')
        }

        if (!produto.preco || produto.preco <= 0) {

            errors.push('O Campo Preço deve ter  um  valor maior que zero(0).')
        }

        if (!produto.fornecedor) {

            errors.push('O Campo Fornecedor é obrigadorio.')
        }

        if (errors.length > 0) {
            throw new ErrosValidacao(errors)
        }
    }

    obterProdutos = () =>{
        const  produtos = localStorage.getItem(PRODUTOS)
        return JSON.parse(produtos)
    }

    salvar = (produto) => {
        this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS)
        if (!produtos) {
            produtos = []
        } else {
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto);
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))


    }

}

