<?php namespace App\Http\Controllers;

	use Session;
	use Request;
	use DB;
	use CRUDBooster;

	class AdminAppraisalapproverController extends \crocodicstudio\crudbooster\controllers\CBController {

	    public function cbInit() {

			# START CONFIGURATION DO NOT REMOVE THIS LINE
			$this->title_field = "id";
			$this->limit = "20";
			$this->orderby = "id,desc";
			$this->global_privilege = false;
			$this->button_table_action = true;
			$this->button_bulk_action = false;
			$this->button_action_style = "button_icon";
			$this->button_add = false;
			$this->button_edit = true;
			$this->button_delete = false;
			$this->button_detail = true;
			$this->button_show = true;
			$this->button_filter = false;
			$this->button_import = false;
			$this->button_export = false;
			$this->show_numbering = TRUE;
			$this->table = "appraisalapprover";
			# END CONFIGURATION DO NOT REMOVE THIS LINE

			# START COLUMNS DO NOT REMOVE THIS LINE
			$this->col = [];

			$this->col[] = ["label"=>"Senior Manager Fixed (%)","name"=>"seniormanagerfixed"];
			$this->col[] = ["label"=>"Senior Manager Variable (%)","name"=>"seniormanagervariable"];
			$this->col[] = ["label"=>"Senior Manager Bonus (%)","name"=>"seniormanagerbonus"];
			$this->col[] = ["label"=>"Manager Fixed (%)","name"=>"managerfixed"];
			$this->col[] = ["label"=>"Manager Variable (%)","name"=>"managervariable"];
			$this->col[] = ["label"=>"Manager Bonus (%)","name"=>"managerbonus"];
			$this->col[] = ["label"=>"Executives Fixed (%)","name"=>"executivesfixed"];
			# END COLUMNS DO NOT REMOVE THIS LINE

			# START FORM DO NOT REMOVE THIS LINE
			$this->form = [];
			$this->form[] = ['label'=>'Senior Manager & Above Fixed (%)','name'=>'seniormanagerfixed','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
			$this->form[] = ['label'=>'Senior Manager & Above Variable (%)','name'=>'seniormanagervariable','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
			$this->form[] = ['label'=>'Senior Manager & Above Bonus (%)','name'=>'seniormanagerbonus','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
			$this->form[] = ['label'=>'Manager Fixed (%)','name'=>'managerfixed','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
			$this->form[] = ['label'=>'Manager Variable (%)','name'=>'managervariable','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
			$this->form[] = ['label'=>'Manager Bonus (%)','name'=>'managerbonus','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
			$this->form[] = ['label'=>'Executives Fixed (%)','name'=>'executivesfixed','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
			$this->form[] = ['label'=>'Executives Variable (%)','name'=>'executivesvariable','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
			$this->form[] = ['label'=>'Executives Bonus (%)','name'=>'executivesbonus','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
/*
			$this->form[] = ['label'=>'Senior Manager & Above Fixed','name'=>'seniormanagerfixed','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
+			$this->form[] = ['label'=>'Senior Manager & Above Variable','name'=>'seniormanagervariable','type'=>'number','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
+			$this->form[] = ['label'=>'Senior Manager & Above Bonus','name'=>'seniormanagerbonus','type'=>'number','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
+			$this->form[] = ['label'=>'Manager Fixed (%)','name'=>'managerfixed','type'=>'number','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
+			$this->form[] = ['label'=>'Manager Variable (%)','name'=>'managervariable','type'=>'number','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
+			$this->form[] = ['label'=>'Manager Bonus (%)','name'=>'managerbonus','type'=>'number','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
+			$this->form[] = ['label'=>'Executives Fixed (%)','name'=>'executivesfixed','type'=>'number','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
+			$this->form[] = ['label'=>'Executives Variable (%)','name'=>'executivesvariable','type'=>'number','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
+			$this->form[] = ['label'=>'Executives Bonus (%)','name'=>'executivesbonus','type'=>'number','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide value between 1 and 100'];
*/
			if(CRUDBooster::isSuperadmin()):
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> 0];
            else:
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> getCompanyID()];
            endif;
			# END FORM DO NOT REMOVE THIS LINE

			# OLD START FORM
			//$this->form = [];
			//$this->form[] = ["label"=>"Seniormanagerfixed","name"=>"seniormanagerfixed","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Seniormanagervariable","name"=>"seniormanagervariable","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Seniormanagerbonus","name"=>"seniormanagerbonus","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Managerfixed","name"=>"managerfixed","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Managervariable","name"=>"managervariable","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Managerbonus","name"=>"managerbonus","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Executivesfixed","name"=>"executivesfixed","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Executivesvariable","name"=>"executivesvariable","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Executivesbonus","name"=>"executivesbonus","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Company Id","name"=>"company_id","type"=>"select2","required"=>TRUE,"validation"=>"required|integer|min:0","datatable"=>"company,id"];
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
			$this->script_js = "
			var titleText1 = document.getElementById('seniormanagerfixed').placeholder;

			$('#seniormanagerfixed').attr('title', titleText1);
			$('#seniormanagervariable').attr('title', titleText1);
			$('#seniormanagerbonus').attr('title', titleText1);

			$('#managerfixed').attr('title', titleText1);
			$('#managervariable').attr('title', titleText1);
			$('#managerbonus').attr('title', titleText1);

			$('#executivesfixed').attr('title', titleText1);
			$('#executivesvariable').attr('title', titleText1);
			$('#executivesbonus').attr('title', titleText1);

			$('input').tooltip({placement: 'right',container: 'body'});
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
            $data['page_title'] = "Appraisal";
            $data['employee_category'] = DB::table('employee_category')->where('company_id',getCompanyID())->get()->all();
            $data['appraisal_level'] = DB::table('appraisal_level')->get()->all();
            $this->cbView('forms.appraisal',$data);
        }

        public function postSaveData(){
            $postdata = Request::all();
            $employee_category = DB::table('employee_category')->where('company_id',getCompanyID())->get()->all();
            $appraisal_level = DB::table('appraisal_level')->get()->all();
            foreach($employee_category as $value){
                foreach($appraisal_level as $v){
                    $data[] = [
                        'category_id' => $value->id,
                        'level_id' => $v->id,
                        'percent_fixed' => $postdata['percent_fixed'][$value->id][$v->id],
                        'percent_variable' => $postdata['percent_variable'][$value->id][$v->id],
                        'percent_bonus' => $postdata['percent_bonus'][$value->id][$v->id],
                        'company_id' => getCompanyID(),
                    ];
                }
            }
            DB::table('appraisal_percent')->where('company_id',getCompanyID())->delete();
            DB::table('appraisal_percent')->insert($data);
            \LogActivity::addToLog('Submitted Appraisal');
            return redirect(purl('appraisalapprover/add'));
        }

        public function getAppraisalList() {
            $notify_id = request()->get('notify_id');
            $data = [];
            $data['page_title'] = "Appraisal List";
            $data['notify_id'] = DB::table('assessment_notifier')->where('company_id',getCompanyID())->get()->all();
            if($notify_id) {
                $data['as'] = DB::table('assessment_notifier')->where('id', $notify_id)->get()->first();
                $data['employee_category'] = DB::table('employee_category')->where('company_id',getCompanyID())->get()->all();
                $data['appraisal_level'] = DB::table('appraisal_level')->get()->all();
            }

            $this->cbView('appraisallist',$data);
        }



	    //By the way, you can still create your own method in here... :)


	}
