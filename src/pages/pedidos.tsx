import { useState } from "react"
import FormularioPedidos from "../components/formulario"
import TabelaPedidos from "../components/tabela"
import { pedidosContext, novoPedidoContext } from "../shared/context"
import Header from "../components/header";
import { Box } from "@chakra-ui/react";

const pedidos = [
    {
        pedido: 1234,
        data_compra: "06/01/2022",
        data_entrega: "06/01/2023",
        tipo: "Galaxy S22 Plus",
        quantidade: 50,
        preco: 56
    }
]


let pedido = [
    {
        pedido: "",
        data_compra: "",
        data_entrega: "",
        tipo: "",
        quantidade: '',
        preco: 0
    }
]

function Pedidos() {
    const [lista, setLista] = useState(pedidos)
    const [pedidoForm, setPedidoForm] = useState(pedido)

    return (
        <>
            <Box width={'100%'} height={'100vh'}>
                <Header />
                <Box>
                    <pedidosContext.Provider value={{ lista, setLista }}>
                        <novoPedidoContext.Provider value={{ pedidoForm, setPedidoForm }}>
                            <FormularioPedidos />
                            <TabelaPedidos />
                        </novoPedidoContext.Provider>
                    </pedidosContext.Provider>
                </Box >
            </Box>
        </>

    )
}


export default Pedidos

