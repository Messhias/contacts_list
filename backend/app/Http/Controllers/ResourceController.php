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
     * Default found message.
     *
     * @return string
     */
    abstract protected function foundMessage(): string;

    /**
     * Default create message.
     *
     * @return string
     */
    abstract protected function createMessage(): string;

    /**
     * Default update message.
     *
     * @return string
     */
    abstract protected function updateMessage(): string;

    /**
     * Default deleted message.
     *
     * @return string
     */
    abstract protected function deletedMessage(): string;

    /**
     * Default generic message.
     *
     * @return string
     */
    abstract protected function genericMessage(): string;

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
            return response()->json([
                "data" => $this->getRepository()->create(
                    $request->input($this->getKeyIdentifier())),
                "success" => true,
                "code" => 201,
                "message" => $this->createMessage()
                ],
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
     * @param  $id
     *
     * @return JsonResponse
     */
    public function find($id): JsonResponse
    {
        if (empty($id)) return response()->json(['message' => "Provide the identifier."], 404);

        try
        {
            return response()->json([
                "message" => $this->foundMessage(),
                "data" => $this->getRepository()->find($id),
                "success" => true,
                "code" => 200
            ], 200);
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
            return response()->json([
                    "data" => unserialize(
                        str_replace(array('NAN;','INF;'),'0;',serialize($this->getRepository()->get()))
                    ),
                    "success" => true,
                    "code" => 200,
                    "message" => $this->foundMessage()
                ]
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
                ->json([
                    "data" => $this->getRepository()->update(
                        $id,
                        $request->input($this->getKeyIdentifier())),
                    "success" => true,
                    "code" => 200,
                    "message" => $this->updateMessage(),
                ],
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
     * @param mixed $id
     *
     * @return JsonResponse
     */
    public function delete($id): JsonResponse
    {
        if (!is_string($id)) $id = (string) $id;

        try
        {
            return response()->json([
                "data" => $this->getRepository()->delete($id),
                "success" => true,
                "code" => 200,
                "message" => $this->deletedMessage(),
            ], 200);
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
            return response()->json([
                "data" => $this->getRepository()->login(
                $request->input($this->getKeyIdentifier())),
                "message" => $this->genericMessage(),
                "code" => 200,
                "success" => true,
            ], 200);
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
                ->json([
                    "data" => $this->getRepository()
                        ->register(
                            $request->input($this->getKeyIdentifier())
                        ),
                    "success" => true,
                    "code" => 201,
                    "message" => "Registration complete",
                ], 201);
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
                [
                    "data" => unserialize(
                    str_replace(
                        array('NAN;','INF;'),'0;',
                        serialize(
                            $this->getRepository()
                                ->get_with_paginate($user_id))

                        )
                    ),
                    "success" => true,
                    "code" => 200,
                    "message" => $this->foundMessage(),
                ], 200);
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
                ->json([
                    "data" => $this->getRepository()
                        ->default_pagination(),
                    "success" => true,
                    "code" => 200,
                    "message" => $this->foundMessage(),
                ]);
        }
        catch (\Exception $exception)
        {
            $this->log_error($exception);
        }
    }
}
