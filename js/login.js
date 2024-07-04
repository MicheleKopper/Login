// 2° PARTE
async function login(email, password) {

    try {
        // api.post(endpoint, dados body (formato objeto {}), configs (opcional))
        const resposta = await api.post('/login', { email: email, password: password })

        // Sucesso
        console.log(resposta.data); // nomeVariavel.data.data da requisição

        // Garantia, mas não necessário
        if (resposta.data.success === false) {
            alert(resposta.data.mensagem)
        }

        // Salva os dados do usuário logado com sucesso no localStorage
        const dadosUsuario = resposta.data.data
        localStorage.setItem('usuarioLogado', JSON.stringify(dadosUsuario))


        const get = localStorage.getItem('dadosUsuario')
        console.log(get);


        window.location.href = 'listagem.html' // Logando com sucesso, redireciona para a página de lista de recados
        formLogin.reset() // Limpa os campos depois de logar

    } catch (error) {
        console.log(error);
        alert(error.response.data.mensagem)
    }
}


// 1° PARTE
const formLogin = document.getElementById('form-login')

formLogin.addEventListener('submit', function (event) {

    event.preventDefault()

    // Pegar o valor das inputs através da tag name
    const email = event.target.email.value
    const password = event.target.password.value


    // Chamar a função
    login(email, password)

    // { } Cria um objeto literal { email: email, password: password } e exibe no console
    console.log({ email, password });
})