
# MangaRosa

O projeto MangaRosa é uma aplicação Node para cadastro de usuários e registro de ponto.

## Instalando o projeto

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Em alguns casos é necessario instalar o sequelize-cli globalmente.

Instalar usando npm

```bash
  npm install
  npx sequelize db:create
  npx sequelize db:migrate
  npm run dev
```

Instalar usando yarn

```bash
  yarn ou yarn install
  yarn sequelize db:create
  yarn sequelize db:migrate
  yarn dev
```
## Rotas
##### /nomedocolaborador/registrar POST
```json
{
  name,
  email,
  cpf(XXX.XXX.XXX-XX),
  cellphone((XX) XXXXX-XXXX),
  knowledges: ["Git","React","PHP",
  "NodeJS","DevOps","Banco de Dados","Typescript"] (Contendo apenas 3 dentre os knowledges)
}
```
##### /nome_do_colaborador/validar PUT
```json
  http://localhost:3333/william_robert/validar
```

##### /registros GET
```json
  http://localhost:3333/registros
```

<a id="como-contribuir"></a>

## Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`
