export interface Extrato {
    dataHora: Date;
    valor: number;
    tipoOperacao: TipoOperacao;
}

export enum TipoOperacao {
    saque = 'Saque',
    deposito = 'Deposito',
    transferencia = 'Transferência'
}
