<?php
/**
 * Created by fabioconceicao.
 * FILE: ResourceController.php
 * User: fabioconceicao
 * Date: 2019-07-08
 * Time: 15:23
 */

namespace App\Http\Controllers;

use App\Exceptions\GenericException;
use App\Interfaces\ResourceInterface;
use App\Traits\GenericLogErrors;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Abstract class to init the basic operations for CRUD in models and avoid re-coding in the
 * application controllers.
 *
 * Class ResourceController
 * @package App\Http\Controllers
 */
abstract class ResourceController implements ResourceInterface
{
    use \App\Traits\ResourceController,
        GenericLogErrors;

    /**
     * Representation of the repository in the abstract context.
     *
     * @var mixed
     */
    protected $repository;

    /**
     * Set up the key identifier for the controller.
     *
     * @return mixed
     */
    abstract protected function getKeyIdentifier();

    /**
     * Set up an singular identifier for the class context process.
     *
     * @return mixed
     */
    abstract protected function getSingularIdentifier();

    /**
     * Set up an plural identifier for the class context process.
     *
     * @return mixed
     */
    abstract protected function getPluralIdentifier();

    /**
     * Set up the repository into the abstract context.
     *
     * @param $repository
     */
    public function setRepository($repository): void
    {
        $this->repository = $repository;
    }

    /**
     * Returns the repository representation.
     *
     * @return mixed
     */
    public function getRepository()
    {
        return $this->repository;
    }

    /**
     * Create new entity based on repository abstraction.
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        $this->check_the_key_identifier($request);

        try
        {
            return response()->json(
                $this->getRepository()->create(
                    $request->input($this->getKeyIdentifier())
                ),
                201
            );
        }
        catch (GenericException $exception)
        {
            $this->log_error($exception);
        }
        catch (\Exception $exception)
        {
            $this->log_error($exception);
        }
    }

    /**
     * Return the entity base on repository abstraction.
     *
     * @param string $id
     *
     * @return JsonResponse
     */
    public function find(string $id = ""): JsonResponse
    {
        if (!is_string($id)) $id = (string) $id;

        if (empty($id)) return response()->json(['message' => "Provide the identifier."], 404);

        try
        {
            return response()->json($this->getRepository()->find($id), 200);
        }
        catch (GenericException $exception)
        {
            $this->log_error($exception);
        }
        catch (\Exception $exception)
        {
            $this->log_error($exception);
        }
    }

    /**
     * Return all the entities base on repository abstraction.
     *
     * @return JsonResponse
     */
    public function get(): JsonResponse
    {
        try
        {
            return response()->json(
                unserialize(str_replace(array('NAN;','INF;'),'0;',serialize($this->getRepository()->get())))
                ,
                200
            );
        }
        catch (GenericException $exception)
        {
            $this->log_error($exception);
        }
        catch (\Exception $exception)
        {
            $this->log_error($exception);
        }
    }

    /**
     * Update entity base on id provided and database sent of the repository
     * representation.
     *
     * @param Request $request
     * @param string     $id
     *
     * @return JsonResponse
     */
    public function update(Request $request, string $id = ""): JsonResponse
    {
        if (!is_string($id)) $id = (string) $id;

        $this->check_the_key_identifier($request);

        try
        {
            return response()
                ->json(
                    $this->getRepository()->update(
                        $id,
                        $request->input($this->getKeyIdentifier())
                ),
        200
            );
        }
        catch (GenericException $exception)
        {
            $this->log_error($exception);
        }
        catch (\Exception $exception)
        {
            $this->log_error($exception);
        }
    }

    /**
     * Delete entity based on repository implementation
     *
     * @param string $id
     *
     * @return JsonResponse
     */
    public function delete(string $id = ""): JsonResponse
    {
        if (!is_string($id)) $id = (string) $id;

        try
        {
            return response()->json($this->getRepository()->delete($id), 200);
        }
        catch (GenericException $exception)
        {
            $this->log_error($exception);
        }
        catch (\Exception $exception)
        {
            $this->log_error($exception);
        }
    }

    /**
     * Default login resource.
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function login(Request $request)
    {
        $this->check_the_key_identifier($request);

        try
        {
            return response()->json(
                $this->getRepository()->login(
                    $request->input($this->getKeyIdentifier())
                ),
                200
            );
        }
        catch (GenericException $exception)
        {
            $this->log_error($exception);
        }
        catch (\Exception $exception)
        {
            $this->log_error($exception);
        }
    }

    /**
     * Abstract register / sign up function.
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function register(Request $request)
    {
        $this->check_the_key_identifier($request);

        try
        {
            return response()
                ->json(
                    $this->getRepository()
                        ->register(
                            $request->input($this->getKeyIdentifier())
                        ),
                    201
                );
        }
        catch (ValidationException $exception)
        {
            $this->log_error($exception);
        }
        catch (\Exception $exception)
        {
            $this->log_error($exception);
        }
    }

    /**
     * Get all the users bookings with pagination and proper
     * eloquent transform data.
     *
     * @param string $user_id
     *
     * @return JsonResponse
     */
    public function get_with_paginate($user_id = ""): JsonResponse
    {
        try
        {

            return response()->json(

                unserialize(
                    str_replace(
                        array('NAN;','INF;'),'0;',
                        serialize(
                            $this->getRepository()
                                ->get_with_paginate($user_id))

                        )
                    )
                ,
                200
            );
        }
        catch (\Exception $exception)
        {
            $this->log_error($exception);
        }
    }

    /**
     * Default request entries with pagination.
     *
     * @return JsonResponse
     */
    public function default_pagination(): JsonResponse
    {
        try
        {
            return response()
                ->json(
                    $this->getRepository()
                    ->default_pagination()
                );
        }
        catch (\Exception $exception)
        {
            $this->log_error($exception);
        }
    }
}
