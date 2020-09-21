---
title: Notificações no Laravel 5.6 (Parte 1)
description: Primeira parte de uma serie de dois postes sobre como implementar a
  feature de notificaçõs do laravel
date: 2020-09-21 08:23:43
image: assets/img/1_zxcy8-4blrjsxuht_034iw.png
category: laravel
background: "#637a91"
---
*O framework* PHP Laravel 5.6 é muito robusto e poderoso. Consequentemente dispõe de diversas *features* que podem ser adotadas durante o desenvolvimento de aplicações. Uma dessas *features* é a [Notificação](https://laravel.com/docs/5.6/notifications#introduction).

> As notificações possuem o propósito de, oportunamente, enviar mensagens para uma pessoa ou um grupo de pessoas. Sua utilização básica se resume a alertar que um evento ocorreu no sistema.

No Laravel, as notificações transitam através de [Canais](https://laravel.com/docs/5.6/notifications#specifying-delivery-channels) de entrega. Por padrão, o *framework* disponibiliza os seguintes canais: *mail, database, broadcast, nexmo e slack*. Entretanto a gama de canais pode ser expandida através dos *drivers customs* disponíveis [neste link](http://laravel-notification-channels.com/).

Neste tutorial, utilizaremos como canal de entrega o *[broadcast](https://laravel.com/docs/5.6/notifications#broadcast-notifications),* exibiremos notificações simples quando um evento de exemplo for disparado. O tutorial segue o roteiro descrito:

1. Setup do projeto e configuração inicial;
2. Configuração da classe de notificação;
3. Modificação do *layout* da *view*;
4. Criação da rota que dispara o evento de notificação.

Ao final, teremos um ícone de notificação na *navbar* padrão do Laravel, com um contador que incrementa quando uma nova notificação é recebida, e retorna a zero quando as notificações são visualizadas.

Feita a introdução… Mãos à obra!

![Gif do ator Jim Carrey digitando rapidamente em um teclado de computador](https://miro.medium.com/max/980/1*xRdQT8_tGQmyFaoOOOkrbw.gif)

## Pré-requisitos:

* Um ambiente preparado para executar um projeto Laravel 5.6 (sugestão: [docker image Ubuntu-PHPS](https://github.com/lissonpsantos2/dockerfiles/tree/master/ubuntu-PHPS));
* Uma conta no [Pusher](https://pusher.com/) com um canal configurado. Ao criar um canal, serão exibidas algumas credenciais que utilizaremos posteriormente.

> O Pusher é uma plataforma que adiciona uma camada de conexão ao seu sistema, permitindo a transição de dados em tempo real através de *websockets* e HTTP.

* Um servidor [MongoDB](https://www.mongodb.com/) ou de outra base de dados de sua preferência.

## Procedimento:

Inicialmente, criaremos um projeto Laravel. Existem [diversos métodos](https://laravel.com/docs/5.6/installation) para realizar essa tarefa, eu adotarei o [Composer](https://getcomposer.org/). No terminal digite:

```shell
$ composer create-project — prefer-dist laravel/laravel notifications
```

Após o término do download, entre no diretório do projeto e instale as seguintes dependências:

```shell
$ cd notifications
$ npm install
$ npm install --save laravel-echo pusher-js cross-env
$ composer require pusher/pusher-php-server
```

> O pacote laravel-echo é uma biblioteca JavaScript que facilita a inscrição em canais e a escuta de eventos transmitidos pelo Laravel.
>
> O pusher-js é um cliente JavaScript que se comunicará com o canal criado no Pusher, enquanto o pusher/pusher-php-server é seu correspondente no PHP.

Caso você tenha escolhido o MongoDB, em seguida configure o [jenssegers/laravel-mongodb](https://github.com/jenssegers/laravel-mongodb).

> Esta biblioteca, de acordo com o autor e em tradução livre, é Um modelo Eloquent e um construtor Query com suporte para o MongoDB, usando a API original do Laravel. Esta biblioteca estende as classes originais do Laravel, então usa exatamente os mesmos métodos.

O próximo passo é configurar o arquivo `.env` do seu projeto. Nele serão inseridas as credenciais necessárias ao projeto. Caso ainda não o tenha feito, crie uma cópia do arquivo `.env.example` na raiz do projeto e renomei-o para `.env` .

Agora atualizaremos o `.env` com as credenciais da nossa base de dados e do nosso canal no Pusher.

```
DB_CONNECTION=mongodb
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

BROADCAST_DRIVER=pusher

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

Prosseguiremos abrindo o arquivo `/app/user.php` e substituindo a linha que contém `use Authenticatable` por `use Jenssegers\Mongodb\Auth\User as Authenticatable;` .

> Esta etapa permitirá, através dessa interface, executar a *[migration](https://laravel.com/docs/5.6/migrations)* que cria a *[collection](https://docs.mongodb.com/manual/core/databases-and-collections/)* de usuários, bem como efetuar o *login* no MongoDB.

No arquivo `/config/broadcasting.php` , em `connections`, adicione

```php
'pusher' => [
         'driver' => 'pusher',
         'key' => env('PUSHER_APP_KEY'),
         'secret' => env('PUSHER_APP_SECRET'),
         'app_id' => env('PUSHER_APP_ID'),
         'options' => [
             'cluster' => env('PUSHER_APP_CLUSTER'),
             'encrypted' => true,
         ],
     ],
```

> Nesta etapa, estamos configurando o canal de *broadcast* que utilizaremos ao disparar a notificação. Observe que estamos utilizando as credencias atribuídas anteriormente no nosso arquivo `.env` .

O passo seguinte é descomentar a linha `App\Providers\BroadcastServiceProvider::class` no arquivo `/config/app.php` .

> Deste modo, estamos registrando o *provider* de *broadcast* que nos permitirá registrar as rotas de autorização de *broadcast* e as funções de *callback*.

Agora iremos configurar o nosso cliente Pusher no JavaScript. Esse cliente será responsável por se inscrever no canal criado e consequentemente receber as informações que forem postadas no mesmo.

Para realizar esse procedimento, abra o arquivo `/resources/assets/js/bootstrap.js` e descomente da linha 47 até a linha 56. Este trecho corresponde ao seguinte bloco de código:

```javascript
import Echo from 'laravel-echo'

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    encrypted: true
});
```

Para finalizar a etapa inicial de configuração e, por consequência, a primeira parte desse tutorial, iremos executar os comandos que criarão a base de dados de usuário e a classe da nossa notificação, respectivamente:

```shell
$ npm run dev
$ php artisan make:auth
$ php artisan migrate
$ php artisan make:notification StatusLiked
```

> Note que estamos criando uma classe de notificação chamada **StatusLiked**. Posteriormente, iremos personalizá-la.

Feito isto, **se tudo ocorreu bem até aqui**, estamos prontos para prosseguir para a [segunda parte do tutorial](https://medium.com/sysvale/notifica%C3%A7%C3%B5es-no-laravel-5-6-parte-2-6007f4dbd696), onde configuraremos a nossa notificação e o editaremos nosso layout.

Até breve.

![Gif do personagem Bob Esponja saindo por uma porta com um olhar faceiro, com a frase "See You Soon!"](https://miro.medium.com/max/960/1*nMz-i2ypSzsAN5fZSoR31Q.gif)