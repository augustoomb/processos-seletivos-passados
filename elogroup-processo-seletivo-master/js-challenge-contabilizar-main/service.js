// FUNÇÃO AUXILIAR -  REQUISITO 1
const checarSeCaracteresSaoNumericosNaturais = (cpf, gravarMensagemErro) => {
   if(isNaN(cpf) || cpf === null || (!isNaN(cpf) && cpf < 0)) {
      gravarMensagemErro(' CPF deve conter apenas caracteres numéricos naturais');
   }
}

// FUNÇÃO AUXILIAR -  REQUISITO 1
const calcularDigitoVerificador = (cpf, modulo) => {
   let soma = 0;

   for (let i = 0; i < (modulo - 1); i++) {
     soma += parseInt(cpf.charAt(i)) * (modulo - i);
   }

   let resto = soma % 11;
   return resto < 2 ? 0 : 11 - resto;
}

// FUNÇÃO AUXILIAR -  REQUISITO 1
const checarSeTodosOsCaracteresSaoIguais = (cpf) => {
   return new Set(cpf).size === 1;
 }

// FUNÇÃO AUXILIAR -  REQUISITO 1
const checarSeCpfTemTamanhoCorreto = (cpf, gravarMensagemErro) => {
   if(cpf === null || cpf.length !== 11) {
      gravarMensagemErro(' CPF deve conter 11 dígitos')
   }
}

// FUNÇÃO AUXILIAR -  REQUISITO 1
const checarDigitosVerificadores = (cpf, gravarMensagemErro) => {
   if(cpf === null || checarSeTodosOsCaracteresSaoIguais(cpf)) {
      gravarMensagemErro(' Os dígitos verificadores do CPF devem ser válidos');
      return;
   }

   // calcula o primeiro dígito verificador - DV modulo 10 é o 1º DV
   const digitoVerificadorUm = calcularDigitoVerificador(cpf, 10)
   
   // pega o primeiro dígito verificador e confere
   if (digitoVerificadorUm !== parseInt(cpf.charAt(9))) {
      gravarMensagemErro(' Os dígitos verificadores do CPF devem ser válidos')
     return;
   }
   
   // calcula o segundo dígito verificador - DV modulo 11 é o 2º DV
   const digitoVerificadorDois = calcularDigitoVerificador(cpf, 11)
   
   // pega o segundo dígito verificador
   if (digitoVerificadorDois !== parseInt(cpf.charAt(10))) {
      gravarMensagemErro(' Os dígitos verificadores do CPF devem ser válidos')
      return;
   }
   
   return true;
 }

// FUNÇÃO AUXILIAR -  REQUISITO 1
const checarSeValorEhNumerico = (valor, gravarMensagemErro) => {
   if(typeof valor !== 'number') {
      gravarMensagemErro(' Valor deve ser numérico')
   }
}

// FUNÇÃO AUXILIAR -  REQUISITO 1
const checarSeValorEhSuperior = (numeroInformado, numeroBase, gravarMensagemErro) => {
   if(numeroInformado > numeroBase) {
      gravarMensagemErro(` Valor não pode ser superior a ${ numeroBase }`)
   }
}

// FUNÇÃO AUXILIAR - REQUISITO 1
const checarSeValorEhInferior = (numeroInformado, numeroBase, gravarMensagemErro) => {
   if(numeroInformado < numeroBase) {
      gravarMensagemErro(` Valor não pode ser inferior a ${ numeroBase }.`)
   }
}

// FUNÇÃO AUXILIAR -  REQUISITO 1
const validarCpf = (cpf, gravarMensagemErro) => {
   checarSeCaracteresSaoNumericosNaturais(cpf, gravarMensagemErro)
   checarDigitosVerificadores(cpf, gravarMensagemErro)
   checarSeCpfTemTamanhoCorreto(cpf, gravarMensagemErro)
}

// FUNÇÃO AUXILIAR -  REQUISITO 1
const validarValor = (valor, gravarMensagemErro) => {
   checarSeValorEhNumerico(valor, gravarMensagemErro)
   checarSeValorEhSuperior(valor, 15000.00, gravarMensagemErro)
   checarSeValorEhInferior(valor, -2000.00, gravarMensagemErro)
}

// FUNÇÃO PRINCIPAL - REQUISITO 1
const validarEntradaDeDados = (lancamento) => {
   const arrayMensagensErro = [];

   const gravarMensagemErro = (mensagem) => arrayMensagensErro.push(mensagem);

   validarCpf(lancamento.cpf, gravarMensagemErro);   
   validarValor(lancamento.valor, gravarMensagemErro);  

   return arrayMensagensErro.length === 0 ? null : arrayMensagensErro;
}

// FUNÇÃO PRINCIPAL - REQUISITO 2
const recuperarSaldosPorConta = (lancamentos) => {
   const saldos = lancamentos.reduce((acc, lancamento) => {
      acc[lancamento.cpf] = (acc[lancamento.cpf] || 0) + lancamento.valor;
      return acc;
   }, {});   

   // { 
   //    '08961451669': 950
   //    '45069131672': 100 
   //    '16284514582': -500
   // }



   // ['08961451669', '45069131672', '16284514582']

   return Object.keys(saldos).map(cpf => ({ cpf, valor: saldos[cpf] }));
}

// FUNÇÃO PRINCIPAL - REQUISITO 3
const recuperarMaiorMenorLancamentos = (cpf, lancamentos) => {
   const lancamentosDoCPF = lancamentos.filter(lancamento => lancamento.cpf === cpf)

   if(lancamentosDoCPF.length === 0) {
      return [];
   }

   return [
      { cpf, valor: Math.min(...lancamentosDoCPF.map(lancamento => lancamento.valor)) },
      { cpf, valor: Math.max(...lancamentosDoCPF.map(lancamento => lancamento.valor)) },
   ]
}

// FUNÇÃO PRINCIPAL - REQUISITO 4
const recuperarMaioresSaldos = (lancamentos) => {
   const saldosPorConta = recuperarSaldosPorConta(lancamentos);

   saldosPorConta.sort((a, b) => b.valor - a.valor);

   return saldosPorConta.slice(0,3);
}

// FUNÇÃO AUXILIAR - REQUISITO 5
const contarOcorrenciasPorCpf = (lancamentos) => {
   return lancamentos.reduce((acc, lancamento) => {
      acc[lancamento.cpf] = (acc[lancamento.cpf] || 0) + 1;
      return acc;
    }, {});

   // { 
   //    '08961451669': 2
   //    '45069131672': 1 
   //    '16284514582': 4
   // }
}

// FUNÇÃO AUXILIAR - REQUISITO 5
const calcularSaldosMedios = (saldosPorConta, quantidadeDeOcorrenciasPorCpf) => {
   return saldosPorConta.map((conta) => {
      return {
        cpf: conta.cpf,
        valor: conta.valor / quantidadeDeOcorrenciasPorCpf[conta.cpf],
      };
   });
}

// FUNÇÃO PRINCIPAL - REQUISITO 5
const recuperarMaioresMedias = (lancamentos) => {
   const quantidadeDeOcorrenciasPorCpf = contarOcorrenciasPorCpf(lancamentos);
    // { '08961451669': 2, '45069131672': 1 }

   const saldosPorConta = recuperarSaldosPorConta(lancamentos);
      // [{cpf: '08961451669', valor: 540}, {cpf: '45069131672', valor: 120}]

   const saldosMedios = calcularSaldosMedios(saldosPorConta, quantidadeDeOcorrenciasPorCpf)

   saldosMedios.sort((a, b) => b.valor - a.valor);

   return saldosMedios.slice(0,3);
}
