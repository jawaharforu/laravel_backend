<?php namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Session;
use Request;
use DB;
use CRUDBooster;

class AdminAssessmentsController extends \crocodicstudio\crudbooster\controllers\CBController {

    public function cbInit() {

        # START CONFIGURATION DO NOT REMOVE THIS LINE
        $this->title_field = "name";
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
        $this->table = "assessments";
        $this->show_numbering = TRUE;
        # END CONFIGURATION DO NOT REMOVE THIS LINE

        # START COLUMNS DO NOT REMOVE THIS LINE
        $this->col = [];

        $this->col[] = ["label"=>"Name","name"=>"name"];
        # END COLUMNS DO NOT REMOVE THIS LINE

        # START FORM DO NOT REMOVE THIS LINE
        $this->form = [];
        $this->form[] = ['label'=>'Name','name'=>'name','type'=>'text','validation'=>'required|string|min:3|max:70','width'=>'col-sm-10','placeholder'=>'Please provide the tye of assessment. Ex: Personality assessment or Managerial assessment'];
        $this->form[] = ['label'=>'Role','name'=>'role','type'=>'hidden','validation'=>'required|min:1|max:255','width'=>'col-sm-10'];

        if(CRUDBooster::isSuperadmin()):
            $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> 0];
        else:
            $this->form[] = ['label' => 'Company Id', 'name' => 'company_id', 'type' => 'hidden', 'value'=> getCompanyID()];
        endif;
        # END FORM DO NOT REMOVE THIS LINE

        # OLD START FORM
        //$this->form = [];
        //$this->form[] = ["label"=>"Name","name"=>"name","type"=>"text","required"=>TRUE,"validation"=>"required|string|min:3|max:70","placeholder"=>"You can only enter the letter only"];
        //$this->form[] = ["label"=>"Role","name"=>"role","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
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
        var titleText = document.getElementById('name').placeholder;
        $('#name').attr('title', titleText);
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

    public function getStartForm(){

        $data = [];

        $data['emp_data']   = DB::table('employees')->where('email', CRUDBooster::me()->email)->get()->first();

        $levelcheck = DB::table('employee_category')->where('id', $data['emp_data']->employee_level)->get()->first();

        if($levelcheck->mdevaulate == 0){
            $dates = DB::table('assessment_notifier')->where('company_id',getCompanyID())->where('a_type',1)->where('approve',1)->orderBy('id', 'desc')->get()->first();
        } else {
            $dates = DB::table('assessment_notifier')->where('company_id',getCompanyID())->where('a_type',1)->where('highlevel_approve',1)->orderBy('id', 'desc')->get()->first();
        }

        $extenddue = DB::table('dueextand')->where('notifi_id', $dates->id)->where('empid', $data['emp_data']->id)->get()->first();

        $now = Carbon::now();

        $start_date = Carbon::parse($dates->duration_from);
        $end_date = Carbon::parse($dates->due_date);
        if($extenddue){
            $dt = Carbon::parse($extenddue->extendeddate);
        } else {
            $dt = $end_date;
        }

        $data['page_title'] = 'Assessment Form';

        if($now->between($start_date,$end_date) || $now->between($start_date,$dt)) {

        $data['notify_id']      = $dates->id;


        $data['or_data']       = getAssesmentForms($data['emp_data']->oranagram_id, $dates->id);
        $data['oranagram_id']       =   $data['emp_data']->oranagram_id;

        $data['_self_assesment']       = DB::table('assessment_forms_data')->where('user_id',CRUDBooster::me()->id)->where('form_type','self')->where('notify_id',$dates->id)->get()->count();
        /*
        $data['_parent_assesment']     = DB::table('assessment_forms_data')->where('user_id',CRUDBooster::me()->id)->where('form_type','parent')->get()->count();
        $data['_child_assesment']       = DB::table('assessment_forms_data')->where('user_id',CRUDBooster::me()->id)->where('form_type','child')->get()->count();
        $data['_peer_assesment']       = DB::table('assessment_forms_data')->where('user_id',CRUDBooster::me()->id)->where('form_type','peer')->get()->count();
        */
        $option = request()->get('c_options');

        $t = request()->get('type');
        switch ($t){
            case "self":
                $data['form_name']  = "self_".$data['or_data']['my_questions']['empID'];
                $data['options']    =   $data['or_data']['my_questions']['question'];

                ;
                break;
            case "parent":
                $data['form_name']  = "parent_".$data['or_data']['parent_q'][$option]['empID'];
                $data['options']    =   $data['or_data']['parent_q'][$option]['question'];
                ;
                break;

            case "peer":
                try {
                    $data['form_name']  = "peer_".$data['or_data']['peer_data'][$option]['empID'];
                    $data['options']    =   $data['or_data']['peer_data'][$option]['question'];
                    ;
                } catch (Exception $e){
                    echo $e->getMessage();
                }



                break;
            case "child":
                try {
                    $data['form_name']  = "child_".$data['or_data']['child_q'][$option]['empID'];

                    $data['options']    =   $data['or_data']['child_q'][$option]['question'];


                } catch (Exception $e){
                    echo $e->getMessage();
                }

                break;

            case "general_sec":
                try {
                    $data['form_name']  = "gensec_".$data['or_data']['general_sec'][$option]['empID'];

                    $data['options']    =   $data['or_data']['general_sec'][$option]['question'];


                } catch (Exception $e){
                    echo $e->getMessage();
                }

                break;

            case "admin":
                try {
                    $data['form_name']  = "admin_".$data['or_data']['admin'][$option]['empID'];

                    $data['options']    =   $data['or_data']['admin'][$option]['question'];


                } catch (Exception $e){
                    echo $e->getMessage();
                }

                break;

            case "receptionist":
                try {
                    $data['form_name']  = "receptionist_".$data['or_data']['receptionist'][$option]['empID'];

                    $data['options']    =   $data['or_data']['receptionist'][$option]['question'];


                } catch (Exception $e){
                    echo $e->getMessage();
                }

                break;
            default:


        }

            $this->cbView('forms.as', $data);

        } else {
            $this->cbView('forms.as_sus', $data);
        }

    }

    public function getMdForm(){
        $data = [];

        $dates = DB::table('assessment_notifier')
        ->where('company_id',getCompanyID())
        ->where('a_type',2)
        ->where('approve',1)
        ->orderBy('id', 'desc')
        ->get()
        ->first();
        $now = Carbon::now();

        $start_date = Carbon::parse($dates->duration_from);
        $end_date = Carbon::parse($dates->due_date);

        $data['page_title'] = 'Assessment Form';

        if($now->between($start_date,$end_date)) {

        $data['notify_id']      = $dates->id;

        $data['emp_data']   = DB::table('boardmember')
        ->where('email', CRUDBooster::me()->email)
        ->get()
        ->first();
// dd($dates);
        $data['or_data']       = mdAssessmentForm($dates->id);
        $data['oranagram_id']       =   $data['emp_data']->oranagram_id;

        $data['_md_assesment']       = DB::table('assessment_forms_data')
        ->where('user_id',CRUDBooster::me()->id)
        ->where('form_type','md')
        ->where('notify_id',$dates->id)
        ->get()
        ->count();
        // dd($data);
        $option = request()->get('c_options');
// dd($option);
        $t = request()->get('type');
        // dd($t);
        switch ($t){
            case "md":
                foreach($data['or_data'] as $key => $value)
                $data['form_name']  = "md_".$data['or_data'][$key]['empID'];
                $data['options']    =   $data['or_data'][$key]['question'];
                // dd($data);
                break;
            default:
        }

// dd($data);
            $this->cbView('forms.mdas', $data);

        } else {
            $this->cbView('forms.as_sus', $data);
        }
    }

    public function postStartForm(){
        header("Content-Type: application/json");
        $post_data =    Request::all();



        for ($i=0; $i<count($post_data['question_id']);$i++){
            $data[] = [
                'question_id'       =>  $post_data['question_id'][$i],
                'skill_set_id'       =>  $post_data['skill_set_id'][$i],
                'scale_id'       =>  $post_data['scale_id'][$i],
                'answer'       =>  $post_data['answer'][$post_data['question_id'][$i]][0],
                'type_of_assesment'     =>  getAssessmentID($post_data['question_id'][$i]),
                'oranagram_id'          =>  request()->get('oranagram_id'),
                'user_id'          =>  CRUDBooster::myId(),
                'employee'              => explode('_',$post_data['type_of_assesment'])[1],
                'form_type'              => explode('_',$post_data['type_of_assesment'])[0],
                'notify_id'              => request()->get('notify_id'),
            ];
        }
        DB::table('assessment_forms_data')->insert($data);
        return redirect(purl('assessments/start-form'));

    }

    public function postMdForm(){
        header("Content-Type: application/json");
        $post_data =    Request::all();



        for ($i=0; $i<count($post_data['question_id']);$i++){
            $data[] = [
                'question_id'       =>  $post_data['question_id'][$i],
                'skill_set_id'       =>  $post_data['skill_set_id'][$i],
                'scale_id'       =>  $post_data['scale_id'][$i],
                'answer'       =>  $post_data['answer'][$post_data['question_id'][$i]][0],
                'type_of_assesment'     =>  getAssessmentID($post_data['question_id'][$i]),
                'oranagram_id'          =>  request()->get('oranagram_id'),
                'user_id'          =>  CRUDBooster::myId(),
                'employee'              => explode('_',$post_data['type_of_assesment'])[1],
                'form_type'              => explode('_',$post_data['type_of_assesment'])[0],
                'notify_id'              => request()->get('notify_id'),
            ];
        }
        DB::table('assessment_forms_data')->insert($data);
        return redirect(purl('assessments/md-form'));

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
        if(!CRUDBooster::isSuperadmin()):
            $query->where($this->table.'.company_id',getCompanyID());
        endif;
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

    }

    /*
    | ----------------------------------------------------------------------
    | Hook for execute command before delete public static function called
    | ----------------------------------------------------------------------
    | @id       = current id
    |
    */
    public function hook_before_delete($id) {

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

    }





    //By the way, you can still create your own method in here... :)


}
