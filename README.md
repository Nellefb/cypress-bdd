# Cypress BDD - Automação de Testes de Login e Cadastro

Projeto de automação de testes desenvolvido com **Cypress**, utilizando **BDD (Behavior Driven Development)** com **Gherkin** e **Cucumber**, para validar os fluxos de **Login** e **Cadastro de Usuário** da aplicação Automation Practice.

O projeto foi estruturado utilizando o padrão **Page Object Model (POM)**, promovendo melhor organização, reutilização de código e facilidade de manutenção. As validações dos cenários foram realizadas por meio de **Assertions do Cypress** e a biblioteca **Faker** foi utilizada para geração dinâmica de dados de teste nos cenários de cadastro.

## 🚀 Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Gherkin
* Cucumber
* Faker
* Page Object Model (POM)

## 📂 Estrutura do Projeto

```text
cypress
├── e2e_features
│   ├── login.feature
│   └── register_user.feature
│
├── support
│   ├── pages
│   │   ├── home_page.js
│   │   ├── login_page.js
│   │   └── register_page.js
│   │
│   ├── step_definitions
│   │   ├── login_steps.js
│   │   └── register_steps.js
│   │
│   ├── commands.js
│   └── e2e.js
│
├── cypress.config.js
├── package.json
└── package-lock.json
```

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Acesse a pasta do projeto

```bash
cd nome-do-projeto
```

### 3. Instale o Cypress

```bash
npm install cypress --save-dev
```

### 4. Instale o Cucumber Preprocessor

```bash
npm install @badeball/cypress-cucumber-preprocessor --save-dev
```

### 5. Instale o Esbuild Preprocessor

```bash
npm install @bahmutov/cypress-esbuild-preprocessor esbuild --save-dev
```

### 6. Instale o Faker

```bash
npm install @faker-js/faker --save-dev
```

## ⚙️ Configuração do Cucumber

O projeto utiliza o pacote **@badeball/cypress-cucumber-preprocessor** para executar os arquivos `.feature` escritos em Gherkin.

Configuração utilizada no arquivo `cypress.config.js`:

```javascript
const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    specPattern: "**/*.feature",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
```

## 🧪 Cenários Automatizados

### 🔐 Login

#### Login com campo de e-mail vazio

Valida a exibição da mensagem:

```text
E-mail inválido.
```

#### Login com campo de senha vazio

Valida a exibição da mensagem:

```text
Senha inválida.
```

#### Login realizado com sucesso

Valida o acesso à aplicação utilizando credenciais válidas.

### 📝 Cadastro de Usuário

#### Campo nome vazio

Valida a exibição da mensagem:

```text
O campo nome deve ser prenchido
```

#### Campo e-mail vazio

Valida a exibição da mensagem:

```text
O campo e-mail deve ser prenchido corretamente
```

#### E-mail inválido

Valida a exibição da mensagem:

```text
O campo e-mail deve ser prenchido corretamente
```

#### Campo senha vazio

Valida a exibição da mensagem:

```text
O campo senha deve ter pelo menos 6 dígitos
```

#### Senha inválida

Valida a exibição da mensagem:

```text
O campo senha deve ter pelo menos 6 dígitos
```

#### Cadastro realizado com sucesso

Valida o cadastro de um novo usuário utilizando dados válidos gerados dinamicamente.

## 🎲 Geração de Dados de Teste

O projeto utiliza a biblioteca **Faker** para gerar dados dinâmicos durante a execução dos testes de cadastro.

Exemplos de dados gerados:

* Nome
* E-mail
* Informações únicas para cada execução

Benefícios da utilização do Faker:

* Evita dependência de dados fixos;
* Reduz conflitos entre execuções;
* Permite maior reutilização dos testes;
* Aproxima os cenários de situações reais;
* Facilita a criação de massa de testes.

## 🏗️ Boas Práticas Aplicadas

### BDD (Behavior Driven Development)

Os cenários foram escritos utilizando a sintaxe Gherkin (`Given`, `When`, `Then`), tornando os testes mais legíveis e alinhados às regras de negócio.

### Page Object Model (POM)

Os elementos e ações das páginas foram separados em Page Objects, permitindo:

* Reutilização de código;
* Melhor organização dos testes;
* Facilidade de manutenção;
* Menor acoplamento entre cenários e elementos da interface.

### Assertions

Foram utilizadas assertions nativas do Cypress para validar:

* Mensagens de erro;
* Mensagens de sucesso;
* Fluxos de login;
* Fluxos de cadastro;
* Comportamentos esperados da aplicação.

## ▶️ Execução dos Testes

### Abrir o Cypress em modo interativo

```bash
npx cypress open
```

### Executar todos os testes

```bash
npx cypress run
```

## 🌐 Aplicação Testada

https://www.automationpratice.com.br/

## 🎯 Objetivo do Projeto

Este é um projeto de aprendizado desenvolvido para praticar conceitos fundamentais de Automação de Testes, incluindo:

* Cypress;
* BDD com Gherkin e Cucumber;
* Page Object Model (POM);
* Assertions;
* Geração de dados de teste com Faker;
* Organização e manutenção de testes automatizados.

## 👩‍💻 Autora

Projeto desenvolvido para fins de estudo e prática em Automação de Testes com Cypress, Gherkin, Cucumber e Faker.
