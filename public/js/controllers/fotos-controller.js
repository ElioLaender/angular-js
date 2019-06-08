/*
Criando o controller no módulo alurapic criado em main.js
Fazemos uma chamada passando 'alurapic' sem especificar os colchetes, pois agora vamos utilizar o módulo para
declarar o controller referente a esse módulo. 

Ao declarar um controller, devemos especificar o nome do controller e uma function passado o que existirá no seu escopo. 
Obs: No angular, podemos ter um mesmo controller que será aplicado em várias views. Para utilizar o controller, será necessário
declarar o controller no bloco html em que o mesmo for aplicado. Ex:
<body ng-controoler="FotosController">
 */
angular.module('alurapic').controller('FotosController', function() {
});