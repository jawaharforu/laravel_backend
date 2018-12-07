<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiTestimonialController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {
				$this->table       = "testimonial";
				$this->permalink   = "testimonial";
				$this->method_type = "get";
		    }

            public function execute_api()
            {
                $output = DB::table($this->table)->where('status',1)->get()->all();
                return response()->json($output,200);
            }

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process

		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process

		    }

		}
