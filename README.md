# Requirements

- [Linux environment](https://www.linux.org/).
- [Docker](https://www.docker.com/).
- [PHP latest version](https://www.php.net/).
- [MySQL latest version](https://www.mysql.com/).
- [Yarn](https://yarnpkg.com/lang/en/).
- [Node](https://nodejs.org/en/).


## Running by the easiest way (Docker)

You can run the default .sh scripts on the root of the application.

It's very easy to run:

If you want to start both applications (front and backend).

You go to the terminal to root project folder and run:

```sh start-application.sh```

If you want to stop the application that is running in terminal
just type:

- ```CRTL + C``` for those is using default Linux / unix systems.
- ```CONTROL + C``` for those is running in MacOSX systems.

You can also just close the terminal to quit the frontend application 
immediately.

To stop all the containers you can go trough the terminal
and type in the root application and type:

``sh stop-docker.sh``

To remove all the containers you can type:

``sh remove-containers.sh``

If you just stopped the containers and want to run it again 
by the root of the application:

``sh start-docker.sh``

## For those don't want docker approach

You need install this packages:
- [PHP 7.4](php.net) and the 
[MySQL (latest preferaly)](https://www.mysql.com/).
- [Yarn](https://yarnpkg.com/lang/en/) and the 
[Node](https://nodejs.org/en/).

You OS need those libraries available to run the PHP:
- libfreetype6-dev
- libjpeg62-turbo-dev
- libmcrypt-dev
- libpng-dev
- zlib1g-dev
- libxml2-dev
- libzip-dev
- libonig-dev
- graphviz
- zip
- unixodbc
- unixodbc-dev
- libgss3
- odbcinst
- locales

All the installation of this libraries you need to research and figure by your own 
depending by your operational system.

The PHP extensions need to be available and enabled:
- pdo_mysql
- gd
- mysqli
- zip 
- opcache

After install all the libraries, softwares necessary and enable the PHP extensions you need
install each dependencies of the [backend](backend) and [frontend](frontend) applications.

First let's start by [backend](backend) application.


Navigate by terminal to the folder [backend](backend).

Once you inside the folder you need copy the [.env.example](backend/.env.example) file 
to a **.env** and change the configurations that suits your manual configurations.

If you want to know how to configure .env files to work with the framework properly
please visit the [Lumen](https://lumen.laravel.com/) or [Laravel](https://laravel.com/).

Ok, after configure all the necessary needs to framework you need to following 
commands:

- ```composer install``` to install all the composer dependencies, if you still have 
issues to install you can try to force install running by ``composer instal --ignore-platform-reqs``
this command it'll install all libraries without checking your system requirements.

- ```php artisan migrate --sed``` you need.   

After running the above commands on [backend](backend) folder you need to 
install the [frontend](frontend) application, don't forgot you need to 
install all the requirements you need to run the command:

- First [navigate to frontend folder](frontend).
- Run ``yarn install``.
- After previously command run ``yarn start``.
- Open a new tab and type [http//localhost:3000](http://localhost:3000).

# Having troubles / bad time?

[Open a issue](https://github.com/Messhias/contacts_list/issues/new)

#Author

[Fabio William Conceição](https://github.com/messhias)
