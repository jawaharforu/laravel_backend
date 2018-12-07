<?php namespace App\Http\Controllers;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Support\Facades\DB;
use Session;
use Request;
use CRUDBooster;
use App\GlobalSettings;

use App\companies;

class ApiRegistrationController extends \crocodicstudio\crudbooster\controllers\ApiController
{

    function __construct()
    {
        $this->table = "companies";
        $this->permalink = "registration";
        $this->method_type = "post";
    }

    public function execute_api()
    {
        try {

            $rules = [
                'jobtitle'      =>      'required',
                'company_name'      =>      'required',
                'industry'      =>      'required',
                'no_of_employees'       =>      'required',
                'company_contact'       =>      'required',
                'company_address'       =>      'required',
                'country_code'      =>      'required',
                'country'       =>      'required',
                'state'     =>      'required',
                'city'      =>      'required',
                'first_name'        =>            'required',
                'middle_name'        =>         'required',
                'last_name'        =>           'required',
                'password'          => 'required|confirmed|min:8',
                'email'              =>            'email',

            ];

            $validation = [
                'jobtitle'      =>      request()->get('jobtitle'),
                'company_name'      =>      request()->get('company_name'),
                'industry'      =>      request()->get('industry'),
                'no_of_employees'       =>      request()->get('no_of_employees'),
                'company_contact'       =>      request()->get('company_contact'),
                'company_address'       =>      request()->get('company_address'),
                'country_code'      =>      request()->get('country_code'),
                'country'       =>      request()->get('country'),
                'state'     =>      request()->get('state'),
                'city'      =>      request()->get('city'),
                'status'    =>  1,
                'first_name'        =>            request()->get('first_name'),
                'middle_name'        =>         request()->get('middle_name'),
                'last_name'        =>           request()->get('last_name'),
                'password'          => request()->get('password'),
                'email'              =>            request()->get('email'),
                'password_confirmation'              =>            request()->get('password_confirmation'),
            ];


            $data = [
                'jobtitle'      =>      request()->get('jobtitle'),
                'company_name'      =>      request()->get('company_name'),
                'industry'      =>      request()->get('industry'),
                'no_of_employees'       =>      request()->get('no_of_employees'),
                'company_contact'       =>      request()->get('company_contact'),
                'company_address'       =>      request()->get('company_address'),
                'country_code'      =>      request()->get('country_code'),
                'country'       =>      request()->get('country'),
                'state'     =>      request()->get('state'),
                'city'      =>      request()->get('city'),
                'status'    =>  1,

            ];


            $validator = Validator::make($validation, $rules);
            if ($validator->passes()) {

                DB::beginTransaction();
                try {

                    $check_exists = DB::table('cms_users')
                        ->where('email',request()
                        ->get('email'))
                        ->get()
                        ->first();
                    if(!$check_exists) {

                        $company_id = DB::table('companies')->insertGetId($data);

                        GlobalSettings::insert([
                            'company_id'  =>  $company_id
                        ]);
                        DB::table('appraisalapprover')->insert([
                            'company_id'  =>  $company_id
                        ]);
                        $user_data = [
                            'name' => request()->get('first_name'),
                            'middle_name' => request()->get('middle_name'),
                            'last_name' => request()->get('last_name'),
                            'email' => request()->get('email'),
                            'company_id' => $company_id,
                            'password' => Hash::make(request()->get('password')),
                            'id_cms_privileges' => 3,
                            'remember_token'    =>  Hash::make(str_random(10))
                        ];

                        $account_id = DB::table('cms_users')->insertGetId($user_data);
                        DB::commit();

                        $data = [
                            'name'      =>  request()->get('company_name'),
                            'email'     =>  request()->get('email'),
                            'password'  =>  request()->get('password'),
                            'link'      =>  url('/')
                        ];
                        // CRUDBooster::sendEmail(['to'=>request()->get('email'),'data'=>$data,'template'=>'Employee']);

                        return response()->json([
                            'data' => [
                                'msg' => 'account_created',
                                'account_token' => Crypt::encrypt($account_id)
                            ]
                        ], 200);
                    } else {
                        return response()->json([
                            'data' => [
                                'email' => 'account_exists',

                            ]
                        ], 200);
                    }

                } catch (\Exception $e) {
                    DB::rollback();

                    return response()->json([
                        'code'  =>  $e->getCode(),
                        'msg'   =>  $e->getMessage()
                    ], 200);
                }

            } else {
                return response()->json($validator->messages(), 200);
            }






        } catch (Exception $e) {
            $response['api_status'] = 0;
            $response['api_message'] = 'error';
            $response['exception'] = get_class($e);
            $response['message'] = $e->getMessage();
            $response['trace'] = $e->getTrace();

            echo response()->json($response, 400);
        }
    }

    public function hook_before(&$postdata)
    {
        //This method will be execute before run the main process

    }

    public function hook_query(&$query)
    {
        //This method is to customize the sql query

    }

    public function hook_after($postdata, &$result)
    {


    }

}
