angular.module('timeline.homeController', [])
    .controller('HomeCtrl', function ($scope, $http) {

        $scope.usuarios = [];

        // Percorre letra a letra procurando espaço e quando encontra substitue por vazio.
        function trim(vlr) {
            while (vlr.indexOf(" ") != -1) vlr = vlr.replace(" ", "");
            return vlr;
        }

        // Realiza uma requisição HTTP do tipo GET o retorno é jogado na variável usuarios do $scope.
        $http.get('http://vagalumewifi.com.br/timeline.json').then(function (retorno) {
            // console.log(retorno.data);
            $scope.usuarios = retorno.data;

            // Este for foi necessário pq a data retornado do arquivo json está com um espaço que não deveria.
            for (var i = 0; i < $scope.usuarios.length; i++) {
                $scope.usuarios[i].date = trim($scope.usuarios[i].date);
            }

        }, function (error) {
            console.log("Erro ao pegar json.");
        });

    });