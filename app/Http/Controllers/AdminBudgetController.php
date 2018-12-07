<?php namespace App\Http\Controllers;

	use Illuminate\Support\Facades\Auth;
    use Session;
	use Request;
	use DB;
	use CRUDBooster;

	class AdminBudgetController extends \crocodicstudio\crudbooster\controllers\CBController {

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
			$this->table = "budget";
			$this->show_numbering = TRUE;

			# END CONFIGURATION DO NOT REMOVE THIS LINE

			# START COLUMNS DO NOT REMOVE THIS LINE
			$this->col = [];

			$this->col[] = ["label"=>"Year","name"=>"year"];
			$this->col[] = ["label"=>"Budget Name","name"=>"name_of_budget"];
			$this->col[] = ["label"=>"Amount","name"=>"amount"];
			$this->col[] = ["label"=>"Assigned Amount","name"=>"id", "callback"=>function($row) {
				return assigned_Budget_Amount($row->id);
			 }];
			$this->col[] = ["label"=>"Assessment","name"=>"notify_id", "callback"=>function($row) {
				return getAssessmenttypeName($row->notify_id);
			}];
			# END COLUMNS DO NOT REMOVE THIS LINE

			# START FORM DO NOT REMOVE THIS LINE
			$this->form = [];
			$this->form[] = ['label'=>'Budget Name','name'=>'name_of_budget','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide Budget Name'];
			$this->form[] = ['label'=>'Year','name'=>'year','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide Year of  Budget'];
			$this->form[] = ['label'=>'Amount','name'=>'amount','type'=>'money','validation'=>'required|integer|min:0','width'=>'col-sm-10','placeholder'=>'Please provide Budget Amount'];
			$this->form[] = ['label'=>'Assessment','name'=>'notify_id','type'=>'select2','validation'=>'required|integer|min:0','width'=>'col-sm-10','datatable'=>'assessment_notifier,a_name','datatable_where'=>'company_id ='.getCompanyID()];

			# END FORM DO NOT REMOVE THIS LINE

			# OLD START FORM
			//$this->form = [];
			//$this->form[] = ["label"=>"Year","name"=>"year","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Amount","name"=>"amount","type"=>"money","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Company Id","name"=>"company_id","type"=>"select2","required"=>TRUE,"validation"=>"required|integer|min:0","datatable"=>"company,id"];
			# OLD END FORM

            if(CRUDBooster::isSuperadmin()):
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> 0];
            else:
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> getCompanyID()];
            endif;
            //$query->where($this->table.'.company_id',getCompanyID());




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
            $this->addaction[] = ['label'=>'Add Budget Plan','url'=>CRUDBooster::adminPath('budget_plans/?budget=[id]'),'icon'=>'fa fa-ban','color'=>'warning', 'confirmation' => true];
            $this->addaction[] = ['label'=>'Training','url'=>CRUDBooster::adminPath('budget/training/?budget=[id]'),'icon'=>'fa fa-ban','color'=>'warning', 'confirmation' => true];



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
				var titleText1 = document.getElementById('name_of_budget').placeholder;
				$('#name_of_budget').attr('title', titleText1);

				var titleText2 = document.getElementById('year').placeholder;
				$('#year').attr('title', titleText2);

				var titleText3 = document.getElementById('amount').placeholder;
				$('#amount').attr('title', titleText3);

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
            \LogActivity::addToLog('Added New Budget Details');
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
            if(!checkDataIsAdmin($this->table,$id)){
                CRUDBooster::redirect($_SERVER['HTTP_REFERER'], "Admin Records cannot be edited!", "danger");
            }
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
            \LogActivity::addToLog('Updated Budget Details');
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
            if(!checkDataIsAdmin($this->table,$id)){
                CRUDBooster::redirect($_SERVER['HTTP_REFERER'], "Admin Records cannot be deleted!", "danger");
            }
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
            \LogActivity::addToLog('Deleted Budget Details');
        }

        public function getTraining(){
            $budgetid = request()->get('budget');
            $dept_emp = getAllEmployees(getCompanyID());
            $data = [];
            $data['page_title'] = "Training List";
            $budget_details = DB::table('budget')->where('id', $budgetid)->get()->first();
            $data['budget_details'] = $budget_details;
            $notifiyid = $budget_details->notify_id;
            $skill = empBaseSkillCtiticalzone($dept_emp, $notifiyid);
            $cz = array();
            foreach($skill as $s) {
                $cz[$s->assessment_type_id][$s->skill_set_id] = $s->remark;
            }
            $budget = array();
            $training = array();
            foreach($cz as $key=>$value) {
                foreach ($value as $k=>$v) {
                    $crt = getBudgetPlanUsingAssAndSkill($budgetid, $key, $k);
                    if($crt) {
                        $training['training'][] = $crt;
                    } else {
                        $training['neadtraining'][] = array('budget'=>$budgetid,'notifyid'=>$notifiyid,'assessmenttype'=>$key,'skill'=>$k);
                    }
                }
            }
            $data['train'] = $training;
            $this->cbView('training',$data);
        }



	    //By the way, you can still create your own method in here... :)


	}
