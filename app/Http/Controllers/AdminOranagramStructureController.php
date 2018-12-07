<?php namespace App\Http\Controllers;

	use Illuminate\Support\Facades\Auth;
    use Session;
	use Request;
	use DB;
	use CRUDBooster;

	class AdminOranagramStructureController extends \crocodicstudio\crudbooster\controllers\CBController {

	    public function cbInit() {

			# START CONFIGURATION DO NOT REMOVE THIS LINE
			$this->title_field = "head_name";
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
			$this->table = "oranagram_structure";
			$this->show_numbering = TRUE;
            $this->btn_next = CRUDBooster::adminPath('global_settings');
			# END CONFIGURATION DO NOT REMOVE THIS LINE

			# START COLUMNS DO NOT REMOVE THIS LINE
			$this->col = [];

			$this->col[] = ["label"=>"Department Id","name"=>"parentid","join"=>"departments,name"];
			$this->col[] = ["label"=>"Department Sub Id","name"=>"department_sub_id","join"=>"departments,name"];
			$this->col[] = ["label"=>"Designation","name"=>"head_name"];
			$this->col[] = ["label"=>"Reporting to","name"=>"parent_id","join"=>"oranagram_structure,head_name"];
			# END COLUMNS DO NOT REMOVE THIS LINE

			# START FORM DO NOT REMOVE THIS LINE
            $this->form = [];
            //$this->form[] = ['label'=>'Assessment','name'=>'assessment_id','type'=>'select2','validation'=>'required|integer|min:0','width'=>'col-sm-10','datatable'=>'assessment_notifier,a_name','datatable_where'=>'company_id ='.getCompanyID()];
            $this->form[] = ['label' => 'Assessment', 'name' => 'assessment_id', 'type' => 'hidden', 'value'=> 0];
			$this->form[] = ['label'=>'Department Id','name'=> 'parentid','type'=>'select','validation'=>'required|integer|min:0','width'=>'col-sm-10','datatable'=>'departments,name','datatable_where'=>'company_id ='.getCompanyID().' OR company_id =0'];
			$this->form[] = ['label'=>'Department Sub Id','name'=>'department_sub_id','type'=>'select','width'=>'col-sm-10','datatable'=>'departments,name','parent_select' => 'parentid','datatable_where'=>'company_id ='.getCompanyID().' OR company_id =0'];
			$this->form[] = ['label'=>'Designation','name'=>'head_name','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide designation of your department. Ex:Team Lead - Development'];
            $this->form[] = ['label' => 'Designation', 'name' => 'Designation', 'type' => 'hidden', 'value'=> ''];
			$this->form[] = ['label'=>'Reporting to','name'=>'parent_id','type'=>'select2','width'=>'col-sm-10','datatable'=>'oranagram_structure,head_name','datatable_where'=>'company_id ='.getCompanyID()];
			# END FORM DO NOT REMOVE THIS LINE

			# OLD START FORM
			//$this->form = [];
			//$this->form[] = ["label"=>"Department Id","name"=>"department_id","type"=>"select2","required"=>TRUE,"validation"=>"required|integer|min:0","datatable"=>"department,id"];
			//$this->form[] = ["label"=>"Department Sub Id","name"=>"department_sub_id","type"=>"select2","required"=>TRUE,"validation"=>"required|integer|min:0","datatable"=>"department_sub,id"];
			//$this->form[] = ["label"=>"Head Name","name"=>"head_name","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Designation","name"=>"Designation","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Parent Id","name"=>"parent_id","type"=>"select2","required"=>TRUE,"validation"=>"required|integer|min:0","datatable"=>"parent,id"];
			# OLD END FORM

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
			var head_name = document.getElementById('head_name').placeholder;

			$('#head_name').attr('title', head_name);

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

        public function getIndex() {
            //First, Add an auth
             if(!CRUDBooster::isView()) CRUDBooster::denyAccess();

             //Create your own query
             $data = [];
             $data['page_title'] = 'Products Data';
             $parent = request()->get('parent');
             if($parent == null || empty($parent)){
                $data['result'] = DB::table('oranagram_structure')->where('is_super',1)->where('company_id',getCompanyID())->get()->all();
             } else {
                $data['result'] = DB::table('oranagram_structure')->where('parent_id',$parent)->where('company_id',getCompanyID())->get()->all();
             }
             //Create a view. Please use `cbView` method instead of view method from laravel.

             $this->cbView('organogram',$data);
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
                $query->where('oranagram_structure.company_id',getCompanyID())->where('oranagram_structure.assessment_id',0);
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

            if(!isset($postdata['parent_id'])){
                $postdata['parent_id'] = uniqid('epes');
                $postdata['is_super'] = 1;
            }

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

            \LogActivity::addToLog('New Oranagram Structure added');

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
            \LogActivity::addToLog('Oranagram Structure updated');
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
            organogramDelete($id);
            \LogActivity::addToLog('Oranagram Structure deleted');
	    }


	    public function getDetail($id)
        {

            $data = [];
            $data['page_title'] = "";

            $parent = DB::table('oranagram_structure')
                ->where('id',$id)->value('parent_id');
            $data['data_users'] =getChilds($parent);

            $this->cbView('forms.asview',$data);
        }


        public function getOrangramAll(){

			$notify = request()->get('notify');
			//$cpnotify = request()->all();
			// dd($cpnotify);
			// $copyto = "";
			// if(($cpnotify['refnotify'] != "") && ($cpnotify['copynotify'] != "")){
			// 	$copyto = getParentOrgCopy($cpnotify['refnotify'],$cpnotify['copynotify']);
			// 	// dd($copyto);
			// }
            //dd($notify);
            $data = [];
            $data['page_title'] = "";
            $data['boardmember'] = DB::table('boardmember')->where('company_id',getCompanyID())->get()->all();
            $data['notify_id'] = DB::table('assessment_notifier')->where('company_id', getCompanyID())->get()->all();
            if($notify || $notify==0){
                if($notify != 0){
                    $data['as'] = DB::table('assessment_notifier')->where('id', $notify)->get()->first();
                }
                $data['data_users'] =   getORALL(1,$notify);
            }
            $this->cbView('forms.asview',$data);
        }

        //By the way, you can still create your own method in here... :)


	}
