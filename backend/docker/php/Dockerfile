FROM php:7.4-fpm


# opcache configurations.
ENV PHP_OPCACHE_VALIDATE_TIMESTAMPS="1" \
    PHP_OPCACHE_MAX_ACCELERATED_FILES="33531" \
    PHP_OPCACHE_MEMORY_CONSUMPTION="2048" \
    PHP_OPCACHE_MAX_WASTED_PERCENTAGE="10" \
    PHP_OPCACHE_FILE_OVERRIDE=1

RUN apt-get update -y
RUN apt-get install -y zlib1g-dev \
    libjpeg-dev \
    libpng-dev \
    libfreetype6-dev

# Add Microsoft repo for Microsoft ODBC Driver 13 for Linux
RUN apt-get update -y && apt-get install -y \
    apt-transport-https \
    && apt-get update

# Install Dependencies
RUN ACCEPT_EULA=Y apt-get install -y \
    unixodbc \
    unixodbc-dev \
    libgss3 \
    odbcinst \
    locales \
    && echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && locale-gen

RUN ln -s /usr/lib/x86_64-linux-gnu/libsybdb.a /usr/lib/

RUN docker-php-ext-install pdo_mysql

#install some base extensions
RUN apt-get install -y \
        libzip-dev \
        zip \
  && docker-php-ext-configure zip \
  && docker-php-ext-install zip


# copying custom php.ini configurations into the container.
# OPCACHE FOR PHP
COPY docker/php/conf.d/opcache.ini /usr/local/etc/php/conf.d/opcache.ini

RUN mkdir -p /code
ENV HOME=/code
WORKDIR $HOME

USER root
COPY ./ $HOME
