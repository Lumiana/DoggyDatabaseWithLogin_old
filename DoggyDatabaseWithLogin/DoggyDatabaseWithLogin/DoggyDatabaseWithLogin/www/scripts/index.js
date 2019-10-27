//Creating a database
$(document).on("ready", function () {
    databaseHandler.createDatabase();
});  

//Adding user in table
function addUser() {
    var name = $("#txtUser").val();    
    var password = $("#txtPassword").val();            
    if (!name) {
        alert("Email is required");    
    }
    else {         
        var r = confirm("Username: " + name + "\n" + "Password " + password);        
        if (r == true) {
            userHandler.addUser(name, password);
            $("#txtUser").val("");
            $("#txtPassword").val("");
            location.href = "tabs.html"
        }
    }
} 