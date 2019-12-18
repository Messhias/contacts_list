<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->group(['prefix' => "contacts"], function() use ($router) {
    /**
     * Return all the contacts with pagination.
     */
    $router->get("/", "ContactsController@default_pagination");

    /**
     * Create a new contact.
     */
    $router->post("/", "ContactsController@create");

    /**
     * Return a specific contact based on it's ID
     */
    $router->get("/{id}", "ContactsController@find");

    /**
     * Update the contact details.
     */
    $router->put("/{id}", "ContactsController@update");

    /**
     * Delete contact entry
     */
    $router->delete("/{id}", "ContactsController@delete");
});
