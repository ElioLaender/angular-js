/*
    Criação do módulo de diretivas, esse módulo deve ser injetado como dependência do módulo principal da aplicação, 
    o 'alurapic'.

    Para adicionarmos diretivas, devemos passar a function .directive() que possui o nome da diretiva e a function de callBack.

    Diretivas podem ser configuradas para serem utilizadas como atributos e/ou elementos, ex:

    A(atribute): <div meu-painel></div> ou E(element): <meu-painel></meu-painel>

    Atenção: Na criação da diretiva, devemos utilizar o camelCase, porém no template utilizamos o hífem.
    
    É posssível e deve-se isolar o escopo de uma diretiva, para que a mesma não interfira no mundo externo ao seu escopo, 
    podendo assim ser reaproveitada em diferentes partes da aplicação com maior facilidade.
*/
angular.module('minhasDiretivas', [])
    .directive('meuPainel', function() {

        // Toda diretiva deverá retornar um ddo (directive definition object)
        var ddo = {};

        // Definição das regras que devem ser aplicada a diretiva
        ddo.restric = "AE"; // Pode ser chamada na view como atributo e elemento

        // Aqui será declarado as variáveis a serem utilizadas pelo componente, equivalente ao @input do angular 2+. Ex:
        // <meu-painel titulo="Sou um titulo"><meu-painel>
        ddo.scope = {
            titulo: '@titulo' // Podemos passar apenas o @ em vez de @titulo caso também seja chamado titulo="" na tag do componente.
        }

        /*
          O AngularJS manipula o DOM, quando chamamos um componente, o AngularJS
          não entende que deve manter o html envolvido pelas tags do componente, para contornar essa situação,
          o angular fornece o 'transcludion', utilizado exatamente para manter os elementos filhos do componente quando o
          DOM é regerado na view.  

          Quando habilitamos o transclude no componente, devemos informar qual a tag será responsável por conter os elementos filhos.
          Utilizamos a diretiva ng-transclude na tag responsável por ser a pai dos elementos envolvidos.
        */
        ddo.transclude = true; // Informa que as tags envoltar ao componente devem ser mantidas quando as tags criardas forem substituidas pelo html que as representam.

        // Definindo o html da diretiva. Lembranso que a diretiva ng-transclude foi aplicada na tag.
        ddo.templateUrl = "js/directives/meu-painel.html";
        return ddo;
    })
    .directive('meuBotaoPerigo', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao : '@'
        }
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    });