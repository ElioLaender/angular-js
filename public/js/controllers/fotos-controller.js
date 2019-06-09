/*
Criando o controller no módulo alurapic criado em main.js
Fazemos uma chamada passando 'alurapic' sem especificar os colchetes, pois agora vamos utilizar o módulo para
declarar o controller referente a esse módulo. 

Ao declarar um controller, devemos especificar o nome do controller e uma function passado o que existirá no seu escopo. 
Obs: No angular, podemos ter um mesmo controller que será aplicado em várias views. Para utilizar o controller, será necessário
declarar o controller no bloco html em que o mesmo for aplicado. Ex:
<body ng-controoler="FotosController"> 

$scope // Responsável por tornar as funções e variáveis acessíveis para view
$http // Responsável por realizar requisições Ajax

PS: As dependências injetadas não precisam ter um ordem, o angular consegue fazer esse controle. Ex: tanto faz informar
function($scope, $http) ou function($http, $scope)

* Os métodos de $http retornam um promisse, pois o ajax realiza requisições assíncrinas.  
 */
angular.module('alurapic').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];
    
    // Retorna uma promisse
    // $http.get('v1/fotos')
    //     .promisse.then(function(retorno) {
    //         $scope.fotos = retorno.data;
    //     }).catch(function(error) {
    //         console.log(error);
    //     });

    // Uma forma mais resumida para obter o mesmo resultado

    $http.get('v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro){
        console.log(erro);
    })
});