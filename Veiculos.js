function veiculo(tipo, classe, modelo, fabricante, potencia, desempenho, consumo, anomodelo, anofabricacao, valor) {
    this.tipo = tipo;
    this.classe = classe;
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.potencia = potencia;
    this.desempenho = desempenho;
    this.consumo = consumo;
    this.anomodelo = anomodelo;
    this.anofabricacao = anofabricacao;
    let _valor = valor;
    this.getvalor = function () {
        return _valor;
    }
    this.setvalor = function (saldo) {
        if (typeof saldo ==='number'){
        _valor = saldo;
    }
}
    this.compra = function() {
        console.log(this.modelo + " compra realizada com sucesso");
    }
    this.desconto = function() {
        const novovalor = git_valor * 1;
        _valor = novovalor;
    }

    Object.freeze(veiculo);
}

function comprador(nome,nivel, endereco, pagamento, status, tipo, classe, modelo, fabricante, potencia, desempenho, consumo, anomodelo, anofabricacao, valor){
    this.nome = nome;
    this.nivel = nivel;
    this.endereco = endereco;
    this.pagamento = pagamento;
    this.status = status;

    veiculo.call (this, tipo, classe, modelo, fabricante, potencia, desempenho, consumo, anomodelo, anofabricacao, valor);
}

function vendedor(nome, loja, venda, status, tipo, classe, modelo, fabricante, potencia, desempenho, consumo, anomodelo, anofabricacao, valor){
    this.nome = nome;
    this.loja = loja;
    this.venda = venda;
    this.status = status;

    veiculo.call (this, tipo, classe, modelo, fabricante, potencia, desempenho, consumo, anomodelo, anofabricacao, valor);
}

function ouro (nome) {
    comprador.call(this, nome, "ouro", "RJ", "a vista", "Aprovado", "Moto", "esportivo", "BMW S 1000 RR", "BMW", "210 cv", "100 km/h em 3,1s", "15,6 km/l", 2023, 2023, 76.900)

    this.desconto = function() {
        const novovalor = this.getvalor() - (this.getvalor() * 30) / 100;
        this.setvalor(novovalor);
    }
}

function prata (nome) {
    comprador.call(this, nome, "prata", "RJ", "a vista", "Aprovado", "Carro", "esportivo", "BMW i8", "BMW", "362 cv", "100 km/h em 4,4s", "13,6 km/l", 2020, 2020, 773.887)

    this.desconto = function() {
        const novovalor = this.getvalor() - (this.getvalor() * 10) / 100;
        this.setvalor(novovalor);
    }
}

function cobre (nome) {
    comprador.call(this, nome, "cobre", "SP", "parcelado", "Aprovado", "Carro", "executivo", "BMW 530e M Sport", "BMW", "292 cv", "100 km/h em 5,9s", "26,4 km/l", 2023, 2023, 423.019)

    this.desconto = function() {
        const novovalor = this.getvalor() - (this.getvalor() * 5) / 100;
        this.setvalor(novovalor);
    }
}

const veiculo1 = new veiculo("Carro", "esportivo", "BMW i8", "BMW", "362 cv", "100 km/h em 4,4s", "13,6 km/l", 2020, 2020, 773.887);
const veiculo2 = new veiculo("Carro", "executivo", "BMW 530e M Sport", "BMW", "292 cv", "100 km/h em 5,9s", "26,4 km/l", 2023, 2023, 423.019);
const veiculo3 = new veiculo("Moto", "esportivo", "BMW S 1000 RR", "BMW", "210 cv", "100 km/h em 3,1s", "15,6 km/l", 2023, 2023, 76.900);
const veiculo4 = new veiculo("moto", "classica", "BMW R 18", "BMW", "91 cv", "100 km/h em 4,8s", "17,2 km/l", 2023, 2023, 154.500);

const comprador1 = new prata("vitor");
const comprador2 = new ouro("nicolas");
const comprador3 = new cobre("carla");
const comprador4 = new comprador("maria","", "SP", "parcelado", "aprovado", "moto", "classica", "BMW R 18", "BMW", "91 cv", "100 km/h em 4,8s", "17,2 km/l", 2023, 2023, 154.500);

const vendedor1 = new vendedor("Ana", "BMW-RJ", "a vista", "Aprovado", "Moto", "classica", "BMW R 18", "BMW", "91 cv", "100 km/h em 4,8s", "17,2 km/l", 2023, 2023, 154.500);

comprador4.desconto();
console.log(comprador4.getvalor());
