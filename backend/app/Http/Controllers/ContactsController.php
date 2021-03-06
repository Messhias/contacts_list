<?php

/**
 * @file     ContactsController.php
 * @author   fabioconceicao
 * @since    16/12/2019
 * @version  1.0
 */


namespace App\Http\Controllers;


use App\Repositories\ContactRepository;

/**
 * Class ContactsController
 * @package App\Http\Controllers
 */
class ContactsController extends ResourceController
{
    /**
     * @inheritDoc
     */
    protected function getKeyIdentifier ()
    {
        return "contacts";
    }

    /**
     * @inheritDoc
     */
    protected function getSingularIdentifier ()
    {
        return "Contact";
    }

    /**
     * @inheritDoc
     */
    protected function getPluralIdentifier ()
    {
        return "Contacts";
    }

    /**
     * ContactsController constructor.
     * @param ContactRepository $repository
     */
    public function __construct (ContactRepository $repository)
    {
        $this->setRepository($repository);
    }

    /**
     * @inheritDoc
     */
    protected function foundMessage (): string
    {
        return "Contact(s) found.";
    }

    /**
     * @inheritDoc
     */
    protected function createMessage (): string
    {
        return "Contact created.";
    }

    /**
     * @inheritDoc
     */
    protected function updateMessage (): string
    {
        return "Contact updated.";
    }

    /**
     * @inheritDoc
     */
    protected function deletedMessage (): string
    {
        return "Contact deleted.";
    }

    /**
     * @inheritDoc
     */
    protected function genericMessage (): string
    {
        return "Action complete.";
    }
}
