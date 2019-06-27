/*
Módulo principal do projeto. Ao criar um módulo, caso exista dependências, devemos passalas dentro do array especificado. 
Como o módulo está sendo criado, o '[]' não pode ser omitido, caso contrário o framework trata como se estivessemos querendo
utilizar o módulo.

Para importarmos o módulo, devemos chamar o mesmo dentro de um bloco html em que o mesmo deva atuar, ex: 
<html ng-app="alurapic"> Dessa forma o módulo poderá atuar dentro de todo escopo da página. 

Atenção: Além de importar o arquivo do angularJS, devemos também importar o script que contém o módulo que estamos declarando dentro
do ng-app=""
*/
angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {

        // Trabalha com modo html5 ativo, que retira a necessidade de trabalhar com a hash '#' na rota, porém o backend precisa estar preparado para reconhecer
        // quais requisições são para spa e quais são para ele(api)
        $locationProvider.html5Mode(true);
        // Injeta o controller na view quando a rota for chamada.
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        // Caso a url passada não bater com nenhuma, retorna para /fotos 
        $routeProvider.otherwise({
            redirec: '/fotos'
        });
    });