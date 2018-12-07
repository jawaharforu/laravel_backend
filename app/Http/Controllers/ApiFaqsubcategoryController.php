<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiFaqsubcategoryController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {
				$this->table       = "faqsubcategory";
				$this->permalink   = "faqsubcategory";
				$this->method_type = "get";
		    }


            public function execute_api()
            {
                $id = request()->get('id');
                $faqcategoryid = request()->get('faqcategoryid');
                if (!empty($id)) {
                    $output = DB::table($this->table)->where('id',$id)->get()->first();
                } else if (!empty($faqcategoryid)) {
                    $output = DB::table($this->table)->where('faqcategoryid',$faqcategoryid)->get()->all();
                } else {
                    $output = DB::table($this->table)->get()->all();
                }
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
