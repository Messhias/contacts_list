<?php

/**
 * @file     ContactRepository.php
 * @author   fabioconceicao
 * @since    16/12/2019
 * @version  1.0
 */


namespace App\Repositories;


use App\Models\Contact;

class ContactRepository extends RepositoryEloquent
{
    /**
     * @inheritDoc
     */
    protected function model ()
    {
        return Contact::class;
    }

    /**
     * @inheritDoc
     */
    protected function module ()
    {
        return "Contacts";
    }

    /**
     * @inheritDoc
     */
    protected function redis_key ()
    {
        return Contact::class;
    }
}
