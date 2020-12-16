class Aluno{
  constructor (primeiroNome, segundoNome, primeiraNota, segundaNota){
      this.primeiroNome=primeiroNome;
      this.segundoNome=segundoNome;
      this.primeiraNota=primeiraNota;
      this.segundaNota=segundaNota;
  }


  nomeCompleto(primeiraNome, segundoNome){
      var nome_comp = this.primeiroNome + " " + this.segundoNome;
      return nome_comp;
  }

  media (primeiraNota, segundaNota){
    var calc_med = (this.primeiraNota*0.6) + (this.segundaNota*0.4);
    return calc_med;
  }

  situacao (){
    if(this.media()>6){
     return ("Aprovado");
    }else{
     return ("Reprovado");
    }
  }

}

var alunos = [];
alunos[0] = new Aluno("Rayara", "Santos", 8, 5);
alunos[1] = new Aluno("José", "Alves", 10, 7);
alunos[2] = new Aluno("Carla", "Maria", 6, 5);
alunos[3] = new Aluno("Maria", "Clara", 6, 9);
alunos[4] = new Aluno("Ana", "Inez", 7, 9);

alert("Nome Completo: " + alunos[0].nomeCompleto() + 
"\nMédia: " + alunos[0].media() +
"\nSituação: " + alunos[0].situacao() );

alert("Nome Completo: " + alunos[1].nomeCompleto() + 
"\nMédia: " + alunos[1].media() +
"\nSituação: " + alunos[1].situacao() );

alert("Nome Completo: " + alunos[2].nomeCompleto() + 
"\nMédia: " + alunos[2].media() +
"\nSituação: " + alunos[2].situacao() );

alert("Nome Completo: " + alunos[3].nomeCompleto() + 
"\nMédia: " + alunos[3].media() +
"\nSituação: " + alunos[3].situacao() );

alert("Nome Completo: " + alunos[4].nomeCompleto() + 
"\nMédia: " + alunos[4].media() +
"\nSituação: " + alunos[4].situacao() );