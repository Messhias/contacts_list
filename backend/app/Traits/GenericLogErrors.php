<?php
/**
 * Created by fabioconceicao.
 * FILE: GenericLogErrors.php
 * User: fabioconceicao
 * Date: 10/24/19
 * Time: 4:15 PM
 */

namespace App\Traits;


use App\Mail\ExceptionOccured;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Watson\Validating\ValidationException;

/**
 * Trait to support the controllers and general classes to trait the errors and
 * remove the heavy load of facade Log library of the classes.
 *
 * Trait GenericLogErrors
 * @package App\Traits
 */
trait GenericLogErrors
{
    /**
     * Generic log error in the system into the system .logs
     *
     * @param mixed      $exception
     * @param mixed      $message
     *
     * @param int        $status
     *
     * @return JsonResponse
     */
    public function log_error($exception, $message = null, int $status = 500): JsonResponse
    {
        Log::error($exception);

        if ($message) return response()->json($message, $status);

        if ($exception instanceof ValidationException)
        {
            return response()->json($exception->getErrors(), $status);
        }

        return response()->json($exception->getMessage(), $status);
    }
}
