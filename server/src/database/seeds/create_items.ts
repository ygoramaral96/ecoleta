import Knex from 'knex';

export async function seed(knew: Knex) {
    await knew('items').insert([
      { title: 'Lâmpadas', image: 'lampadas.svg' },
      { title: 'Pilhas e Baterias', image: 'baterias.svg' },
      { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
      { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
      { title: 'Resíduos Orĝanicos', image: 'organicos.svg' },
      { title: 'Óleo de Cozinha', image: 'oleo.svg' },
    ]);
}
