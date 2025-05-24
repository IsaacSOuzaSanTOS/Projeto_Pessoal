# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

### RedLine

## Autor do projeto

### Isaac souza Santos

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução

O RedLine é um gerenciador de tarefas focado em produtividade, projetado para organizar atividades de forma simples e eficiente. Com uma interface limpa e intuitiva, ele ajuda usuários a gerenciar suas tarefas pessoais e profissionais em um único local, evitando a sobrecarga de informações e processos complexos.
Possui o intuito de centralizar a criação e categorização de tarefas, permitindo ao usuário organizar suas atividades rapidamente, sem perder tempo com configurações. Através de uma API robusta, o sistema busca sincronizar e gerenciar tarefas de maneira eficiente, ajudando o usuário a manter o foco no que realmente importa.
Além de sua facilidade de uso, ela oferece uma experiência visual única, utilizando a cor vermelha para destacar o progresso das tarefas e criar um ambiente motivador. Ao concluir uma tarefa, o usuário sente uma sensação de realização, o que contribui para um aumento na produtividade.
Por fim, o RedLine foi desenvolvido para aqueles que buscam uma solução simples, centralizada e eficaz para organizar suas tarefas e alcançar seus objetivos de forma mais eficiente.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas

![Persona](/assets/persona.png)

### 2.2. User Stories

| **User Stories** | **Pensamento** | **Critérios de Aceitação** |
|------------------|----------------|----------------------------|
| **US01** | Como Mariana, eu quero criar e categorizar tarefas de forma rápida e intuitiva, para que eu possa organizar meu dia sem perder tempo com configurações complicadas. | - A plataforma permite criar uma nova tarefa com um clique ou toque. <br> - Eu posso adicionar categorias (como "Pessoal" ou "Profissional") a cada tarefa. <br> - O processo de criação é rápido. |
| **US02** | Como Mariana, eu quero ver as tarefas concluídas de forma destacada, para que eu possa sentir que estou avançando e não me sobrecarregar. | - Tarefas concluídas são marcadas como "Concluídas" com um ícone visível. <br> - Tarefas concluídas têm uma cor diferente (como cinza ou tonalidade suave de vermelho). <br> - Eu vejo o progresso em % (ex: "80% das tarefas concluídas hoje"). |
| **US03** | Como Mariana, eu quero uma interface limpa e intuitiva, para que eu possa usar A plataforma de forma rápida e sem frustrações, focando no que realmente importa. | - A interface é minimalista e sem sobrecarga de informações. <br> - Funções principais estão acessíveis em poucos toques. <br> - O design é responsivo e funciona bem no celular. <br> - As cores e fontes são agradáveis, com destaque para o vermelho. |

####  2.2.1 Invest

##### Independente:

A US01 é independente, pois pode ser desenvolvida sem depender de outras histórias ou funcionalidades. Criar e categorizar tarefas é uma funcionalidade autossuficiente que não precisa de outros recursos ou histórias para funcionar. Portanto, ela pode ser implementada de forma isolada.

##### Negociável:

A US01 é negociável, pois a forma de implementação pode ser discutida. Por exemplo, o processo de "criar uma nova tarefa" pode ser feito por meio de um formulário, um botão flutuante, ou até um menu. Essas abordagens podem ser discutidas e ajustadas conforme a necessidade ou feedback do cliente.

##### Valiosa:

A US01 é valiosa porque resolve um problema direto da persona (Mariana), que é a dificuldade em organizar tarefas de forma rápida e sem complicação. A funcionalidade proposta ajuda a pessoa a não perder tempo com a criação e categorização de tarefas, o que facilita o seu fluxo de trabalho e melhora sua produtividade.

##### Estimável:

A US01 é estimável, pois seus critérios de aceitação são claros e permitem que a equipe de desenvolvimento estime o esforço necessário para implementá-la. O tempo e os recursos podem ser avaliados, por exemplo, dependendo de como as funcionalidades de criação de tarefas serão implementadas.

##### Pequena:

A US01 pode ser pequena se for dividida em tarefas menores. Por exemplo, criar a funcionalidade de "criar uma nova tarefa" pode ser uma tarefa separada da "categorização de tarefas". Dividir a funcionalidade em pequenas partes facilita o desenvolvimento e a entrega contínua.

##### Testável:

A US01 é testável, pois possui critérios de aceitação claros que podem ser verificados por meio de testes. Podemos testar se a criação da tarefa funciona corretamente, se a categorização é aplicada de forma adequada e se o processo é rápido e intuitivo, conforme esperado.


---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados

![Modelo_Relacional](/assets/modelo-banco.png)

O diagrama apresentado utiliza três tabelas principais para estruturar o sistema de gerenciamento de tarefas. A primeira tabela é a de usuários, responsável por armazenar as informações essenciais de cada usuário do sistema. A segunda tabela é a de categorias, que permite classificar as tarefas de acordo com características específicas, como prioridade, tipo ou tamanho. Por fim, a tabela de tarefas registra os dados das atividades que precisam ser realizadas, estabelecendo relações com os usuários e suas respectivas categorias para garantir uma organização eficiente.

[Código do banco de dados:](/scripts/init.sql)

```sql
-- criando as tabelas --
create table if not exists users (
    id serial primary key,
    name varchar(100) not null,
    email varchar(100) not null,
    password varchar(100) not null
);

create table if not exists categories (
    id serial primary key,
    name varchar(100) not null,
    color varchar(100) not null
);

create table if not exists tasks (
    id serial primary key,
    title varchar(100) not null,
    description text,
    due_date date,
    status varchar(20),
    user_id int references users(id) ON delete cascade,
    category_id int references categories(id) on delete set null
);
----
```

### 3.1.1 BD e Models

- **UserModel**  
  Responsável pelo gerenciamento dos dados dos usuários do sistema. Contém métodos para criação de usuários, autenticação (login), busca e validação de credenciais.  
  **Campos:** `id`, `email`, `senha`, `nome`

- **TaskModel**  
  Gerencia as tarefas criadas pelos usuários. Inclui funcionalidades para criação, leitura, atualização e exclusão (**CRUD**).  
  **Campos:** `id`, `titulo`, `descricao`, `status`, `data_criacao`, `user_id`

Todos os Models são conectados à base de dados **PostgreSQL** e seguem uma estrutura modular, facilitando a reutilização de código e a manutenção do sistema. Além disso, as relações entre tabelas (como `user_id` em `Task` e `Category`) foram configuradas para garantir **integridade referencial** no banco de dados.

### 3.2. Arquitetura

O diagrama apresentado representa claramente a arquitetura MVC (Model-View-Controller) aplicada no RedLine, organizado em três camadas

<div align='center'>

![Diagrama_MVC](/assets/Projeto_individual_diagrama.drawio.png)
<sub>Imagem 3: Diagrama MVC</sub>
</div>

- **Views**: Responsáveis pela interface com o usuário. As telas de `login`, `register` e `tasks` recebem dados por meio de formulários, representando os pontos de interação com o sistema.

- **Controllers**: Fazem a ponte entre as views e os models, lidando com a lógica de negócio e o fluxo de dados:
  - `loginController`: responsável pela autenticação do usuário.
  - `authController`: cuida do registro de novos usuários.
  - `taskController`: centraliza a lógica de criação, leitura, atualização e remoção de tarefas (CRUD).

- **Models**: Representam a estrutura dos dados e sua persistência no banco:
  - `Users`: contém os dados de autenticação e identificação dos usuários (`users_id`, `name`, `email`, `password`).
  - `Categories`: representa as categorias para organização das tarefas (`categories_id`, `name`, `color`).
  - `Tasks`: estrutura principal de tarefas com atributos como `title`, `description`, `due_date`, além das chaves estrangeiras `users_id` e `category_id`.

### 3.3. Wireframes

<div align='center'>

![Wireframe](/assets/wireframe_projeto_pessoal.png)
<sub>Imagem 4: Wireframe</sub>
https://www.figma.com/design/92tScM5Lb3b6aH66e5MWjL/Untitled?node-id=0-1&t=46jVFOusgx5bPIhd-1
</div>

O wireframe do RedLine é composto por três telas principais que representam o fluxo básico de uso da aplicação:

- Tela de Login: Interface inicial simples onde o usuário insere seus dados para acessar o sistema.

- Tela de Gráfico: Apresenta uma visualização gráfica que mostra a relação entre tarefas concluídas e pendentes, ajudando o usuário a acompanhar seu progresso.

- Tela de Tarefas: Dividida em três áreas, uma para adicionar novas tarefas, uma para visualizar tarefas em andamento e outra para listar as tarefas já concluídas.

### 3.4. Guia de estilos 

Esta seção define os elementos visuais essenciais da identidade do projeto, incluindo paleta de cores, tipografia e uso da logo. Serve como referência para manter a consistência visual em todas as interfaces e comunicações do RedLine.

<div align='center'>

![guia_de_estilos_1](/assets/guia_de_estilos_1.png)
<sub>Imagem 5: Guia de estilos 1</sub>
</div>

<div align='center'>

![guia_de_estilos_2](/assets/guia_de_estilos_2.png)
<sub>Imagem 6: Guia de estilos 2</sub>
</div>

<div align='center'>

![guia_de_estilos_3](/assets/guia_de_estilos_3.png)
<sub>Imagem 7: Guia de estilos 3</sub>
</div>

<div align='center'>

![guia_de_estilos_4](/assets/guia_de_estilos_4.png)
<sub>Imagem 8: Guia de estilos 4</sub>
</div>

<div align='center'>

![guia_de_estilos_5](/assets/guia_de_estilos_5.png)
<sub>Imagem 9: Guia de estilos 5</sub>
</div>

<div align='center'>

![guia_de_estilos_6](/assets/guia_de_estilos_6.png)
<sub>Imagem 10: Guia de estilos 6</sub>
</div>

<div align='center'>

![guia_de_estilos_7](/assets/guia_de_estilos_7.png)
<sub>Imagem 11: Guia de estilos 7</sub>
</div>

### 3.5. Protótipo de alta fidelidade (Semana 05)

<div align='center'>

![protótipo_de_alta_fidelidade_1](/assets/protótipo_de_alta_fidelidade_1.png)
<sub>Imagem 12: Protótipo de alta fidelidade 1</sub>
</div>

<div align='center'>

![protótipo_de_alta_fidelidade_2](/assets/protótipo_de_alta_fidelidade_2.png)
<sub>Imagem 13: Protótipo de alta fidelidade 2</sub>
</div>

<div align='center'>

![protótipo_de_alta_fidelidade_3](/assets/protótipo_de_alta_fidelidade_3.png)
<sub>Imagem 14: Protótipo de alta fidelidade 3</sub>
</div>

### 3.6. WebAPI e endpoints

Este projeto segue o padrão RESTful para organizar os endpoints do sistema de gerenciamento de tarefas **RedLine**.

---

### 🧑‍💻 Autenticação e Usuário

| Método | Endpoint     | Descrição                             |
|--------|--------------|----------------------------------------|
| `GET`  | `/`          | Exibe a tela de login                 |
| `POST` | `/`          | Processa o login do usuário           |
| `GET`  | `/register`  | Exibe o formulário de cadastro        |
| `POST` | `/register`  | Cria um novo usuário                  |

---

### ✅ Tarefas

| Método    | Endpoint         | Descrição                                  |
|-----------|------------------|---------------------------------------------|
| `POST`    | `/tarefas`       | Cria uma nova tarefa                        |
| `GET`     | `/tarefas`       | Lista todas as tarefas                      |
| `PUT`     | `/tarefas/:id`   | Atualiza uma tarefa específica              |
| `DELETE`  | `/tarefas/:id`   | Deleta uma tarefa específica                |

---

  Todos os endpoints são controlados via os arquivos do controller e conectados ao banco de dados por meio dos Models definidos. A arquitetura do sistema segue o padrão MVC.

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---
