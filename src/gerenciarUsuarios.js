const usuarios = [
   {
        nome:'Matheus',
        email:'matheus@gospel.com'
   },
   {
        nome:'Marcos',
        email:'marcosheus@gospel.com'
   },
   {
        nome:'Lucas',
        email:'lucas@gospel.com'
   },
   {
        nome:'João',
        email:'joao@gospel.com'
   }
]

function retornarUsuarios(){
    return usuarios;
}

function adicionarNovoUsuario(usuario){
    usuarios.push(usuario);
}


module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}