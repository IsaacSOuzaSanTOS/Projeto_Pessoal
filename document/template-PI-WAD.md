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

O ReadLine é um gerenciador de tarefas focado em produtividade, projetado para organizar atividades de forma simples e eficiente. Com uma interface limpa e intuitiva, ele ajuda usuários a gerenciar suas tarefas pessoais e profissionais em um único local, evitando a sobrecarga de informações e processos complexos.
Possui o intuito de centralizar a criação e categorização de tarefas, permitindo ao usuário organizar suas atividades rapidamente, sem perder tempo com configurações. Através de uma API robusta, o sistema busca sincronizar e gerenciar tarefas de maneira eficiente, ajudando o usuário a manter o foco no que realmente importa.
Além de sua facilidade de uso, ela oferece uma experiência visual única, utilizando a cor vermelha para destacar o progresso das tarefas e criar um ambiente motivador. Ao concluir uma tarefa, o usuário sente uma sensação de realização, o que contribui para um aumento na produtividade.
Por fim, o ReadLine foi desenvolvido para aqueles que buscam uma solução simples, centralizada e eficaz para organizar suas tarefas e alcançar seus objetivos de forma mais eficiente.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

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

### 3.1. Modelagem do banco de dados  (Semana 3)

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

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03)

<div align='center'>

![Wireframe](/assets/wireframe_projeto_pessoal.png)
<sub>Imagem 3: Wireframe</sub>
https://www.figma.com/design/92tScM5Lb3b6aH66e5MWjL/Untitled?node-id=0-1&t=46jVFOusgx5bPIhd-1
</div>

O wireframe do ReadLine é composto por três telas principais que representam o fluxo básico de uso da aplicação:

- Tela de Login: Interface inicial simples onde o usuário insere seus dados para acessar o sistema.

- Tela de Gráfico: Apresenta uma visualização gráfica que mostra a relação entre tarefas concluídas e pendentes, ajudando o usuário a acompanhar seu progresso.

- Tela de Tarefas: Dividida em três áreas, uma para adicionar novas tarefas, uma para visualizar tarefas em andamento e outra para listar as tarefas já concluídas.

### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

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
