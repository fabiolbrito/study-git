// mylibrary.js
var myLibrary = {

    makeStartRefresher: function(teste) {
        return teste;
    },
    readData: function(){
        return pm.variables.replaceIn('{{$randomFirstName}}');
    }
}
