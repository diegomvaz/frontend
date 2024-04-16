import { useContext, useState } from 'react'
import { pedidosContext, novoPedidoContext } from "../shared/context";
import validation from "../shared/validation"
import { Alert, Box, Button, Center, Flex, Input, Select, Text } from "@chakra-ui/react";



function FormularioPedidos() {
    const { lista, setLista } = useContext(pedidosContext)
    const { pedidoForm, setPedidoForm } = useContext(novoPedidoContext)
    const [tipo, setTipo] = useState('Galaxy S23 Ultra');
    const [aviso, setAviso] = useState({
        AlertColor: "warning",
        message: "",
    });

    const setDefaultAviso = () => {
        setAviso({ AlertColor: "warning", message: "" })
    }

    const changeTipo = (event: any) => {
        setTipo(event.target.value as string)
        let pedido = pedidoForm
        pedido[0].tipo = event.target.value
        setPedidoForm(pedido)
    };


    return (
        <>
            <Flex
                direction={'row'}
                wrap={'wrap'}
                justifyContent={'center'}
                alignItems={'center'}
                paddingTop={10}
            >
                <Box padding={5}>
                    <Text paddingBottom={2}>Código do Pedido</Text>
                    <Input
                        type='text'
                        value={pedidoForm[0].pedido}
                        onChange={(event: any) => {
                            let codigo = event.target.value.replace(/[^0-9]/g, '')
                            let pedido = pedidoForm
                            pedido[0].pedido = codigo
                            setPedidoForm(pedido)
                            setDefaultAviso()
                        }}
                    />
                </Box>
                <Box padding={5} >
                    <Text paddingBottom={2}>Data de Compra</Text>
                    <Input
                        type='date'
                        onChange={(event) => {
                            let pedido = pedidoForm
                            let data = new Date(event.target.value)
                            data.setDate(data.getDate() + 1)
                            pedido[0].data_compra = data.toLocaleDateString()
                            setPedidoForm(pedido)
                            setDefaultAviso()
                        }}
                    />
                </Box>
                <Box padding={5} >
                    <Text paddingBottom={2}>Data de Entrega</Text>
                    <Input
                        type='date'
                        onChange={(event) => {
                            let pedido = pedidoForm
                            let data = new Date(event.target.value)
                            data.setDate(data.getDate() + 1)
                            pedido[0].data_entrega = data.toLocaleDateString()
                            setPedidoForm(pedido)
                            setDefaultAviso()
                        }}
                    />
                </Box>
                <Box padding={5} >
                    <Text paddingBottom={2}>Tipo do Aparelho</Text>
                    <Select
                        value={tipo}
                        onChange={changeTipo}
                    >
                        <option value={'Galaxy S23 Ultra'}>Galaxy S23 Ultra</option>
                        <option value={'Galaxy S23 Plus'}>Galaxy S23 Plus</option>
                        <option value={'Galaxy S23'}>Galaxy S23</option>
                        <option value={'Galaxy S22 Plus'}>Galaxy S22 Plus</option>
                    </Select>
                </Box>
                <Box padding={5} >
                    <Text paddingBottom={2}>Quantidade</Text>
                    <Input
                        type='number'
                        value={pedidoForm[0].quantidade}
                        onChange={(event) => {
                            let quantidade = parseInt(event.target.value.replace(/[^0-9]/g, ''))
                            let pedido = pedidoForm
                            pedido[0].quantidade = quantidade
                            setPedidoForm(pedido)
                            setDefaultAviso()
                        }}
                    />
                </Box>
                <Box padding={5} >
                    <Text paddingBottom={2}>Preço</Text>
                    <Input
                        type='number'
                        onChange={(event) => {
                            let pedido = pedidoForm
                            pedido[0].preco = parseFloat(event.target.value)
                            setPedidoForm(pedido)
                            setDefaultAviso()
                        }}
                    />
                </Box>
                <Box padding={5} paddingTop={50}>
                    <Button
                        colorScheme='blue'
                        onClick={() => {
                            let pedidos = lista.map((linha: any) => (linha.pedido));
                            const [valid, msg] = validation(pedidoForm[0], pedidos)
                            if (valid) {
                                setAviso({ AlertColor: "success", message: msg.toString() })
                                let novoPedido = JSON.parse(JSON.stringify(pedidoForm))[0]
                                setLista((lista: any) => [...lista, novoPedido])
                            }
                            else {
                                setAviso({ AlertColor: "warning", message: msg.toString() })
                            }
                        }}>
                        Salvar
                    </Button>
                </Box>

            </Flex>
            {aviso.message != '' &&
                <Center>
                    <Alert
                        width={'50%'}
                        status={aviso.AlertColor == "success" ? 'success' : 'warning'}
                        margin={10}
                        justifyContent={'center'}

                    >
                        {aviso.message}</Alert>
                </Center>
            }
        </>
    )
}



export default FormularioPedidos

