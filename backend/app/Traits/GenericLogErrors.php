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
        error_log($exception);

        return response()->json([$exception, 'message' => $message], $status);
    }
}
