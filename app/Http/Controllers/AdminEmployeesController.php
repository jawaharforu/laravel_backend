<?php namespace App\Http\Controllers;

use App\oranagram_structure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Session;
use Request;
use DB;
use CRUDBooster;
use App\Helpers\Helpers;

class AdminEmployeesController extends \crocodicstudio\crudbooster\controllers\CBController
{

    public function cbInit()
    {

        # START CONFIGURATION DO NOT REMOVE THIS LINE
        $this->title_field = "employee_name";
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
        $this->table = "employees";
        $this->show_numbering = TRUE;
        $this->btn_next = CRUDBooster::adminPath('qusasstojd');
        # END CONFIGURATION DO NOT REMOVE THIS LINE

        # START COLUMNS DO NOT REMOVE THIS LINE
        $this->col = [];

        $this->col[] = ["label" => "Employee Code", "name" => "employee_code"];
        $this->col[] = ["label" => "Employee Photo", "name" => "images", "image" => 1];
        $this->col[] = ["label" => "Employee Name", "name" => "employee_name"];
//			$this->col[] = ["label"=>"Employee Role","name"=>"employee_type","join"=>"employees_types,role_name"];
            $this->col[] = ["label"=>"Department Name","name"=>"parentid","join"=>"departments,name"];
			$this->col[] = ["label"=>"Organogram","name"=>"oranagram_id","join"=>"oranagram_structure,head_name"];

			$this->col[] = ["label"=>"Experience (Yrs)","name"=>"experience"];
			$this->col[] = ["label"=>"Designation","name"=>"designation"];
			$this->col[] = ["label"=>"Email","name"=>"email"];
			# END COLUMNS DO NOT REMOVE THIS LINE

			# START FORM DO NOT REMOVE THIS LINE
			$this->form = [];
			$this->form[] = ['label'=>'Employee Code','name'=>'employee_code','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide employee unique id'];
			$this->form[] = ['label'=>'Employee Photo','name'=>'images','type'=>'filemanager','width'=>'col-sm-10','placeholder'=>'Please provide employee photo'];
			$this->form[] = ['label'=>'Employee Name','name'=>'employee_name','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please Employee Name'];
			$this->form[] = ['label'=>'Employee Role','name'=>'employee_type','type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','dataenum' =>  '0|Others;1|MD;2|Admin;3|Common Receptionist', 'value'=>'0'];

			$this->form[] = ['label'=>'Employee Department','name'=>'parentid','type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','datatable'=>'departments,name','datatable_where'=>'company_id ='.getCompanyID().' OR company_id =0'];


            $this->form[] = ['label'=>'Hierarchy level','name'=>'oranagram_id','type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','datatable'=>'oranagram_structure,head_name','parent_select'    =>  'parentid','datatable_where'=>'company_id ='.getCompanyID()];

            $this->form[] = ['label'=>'Employee Category','name'=>'employee_level','type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','datatable'=>'employee_category,category','datatable_where'=>'company_id ='.getCompanyID()];

            $this->form[] = ['label'=>'Experience','name'=>'experience','type'=>'number','validation'=>'required|integer|min:0','width'=>'col-sm-10','placeholder'=>'Please provide Years of experience'];
            $this->form[] = ['label'=>'Relevant Experience','name'=>'relevant_exp','type'=>'number','validation'=>'required|integer|min:0','width'=>'col-sm-10','placeholder'=>'Please provide relevant years of experience'];
            $this->form[] = ['label'=>'Date of Joining','name'=>'date_of_join','type'=>'datetime','validation'=>'required|date','width'=>'col-sm-10'];
			$this->form[] = ['label'=>'Designation','name'=>'designation','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide designation'];
			$this->form[] = ['label'=>'Email','name'=>'email','type'=>'email','validation'=>'required|min:1|max:255|email|unique:employees','width'=>'col-sm-10','placeholder'=>'Please enter a valid email address'];
			$this->form[] = ['label'=>'Country Code','name'=>'country_code','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide country code Ex: IN (+91)'];
			$this->form[] = ['label'=>'Mobile','name'=>'mobile','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide mobile phone number'];
			$this->form[] = ['label'=>'Address','name'=>'address','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide residential address'];
			$this->form[] = ['label'=>'Status','name'=>'status','type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','dataenum' =>  '1|Active;0|In-Active'];
			$this->form[] = ['label'=>'Reference','name'=>'reference','type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','dataenum' =>  'external_reference|External;internal_employee_reference|Internal'];
			$this->form[] = ['label'=>'Chairman Ref','name'=>'chairman_ref','type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','dataenum' =>  '1|Yes;0|No'];
            $this->form[] = ['label'=>'CIM','name'=>'cim','type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','dataenum' =>  '1|Yes;0|No'];
            $this->form[] = ['label'=>'Assess Admin','name'=>'admin','type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','dataenum' =>  '1|Yes;0|No'];
            $this->form[] = ['label'=>'Assess Receptionist','name'=>'reception','type'=>'select','validation'=>'required|min:1|max:255','width'=>'col-sm-10','dataenum' =>  '1|Yes;0|No'];
            $this->form[] = ['label'=>'Nationality ID','name'=>'internationalid','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10','placeholder'=>'Please provide National Address proof details'];
            if(CRUDBooster::isSuperadmin()):
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> 0];
            else:
                $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> getCompanyID()];
            endif;
            //$query->where($this->table.'.company_id',getCompanyID());

			# END FORM DO NOT REMOVE THIS LINE

			# OLD START FORM
			//$this->form = [];
			//$this->form[] = ["label"=>"Type","name"=>"type","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Employee Code","name"=>"employee_code","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Employee Name","name"=>"employee_name","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Employee Type","name"=>"employee_type","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Experience","name"=>"experience","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Designation","name"=>"designation","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Email","name"=>"email","type"=>"email","required"=>TRUE,"validation"=>"required|min:1|max:255|email|unique:employees","placeholder"=>"Please enter a valid email address"];
			//$this->form[] = ["label"=>"Country Code","name"=>"country_code","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Mobile","name"=>"mobile","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Address","name"=>"address","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Status","name"=>"status","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
			//$this->form[] = ["label"=>"Company Id","name"=>"company_id","type"=>"select2","required"=>TRUE,"validation"=>"required|integer|min:0","datatable"=>"company,id"];
			//$this->form[] = ["label"=>"Organogramid","name"=>"organogramid_id","type"=>"select2","required"=>TRUE,"validation"=>"required|integer|min:0","datatable"=>"organogramid,id"];
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
				var titleText1 = document.getElementById('employee_code').placeholder;
				var titleText2 = document.getElementById('thumbnail-images').placeholder;
				var titleText3 = document.getElementById('employee_name').placeholder;
				var titleText4 = document.getElementById('experience').placeholder;
				var titleText5 = document.getElementById('relevant_exp').placeholder;

				var titleText6 = document.getElementById('designation').placeholder;
				var titleText7 = document.getElementById('country_code').placeholder;
				var titleText8 = document.getElementById('mobile').placeholder;
				var titleText9 = document.getElementById('address').placeholder;
				var titleText10 = document.getElementById('internationalid').placeholder;

				var titleText11 = document.getElementById('email').placeholder;

				$('#employee_code').attr('title', titleText1);
				$('#thumbnail-images').attr('title', titleText2);
				$('#employee_name').attr('title', titleText3);
				$('#experience').attr('title', titleText4);
				$('#relevant_exp').attr('title', titleText5);

				$('#designation').attr('title', titleText6);
				$('#country_code').attr('title', titleText7);
				$('#mobile').attr('title', titleText8);
				$('#address').attr('title', titleText9);
				$('#internationalid').attr('title', titleText10);

				$('#email').attr('title', titleText11);

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
            $pass = '123456789';
            $user_data = DB::table($this->table)->where('id',$id)->get()->first();

            DB::table('cms_users')->insert([
                'name'  =>  $user_data->employee_name,
                'email'  =>  $user_data->email,
                'password'  =>  Hash::make($pass),
                'id_cms_privileges'  =>  2,
                'company_id'        =>  $user_data->company_id
            ]);

            $data = [
                'name'      =>  $user_data->employee_name,
                'email'     =>  $user_data->email,
                'password'  =>  $pass,
                'link'      =>  url('/')
            ];
//            CRUDBooster::sendEmail(['to'=>$user_data->email,'data'=>$data,'template'=>'Employee']);
        CRUDBooster::redirect(purl('qusasstojd/?emp=' . $id), '', 'success');


    }

    /*
    | ----------------------------------------------------------------------
    | Hook for manipulate data input before update data is execute
    | ----------------------------------------------------------------------
    | @postdata = input post data
    | @id       = current id
    |
    */
    public function hook_before_edit(&$postdata, $id)
    {
        //Your code here

    }

    /*
    | ----------------------------------------------------------------------
    | Hook for execute command after edit public static function called
    | ----------------------------------------------------------------------
    | @id       = current id
    |
    */
    public function hook_after_edit($id)
    {
        //Your code here
        CRUDBooster::redirect(purl('qusasstojd/?emp=' . $id), '', 'success');
    }

    /*
    | ----------------------------------------------------------------------
    | Hook for execute command before delete public static function called
    | ----------------------------------------------------------------------
    | @id       = current id
    |
    */
    public function hook_before_delete($id)
    {
        //Your code here

    }

    /*
    | ----------------------------------------------------------------------
    | Hook for execute command after delete public static function called
    | ----------------------------------------------------------------------
    | @id       = current id
    |
    */
    public function hook_after_delete($id)
    {
        //Your code here

    }


    public function getAdassd()
    {
        $data = [];
        $data['page_title'] = "Add Employee";
        $data['org'] = oranagram_structure::all();
        $data['dept'] = DB::table('departments')->get();


        $this->cbView('forms.employee.add', $data);
    }


    //By the way, you can still create your own method in here... :)


}
