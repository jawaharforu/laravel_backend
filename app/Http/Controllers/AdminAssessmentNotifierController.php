<?php namespace App\Http\Controllers;

	use Session;
	use Request;
	use DB;
	use CRUDBooster;

	class AdminAssessmentNotifierController extends \crocodicstudio\crudbooster\controllers\CBController {


	    public function getChart(){

            $out = [];
            $box_plot = [];
            $plot_box = [];

            $post_data = request()->get('notify_id');
            if($post_data) {
                $companyID = DB::table('assessment_notifier')
                    ->where('id',request()->get('notify_id'))
                    ->where('company_id',getCompanyID())
                    ->value('company_id');
                if($companyID) {
                    $data = DB::table('employee_full_score')->where('company_id', getCompanyID())->get()->all();
                    if ($data) {
                        foreach ($data as $d) {
                            $score = $d->self + $d->evalator;
                            $score_f[$d->assessment_type_id][] = ($score / 2);
                        }
                        foreach ($score_f as $k => $v) {
                            $flabel[] = getAssessmentsName($k);
                        }
                        foreach ($score_f as $k => $v) {
                            $fdata[] = mean($v);
                        }
                    }
                    $as = DB::table('assessment_notifier')->where('company_id', $companyID)->get()->first();
                    $allEmp = DB::table('employees')
                        ->where('company_id', getCompanyID())
                        ->get()->all();
                    $departments = DB::table('departments')
						->where('company_id', getCompanyID())->get()->all();

                    foreach ($allEmp as $m) {
                        $getassessment_forms_data = DB::table('assessment_forms_data')
                            ->where('type_of_assesment', $as->a_type)
                            ->where('employee', $m->id)
                            ->get()->first();
                        if (!$getassessment_forms_data) {
                            $userNotCompleted[] = $m;
                        }
                    }

                    foreach ($departments as $dp) {
                        $dep_name[] = $dp->name;
                        $allEmps = DB::table('employees')
                            ->where('company_id', getCompanyID())
                            ->where('parentid', '=', $dp->id)
                            ->get()->all();
                        foreach ($allEmps as $error_emp) {
                            $errorZone1 = DB::table('employee_full_score')
                                ->where('notification_id', request()->get('notify_id'))
                                ->where('employee_id', $error_emp->id)
                                ->where('remark', 'CMTR')
                                ->where('company_id', getCompanyID())
                                ->get()->all();
                            $errorZone[] = count($errorZone1);
                        }
                    }

                    $employee_finall_score = DB::table('employee_finall_score')
                        ->where('notification_id', request()->get('notify_id'))
                        ->where('company_id', getCompanyID())
                        ->get()->all();

                    sort($employee_finall_score);

                    $employee_full_score = DB::table('employee_full_score')
                        ->where('notification_id', request()->get('notify_id'))
                        ->where('remark', 'CMTR')
                        ->where('company_id', getCompanyID())
                        ->get()->all();

                    foreach ($employee_full_score as $skill) {
                        $dep_name1[] = getSkillSet($skill->skill_set_id);
                    }

                    $horizontalBar = app()->chartjs
                        ->name('horizontalBarTest')
                        ->type('horizontalBar')
                        ->size(['width' => 400, 'height' => 600])
                        ->labels($dep_name1)
                        ->datasets([
                            [
                                "label" => "Critical Zones - Employee Count",
                                'backgroundColor' => "rgba(38, 185, 154, 0.31)",
                                'borderColor' => "rgba(38, 185, 154, 0.7)",
                                "pointBorderColor" => "rgba(38, 185, 154, 0.7)",
                                "pointBackgroundColor" => "rgba(38, 185, 154, 0.7)",
                                "pointHoverBackgroundColor" => "#fff",
                                "pointHoverBorderColor" => "rgba(220,220,220,1)",
                                'data' => $errorZone,
                            ]
                        ])
                        ->options([]);

                } else {
                    CRUDBooster::redirect( purl(''), 'Assessment ID Not Exists' ,'info');
                }

                $data = [];
                $data['page_title'] = "Charts";
                $scores = DB::table('employee_finall_score')
                    ->where('notification_id', $post_data)
                    ->where('company_id', getCompanyID())
                    ->get()->all();

                $d = "";
                foreach ($scores as $sck => $scv) {
                    $d .= "$scv->employee_id\t{$scv->score}\r\n";
                }

                try {
                    if (count($scores) > 10 && count($scores) < 30) {

                        $client = new \GuzzleHttp\Client();
                        $header['Content-Disposition'] = 'form-data';
                        $response = $client->request('POST', 'http://edwinsturt.pythonanywhere.com/api/stats/', [
                            'form_params' => [
                                'datastring' => $d,
                                'dataLength' => count($scores),
                            ]
                        ], $header);

                        $data_t = json_decode($response->getBody())[0][0];

                        if($data_t){

                        $y_values = $data_t->Fit_Summary[0][0]->graph->Y;

                        $one_line = (preg_replace("/[\n\r]/", "", $y_values));
                        $remove_space = preg_replace('/\s+/', '|', $one_line);
                        str_replace(']', "", $remove_space);
                        $split_y = explode("|", $remove_space);

                        foreach ($split_y as $k => $v) {
                            $out[$k] = [(float)$v];
                            $box_plot[$k] = [$k, (float)$v];
                            $plot_box[$k] = (float)$v;
                        }

                        $data['chart_data'] = $out;
                        $data['full'] = $data_t;

                        foreach (explode(".",$data_t->dataDep[0]->IndependentDataX) as $ind){
                            $ind_val[] = (int)trim($ind);
                        }
                        $IndependentData = (array_slice($ind_val,1,-1));
                        $data['IndependentData'] = $IndependentData;

                        //abserror
                        //

                        foreach (explode(".",$data_t->dataDep[0]->DependentDataY) as $ab){
                            $abserror[] = (int)trim($ab);
                        }
                        $IndependentData = (array_slice($abserror,1,-1));
                        $data['abserror'] = $IndependentData;

                        $average = $data_t->DataStats[0][0]->mean;
                        $minimum = $data_t->DataStats[0][0]->minimum;
                        $maximum = $data_t->DataStats[0][0]->maximum;

                        sort($plot_box);

                        $data['chart_data'] = $out;
                        $data['chart_box'] = $box_plot;
                        $data['plot_box'] = $plot_box;
                        $data['average'] = $average;
                        $data['min'] = $minimum;
                        $data['max'] = $maximum;
                        $data['employee_finall_score'] = $employee_finall_score;
                        $data['employee_full_score'] = $employee_full_score;
                        $data['companyID'] = $companyID;
                        $data['horizontalBar'] = $horizontalBar;
                        $data['userNotCompleted'] = $userNotCompleted;
                        $data['as'] = $as;
                        $data['flabel'] = $flabel;
                        $data['fdata'] = $fdata;

                        $this->cbView('charts',$data);
                        } else {
                            $data['content']    = "Score's are empty, Curve Fitting cannot be processed!";
                            $this->cbView('score-empty', $data);
                        }

                    } elseif (count($scores) < 10) {

                        foreach ($scores as $s){
                            $data_score[] = [
                                $s->employee_id,
                                (int)$s->score
                            ];
                        }

                        $data['content']    = "Score's are empty, All assessments not done";
                        $data['employee_finall_score'] = $employee_finall_score;
                        $data['employee_full_score'] = $employee_full_score;
                        $data['companyID'] = $companyID;
                        $data['horizontalBar'] = $horizontalBar;
                        $data['userNotCompleted'] = $userNotCompleted;
                        $data['as'] = $as;
                        $data['flabel'] = $flabel;
                        $data['fdata'] = $fdata;
                        $data['scores']    =$data_score;
                        $this->cbView('ch3', $data);

                    } else {


                        $data['full'] = FALSE;

                        if($scores) {


                            foreach ($scores as $k => $v) {
                                $out[$k] = [(float)$v->score];
                                $box_plot[$k] = [$k, (float)$v->score];
                                $plot_box[$k] = (float)$v->score;
                            }

                            $a = array_filter($plot_box);
                            $average = array_sum($a) / count($a);

                            $minimum = min($plot_box);
                            $maximum = max($plot_box);

                            sort($plot_box);

                            $data['chart_data'] = $out;
                            $data['chart_box'] = $box_plot;
                            $data['plot_box'] = $plot_box;
                            $data['average'] = $average;
                            $data['min'] = $minimum;
                            $data['max'] = $maximum;
                            $data['employee_finall_score'] = $employee_finall_score;
                            $data['employee_full_score'] = $employee_full_score;
                            $data['companyID'] = $companyID;
                            $data['horizontalBar'] = $horizontalBar;
                            $data['userNotCompleted'] = $userNotCompleted;
                            $data['as'] = $as;
                            $data['flabel'] = $flabel;
                            $data['fdata'] = $fdata;

                            $this->cbView('ch2', $data);
                        } else {


                            $this->cbView('score-empty', $data);
                        }


                    }




                } catch
                (Exception $e) {
                    echo $e->getMessage();
                }
            } else {
                $data = [];
                $data['page_title'] = 'Charts';
                $data['empty']  = "ok";
                $this->cbView('charts', $data);
            }

        }

	    public function cbInit() {

			# START CONFIGURATION DO NOT REMOVE THIS LINE
			$this->title_field = "a_name";
			$this->limit = "20";
			$this->orderby = "id,desc";
			$this->global_privilege = false;
			$this->button_table_action = true;
			$this->button_bulk_action = false;
			$this->button_action_style = "button_icon";
			$this->button_add = true;
			$this->button_edit = true;
			$this->button_delete = true;
			$this->button_detail = true;
			$this->button_show = true;
			$this->button_filter = true;
			$this->button_import = false;
			$this->button_export = false;
			$this->table = "assessment_notifier";
			$this->show_numbering = TRUE;
            $this->btn_next = CRUDBooster::adminPath('oranagram_structure');

			# END CONFIGURATION DO NOT REMOVE THIS LINE

			# START COLUMNS DO NOT REMOVE THIS LINE
			$this->col = [];

			$this->col[] = ["label"=>"Assessment Name","name"=>"a_name"];
            $this->col[] = ["label"=>"Assessment For","name"=>"a_type", "callback"=>function($row) {
                return ($row->a_type == 1)?'Employees':'MD';
                }];
            $this->col[] = ["label"=>"Period Of Time","name"=>"period_of_time", "callback"=>function($row) {
                if($row->period_of_time == 1){ return 'Yearly'; };
                if($row->period_of_time == 2){ return 'Half-yearly'; };
                if($row->period_of_time == 3){ return 'Quarterly'; };
             }];
			$this->col[] = ["label"=>"Duration From","name"=>"duration_from"];
			$this->col[] = ["label"=>"Duration To","name"=>"duration_to"];
			$this->col[] = ["label"=>"Due Date","name"=>"due_date"];
			$this->col[] = ["label"=>"Description","name"=>"a_desc"];
			# END COLUMNS DO NOT REMOVE THIS LINE

			# START FORM DO NOT REMOVE THIS LINE
			$this->form = [];
			$this->form[] = ['label'=>'Assessment Name','name'=>'a_name','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide name of the Assessment. Ex: Half yearly Assessment for Jan 2018 to Jun 2018'];
            $this->form[] = ['label'=>'Assessment Type','name'=>'a_type', 'type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','dataenum' =>  '1|Employees;2|MD'];
            $this->form[] = ['label'=>'Period Of Time','name'=>'period_of_time','type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','dataenum' =>  '1|Yearly;2|Half-yearly;3|Quarterly'];
			$this->form[] = ['label'=>'Duration From','name'=>'duration_from','type'=>'datetime','validation'=>'required|date_format:Y-m-d H:i:s','width'=>'col-sm-10','placeholder'=>'Please select starting date considered for the Assessment'];
			$this->form[] = ['label'=>'Duration To','name'=>'duration_to','type'=>'datetime','validation'=>'required|date_format:Y-m-d H:i:s','width'=>'col-sm-10','placeholder'=>'Please select ending date considered for the Assessment'];
			$this->form[] = ['label'=>'Due Date','name'=>'due_date','type'=>'datetime','validation'=>'required|date','width'=>'col-sm-10','placeholder'=>'Please select the date by when all the Assessments should be completed'];
			$this->form[] = ['label'=>'Description','name'=>'a_desc','type'=>'textarea','validation'=>'required|string|min:5|max:5000','width'=>'col-sm-10'];
			# END FORM DO NOT REMOVE THIS LINE

            if(CRUDBooster::isSuperadmin()):
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> 0];
            else:
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> getCompanyID()];
            endif;

			/*
	        | ----------------------------------------------------------------------
	        | Sub Module
	        | ----------------------------------------------------------------------
			| @label          = Label of action
			| @path           = Path of sub module
			| @foreign_key 	  = foreign key of sub table/module
			| @button_color   = Bootstrap Class (primary,success,warning,danger)
			| @button_icon    = Font Awesome Class
			| @parent_columns = Sparate with comma, e.g : name,created_at
	        |
	        */
	        $this->sub_module = array();


	        /*
	        | ----------------------------------------------------------------------
	        | Add More Action Button / Menu
	        | ----------------------------------------------------------------------
	        | @label       = Label of action
	        | @url         = Target URL, you can use field alias. e.g : [id], [name], [title], etc
	        | @icon        = Font awesome class icon. e.g : fa fa-bars
	        | @color 	   = Default is primary. (primary, warning, succecss, info)
	        | @showIf 	   = If condition when action show. Use field alias. e.g : [id] == 1
	        |
	        */
	        $this->addaction = array();


	        /*
	        | ----------------------------------------------------------------------
	        | Add More Button Selected
	        | ----------------------------------------------------------------------
	        | @label       = Label of action
	        | @icon 	   = Icon from fontawesome
	        | @name 	   = Name of button
	        | Then about the action, you should code at actionButtonSelected method
	        |
	        */
	        $this->button_selected = array();


	        /*
	        | ----------------------------------------------------------------------
	        | Add alert message to this module at overheader
	        | ----------------------------------------------------------------------
	        | @message = Text of message
	        | @type    = warning,success,danger,info
	        |
	        */
	        $this->alert        = array();



	        /*
	        | ----------------------------------------------------------------------
	        | Add more button to header button
	        | ----------------------------------------------------------------------
	        | @label = Name of button
	        | @url   = URL Target
	        | @icon  = Icon from Awesome.
	        |
	        */
	        $this->index_button = array();



	        /*
	        | ----------------------------------------------------------------------
	        | Customize Table Row Color
	        | ----------------------------------------------------------------------
	        | @condition = If condition. You may use field alias. E.g : [id] == 1
	        | @color = Default is none. You can use bootstrap success,info,warning,danger,primary.
	        |
	        */
	        $this->table_row_color = array();


	        /*
	        | ----------------------------------------------------------------------
	        | You may use this bellow array to add statistic at dashboard
	        | ----------------------------------------------------------------------
	        | @label, @count, @icon, @color
	        |
	        */
	        $this->index_statistic = array();





	        /*
	        | ----------------------------------------------------------------------
	        | Add javascript at body
	        | ----------------------------------------------------------------------
	        | javascript code in the variable
	        | $this->script_js = "function() { ... }";
	        |
	        */
	        $this->script_js = "
				var titleText0 = document.getElementById('a_name').placeholder;
				var titleText1 = document.getElementById('duration_to').placeholder;
				var titleText2 = document.getElementById('duration_from').placeholder;
				var titleText3 = document.getElementById('due_date').placeholder;
				var titleText4 = document.getElementById('a_desc').placeholder;

				$('#a_name').attr('title', titleText0);
				$('#duration_to').attr('title', titleText1);
				$('#duration_from').attr('title', titleText2);
				$('#due_date').attr('title', titleText3);
				$('#a_desc').attr('title', titleText4);

				$('input').tooltip({placement: 'right',container: 'body'});
				$('textarea').tooltip();
			";


            /*
	        | ----------------------------------------------------------------------
	        | Include HTML Code before index table
	        | ----------------------------------------------------------------------
	        | html code to display it before index table
	        | $this->pre_index_html = "<p>test</p>";
	        |
	        */
	        $this->pre_index_html = null;



	        /*
	        | ----------------------------------------------------------------------
	        | Include HTML Code after index table
	        | ----------------------------------------------------------------------
	        | html code to display it after index table
	        | $this->post_index_html = "<p>test</p>";
	        |
	        */
	        $this->post_index_html = null;



	        /*
	        | ----------------------------------------------------------------------
	        | Include Javascript File
	        | ----------------------------------------------------------------------
	        | URL of your javascript each array
	        | $this->load_js[] = asset("myfile.js");
	        |
	        */
	        $this->load_js = [
				'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.2/velocity.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.2/velocity.ui.min.js',
                // asset("js/callingpopup.js")
			];



	        /*
	        | ----------------------------------------------------------------------
	        | Add css style at body
	        | ----------------------------------------------------------------------
	        | css code in the variable
	        | $this->style_css = ".style{....}";
	        |
	        */
	        $this->style_css = NULL;



	        /*
	        | ----------------------------------------------------------------------
	        | Include css File
	        | ----------------------------------------------------------------------
	        | URL of your css each array
	        | $this->load_css[] = asset("myfile.css");
	        |
	        */
	        $this->load_css = array();


	    }


	    /*
	    | ----------------------------------------------------------------------
	    | Hook for button selected
	    | ----------------------------------------------------------------------
	    | @id_selected = the id selected
	    | @button_name = the name of button
	    |
	    */
	    public function actionButtonSelected($id_selected,$button_name) {
	        //Your code here

	    }


	    /*
	    | ----------------------------------------------------------------------
	    | Hook for manipulate query of index result
	    | ----------------------------------------------------------------------
	    | @query = current sql query
	    |
	    */
	    public function hook_query_index(&$query) {
	        //Your code here
            $query->where($this->table.'.company_id',getCompanyID());
	    }

	    /*
	    | ----------------------------------------------------------------------
	    | Hook for manipulate row of index table html
	    | ----------------------------------------------------------------------
	    |
	    */
	    public function hook_row_index($column_index,&$column_value) {
	    	//Your code here
	    }

	    /*
	    | ----------------------------------------------------------------------
	    | Hook for manipulate data input before add data is execute
	    | ----------------------------------------------------------------------
	    | @arr
	    |
	    */
	    public function hook_before_add(&$postdata) {
	        //Your code here

	    }

	    /*
	    | ----------------------------------------------------------------------
	    | Hook for execute command after add public static function called
	    | ----------------------------------------------------------------------
	    | @id = last insert id
	    |
	    */
	    public function hook_after_add($id) {
	        //Your code here
                \LogActivity::addToLog('Add Assessment Notifier');
            DB::table('assessment_approve')->insert([
                'notify_id'  =>  $id,
                'accept'  =>  0,
                'company_id' =>  getCompanyID()
            ]);
	    }

	    /*
	    | ----------------------------------------------------------------------
	    | Hook for manipulate data input before update data is execute
	    | ----------------------------------------------------------------------
	    | @postdata = input post data
	    | @id       = current id
	    |
	    */
	    public function hook_before_edit(&$postdata,$id) {
	        //Your code here

	    }

	    /*
	    | ----------------------------------------------------------------------
	    | Hook for execute command after edit public static function called
	    | ----------------------------------------------------------------------
	    | @id       = current id
	    |
	    */
	    public function hook_after_edit($id) {
	        //Your code here

	    }

	    /*
	    | ----------------------------------------------------------------------
	    | Hook for execute command before delete public static function called
	    | ----------------------------------------------------------------------
	    | @id       = current id
	    |
	    */
	    public function hook_before_delete($id) {
	        //Your code here

	    }

	    /*
	    | ----------------------------------------------------------------------
	    | Hook for execute command after delete public static function called
	    | ----------------------------------------------------------------------
	    | @id       = current id
	    |
	    */
	    public function hook_after_delete($id) {
	        //Your code here
            \LogActivity::addToLog('Assessment Deleted');
	    }



	    //By the way, you can still create your own method in here... :)


	}


