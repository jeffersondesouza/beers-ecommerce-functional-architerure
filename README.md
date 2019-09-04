# [STUDY] E-Commerce Architetured following Functional Programing Principals

- O Frontend é uma camada extremamante particular da aplicação, devidos as peculiaridades de se trabalhar com dados lógicos (Javascript) e elementos de view (HTML);

- A Ideia dessa orfganização arquitetural é seguir ao máximo uma abordagem funcional no desenvolvimento da aplicação. Pois nem sempre a POO irá satisfazer nossas necessidade, e devido ao dinamismo necessário ao forntend, trabalhar com funcções ao invés de  objectos avaba por se mostrar bem viável.

- Contudo, a arquittura segue 'convenções' da Orientção a Objetos, mas com uma execução funcional;

- A estutura básica se divide em View, Store, Model;

- View: São os componentes html de UI propriamente ditos. Eles são dumbs, nao fazem acesso direto aos endpoints por exemplo;
- Store: Responsável por guardar o stado da aplicação (nesse caso via redux). E passar esssas informações  para os Componentes renderizaem em tela. O store fará requisições  assincronas ao servidor e atualizará o estado da aplicação;
- Model: Representa o dominio da aplicação, nele temos controladores. Eles sao auxiliáres do Store, o store trás dados do servidor, os Models transformam esses dados seguindo o domain de nossa app, devolve esses dados transformados ao strore que por sua vez atualiza o estado de nossa aplicação.   


## Structure

+-- models\
|---- + -- types\
|---- + -- controllers\
|-----|---- + -- factory\
|-----|---- + -- http-mapper\
|-----|---- + -- repository\
+-- view\
|---- + -- pages\
|---- + -- containers\
|---- + -- components\
+-- store\
|---- + -- module1\
|-----|-------- selectors\
|-----|-------- actionTypes\
|-----|-------- actions\
|-----|-------- reducer\
|-----|-------- sagas\
|-----|-------- state\
|---- + -- module2\
|---- + -- module3\
+-- utils\
|---- + -- functions(pipe,cury, MayBe, promisefy)\
|---- + -- services(http)\
|---- + -- arrayObject(toArrayDimensionN, fromObject, getParam)\
+-- assets\
+---- + -- png\
+---- + -- videos\
+---- + -- svg\
+-- config\

## MODELS

- Temos o modulo models (types, controllers), na pŕatica o models é o nosso DOMAIN, lá estão os tipos de entidades(types) que a app trabalhará, e os responsáveis peloas lógiscas de manipulação de dados (controllers)que podemos;
- No Models temos os sub módulos 'types' e 'controlles';
- Types: Expõe(e apenas isso) as interfaces(types) de TODOS os tipos dentro do domíni0 de nossa aplicação (ex: User, Quote, HttpRequestObject)
- Controllers: Baseando-se no MVC, engloba os módulos responsáveis pela lógica da aplicação;
- Estutura do modulo de Controlles:
  - Factory;
  - http-mapper;
  - repository;
- Optou por esta estrutura (ao invés de uma baseada em cada model) pois nem todo model precisaŕa dos tres tipos de serviços, e um Mapeador de usuário, por exemplo, pode precisar expor uma estrutura de dados que detem de Usuários e suas respectivas CotasDeEnergia. Assim, esse mapeador pode fazer uso do UserFactory e do CotasDeEnergiaFactory;

### factory

Recebe dados e cria uma instáncia de uma objecto baseado no seu type (ex: Usuaário, CartaoDeCredito...);

### http-mapper

São responsáveis por receber os dados do servidor e mape-los para estruturas dentro do domínio da aplicação, para isso podem fazer uso de 1 ou mais Factory;

### repository

É a ponte de comunicação com o mundo externo, expõem um objecto com os dados necesários para o servico de http fazer o request para um determinado endpoint;

O conjunto dos controllers será responsavel por:

1. Informar ao responsável pelo HTTP como s e deve buscar um dado no Server;
2. Receber os Dados do Servidor e Mapear para Types dentro do domínio;
3. Entregar esses dados tratados para o Store e este cuida do estado da aplicação.

## Store
  - O Store deve ser responsável por gerir o Estado da aplicação, neste caso temos o Redux, mas nada impede que utilize-se  por exempo a Context API, o ponto é que este módulo consentrará a gestão do estado da aplicaçã;

  - A abordagem de organização será diferente dos controles, aqui os items sao orgnizado seguindo um 'domian-style', pois sempre haverá um acoplamento interno entre action->reducer->state para uma determinada entidade do estado da aplicação;
  
  - Com isso, nao ficaremos com logica fortemente acopladas muito distantes uma das outros;
  
  - OBS: Além disso, os modulos são MUITO independentes, havendo apenas( e muito raramente) acoplamento externo  entre um 'sagas' de uma modulo A com um 'action' de um Modulo B, nao acontecendo assim dependências circulares (actionA->action, actionB->actionA). E ainda assim, o que um sagas fará para um modulo externo é apenas disparar uma ação, e nao saberá como manipular dados;


## Structure Expanded

+-- models\
|---- + -- types\
|-----| ---- + -- User\
|-----| ---- + -- Beer\
|-----| ---- + -- Tip\
|-----| ---- + -- HttpRequestObject\
|---- + -- controllers\
|-----| ---- + -- factory\
|------------| ---- + -- User\
|------------| ---- + -- Beer\
|------------| ---- + -- Tip\
|-----| ---- + -- http-mapper\
|------------| ---- + -- User\
|------------| ---- + -- Beer\
|-----| ---- + -- repository\
|------------| ---- + -- User\
|------------| ---- + -- Beer\
+-- view\
|---- + -- pages\
|---- + -- containers\
|---- + -- components\
+-- store\
+-- utils\
+-- assets\
+---- + -- png\
+---- + -- videos\
+---- + -- svg\
+-- config\


## Prestar atenção

- pipe
- Maybe
- promisify
- objectToArray
- arrayRoObject

#######################

## Modeling

Store:

- beers (beersList, selectedBeer, doLoadBeers)
- dashboard (beerOfMonth, brewersTips, doLoad)
- shoppingCart (products, buyHistory, doBuy)
- user (token, name, email, doeLogin, doLogout)

Models

- beer
