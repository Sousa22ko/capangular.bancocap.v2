export interface extrato {
    dataHora: Date,
    valor: number
    tipoOperacao: tipoOperacao
}

export enum tipoOperacao {
    saque = "Saque", 
    deposito = "Deposito",
    transferencia = "Transferência"
}