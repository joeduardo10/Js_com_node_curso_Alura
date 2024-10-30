const pessoa = {
    nome :'José Eduardo Fernandes',
    idade : 54,
    issolteiro : false,
    hobbies : ['programaçaõ', 'acordeon', 'condominio'],
   
    }
    pessoa.endereco = {
      rua :' Prof. Luis de Vasconcelos',
      numero : '160',
      bairro: 'Vl.Progreso',
      cidade: 'Sorocaba'
    };
 function mostrarInfoPessoa(pessoa){
      
      console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`)
      console.log(`Idade: ${pessoa.idade} Tipo: ${typeof pessoa.idade}`)
      console.log(`Solteiro: : ${pessoa.issolteiro} Tipo: ${typeof pessoa.issolteiro}`)
      console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
      console.log('/*/*/*/*/Endereço/*/*/*/*/*/');
      console.log(`Rua ${pessoa.endereco.rua} , Num ${pessoa.endereco.numero}`);
      console.log(`Bairo: ${pessoa.endereco.bairro} Cidade: ${pessoa.endereco.cidade}`)
    }  

    mostrarInfoPessoa(pessoa);
    //console.log(pessoa.endereco);
    //console.log(pessoa) 