# Removed so far the latest php 7.4 image since the new RC6 release there's compability with mcrypt.
#FROM devilbox/php-fpm-7.4.0:latest
FROM php:7.4-fpm

# removing the ENV interactive to avoid dialogs to open in terminal of docker context.
ENV DEBIAN_FRONTEND noninteractive
# opcache configurations.
ENV PHP_OPCACHE_VALIDATE_TIMESTAMPS="1" \
    PHP_OPCACHE_MAX_ACCELERATED_FILES="33531" \
    PHP_OPCACHE_MEMORY_CONSUMPTION="2048" \
    PHP_OPCACHE_MAX_WASTED_PERCENTAGE="10" \
    PHP_OPCACHE_FILE_OVERRIDE=1


# updating the S.O.
RUN apt-get update -y

# installing the MySQL PDO Driver
RUN docker-php-ext-install pdo_mysql

# creating the working DIR
RUN mkdir -p /code
ENV HOME=/code
WORKDIR $HOME

# setting the default user into the working dir
USER root
COPY ./ $HOME
