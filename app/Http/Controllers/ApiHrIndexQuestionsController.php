<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiHrIndexQuestionsController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "hrindex_questions";        
				$this->permalink   = "hr_index_questions";    
				$this->method_type = "get";    
		    }
		
			public function execute_api()
            {
				$output = DB::table('hrindex_questions')->join('hrindex_question_type','hrindex_questions.question_type','=','hrindex_question_type.id')
				->select('hrindex_questions.*', 'hrindex_question_type.question_type as qtype')
				->get()
				->all();
				$out = array();
				foreach($output as $key => $value){
					$out[$value->question_type]['head'] = $value->qtype;
					$out[$value->question_type]['question'][] = array('q' => $value->question);
				}
				$res = array();
				foreach($out as $o){
					$res[] = $o;
				}
                return response()->json($res,200);
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