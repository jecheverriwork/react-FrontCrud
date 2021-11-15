
const domains = {
    Crud: 'http://localhost:9000/api/',
}
const paths = {
    users:{
        getUsers : domains.Crud + "users",
        addUser : domains.Crud + "Adduser",
        deleteUser : domains.Crud + "DeleteUser",


    },
}

function formatstring(fmtstr) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fmtstr.replace(/\{(\d+)\}/g, function (match, index) {
        return args[index];
    });
}


export {domains, paths, formatstring};