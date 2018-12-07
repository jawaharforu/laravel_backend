<?php namespace App\Http\Controllers;

	use Session;
	use Request;
	use DB;
	use CRUDBooster;

	class AdminGlobalSettings1Controller extends \crocodicstudio\crudbooster\controllers\CBController {

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
			$this->button_filter = false;
			$this->button_import = false;
			$this->button_export = false;
			$this->table = "global_settings";
			$this->show_numbering = TRUE;
            $this->btn_next = CRUDBooster::adminPath('employees');
			# END CONFIGURATION DO NOT REMOVE THIS LINE

			# START COLUMNS DO NOT REMOVE THIS LINE
			$this->col = [];

			$this->col[] = ["label"=>"Tolerance (%)","name"=>"tolerance"];
			$this->col[] = ["label"=>"External Reference (%)","name"=>"external_reference"];
			$this->col[] = ["label"=>"Internal Employee Reference (%)","name"=>"internal_employee_reference"];
			$this->col[] = ["label"=>"Managing Directors Descretion (%)","name"=>"managing_directors_descretion"];
			$this->col[] = ["label"=>"Special Allowance (%)","name"=>"special_allowance"];
			$this->col[] = ["label"=>"Cim (%)","name"=>"cim"];
			$this->col[] = ["label"=>"Nocim (%)","name"=>"nocim"];
			# END COLUMNS DO NOT REMOVE THIS LINE

			# START FORM DO NOT REMOVE THIS LINE
			$this->form = [];
            $this->form[] = ['label'=>'Assessment','name'=>'notify_id','type'=>'select2','validation'=>'required|integer|min:1','width'=>'col-sm-10','datatable'=>'assessment_notifier,a_name','datatable_where'=>'company_id ='.getCompanyID()];
			$this->form[] = ['label'=>'Tolerance (%)','name'=>'tolerance','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-5','placeholder'=>'Would help the department to relax the limits depending on the existing skill levels of the employees but at present has been set as 5%. A more relaxed limit would tend to minimize the training interventions.'];
			$this->form[] = ['label'=>'External Reference (%)','name'=>'external_reference','type'=>'number','validation'=>'required|min:0|max:100','width'=>'col-sm-5','placeholder'=>'This percentage will be applied, If the employee has been referred by external resource'];
			$this->form[] = ['label'=>'Internal Employee Reference (%)','name'=>'internal_employee_reference','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-5','placeholder'=>'This percentage will be applied, If the employee has been referred by internal resource'];
			$this->form[] = ['label'=>'Managing Directors / Board Descretion (%)','name'=>'managing_directors_descretion','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-5','placeholder'=>'This percentage will be applied, If the employee joined is from Managing Director/Boards Discretion'];
			$this->form[] = ['label'=>'Special Allowance (%)','name'=>'special_allowance','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-5','placeholder'=>'This percentage will be applied, If the employee has been referred by Chairman'];
			$this->form[] = ['label'=>'CIM (%)','name'=>'cim','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-5','placeholder'=>'If the resource has managed any critical incidence, then this percentage of critical incidence management will be applied to them'];
			$this->form[] = ['label'=>'No-CIM (%)','name'=>'nocim','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-5','placeholder'=>'If the resource has managed any critical incidence, then this percentage of critical incidence management will be applied to them'];
			$this->form[] = ['label'=>'Third Party Independent Evaluation (%)','name'=>'thirdparty_evaluation','type'=>'number','validation'=>'required|min:1|max:5','width'=>'col-sm-5','placeholder'=>'This percentage will be applied to employee if the management has chosen to include them in the third party evaluation'];
			$this->form[] = ['label'=>'Working Acquaintance of the Evaluator (0-5) (%)','name'=>'controls_working_aquantance05','type'=>'number','validation'=>'required|min:1|max:5','width'=>'col-sm-5','placeholder'=>'The percentage will be applied & calculated based on the Joining date of the employee.'];
			$this->form[] = ['label'=>'Working Acquaintance of the Evaluator (5-10) (%)','name'=>'controls_working_aquantance510','type'=>'number','validation'=>'required|min:1|max:10','width'=>'col-sm-5','placeholder'=>'The percentage will be applied & calculated based on the Joining date of the employee.'];
			$this->form[] = ['label'=>'Working Acquaintance of the Evaluator (10>)','name'=>'controls_working_aquantance10','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-5','placeholder'=>'The percentage will be applied & calculated based on the Joining date of the employee.'];
			$this->form[] = ['label'=>'Chairmans Reference (%)','name'=>'chairmans_reference','type'=>'number','validation'=>'required|min:1|max:5','width'=>'col-sm-5','placeholder'=>'The percentage will be applied based on total experience and relevant work experience'];
			$this->form[] = ['label'=>'Prior Work Experience (0-5) (%)','name'=>'overworking_aquantance05','type'=>'number','validation'=>'required|min:1|max:5','width'=>'col-sm-5','placeholder'=>'The percentage will be applied based on total experience and relevant work experience'];
			$this->form[] = ['label'=>'Prior Work Experience (5-10) (%)','name'=>'overworking_aquantance510','type'=>'number','validation'=>'required|min:1|max:10','width'=>'col-sm-5','placeholder'=>'The percentage will be applied based on total experience and relevant work experience'];
			$this->form[] = ['label'=>'Prior Work Experience (10>) (%)','name'=>'overworking_aquantance10','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-5','placeholder'=>'The percentage will be applied based on total experience and relevant work experience'];
			$this->form[] = ['label'=>'Prior Relevant Work Experience (0-5) (%)','name'=>'overprior_relevant05','type'=>'number','validation'=>'required|min:1|max:5','width'=>'col-sm-5','placeholder'=>'The percentage will be applied based on total experience and relevant work experience'];
			$this->form[] = ['label'=>'Prior Relevant Work Experience (5-10) (%)','name'=>'overprior_relevant510','type'=>'number','validation'=>'required|min:1|max:10','width'=>'col-sm-5','placeholder'=>'The percentage will be applied based on total experience and relevant work experience'];
            $this->form[] = ['label'=>'Prior Relevant Work Experience (10>) (%)','name'=>'overprior_relevant10','type'=>'number','validation'=>'required|min:1|max:100','width'=>'col-sm-5','placeholder'=>'The percentage will be applied based on total experience and relevant work experience'];
            if(CRUDBooster::isSuperadmin()):
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> 0];
            else:
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> getCompanyID()];
            endif;
			# END FORM DO NOT REMOVE THIS LINE

			# OLD START FORM
			//$this->form = [];
			//$this->form[] = ["label"=>"Tolerance","name"=>"tolerance","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"External Reference","name"=>"external_reference","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Internal Employee Reference","name"=>"internal_employee_reference","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Managing Directors Descretion","name"=>"managing_directors_descretion","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Special Allowance","name"=>"special_allowance","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Cim","name"=>"cim","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Nocim","name"=>"nocim","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Thirdparty Evaluation1","name"=>"thirdparty_evaluation1","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Thirdparty Evaluation2","name"=>"thirdparty_evaluation2","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Thirdparty Evaluation3","name"=>"thirdparty_evaluation3","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Controls Working Aquantance05","name"=>"controls_working_aquantance05","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Controls Working Aquantance510","name"=>"controls_working_aquantance510","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Controls Working Aquantance10","name"=>"controls_working_aquantance10","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Chairmans Reference","name"=>"chairmans_reference","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Overworking Aquantance05","name"=>"overworking_aquantance05","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Overworking Aquantance510","name"=>"overworking_aquantance510","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Overworking Aquantance10","name"=>"overworking_aquantance10","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Overprior Relevant05","name"=>"overprior_relevant05","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Overprior Relevant510","name"=>"overprior_relevant510","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
			//$this->form[] = ["label"=>"Overprior Relevant10","name"=>"overprior_relevant10","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
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
				var titleText0 = document.getElementById('tolerance').placeholder;
				var titleText1 = document.getElementById('external_reference').placeholder;
				var titleText2 = document.getElementById('internal_employee_reference').placeholder;
				var titleText3 = document.getElementById('managing_directors_descretion').placeholder;
				var titleText4 = document.getElementById('special_allowance').placeholder;
				var titleText5 = document.getElementById('cim').placeholder;
				var titleText6 = document.getElementById('nocim').placeholder;
				var titleText7 = document.getElementById('thirdparty_evaluation').placeholder;
				var titleText8 = document.getElementById('controls_working_aquantance05').placeholder;
				var titleText9 = document.getElementById('controls_working_aquantance510').placeholder;
				var titleText10 = document.getElementById('controls_working_aquantance10').placeholder;
				var titleText11 = document.getElementById('chairmans_reference').placeholder;
				var titleText12 = document.getElementById('overworking_aquantance05').placeholder;
				var titleText13 = document.getElementById('overworking_aquantance510').placeholder;
				var titleText14 = document.getElementById('overworking_aquantance10').placeholder;
				var titleText15 = document.getElementById('overprior_relevant05').placeholder;
				var titleText16 = document.getElementById('overprior_relevant510').placeholder;
				var titleText17 = document.getElementById('overprior_relevant10').placeholder;

				$('#tolerance').attr('title', titleText0);
				$('#external_reference').attr('title', titleText1);
				$('#internal_employee_reference').attr('title', titleText2);
				$('#managing_directors_descretion').attr('title', titleText3);
				$('#special_allowance').attr('title', titleText4);
				$('#cim').attr('title', titleText5);
				$('#nocim').attr('title', titleText6);
				$('#thirdparty_evaluation').attr('title', titleText7);
				$('#controls_working_aquantance05').attr('title', titleText8);
				$('#controls_working_aquantance510').attr('title', titleText9);
				$('#controls_working_aquantance10').attr('title', titleText10);
				$('#chairmans_reference').attr('title', titleText11);
				$('#overworking_aquantance05').attr('title', titleText12);
				$('#overworking_aquantance510').attr('title', titleText13);
				$('#overworking_aquantance10').attr('title', titleText14);
				$('#overprior_relevant05').attr('title', titleText15);
				$('#overprior_relevant510').attr('title', titleText16);
				$('#overprior_relevant10').attr('title', titleText17);

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
                asset("js/callingpopup.js")
            ];



	        /*
	        | ----------------------------------------------------------------------
	        | Add css style at body
	        | ----------------------------------------------------------------------
	        | css code in the variable
	        | $this->style_css = ".style{....}";
	        |
	        */
            $this->style_css = "

            ";



	        /*
	        | ----------------------------------------------------------------------
	        | Include css File
	        | ----------------------------------------------------------------------
	        | URL of your css each array
	        | $this->load_css[] = asset("myfile.css");
	        |
	        */
	        $this->load_css = [
                'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'
            ];


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
            \LogActivity::addToLog('Updated Global Settings');
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



	    //By the way, you can still create your own method in here... :)


	}
