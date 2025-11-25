- usar orm (sequelize) para realizar operações CRUD no banco de dados

- por onde começo?
  - padrão mvc (entender como funciona)
  - entender como funcionam os arquivos env para segurança de dados referentes ao banco de dados
  - module sequelize já instalado como dependência do projeto
  - criar conexão com o banco de dados usando o sequelize
  - criar modelos usando o sequelize
  - realizar testes das operações usando console

------------------------------------------------------

sequelize - primeiros passos

----------------------conectando ao db
- CARREGAR (importar) sequelize | ele é uma Classe - Sequelize
- INSTANCIAR classe do sequelize | passar configurações para conexão com o db no construtor da Classe - poderia ser feito usando arquivo env
- EXPORTAR o objeto db criado | ele "tem a conexão com o bd"

----------------------model
- CRIAR modelo de dados | objeto que representa/mapeia uma tabela no bd - com suas colunas e linhas..
- CARREGAR Classe Sequelize
- CARREGAR o objeto db
- USAR objeto db para criar modelo no db | usar esse objeto para realizar as operações - por exemplo define() que cria a tabela no db
- EXPORTAR o modelo criado

----------------------usando sequelize (console)

-- MAIORIA das operações são assincronas

- IMPORTAR objeto db
- USAR objeto db e CHAMAR função sync() | pode ser qualquer função
- IMPORTAR modelos para que a função sync() os reconheça e execute as devidas operações no db