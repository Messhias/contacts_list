<?php
/**
 * Created by fabioconceicao.
 * FILE: ResourceInterface.php
 * User: fabioconceicao
 * Date: 2019-07-08
 * Time: 15:57
 */

namespace App\Interfaces;


use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Interface class contract to set up all the minimal requirements for create a resource controller
 *
 * Interface ResourceInterface
 * @package App\Interfaces
 */
interface ResourceInterface
{
    /**
     * Set up the repository into the abstract context.
     *
     * @param $repository
     */
    public function setRepository($repository): void;

    /**
     * Returns the repository representation.
     *
     * @return mixed
     */
    public function getRepository();

    /**
     * Create new entity based on repository abstraction.
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse;

    /**
     * Return the entity base on repository abstraction.
     *
     * @info
     * The id is a string because by default we're using MySQL database but you can
     * remove the id type identifier and left the auto casting of PHP work for you.
     *
     * @param string $id
     *
     * @return JsonResponse
     */
    public function find(string $id = ""): JsonResponse;

    /**
     * Return all the entities base on repository abstraction.
     *
     * @return JsonResponse
     */
    public function get(): JsonResponse;

    /**
     * Update entity base on id provided and database sent of the repository
     * representation.
     *
     * @info
     * The id is a string because by default we're using MySQL database but you can
     * remove the id type identifier and left the auto casting of PHP work for you.
     *
     * @param Request $request
     * @param string     $id
     *
     * @return JsonResponse
     */
    public function update(Request $request, string $id = ""): JsonResponse;

    /**
     * Delete entity based on repository implementation
     *
     * @info
     * The id is a string because by default we're using MySQL database but you can
     * remove the id type identifier and left the auto casting of PHP work for you.
     *
     * @param string $id
     *
     * @return JsonResponse
     */
    public function delete(string $id = ""): JsonResponse;
}
