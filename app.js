let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('amigo').value.trim();
    if (nome === "") {
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nome);
    document.getElementById('amigo').value = "";
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceSorteado, 1)[0];
    document.getElementById('resultado').innerHTML += `<li>🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>! 🎁</li>`;

    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML += '<li>✅ Todos os amigos foram sorteados!</li>';
    }
}
