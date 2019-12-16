<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Base class responsible to be the parent all the models class.
 *
 * All the common models tasks should be inserted here, avoid duplicate code.
 *
 * Class Base
 * @package App\Models
 */
class Base extends Model
{
    /**
     * Default hidden protected laravel field.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at', 'deleted_at', 'code_sub', 'active'];
}
