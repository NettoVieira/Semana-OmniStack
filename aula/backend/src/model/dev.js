const { Schema, model } = require('mongoose')

/**
 * o Schema é a estrutura da minha tabela onde iremos salvar 
 * os dados do desenvolvedor
 */
const devSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: {
    type: String,
    required: true
  },
}, {
  timestamps: true, // criando uma coluna automatica
})
/**
 * O timestamps ele cria duas colunas automaticas no banco, sendo elas
 * o createdAt, updatedAt. Que serão reponsaveis por gravar a data que um
 * registro foi inserido e alterado(updatedAt) no Banco de Dados.
 */

module.exports = model('Dev', devSchema)
