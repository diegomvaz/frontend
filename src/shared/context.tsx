import { createContext } from "react"


type TypePedidosContext = {
  lista : any,
  setLista : any
}

export const pedidosContext = createContext<TypePedidosContext>({lista: [], setLista: () => {}})

type TypeNovoPedidoContext = {
    pedidoForm : any,
    setPedidoForm : any
  }
  
export const novoPedidoContext = createContext<TypeNovoPedidoContext>({pedidoForm: [], setPedidoForm: () => {}})