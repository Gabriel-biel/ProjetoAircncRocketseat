//index = Quer dizer que agente tá criando um metodo que vai retornar uma listagem
//show = Metodo que vai retornar uma listagem de apenas uma sessão
//store = Criar uma sessão
//update = alterar uma sessão
//destroy = deletar uma sessão
const User = require("../models/User");

module.exports = {
    async store(req, res){
        const { email } = req.body;
        
        let user = await User.findOne({ email });//procura o usuario na tabela do banco de dados User

        if (!user){
            const user = await User.create({ email });//caso o usuario não exista, então ele e criado
        };

        return res.json(user);
    }
};  