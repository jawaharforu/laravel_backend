<?php namespace App\Http\Controllers;

	use Illuminate\Support\Facades\Auth;
    use Session;
	use Illuminate\Http\Request;
	use DB;
    use CRUDBooster;
    use Illuminate\Support\Facades\Storage;


	class AdminJobDescMappedQuestionsController extends \crocodicstudio\crudbooster\controllers\CBController {

	    public function cbInit() {

			# START CONFIGURATION DO NOT REMOVE THIS LINE
			$this->title_field = "id";
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
			$this->button_import = true;
			$this->button_export = true;
			$this->table = "job_desc_mapped_questions";
			$this->show_numbering = TRUE;
            $this->btn_next = CRUDBooster::adminPath('job_desc_assinged_employee');
			# END CONFIGURATION DO NOT REMOVE THIS LINE

			# START COLUMNS DO NOT REMOVE THIS LINE
			$this->col = [];

			$this->col[] = ["label"=>"Job Desc Id","name"=>"job_desc_id","join"=>"job_desc,name"];
			$this->col[] = ["label"=>"Questionid","name"=>"questionid_id","join"=>"questions,question"];
			# END COLUMNS DO NOT REMOVE THIS LINE

			# START FORM DO NOT REMOVE THIS LINE
			$this->form = [];
			$this->form[] = ['label'=>'Job Description','name'=>'job_desc_id','type'=>'datamodal','validation'=>'required|integer|min:0','width'=>'col-sm-10','datamodal_table'=>'job_desc','datamodal_columns'=>'name','datamodal_size'=>'small'];
			$this->form[] = ['label'=>'Choose Question','name'=>'questionid_id','type'=>'datamodal','validation'=>'required|integer|min:0','width'=>'col-sm-10','datamodal_table'=>'questions','datamodal_columns'=>'question','datamodal_size'=>'small'];

            if(CRUDBooster::isSuperadmin()):
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> 0];
            else:
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> CRUDBooster::myId()];
            endif;
			# END FORM DO NOT REMOVE THIS LINE

			# OLD START FORM
			//$this->form = [];
			//$this->form[] = ["label"=>"Company Id","name"=>"company_id","type"=>"select2","required"=>TRUE,"validation"=>"required|integer|min:0","datatable"=>"company,id"];
			//$this->form[] = ["label"=>"Job Desc Id","name"=>"job_desc_id","type"=>"select2","required"=>TRUE,"validation"=>"required|integer|min:0","datatable"=>"job_desc,name"];
			//$this->form[] = ["label"=>"Questionid","name"=>"questionid_id","type"=>"select2","required"=>TRUE,"validation"=>"required|integer|min:0","datatable"=>"questionid,id"];
			# OLD END FORM

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
	        $this->script_js = NULL;


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
	        $this->load_js = array();



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

	    }

        public function getAdd()
        {
            $data = [];
            $data['page_title'] = "Assign Question to ";
            $data['org']         =   oranagram_structure::all();
            $data['dept'] = DB::table('departments')->get();


            $this->cbView('forms.employee.add',$data);
        }

        public function QuestionAssignToJd(){
            $empid = request()->get('emp');
            $data = [];
            $data['page_title'] = 'Question Assign to JD';
            $data['jd']         =   DB::table('job_desc')->where('company_id',getCompanyID())->get()->all();
            $jd = request()->get('jd');
            if(!empty($empid)) {
                $data['emp_detail'] = getEmployeeData($empid);
                if(empty($jd)) {
                    $jd = DB::table('job_desc_assinged_employee')->where('employee_id',$empid)->value('jdid_id');
                }
            }
            $data['assessmenttype']         =   DB::table('assessments')->orWhere('company_id',getCompanyID())->orWhere('company_id',0)->get()->all();
            $data['scales']         =   DB::table('scale')->orWhere('company_id',getCompanyID())->orWhere('company_id',0)->get()->all();
            $skills         =   DB::table('skill_sets')->orWhere('company_id',getCompanyID())->orWhere('company_id',0)->get()->all();
            $ass = [];
            foreach($skills as $skill) {
                $ass[$skill->assessments_type_id][$skill->id] = $skill->skill_set_name;
            }
            $data['skills'] = json_encode($ass);
            if($jd) {
                $data['jd_detail'] = DB::table('job_desc')->where('company_id',getCompanyID())->where('id',$jd)->get()->first();
                $questions = getJDQuestions($jd);
                $data['jd_questions'] = $questions;
                //$data['all_questions'] = getAllQuestions();
            }
            $this->cbView('forms.qustojd', $data);
        }

        public function jdSubmit(Request $request){
            $postvalues = $request->all();
            if(!empty($postvalues['jdid'])) {
                if(empty($request->file('filename'))) {
                    $filename = $postvalues['existfilename'];
                    $ext = pathinfo(url($filename), PATHINFO_EXTENSION);
                } else {
                    $custom_file_name = time(). str_random(14). "." . $request->file('filename')->getClientOriginalExtension();
                    $file = $request->file('filename')->storeAs('uploads',$custom_file_name);
                    $filename = "uploads/".$custom_file_name;
                    $ext = pathinfo(url($filename), PATHINFO_EXTENSION);
                }
                $name = $postvalues['name'];
                $description = $postvalues['description'];
                $company_id = $postvalues['company_id'];
                if (!in_array($ext, array('doc','docx','pdf'))) {
                    return array('success'=>false, 'msg'=>"Upload only document files");
                } else if(empty($name)){
                    return array('success'=>false, 'msg'=>"Enter name of the JD");
                }
                $insertdata = [
                    'company_id' => $company_id,
                    'name' => $name,
                    'description' => $description,
                    'filename' => $filename
                ];
                DB::table('job_desc')->where('id', $postvalues['jdid'])->update($insertdata);
                return array('success'=>true, 'data'=>array(
                    'company_id' => $company_id,
                    'name' => $name,
                    'description' => $description,
                    'id' => $postvalues['jdid']
                ));
            } else {
                if(empty($request->file('filename'))){
                    return array('success'=>false, 'msg'=>"Upload JD");
                }
                $custom_file_name = time(). str_random(14). "." . $request->file('filename')->getClientOriginalExtension();
                $file = $request->file('filename')->storeAs('uploads',$custom_file_name);
                //$path = storage_path()."/app/jd/".$custom_file_name;
                $filename = "uploads/".$custom_file_name;
                $ext = pathinfo(url($filename), PATHINFO_EXTENSION);
                $name = $postvalues['name'];
                $description = $postvalues['description'];
                $company_id = $postvalues['company_id'];
                if (!in_array($ext, array('doc','docx','pdf'))) {
                    return array('success'=>false, 'msg'=>"Upload only document files");
                } else if(empty($name)){
                    return array('success'=>false, 'msg'=>"Enter name of the JD");
                }
                $insertdata = [
                    'company_id' => $company_id,
                    'name' => $name,
                    'description' => $description,
                    'filename' => $filename
                ];
                $id = DB::table('job_desc')->insertGetId($insertdata);

                if ($ext == 'doc' || $ext == 'docx') {
                    $filetype = 'doc';
                    $fn = "http://docs.google.com/gview?url=".url($filename)."&embedded=true";
                } else if($ext == 'pdf') {
                    $filetype = 'pdf';
                    $fn = url($filename)."#toolbar=0&navpanes=0&scrollbar=0";
                }
                return array('success'=>true, 'data'=>array(
                    'company_id' => $company_id,
                    'name' => $name,
                    'description' => $description,
                    'filename' => $fn,
                    'filetype' => $filetype,
                    'id' => $id
                ));
            }
        }

        public function getFullQuestions($jdid){
            $jdques = array();
            $company_id = request()->get('cmp');
            if( $jdid != 0 ) {
                $refjd = request()->get('refjd');
                if($refjd != 0) {
                    $qus = getJDQuestions($refjd);
                } else {
                    $qus = getJDQuestions($jdid);
                }

                $del = request()->get('del');
                if ($del == 1) {
                    DB::table('job_desc_mapped_questions')->where('job_desc_id', $jdid)->delete();
                }
                foreach($qus as $qu) {
                    $jdques[] = $qu->questionid_id;
                    $mapques = [
                        'questionid_id' => $qu->questionid_id,
                        'job_desc_id' => $jdid,
                    ];
                    if ($del == 1) {
                        try {
                            DB::table('job_desc_mapped_questions')->insert($mapques);
                            echo  "Added";
                        } catch (Exception $e){
                            echo  $e;
                        }
                    }
                }
            }
            $allQuestions = getAllQuestions($company_id);
            $table = "";
            $i=1;
            foreach($allQuestions as $q) {
                $select = "";
                if( in_array($q->id, $jdques) ) {
                    $select = "checked='checked'";
                }
                $table .= "
                    <tr>
                        <td>".$i."</td>
                        <td>".$q->question."</td>
                        <td>".$q->name."</td>
                        <td>".$q->skill_set_name."</td>
                        <td><input type='checkbox' class='assques' id='ques_".$q->id."' data-id='".$q->id."' ".$select." /></td>
                    </tr>
                ";
                $i++;
            }
            return $table;
        }

        public function mapQuestionTo($check) {
            $jdid = request()->get('jdid');
            $qid = request()->get('qid');
            if( $check == 0 ) {
            $qid = request()->get('qid');
                DB::table('job_desc_mapped_questions')->where('job_desc_id',$jdid)->where('questionid_id',$qid)->delete();
                return "Removed";
            } else {
                $mapques = [
                    'questionid_id' => $qid,
                    'job_desc_id' => $jdid,
                ];
                DB::table('job_desc_mapped_questions')->insert($mapques);
                return "Added";
            }
        }

        public function assignJDtoEmp(Request $request){
            $res = $request->all();
            $mapemp = [
                'employee_id' => $res['employee_id'],
                'jdid_id' => $res['jdid_id'],
                'company_id' => $res['company_id']
            ];
            DB::table('job_desc_assinged_employee')->where('company_id',$res['company_id'])->where('employee_id',$res['employee_id'])->delete();
            DB::table('job_desc_assinged_employee')->insert($mapemp);
            return 'Success';
        }

        public function getAssQuestionsList($jdid){
            $allQuestions = getJDQuestions($jdid);
            $table = "";
            $i=1;
            foreach($allQuestions as $q) {

                $table .= "
                    <tr>
                        <td>".$i."</td>
                        <td>".$q->question."</td>
                        <td>".$q->name."</td>
                        <td>".$q->skill_set_name."</td>
                    </tr>
                ";
                $i++;
            }
            return $table;
        }

	    //By the way, you can still create your own method in here... :)


	}
