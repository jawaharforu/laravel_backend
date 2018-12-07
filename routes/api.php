<?php

use Illuminate\Http\Request;
use crocodicstudio\crudbooster\helpers\CRUDBooster;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$namespace = '\crocodicstudio\crudbooster\controllers';

Route::group(['middleware' => ['api','cors', '\crocodicstudio\crudbooster\middlewares\CBAuthAPI'], 'namespace' => 'App\Http\Controllers'], function () {
    //Router for custom api defeault

    $dir = scandir(base_path("app/Http/Controllers"));
    foreach ($dir as $v) {
        $v = str_replace('.php', '', $v);
        $names = array_filter(preg_split('/(?=[A-Z])/', str_replace('Controller', '', $v)));
        $names = strtolower(implode('_', $names));

        if (substr($names, 0, 4) == 'api_') {
            $names = str_replace('api_', '', $names);
            Route::any('api/'.$names, $v.'@execute_api');
        }
    }
});

Route::post('file_convert','MainController@file_totext');

Route::post('auth/login','AuthController@login');

Route::any('get/weightage/{jdid}','MainController@getWeightsList');
Route::any('get/assessmentscore/{notify_id}/{company_id}','MainController@getEmpList');
Route::post('post/jdcreateing/','AdminJobDescMappedQuestionsController@jdSubmit');
Route::any('get/allquestions/{jdid}','AdminJobDescMappedQuestionsController@getFullQuestions');
Route::any('get/assignedquestions/{jdid}','AdminJobDescMappedQuestionsController@getAssQuestionsList');
Route::any('get/mapquestions/{check}','AdminJobDescMappedQuestionsController@mapQuestionTo');
Route::post('post/assigntoemp','AdminJobDescMappedQuestionsController@assignJDtoEmp');
Route::any('get/helppopup/{page}','MainController@getHelpPopUp');




Route::any('/getPerformance',function (){


    $data = "";
    if(request()->has('range1')){
        $r1 = request()->get('range1');
        $r2 = request()->get('range2');
        if($r2){
            $between = [$r1,$r2];
            $employee_finall_score = DB::table('employee_finall_score')
                ->where('notification_id', request()->get('notify_id'))
                ->where('company_id', request()->get('company_id'))
                ->whereBetween('score',$between)
                ->get()->all();

        }
    } else {
        $employee_finall_score = DB::table('employee_finall_score')
            ->where('notification_id', request()->get('notify_id'))
            ->get()->all();
    }
    if($employee_finall_score) {
        foreach ($employee_finall_score as $tp) {
            $data .= '
        <tr role="row" class="odd">
                                <td data-percentage="{{ $tp->score }}" class="sorting_1"> ' . getEmployeeName($tp->employee_id) . ' </td>
                                <td> ' . getEmployeeData($tp->employee_id)->designation . ' </td>
                                <td>' . GetDeptNamebyScore($tp->employee_id) . '</td>
                            </tr>
        ';
        }
    } else {
        $data = '
        <tr role="row" class="odd">
                                <td>No Data Available!</td>
                                <td>No Data Available!</td>
                                <td>No Data Available!</td>
                            </tr>';
    }
    return response()->json(['data' =>  $data],200);

});

Route::any('/getTopPerformance','MainController@getTopPerformance');
