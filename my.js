// mylibrary.js
var myLibrary = {

    makeStartRefresher: function(teste) {
        return teste;
    },
    readData: function(){
        
        var obj = {
            firstName = pm.variables.replaceIn('{{$randomFirstName}}'),
            lastName = pm.variables.replaceIn('{{$randomLastName}}')
        }
        
        return obj;
    }
}
