<?php

/**
 * @file     Contact.php
 * @author   fabioconceicao
 * @since    16/12/2019
 * @version  1.0
 */


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table = "contacts";

    protected $fillable = [
        "name",
        "phone",
        "description",
    ];
}
