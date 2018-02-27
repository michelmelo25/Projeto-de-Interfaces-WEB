abstract class Conta{
    protected conta: number;
    //protected usuario: string;
    protected saldo: number;
    protected tipo: string;

    depositar(valor: number){
        if(valor > 0){
            this.saldo += valor;
        }
    }
    
    abstract sacar(valor: number)
    abstract correcaoMonetaria()
}

interface gerarRelatorio{
    gerarrelatorio(): void;
}

class corrente extends Conta implements gerarRelatorio{
    constructor(){
        super();
        this.conta = Math.floor(Math.random() * 3999) + 1;
        this.saldo = 0;
        this.tipo = "Conta Corrente";
    }

    sacar(valor: number){
        if(this.saldo >= valor+2){
            this.saldo = this.saldo - (valor+2);
            console.log("Saque de R$" + valor + ".00 Realisado!");
        }else{
            console.log("Saldo Insuficiente!");
        }
    }
    correcaoMonetaria(){

    }

    gerarrelatorio(){
        console.log("Conta: " + this.conta);
        console.log("Tipo: " + this.tipo);
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento Atual: RS$00.00");
    }
}

class poupanca extends Conta implements gerarRelatorio{
    constructor(){
        super();
        this.conta = Math.floor(Math.random() * 6999) + 4000;
        this.saldo = 0;
        this.tipo = "Conta Poupança";
    }

    sacar(valor: number){
        let imposto: number;
        imposto = valor*0.02;
        if(this.saldo >= valor+imposto){
            this.saldo = this.saldo - (valor+imposto);
            console.log("Saque de R$" + valor + ".00 Realisado!");
        }else{
            console.log("Saldo Insuficiente!");
        }
    }
    correcaoMonetaria(){
        this.saldo += this.saldo*0.02;
    }

    gerarrelatorio(){
        console.log("Conta: " + this.conta);
        console.log("Tipo: " + this.tipo);
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento Atual: RS$" + this.saldo*0.02);
    }
}

class investimento extends Conta implements gerarRelatorio{
    constructor(){
        super();
        this.conta = Math.floor(Math.random() * 9999) + 6999;
        this.saldo = 0;
        this.tipo = "Conta Investimento";
    }

    sacar(valor: number){
        let imposto: number;
        imposto = (valor * 0.05) + 10;
        if(this.saldo >= valor + imposto){
            this.saldo = this.saldo - (valor + imposto);
            console.log("Saque de R$" + valor + ".00 Realisado!");
        }else{
            console.log("Saldo Insuficiente!");
        }
    }
    correcaoMonetaria(){
        this.saldo += this.saldo * 0.058;
    }

    gerarrelatorio(){
        console.log("Conta: " + this.conta);
        console.log("Tipo: " + this.tipo);
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento Atual: RS$" + this.saldo * 0.058);
    }
}

let contaCorrent = new corrente();
let contaPoupanca = new poupanca();
let contaInvestimento = new investimento();

contaCorrent.depositar(300);
contaPoupanca.depositar(450);
contaInvestimento.depositar(500);

contaCorrent.gerarrelatorio();
console.log(" ");
contaPoupanca.gerarrelatorio();
console.log(" ");
contaInvestimento.gerarrelatorio();
console.log(" ");

contaCorrent.sacar(50);
console.log(" ");
contaPoupanca.sacar(100);
console.log(" ");
contaInvestimento.sacar(130);
console.log(" ");

contaCorrent.correcaoMonetaria();
contaPoupanca.correcaoMonetaria();
contaInvestimento.correcaoMonetaria();

contaCorrent.gerarrelatorio();
console.log(" ");
contaPoupanca.gerarrelatorio();
console.log(" ");
contaInvestimento.gerarrelatorio();
console.log(" ");