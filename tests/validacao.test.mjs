
import test from 'node:test';
import assert from 'node:assert/strict';

function formatarTitulo(texto) {
  return texto.trim().toUpperCase();
}

test('deve formatar um título corretamente', () => {
  assert.equal(formatarTitulo(' tecnologia '), 'TECNOLOGIA');
});

test('deve somar dois números corretamente', () => {
  assert.equal(2 + 3, 5);
});
