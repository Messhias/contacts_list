<?php
/**
 * Created by fabioconceicao.
 * FILE: ResourceController.php
 * User: fabioconceicao
 * Date: 27/09/19
 * Time: 10:40
 */

namespace App\Traits;


use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Trait ResourceController
 * @package App\Traits
 */
trait ResourceController
{
    /**
     * Function to check if the correct key identifier was applied in the
     * resources controller.
     *
     * @param $request
     *
     * @return JsonResponse
     */
    public function check_the_key_identifier(Request $request)
    {
        if (!$request->has($this->getKeyIdentifier()))
            return response()->json("Wrong key identifier", 500);
    }
}
