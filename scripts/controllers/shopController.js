/**
 * Created by Iulian.Pelin on 11/26/2014.
 */
var products = [
    {
        prodName: 'Prod1',
        prodAman: 'desc',
        status: 1,
        varEdit : true

    },
    {
        prodName: 'Prod2',
        prodAman: 'desc',
        status: 1,
        varEdit : true
    },
    {
        prodName: 'Prod3',
        prodAman: 'desc',
        status: 1,
        varEdit : true

    },
    {
        prodName: 'Prod4',
        prodAman: 'desc',
        status: 1,
        varEdit : true

    },
    {
        prodName: 'Prod5',
        prodAman: 'desc',
        status: 1,
        varEdit : true

    }

];
app.controller('shopController', ['$scope', function ($scope) {


    var strikedProd = [];

    // <Adaugare>
    $scope.newAdd = function () {
        $scope.var = !$scope.var;
    };

    $scope.addProd = function (name, aman) {
        products.push({
            prodName: name,
            prodAman: aman,
            status: 1,
            varEdit : true,
            varEdit1 : false
        });
    };
    // </Adaugare>

    //<Produse cumparate>
    $scope.checkProd = function (prod) {
        if (prod.status == 1) {
            prod.status = "strikeout";
            strikedProd.push(prod);
        }
        else if (prod.status == "strikeout") {
            prod.status = 1;
            strikedProd.pop();
        }


    };
    //</Produse cumparate>

    //<Stergere Produse Cumparate>
    $scope.deleteChecked = function () {
        for (var i = 0; i < products.length; i++) {
            for (var j = 0; j < strikedProd.length; j++) {
                if (products[i].prodName == strikedProd[j].prodName) products.splice(i, 1);

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
        for (var i = 0; i < products.length; i++) {
            if (prod.prodName == products[i].prodName) {
                products[i].prodName= nume;
                products[i].prodAman= aman;
            }
        }

    };
    //</Editare Produse>

    //search



    $scope.prodList = products;
}]);
app.directive("shopList", function(){
    return {
        restrict: "E",
        template:"<h3 style='text-align: center'>Lista cumparaturi</h3>"

    }

});
app.filter('customFilter1',function(){
    return function(element){
        for(var i=0;i<products.length;i++)
            if (products[i].prodName === element) return element;
    }
});