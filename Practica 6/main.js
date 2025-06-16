let saldo = 0; 

function depositar() {
  let monto = parseFloat(document.getElementById('monto').value);
  if (isNaN(monto) || monto <= 0) {
    mostrarMensaje('Ingresa un monto válido para depositar.');
    return;
  }
  saldo += monto;
  mostrarMensaje(`Depósito exitoso. Nuevo saldo: S/ ${saldo.toFixed(2)}`);
  limpiarCampo();
}

function retirar() {
  let monto = parseFloat(document.getElementById('monto').value);
  if (isNaN(monto) || monto <= 0) {
    mostrarMensaje('Ingresa un monto válido para retirar.');
    return;
  }
  if (monto > saldo) {
    mostrarMensaje('Saldo insuficiente.');
  } else {
    saldo -= monto;
    mostrarMensaje(`Retiro exitoso. Nuevo saldo: S/ ${saldo.toFixed(2)}`);
  }
  limpiarCampo();
}

function consultarSaldo() {
  mostrarMensaje(`Saldo actual: S/ ${saldo.toFixed(2)}`);
}

function mostrarMensaje(mensaje) {
  document.getElementById('mensaje').textContent = mensaje;
}

function limpiarCampo() {
  document.getElementById('monto').value = '';
}
