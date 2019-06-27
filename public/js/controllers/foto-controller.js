angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {
    
    $scope.foto = {};
    $scope.mensagem = '';

     // $routeParams é um recurso do angularJS para obtermos informações da URL.
     if ($routeParams.fotoId) {
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(foto) {
            $scope.foto = foto;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto de ID ' + $routeParams.fotoId;
        })
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            $http.post('v1/fotos', $scope.foto)
            .success(function() {
                $scope.mensagem = 'Foto incluída com sucesso';
                $scope.foto = {};
            })
            .error(function(erro) {
                $scope.mensagem = 'Não foi possível incluir a foto';
            });
        }
    };
});