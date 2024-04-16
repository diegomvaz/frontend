

import { useContext } from 'react';
import { pedidosContext } from '../shared/context';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'


export default function TabelaPedidos() {
    const { lista, setLista } = useContext(pedidosContext)

    return (


        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th align="center">Pedido</Th>
                        <Th align="center">Data de Compra</Th>
                        <Th align="center">Data de Entrega</Th>
                        <Th align="center">Tipo</Th>
                        <Th align="center">Quantidade</Th>
                        <Th align="center">Preço</Th>
                        <Th align="center">Financeiro</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {lista.map((row: any) => (
                        <Tr
                            key={row.pedido}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <Td scope="row" align="center"> {row.pedido} </Td>
                            <Td align="center">{row.data_compra}</Td>
                            <Td align="center">{row.data_entrega}</Td>
                            <Td align="center">{row.tipo}</Td>
                            <Td align="center">{row.quantidade.toLocaleString()}</Td>
                            <Td align="center">{row.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Td>
                            <Td align="center">{(row.preco * row.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

