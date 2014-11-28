/**
 * Created by Iulian.Pelin on 11/26/2014.
 */

app.controller('shopController', ['$scope', function ($scope) {
    $scope.products = [
        {
            name: 'Prod1',
            description: 'desc',
            status: 1,
            varEdit : true,
            strike : 0

        },
        {
            name: 'Prod2',
            description: 'desc',
            status: 1,
            varEdit : true,
            strike : 0
        },
        {
            name: 'Prod3',
            description: 'desc',
            status: 1,
            varEdit : true,
            strike : 0

        },
        {
            name: 'Prod4',
            description: 'desc',
            status: 1,
            varEdit : true,
            strike : 0

        },
        {
            name: 'Prod5',
            description: 'desc',
            status: 1,
            varEdit : true,
            strike : 0

        }

    ];




    // <Adaugare>
    $scope.newAdd = function () {
        $scope.var = !$scope.var;
    };

    $scope.addProd = function (name, aman) {
        $scope.products.push({
            name: name,
            description: aman,
            status: 1,
            varEdit : true,
            strike : 0
        });
    };
    // </Adaugare>

    //<Produse cumparate>
    $scope.checkProd = function (prod) {
        if (prod.status == 1) {
            prod.status = "strikeout";
            prod.strike = 1;
        }
        else if (prod.status == "strikeout") {
            prod.status = 1;
            prod.strike = 0;
        }


    };
    //</Produse cumparate>

    //<Stergere Produse Cumparate>
    $scope.deleteChecked = function () {
        for (var i = 0; i < $scope.products.length; i++) {

          if ($scope.products[i].strike == 1) {
              $scope.products.splice(i, 1);
              i--;
          }

        }

    };
    //</Stergere Produse Cumparate>

    //<Editare Produse>
    $scope.editShow = function (prod) {
        prod.varEdit=false;
    };

    $scope.editProd = function(prod,nume,aman){
        prod.varEdit=true;
        for (var i = 0; i < $scope.products.length; i++) {
            if (prod.name == $scope.products[i].name) {
                $scope.products[i].name= nume;
                $scope.products[i].description= aman;
            }
        }

    };
    //</Editare Produse>


    $scope.startsWith = function (actual, expected) {
        var lowerStr = (actual + "").toLowerCase();
        return lowerStr.indexOf(expected.toLowerCase()) === 0;
    }

}]);
app.directive("shopList", function(){
    return {
        restrict: "E",
        templateUrl:"templates/element.html"

    }

});
//search
app.filter('startsWith', function () {
    return function (products, search) {
        var filtered = [];
        if(search==null) return products;
        for (var i = 0; i < products.length; i++) {
            var item = products[i];
            if (angular.equals(search,item.name.substring(0, search.length))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});
