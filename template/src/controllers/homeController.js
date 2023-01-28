exports.getHome = (req, res) => {
    res.render('index');
}
exports.postHome =(req, res) => {
    const body = req.body;
    const nameUser = body.Nome;
    const yearUser = body.Idade;
    console.log(nameUser, yearUser);
    res.send(`Obrigada pela informção trouxa :D<br> Nome do Usuário: ${body.Nome} <br> Idade do Usuário: ${body.Idade}`);
}
   
