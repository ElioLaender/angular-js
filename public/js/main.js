/*
Módulo principal do projeto. Ao criar um módulo, caso exista dependências, devemos passalas dentro do array especificado. 
Como o módulo está sendo criado, o '[]' não pode ser omitido, caso contrário o framework trata como se estivessemos querendo
utilizar o módulo.

Para importarmos o módulo, devemos chamar o mesmo dentro de um bloco html em que o mesmo deva atuar, ex: 
<html ng-app="alurapic"> Dessa forma o módulo poderá atuar dentro de todo escopo da página. 

Atenção: Além de importar o arquivo do angularJS, devemos também importar o script que contém o módulo que estamos declarando dentro
do ng-app=""
*/
angular.module('alurapic', ['minhasDiretivas']);