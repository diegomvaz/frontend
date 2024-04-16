


let validation = (pedido: any, pedidos: any) => {

    const data_compra = new Date(pedido.data_compra)
    const data_entrega = new Date(pedido.data_entrega)

    if (pedidos.includes(pedido.pedido))
        return [false, 'Pedido já cadastrado!']
    else if (pedido.pedido == '') {
        return [false, 'Preencha o código do pedido!']
    }
    else if (pedido.pedido < 0 || pedido.pedido > 10000) {
        return [false, 'O número do pedido deve estar entre 1 e 9999!']
    }
    else if (data_compra.getFullYear() < 2024 || data_compra.getFullYear() > 2024 || pedido.data_compra == '') {
        return [false, 'A data de compra deve estar entre 01/01/2024 e 31/12/2024']
    }
    else if (data_entrega.getFullYear() < 2024 || data_entrega.getFullYear() > 2024 || pedido.data_entrega == '') {
        return [false, 'A data de entrega deve estar entre 01/01/2024 e 31/12/2024']
    }
    else if (data_entrega <= data_compra) {
        return [false, 'A data de entrega deve ser maior que a data de compra!']
    }
    else if (pedido.tipo == '') {
        return [false, 'O tipo do produto deve ser preenchido!']
    }
    else if (pedido.quantidade < 10 || pedido.quantidade > 50) {
        return [false, 'A quantidade deve estar entre 10 e 50!']
    }
    else if (pedido.preco < 20 || pedido.preco > 60) {
        return [false, 'O preco deve estar entre 20 e 60!']
    } else
        return [true, 'O pedido foi cadastrado com sucesso!']
};

export default validation