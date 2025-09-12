let amigos = [];

function renderLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach((nombre, i) => {
    const li = document.createElement('li');
    const texto = document.createElement('span');
    texto.textContent = nombre;
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.onclick = () => eliminarAmigo(i);
    li.appendChild(texto);
    li.appendChild(btn);
    lista.appendChild(li);
  });
}

function agregarAmigo() {
  const input = document.getElementById('amigo');

  if (amigos.length >= 10) {
    alert('Ya no se pueden agregar más nombres (máximo 10).');
    input.value = '';
    input.focus();
    return;
  }

  const nombre = input.value.trim();
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    input.focus();
    return;
  }

  const existe = amigos.some(n => n.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    alert('Ese nombre ya fue agregado.');
    input.focus();
    return;
  }

  amigos.push(nombre);
  renderLista();
  input.value = '';
  input.focus();
}

function eliminarAmigo(index) {
  amigos.splice(index, 1);
  renderLista();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos disponibles para sortear.');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('amigo');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
  });
  renderLista();
});
