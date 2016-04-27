// MAIN CONTROLLER
function mainController($scope) {
    $scope.playerTurn = 1;
    $scope.winner = '';
    $scope.grid = {};
    $scope.combinations = [['A1','A2','A3'],['B1','B2','B3'],['C1','C2','C3'],['A1','B1','C1'],['A2','B2','C2'],['A3','B3','C3'],['A1','B2','C3'],['A3','B2','C1']];
    $scope.checkWinner = function() {
        console.groupCollapsed('Combination testing...');
        $scope.combinations.forEach(function(e) {
            console.groupCollapsed($scope.grid[e[0]], $scope.grid[e[1]], $scope.grid[e[2]]);
            console.log($scope.grid[e[0]] == $scope.grid[e[1]] == $scope.grid[e[2]]);
            if($scope.grid[e[0]] == $scope.grid[e[1]] && $scope.grid[e[1]] == $scope.grid[e[2]] && $scope.grid[e[1]]== 1) {
                $scope.winner = 1;
            }
            else if($scope.grid[e[0]] == $scope.grid[e[1]] && $scope.grid[e[1]] == $scope.grid[e[2]] && $scope.grid[e[1]] == 2) {
                $scope.winner = 2;
            }
            else if (Object.getOwnPropertyNames($scope.grid).length == 9) {
                $scope.winner = 0;
            }
            console.groupEnd();
        });
        console.groupEnd();
        if($scope.winner !== '') console.log('Game ended...');
    };
    $scope.toggle = function(e) {
        if (!$scope[e]) {
            if ($scope.playerTurn === 1) {
                $scope[e] = 'X';
                $scope.grid[e] = 1;
                $scope.playerTurn = 2;
                $scope.checkWinner();
            } else if ($scope.playerTurn === 2) {
                $scope[e] = 'O';
                $scope.grid[e] = 2;
                $scope.playerTurn = 1;
                $scope.checkWinner();
            }
        }
    };
}
