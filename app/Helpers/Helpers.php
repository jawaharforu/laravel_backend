<?php
/**
 * Created by PhpStorm.
 * User: edwinsturt
 * Date: 28/08/18
 * Time: 1:00 PM
 */


function getTotalEmployees(){
    try {
        $e = DB::table('employees')->where('company_id',getCompanyID())->get()->all();
        return count($e);
    } catch (Exception $e){
        return 0;
    }

}
function getTotaldepartments(){
    try {
        $e = DB::table('departments')->where('company_id',getCompanyID())->get()->all();
        return count($e);
    } catch (Exception $e){
        return 0;
    }

}

function getTotalJD(){
    try {
        $e = DB::table('job_desc')->where('company_id',getCompanyID())->get()->all();
        return count($e);
    } catch (Exception $e){
        return 0;
    }

}
function getAssessmentsName($id){
    try {
        return DB::table('assessments')->where('id',$id)->value('name');
    } catch (Exception $e){
        return 0;
    }

}

function me(){
    return CRUDBooster::myId();
}

function getAssessmentID($id){
    return  DB::table('questions')
        ->where('id',$id)->value('assessments_type_id');
}

function getAssessmentType($id) {
    return DB::table('assessments')->where('id',$id)->value('name');
}

function getSkillSet($id) {
    return DB::table('skill_sets')->where('id',$id)->value('skill_set_name');
}

function getScaledata($id) {
    return DB::table('scale')->where('id',$id)->get()->first();
}

function getOrgChildCount($id){
    return DB::table('oranagram_structure')->where('parent_id',$id)->get()->count();
}

function getDeptName($id){
    return  DB::table('departments')
        ->where('id',$id)->value('name');
}

function getEmployeeData($id){
    return  DB::table('employees')->where('id',$id)->get()->first();
}

function getEmployeeByUserID($id){

    $d = DB::table('cms_users')->where('id',$id)->get()->first();
    $e = DB::table('employees')->where('id',$id)->value('employee_name');
    if($e){
        return $e;
    } else {
        return $d->name;
    }
}

function getEmployeeByUserIDFull($id){

    $d = DB::table('cms_users')->where('id',$id)->get()->first();
    $e = DB::table('employees')->where('email',$d->email)->get()->first();
    return $e;
}

function getEmployeeName($id){
    return  DB::table('employees')->where('id',$id)->value('employee_name');
}

function getEmployeeImage($id){
    $img = DB::table('employees')->where('id',$id)->value('images');
    if($img){
        return $img;
    } else {
        return url('uploads/man.png');
    }
}

function getEmployeeNameFromUser($id){
    return  DB::table('cms_users')->where('id',$id)->value('name');
}

function getQuestions($id){
    return  DB::table('questions')->where('id',$id)->value('question');
}

function getEmpCount($parent){
    return DB::table('employees')->where('oranagram_id',$parent)->get()->count();
}

function getWeightageValues($jdid, $assessmentid, $skillid) {
    $data =  DB::table('weight_age')->where('job_desc_id',$jdid)->where('assessments_type_id',$assessmentid)->where('skill_set_id',$skillid)->value('weightage');
    return $data == null? 1:$data;
}
function getEmployeeIDUsingOranagraID($id){

    return  DB::table('employees')
        ->where('oranagram_id',$id)
        ->where('is_global',0)->value('id');
}

function getEmployeeIDUsingOranagraIDExcluedMe($id,$emp){

    return  DB::table('employees')
        ->where('oranagram_id',$id)
        ->where('id',$emp)
        ->where('is_global',0)->value('id');
}

function getJobDescId($emp_id,$company_id){
    return DB::table('job_desc_assinged_employee')
        ->where('company_id',$company_id)
        ->where('employee_id',$emp_id)
        ->value('jdid_id');
}

function getAllQuestion($job_id){

    $data = DB::table('job_desc_mapped_questions')
        ->where('job_desc_id',$job_id)
        ->join('questions','questions.id','=','job_desc_mapped_questions.questionid_id')
        ->join('scale','scale.id','=','questions.scaleid_id')
        ->join('skill_sets','skill_sets.id','=','questions.skill_set_id')
        ->join('assessments','assessments.id','=','questions.assessments_type_id')
        ->get()
        ->all();

    $v = [];
    foreach ($data as $d){
        $v[str_slug($d->name)][]  = $d;
    }

    return $v;
}

function getJDQuestions($job_id) {
    return $data = DB::table('job_desc_mapped_questions')
        ->where('job_desc_id',$job_id)
        ->join('questions','questions.id','=','job_desc_mapped_questions.questionid_id')
        ->join('scale','scale.id','=','questions.scaleid_id')
        ->join('skill_sets','skill_sets.id','=','questions.skill_set_id')
        ->join('assessments','assessments.id','=','questions.assessments_type_id')
        ->get()
        ->all();
}
function getAssesmentForms($id, $assessment_id){


    $my =  DB::table('oranagram_structure')
        ->where('oranagram_structure.company_id',getCompanyID())
        ->join('employees','employees.oranagram_id','=','oranagram_structure.id')
        ->where('employees.email',CRUDBooster::me()->email)
        ->where('oranagram_structure.id',$id)->where('oranagram_structure.assessment_id',0)->get()->first();

    $my_parent =  DB::table('oranagram_structure')
        ->where('oranagram_structure.company_id',getCompanyID())
        ->join('employees','employees.oranagram_id','=','oranagram_structure.id')
        ->where('oranagram_structure.id',$my->parent_id)
        ->where('oranagram_structure.is_super','!=',1)
        ->where('oranagram_structure.assessment_id',0)
        ->where('employees.employee_type',0)
        ->get()->all();

    $peers =  DB::table('oranagram_structure')
        ->where('company_id',getCompanyID())
        ->where('parentid',$my->parentid)
        ->where('id','!=',$id)
        ->where('parent_id',$my_parent->id)
        ->where('assessment_id',0)
        ->get()->all();

    $my_levels =  DB::table('employees')
        ->where('oranagram_id',$id)
        ->where('email','!=',CRUDBooster::me()->email)
        ->get()->all();

    $my_childs =  DB::table('oranagram_structure')
        ->where('oranagram_structure.company_id',getCompanyID())
        ->join('employees','employees.oranagram_id','=','oranagram_structure.id')
        ->where('oranagram_structure.parent_id',$my->oranagram_id)
        ->where('oranagram_structure.assessment_id',0)
        ->where('employees.employee_type',0)
        ->get()->all();

    $my_gen_sec = DB::table('general_secretary')
        ->join('employees','employees.id','=','general_secretary.general_secretary')
        ->where('employees',$my->id)
        ->where('general_secretary.company_id',getCompanyID())
        ->select('general_secretary.*', 'employees.oranagram_id')
        ->get();

    // parentid  is Department ID
    $dept = DB::table('employees')->where('company_id',getCompanyID())->where('is_global',1)->where('parentid',$my->parentid)->get()->all();

    $commonemp = [2,3];
    $g_employee = DB::table('employees')->where('company_id',getCompanyID())->whereIn('employee_type', $commonemp)->get()->all();

    foreach ($dept as $d){
        $glob[] = fetchAllQ($d->oranagram_id);
    }
    foreach ($my_childs as $child){
        $empQ[] = fetchAllQ($child->oranagram_id, $child->id);
    }
    if(!empty($peers)) {
        foreach ($peers as $peer) {
            $peer_data[] = fetchAllQ($peer->id);
        }
    } else {
        $peer_data = [];
    }

    if(!empty($my_levels)) {
        foreach ($my_levels as $l) {
            $same_level[] = fetchAllQ($l->oranagram_id, $l->id);
        }
    } else {
        $same_level = [];
    }


    foreach ($my_parent as $p){
        $parent_q[] = fetchAllQ($p->oranagram_id, $p->id);
    }

    foreach ($my_gen_sec as $g){
        $gensec_q[] = fetchAllQ($g->oranagram_id, $g->general_secretary);
    }

    foreach ($g_employee as $ge){
        if($ge->employee_type == 2){
            $admin[] = fetchAllQ($ge->oranagram_id, $ge->id);
        }else{
            $receptionist[] = fetchAllQ($ge->oranagram_id, $ge->id);
        }
    }
    $data = [
        'child_q'    =>  $empQ,
        'parent_q'    =>  $parent_q,
        'my_questions'  =>  fetchAllQ($id,$my->id),
        //'global'        => $glob,
        'peer_data'        => array_merge($peer_data,$same_level),
        'general_sec' => $gensec_q,
        'admin' => ($my->admin==1)?$admin:'',
        'receptionist' => ($my->reception==1)?$receptionist:''
    ];
    return $data;
}

function mdAssessmentForm($assessment_id){
    $md_list =  DB::table('oranagram_structure')
    ->where('oranagram_structure.company_id',getCompanyID())
    ->join('employees','employees.oranagram_id','=','oranagram_structure.id')
    ->where('oranagram_structure.is_super',1)
    ->where('oranagram_structure.assessment_id',0)
    ->get()->all();
    // dd($md_list);
    foreach ($md_list as $p){
        $md_q[] = fetchAllQ($p->oranagram_id, $p->id,$p->employee_type);
    }

    // dd($md_q);
    return $md_q;
}

function fetchAllQ($my_parent,$employee_id = ''){
    if($employee_id){
        $parent_ID = getEmployeeIDUsingOranagraIDExcluedMe($my_parent,$employee_id);
    } else {
        $parent_ID = getEmployeeIDUsingOranagraID($my_parent);
    }
    $Parent_jobId = getJobDescId($parent_ID,getCompanyID());
    $parent_question = [
        'empID'     =>  $parent_ID,
        'question'  =>  getAllQuestion($Parent_jobId)
    ];
    return $parent_question;
}


function getChilds($parent){

    $data_users = [];

    $parent = DB::table('oranagram_structure')
        ->where('parent_id',$parent)
        ->where('company_id',getCompanyID())
        ->get()
        ->all();


    foreach ($parent as $d) {

            $data_users[] = [
                'name' => $d->head_name,
                'title' => getDeptName($d->parentid) . " " . "Total Employees(" . getEmpCount($d->id) . ")",
                'children' =>  getChilds($d->id),
            ];
    }

    return $data_users;
}

function getORALL($parent,$assessment_id,$companyID = FALSE){

    $data_users = [];

    if($companyID){
        $parent = DB::table('oranagram_structure')
            ->where('company_id',$companyID)
            ->where('parent_id',$parent)
            ->where('assessment_id',$assessment_id)
            ->get()
            ->all();
    } else {
        $parent = DB::table('oranagram_structure')
            ->where('is_super',1)
            ->where('company_id',getCompanyID())
            ->where('assessment_id',$assessment_id)
            ->get()
            ->all();
    }

    foreach ($parent as $d) {
        $data_users[] = [
            'name' => $d->head_name,
            'title' => getDeptName($d->parentid) . " " . "Total Employees(" . getEmpCount($d->id) . ")",
            'children' =>  getORALL($d->id,$assessment_id,$d->company_id),
        ];
    }
    return $data_users;
}

function getCompanyID(){
    return DB::table('cms_users')
    ->where('id',CRUDBooster::myId())
    ->value('company_id');
}

function getCompanyName(){
    return DB::table('cms_users')
    ->where('id',CRUDBooster::myId())
    ->value('name');
}

function getEmployeeID(){
    return DB::table('cms_users')
    ->where('id',CRUDBooster::myId())
    ->value('id');
}

function getEmployeePassword(){
    return DB::table('cms_users')
    ->where('id',CRUDBooster::myId())
    ->value('password');
}

function checkDataIsAdmin($table,$id){
    $data = DB::table($table)->where('id',$id)->value('company_id');
    if(CRUDBooster::isSuperadmin()){
        return TRUE;
    } elseif(getCompanyID() == $data){
        return TRUE;
    } else {
        return FALSE;
    }
}

function purl($link){
    return url(Config::get('crudbooster.ADMIN_PATH')."/".$link);
}


function BootBox($args = []){
    $data = '
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="info-box">
                    <span class="info-box-icon '.$args["color"].'"><img src="'.$args["icon"].'" /></span>
                    <div class="info-box-content">
                        <span class="info-box-text">'. $args["title"].'</span>
                        <span class="info-box-number" id="'. $args["id"].'" >
                            <a href="'. $args["url"].'">
                                    '. $args["text"].'
                            </a>
                        </span>
                    </div>
                    <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
            </div>
            ';
    return $data;
}



function getAssement($id, $notification_ID){

    $mself = DB::table('assessment_forms_data')
    ->where('employee',$id)
    ->where('form_type','self')
    ->where('notify_id',$notification_ID)
    ->get()
    ->all();
    if($mself){
        foreach ($mself as $s){
            $ev = DB::table('assessment_forms_data')
                ->where('employee',$id)
                ->where('question_id',$s->question_id)
                ->where('notify_id',$notification_ID)
                ->where('form_type','!=','self')->get()->all();
            $ans = 0;
            if($ev){
                $sc_ans = array();
                foreach ($ev as $qu){
                    $sc_ans[$qu->scale_id][] = $qu->answer;
                    //$ans = $ans + $qu->answer;
                }
                foreach ($sc_ans as $kk => $vv) {
                    $anse[] =  mean($vv);
                }
                $ans = mean($anse);

                DB::table('assessment_forms_data')->where('employee',$id)
                    ->where('form_type','self')
                    ->where('question_id',$s->question_id)
                    ->where('notify_id',$notification_ID)
                    ->update([
                    'evaluator' => $ans / count($ev),
                    'gap' => ($ans / count($ev)) - ($s->answer)
                ]);
            } else{
                //return false;
            }

        }
    } else {
        //return false;
    }
}

function convert_to_percentage($value) {
    return $value * 100;
}
// percentage checking
function percentage_of_amount($percentage, $totalWidth){
    return ($percentage / 100) * $totalWidth;
}

function percentage_from_amount($amount, $totalWidth){
    return ($amount / $totalWidth)*100;
}

/* new md score code starts here*/
function getorganogramid($assessment_id){
    $qs = DB::table('oranagram_structure')
    ->where('assessment_id',$assessment_id)
    ->where('is_super','1')
    ->select('id')
    ->get()->first();
    // dd($qs);

    return $qs->id;
}

function getemployee($organogram_id){
    $qs = DB::table('employees')
    ->where('oranagram_id',$organogram_id)
    ->select('id')
    ->get()->first();
    return $qs->id;
}

function getempname($empid){
    $name = DB::table('employees')
    ->where('id',$empid)
    ->select('employee_name')
    ->get()->first();
    // dd($name->employee_name);
    return $name->employee_name;
}

function calculatemdscore($employeeid,$organogram_id,$notify_id,$form_type){
    // dd($notify_id);
    $qs = DB::table('assessment_forms_data')
    ->where('employee',$employeeid)
    ->where('oranagram_id',$organogram_id)
    ->where('notify_id',$notify_id)
    ->where('form_type',$form_type)
    ->get()->all();
    $qid = array();
    foreach($qs as $key => $value){
        $qid[$key] = $value->question_id;
    }
    $i = 0;
    $a = array();
    // dd(array_unique($qid));
    foreach(array_unique($qid) as $keya => $valuea){
        $a[$keya]= getanswer($valuea,$employeeid,$organogram_id,$notify_id, $form_type);
    }
    $score = 0;
    $i = 0;

    foreach($a as $keyas => $valueas){
        $score += $valueas;
        $i++;
    }

    if($score != 0){
        $data = $score/$i;
    }
    return $data;
}

function getanswer($qid,$employeeid,$organogram_id,$notify_id, $form_type){
    $qs = DB::table('assessment_forms_data')
    ->where('question_id',$qid)
    ->where('employee',$employeeid)
    ->where('oranagram_id',$organogram_id)
    ->where('notify_id',$notify_id)
    ->where('form_type',$form_type)
    ->get()->all();
    $sum = 0;
    $i = 1;
    foreach($qs as $keyqs => $valueqs){
        $sum += $valueqs->answer;
        $i++;
    }
    return $sum/$i;
}
/* new md score code ends here*/

function getConsolidateScore($id,$notification_ID = "",$company_id){
    getAssement($id, $notification_ID);

    $mself = DB::table('assessment_forms_data')
    ->where('employee',$id)
    ->where('form_type','self')
    ->where('notify_id',$notification_ID)
    ->get()
    ->all();

    if($mself){

        try {


        $user_data = getEmployeeData($id);
        $JD_ID = getJobID($id);
        $data = [];
        $c_score = [];
        $calc = [];
        foreach ($mself as $s) {
            $data[$s->type_of_assesment][$s->skill_set_id]['self']    = ($data[$s->type_of_assesment][$s->skill_set_id]['self']) +  ($s->answer);
            $data[$s->type_of_assesment][$s->skill_set_id]['evalator']    = ($data[$s->type_of_assesment][$s->skill_set_id]['evalator']) +  ($s->evaluator);
            $data[$s->type_of_assesment][$s->skill_set_id]['gap']    =  (int)$data[$s->type_of_assesment][$s->skill_set_id]['evalator']  -  (int)$data[$s->type_of_assesment][$s->skill_set_id]['self'];
            $data[$s->type_of_assesment][$s->skill_set_id]['count']  = ($data[$s->type_of_assesment][$s->skill_set_id]['count']) +1;
        }


        foreach ($data as $key => $val) {
            foreach ($val as $k => $v) {
                $sel = $v['self'] / (5 * $v['count']);
                $eve = $v['evalator'] / (5 * $v['count']);
                $calc[$key][$k]['self']    = convert_to_percentage($sel);
                $calc[$key][$k]['evalator']    = convert_to_percentage($eve);
                $calc[$key][$k]['gap']    = ($calc[$key][$k]['evalator']) - ($calc[$key][$k]['self']);
                $calc[$key][$k]['weight_age']      = getWeightageValues($JD_ID, $key, $k);
                $calc[$key][$k]['cons_w_self']      = percentage_of_amount(getWeightageValues($JD_ID, $key, $k) , $calc[$key][$k]['self']); // Consolidated Self Score
           $calc[$key][$k]['cons_w_appraisal']      = percentage_of_amount(getWeightageValues($JD_ID, $key, $k) , $calc[$key][$k]['evalator']); // Consolidated Self Score

           $row = DB::table('global_settings')
           ->where('company_id',getCompanyID())
           ->where('notify_id',$notification_ID)
           ->get()
           ->first();

           if ($calc[$key][$k]['gap'] < -($row->tolerance)) {
               $calc[$key][$k]['remark'] = "CMTR";
           } else {
               $calc[$key][$k]['remark'] = "Ok";
           }

                DB::table('employee_full_score')->insert(
               [
                    'employee_id'           =>  $id      ,
                    'assessment_type_id'   =>   $key,
                    'skill_set_id'          =>  $k,
                    'self'  => $calc[$key][$k]['self'],
                    'evalator'  => $calc[$key][$k]['evalator'],
                    'gap' => $calc[$key][$k]['gap'],
                    'weight_age'    => $calc[$key][$k]['weight_age'],
                    'remark'    => $calc[$key][$k]['remark'],
                    'cons_w_self'            =>  $calc[$key][$k]['cons_w_self'],
                    'cons_w_appraisal'       =>  $calc[$key][$k]['cons_w_appraisal'],
                    'company_id'            => $company_id,
                    'notification_id'       =>  $notification_ID,
               ]
           );
            }
        }

        foreach ($calc as $c_w_score_key => $c_w_score_value) {
            foreach ($c_w_score_value as $k => $v) {
                $c_score[$c_w_score_key]['cons_self']           = $c_score[$c_w_score_key]['cons_self'] + $v['cons_w_self'];
                $c_score[$c_w_score_key]['cons_w_appraisal']    = $c_score[$c_w_score_key]['cons_w_appraisal'] + $v['cons_w_appraisal'];
                $c_score[$c_w_score_key]['weight_age']          = $c_score[$c_w_score_key]['weight_age'] + $v['weight_age'];
                $c_score[$c_w_score_key]['self_average']        = round(($c_score[$c_w_score_key]['cons_self']) / ($c_score[$c_w_score_key]['weight_age']), 2);
                $c_score[$c_w_score_key]['appraisal_average']   = round(($c_score[$c_w_score_key]['cons_w_appraisal']) / ($c_score[$c_w_score_key]['weight_age']), 2);
                $c_score[$c_w_score_key]['overall']   = round((($c_score[$c_w_score_key]['self_average']) + ($c_score[$c_w_score_key]['appraisal_average'])) / 2, 2);
            }
        }
        $overall_data = 0;
        $total_count = count($c_score);
        foreach ($c_score as $key => $v) {
            $overall_data = $overall_data + $v['overall'];
        }

        $final_score = round($overall_data/ $total_count, 2) * getGlobalSettings($id,$company_id,$notification_ID);

        DB::table('employee_finall_score')->insert(
        [
            'employee_id'           =>  $id      ,
            'score'   =>   round($final_score, 2),
            'company_id'            => $company_id,
            'notification_id'       =>  $notification_ID,
        ]
    );
        } catch (Exception $e){
            return false;
        }
    }

}

function getJobID($id){
    return DB::table('job_desc_assinged_employee')->where('employee_id',$id)->value('jdid_id');
}


function get_experience_markup($emp,$row) {
    if($emp->experience >= 0 && $emp->experience <= 5) {
        return $row->overworking_aquantance05;
    } else if($emp->experience >=6  && $emp->experience <= 10) {
        return $row->overworking_aquantance510;
    } else {
        return $row->overworking_aquantance10;
    }
}

function get_relevant_experience_markup($emp,$row) {
    if($emp->relevant_exp >= 0 && $emp->relevant_exp <= 5) {
        return $row->overprior_relevant05;
    } else if($emp->relevant_exp >=6  && $emp->relevant_exp <= 10) {
        return $row->overprior_relevant510;
    } else {
        return $row->overprior_relevant10;
    }
}

function dayfinder($date1, $date2){
    $now = time();
    $your_date = strtotime($date2);
    $datediff = $now - $your_date;
    return round($datediff / (60 * 60 * 24));
}

function working_acquaintance($emp, $row) {
    $users = DB::table('assessment_forms_data')->where('employee',$emp)->where('form_type','!=','self')->select('user_id')
    ->groupBy('user_id')->get();
    $mydata = getEmployeeData($emp);
    foreach($users as $user) {
        $otheruser = getEmployeeByUserIDFull($user->user_id);
        $arrdate[] = $otheruser->date_of_join;
    }
    foreach($arrdate as $d){
        $days[] =  dayfinder($mydate, $d);
    }
    $years_remaining = intval(mean($days) / 365);
    if($years_remaining >= 0 && $years_remaining <= 5) {
        return $row->controls_working_aquantance05;
    } else if($years_remaining >=6  && $years_remaining <= 10) {
        return $row->controls_working_aquantance510;
    } else {
        return $row->controls_working_aquantance10;
    }
}

function getGlobalSettings($id,$company_id,$notification_ID){

    $row = DB::table('global_settings')->where('company_id',$company_id)->where('notify_id',$notification_ID)->get()->first();
    $emp = DB::table('employees')->where('id',$id)->get()->first();
    $thy_pty = DB::table('thirdparty_evaluation')->where('employee_id',$id)->get()->first();

    if($emp->reference == 'internal_employee_reference') {
        $ref = $row->internal_employee_reference;
    } else if($emp->reference == 'external_reference') {
        $ref = $row->external_reference;
    } else  {
        $ref = 0;
    }

    if($thy_pty) {
        $typ = $row->thirdparty_evaluation;
    } else {
        $typ = 0;
    }

    if($emp->chairman_ref == 1) {
        $chref = $row->chairmans_reference;
    } else {
        $chref = 0;
    }

    if($emp->cim == 1) {
        $cim = $row->cim;
    } else {
        $cim = $row->nocim;
    }


    return  $ref +
        $row->managing_directors_descretion +
        $row->special_allowance +
        $cim +
        $typ + //getthirdpartyvalue($notification_ID, $id) +
        $chref +
        get_experience_markup($emp,$row) +
        working_acquaintance($emp->id, $row) +
        get_relevant_experience_markup($emp,$row);

}

function getEmployeFinalScore($id,$notify_id){
    return DB::table('employee_finall_score')
    ->where('employee_id',$id)
    ->where('company_id',getCompanyID())
    ->where('notification_id',$notify_id)
    ->value('score');
}


function post_curl($url, $post_data){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}


function GetScores(){
    return $d;
}

function asseessmentcheck($emtype,$empid,$notify_id) {
    // dd(CRUDBooster::me());
    // getScoreofMD(15,6);
    $out = DB::table('assessment_forms_data')
    ->where('user_id',CRUDBooster::me()->id)
    ->where('form_type',$emtype)
    ->where('employee',$empid)
    ->where('notify_id',$notify_id)
    ->get()->count();
    // dd($out);
    return $out;
}

function uploadJD($files){
    $rp = $_SERVER['DOCUMENT_ROOT'];
    if (isset($files["fileup"])){
        $target_path = $rp."/smk/resumes/";
        $fil = sha1(uniqid()) . basename( $files['fileup']['name']);
        $target_path = $target_path.$fil;
        $allowed = array('pdf','docx' ,'doc');
        $filename = $files['fileup']['name'];
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        if(in_array($ext,$allowed) ) {
        //echo $fil;
        if (move_uploaded_file($files["fileup"]["tmp_name"], $target_path)) {
            $data = array(
            'status' => 'success',
            'filename' => $fil
            );
            echo json_encode($data);
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
        } else {
            echo "Oops! Thanks for your interest";
        }
    }else{
        echo "No Files";
    }
}

function getAllQuestions($company_id) {
    return $data = DB::table('questions')
        ->join('scale','scale.id','=','questions.scaleid_id')
        ->join('skill_sets','skill_sets.id','=','questions.skill_set_id')
        ->join('assessments','assessments.id','=','questions.assessments_type_id')
        ->orWhere('questions.company_id',$company_id)->orWhere('questions.company_id',0)
        ->select('questions.*', 'scale.options','skill_sets.skill_set_name', 'assessments.name')
        ->orderBy('questions.id', 'desc')
        ->get();
}

function getassessmentscoreofemp($emp,$user_id,$notify_id,$question_id) {
    return DB::table('assessment_forms_data')
    ->where('employee',$emp)
    ->where('question_id',$question_id)
    ->where('notify_id',$notify_id)
    ->where('user_id',$user_id)
    ->value('answer');
}

function Stand_Deviation($arr)
{
    $num_of_elements = count($arr);

    $variance = 0.0;

            // calculating mean using array_sum() method
    $average = array_sum($arr)/$num_of_elements;

    foreach($arr as $i)
    {
        // sum of squares of differences between
                    // all numbers and means.
        $variance += pow(($i - $average), 2);
    }

    return (float)sqrt($variance/$num_of_elements);
}

function mean($array) {
    return $average = round( array_sum($array) / count($array) ,2);
}


function averageofallscore($emp) {
    $finalscore = DB::table('employee_finall_score')->where('employee_id',$emp)->where('company_id',getCompanyID())->get()->all();
    if(count($finalscore)==0){
        return false;
    }
    foreach($finalscore as $f) {
        $a[] = $f->score;
    }
    return mean($a);
}

function scoreof_assess($emp, $notify_id) {
    $score = DB::table('employee_finall_score')
    ->where('employee_id',$emp)
    ->where('notification_id',$notify_id)
    ->where('company_id',getCompanyID())
    ->value('score');
    // dd($score);
    return $score;
}

function overallfullsccore_assessment_type($emp) {
    $finalscore = DB::table('employee_full_score')->where('employee_id',$emp)->where('company_id',getCompanyID())->get()->all();
    if(count($finalscore)==0){
        return false;
    }
    $assess_self = array();
    $assess_eve = array();
    foreach ($finalscore as $f) {
        $assess_self[$f->assessment_type_id][] = $f->cons_w_self;
        $assess_eve[$f->assessment_type_id][] = $f->cons_w_appraisal;
    }
    $final_asses = array();
    foreach($assess_self as $k => $v) {
        $final_asses[$k] = (mean($assess_self[$k]) + mean($assess_eve[$k])) / 2;
    }
    return $final_asses;
}

function assesstsccore_assessment_type($emp, $notify_id) {
    $finalscore = DB::table('employee_full_score')->where('employee_id',$emp)->where('notification_id',$notify_id)->where('company_id',getCompanyID())->get()->all();
    if(count($finalscore)==0){
        return false;
    }
    $assess_self = array();
    $assess_eve = array();
    foreach ($finalscore as $f) {
        $assess_self[$f->assessment_type_id][] = $f->cons_w_self;
        $assess_eve[$f->assessment_type_id][] = $f->cons_w_appraisal;
    }
    $final_asses = array();
    foreach($assess_self as $k => $v) {
        $final_asses[$k] = (mean($assess_self[$k]) + mean($assess_eve[$k])) / 2;
    }
    return $final_asses;
}

function overallfullsccore_skill($emp) {
    $finalscore = DB::table('employee_full_score')->where('employee_id',$emp)->where('company_id',getCompanyID())->get()->all();
    if(count($finalscore)==0){
        return false;
    }
    $assess_self = array();
    $assess_eve = array();
    foreach ($finalscore as $f) {
        $assess_self[$f->assessment_type_id][$f->skill_set_id][] = $f->cons_w_self;
        $assess_eve[$f->assessment_type_id][$f->skill_set_id][] = $f->cons_w_appraisal;
    }
    $final_asses = array();
    foreach($assess_self as $k => $v) {
        foreach($v as $key => $value) {
            $final_asses[$k][$key] = array('self'=>mean($assess_self[$k][$key]) , 'eve'=>mean($assess_eve[$k][$key]));
        }
    }
    return $final_asses;
}

function assesstsccore_skill($emp, $notify_id) {
    $finalscore = DB::table('employee_full_score')->where('employee_id',$emp)->where('notification_id',$notify_id)->where('company_id',getCompanyID())->get()->all();
    if(count($finalscore)==0){
        return false;
    }
    $assess_self = array();
    $assess_eve = array();
    foreach ($finalscore as $f) {
        $assess_self[$f->assessment_type_id][$f->skill_set_id][] = $f->cons_w_self;
        $assess_eve[$f->assessment_type_id][$f->skill_set_id][] = $f->cons_w_appraisal;
    }
    $final_asses = array();
    foreach($assess_self as $k => $v) {
        foreach($v as $key => $value) {
            $final_asses[$k][$key] = array('self'=>mean($assess_self[$k][$key]) , 'eve'=>mean($assess_eve[$k][$key]));
        }
    }
    return $final_asses;
}

function overallfullsccore_gap($emp) {
    $finalscore = DB::table('employee_full_score')->where('employee_id',$emp)->where('company_id',getCompanyID())->get()->all();
    if(count($finalscore)==0){
        return false;
    }
    $assess_gap = array();
    foreach ($finalscore as $f) {
        $assess_gap[$f->assessment_type_id][$f->skill_set_id][] = $f->gap;
    }
    $final_asses = array();
    foreach($assess_gap as $k => $v) {
        foreach($v as $key => $value) {
            $gap = mean($assess_gap[$k][$key]);
            //if($gap != 0.0) {
                $final_asses[$k][$key][] = $gap;
            //}
        }
    }
    return $final_asses;
}

function assesstsccore_gap($emp, $notify_id) {
    $finalscore = DB::table('employee_full_score')->where('notification_id',$notify_id)->where('employee_id',$emp)->where('company_id',getCompanyID())->get()->all();
    if(count($finalscore)==0){
        return false;
    }
    $assess_gap = array();
    foreach ($finalscore as $f) {
        $assess_gap[$f->assessment_type_id][$f->skill_set_id][] = $f->gap;
    }
    $final_asses = array();
    foreach($assess_gap as $k => $v) {
        foreach($v as $key => $value) {
            $gap = mean($assess_gap[$k][$key]);
            //if($gap != 0.0) {
                $final_asses[$k][$key][] = $gap;
            //}
        }
    }
    return $final_asses;
}

function mypercentile($data,$percentile){
    if( 0 < $percentile && $percentile < 1 ) {
        $p = $percentile;
    }else if( 1 < $percentile && $percentile <= 100 ) {
        $p = $percentile * .01;
    }else {
        return "";
    }
    $count = count($data);
    $allindex = ($count-1)*$p;
    $intvalindex = intval($allindex);
    $floatval = $allindex - $intvalindex;
    sort($data);
    if(!is_float($floatval)){
        $result = $data[$intvalindex];
    }else {
        if($count > $intvalindex+1)
            $result = $floatval*($data[$intvalindex+1] - $data[$intvalindex]) + $data[$intvalindex];
        else
            $result = $data[$intvalindex];
    }
    return $result;
}


function CheckMyAssessments($id,$email,$companyID){

    $my =  DB::table('oranagram_structure')
        ->where('oranagram_structure.company_id',$companyID)
        ->join('employees','employees.oranagram_id','=','oranagram_structure.id')
        ->where('employees.email',$email)
        ->where('oranagram_structure.id',$id)->get()->first();

    $my_parent =  DB::table('oranagram_structure')
        ->where('oranagram_structure.company_id',$companyID)
        ->join('employees','employees.oranagram_id','=','oranagram_structure.id')
        ->where('oranagram_structure.id',$my->parent_id)
        ->where('oranagram_structure.is_super','!=',1)
        ->where('employees.employee_type',0)
        ->get()->all();

    $peers =  DB::table('oranagram_structure')
        ->where('company_id',$companyID)
        ->where('parentid',$my->parentid)
        ->where('id','!=',$id)
        ->where('parent_id',$my_parent->id)
        ->get()->all();

    $my_levels =  DB::table('employees')
        ->where('oranagram_id',$id)
        ->where('email','!=',$email)
        ->get()->all();

    $my_childs =  DB::table('oranagram_structure')
        ->where('oranagram_structure.company_id',$companyID)
        ->join('employees','employees.oranagram_id','=','oranagram_structure.id')
        ->where('oranagram_structure.parent_id',$my->oranagram_id)
        ->where('employees.employee_type',0)
        ->get()->all();

    $my_gen_sec = DB::table('general_secretary')
        ->join('employees','employees.id','=','general_secretary.general_secretary')
        ->where('employees',$my->id)
        ->where('general_secretary.company_id',$companyID)
        ->select('general_secretary.*', 'employees.oranagram_id')
        ->get();



    return count($my) + count($my_parent) + count($peers) + count($my_levels) + count($my_childs) + count($my_gen_sec);

}

function getCompletedAs($empID,$notify_id){

    return count(DB::table('assessment_forms_data')->where('employee',$empID)
    ->where('form_type','self')
    ->Orwhere('form_type','parent')
    ->Orwhere('form_type','child')
    ->Orwhere('form_type','peer')
    ->where('notify_id',$notify_id)->get()->first());

}


function GetDeptNamebyScore($id){
    $emp = getEmployeeData($id);
    return getDeptName($emp->parentid);
}

function getDeptEmployees($id) {
    $emps =  DB::table('employees')
    ->where('parentid',$id)
    ->get()->all();
    $employee = array();
    foreach($emps as $emp) {
        $employee[] = $emp->id;
    }
    return $employee;
}

function getAllEmployees($company) {
    $emps =  DB::table('employees')
    ->where('company_id',$company)
    ->get()->all();
    foreach($emps as $emp) {
        $employee[] = $emp->id;
    }
    return $employee;
}
function getAllCompanies() {
    $emps =  DB::table('companies')
    ->get()->all();
    foreach($emps as $emp) {
        $employee[] = $emp->id;
    }
    return $employee;
}



function getScoreOfEmployees($employees, $notifyid) {
    $score =  DB::table('employee_finall_score')
    ->where('notification_id',$notifyid)
    ->whereIn('employee_id', $employees)
    ->get()->all();
    if($score){
        foreach($score as $s) {
            $scores[$s->employee_id] = $s->score;
        }
        // dd($scores);
        $val = fetchEmployeeScore($employees, $notifyid);

        return array('average'=>mean($scores),'individual'=>$scores, 'maxscore'=>max($scores));
    } else {
        return array('average'=>0,'individual'=>0, 'maxscore'=>0);
    }

}

function empBaseAssessmentCtiticalzone($employees, $notifyid) {
    $criticalzone =  DB::table('employee_full_score')
    ->where('remark','CMTR')
    ->where('notification_id',$notifyid)
    ->whereIn('employee_id', $employees)
    ->get()->all();
    $users = DB::table('assessment_forms_data')->where('employee',$emp)->where('form_type','!=','self')->select('user_id')
    ->groupBy('user_id')->get();
    foreach($criticalzone as $s) {
        $critical_ass[$s->assessment_type_id] = getAssessmentType($s->assessment_type_id);
        $emps = DB::table('employee_full_score')
        ->where('remark','CMTR')
        ->where('notification_id',$notifyid)
        ->where('assessment_type_id',$s->assessment_type_id)
        ->whereIn('employee_id', $employees)
        ->select('employee_id')
        ->groupBy('employee_id')->get();
        $critical_emp[$s->assessment_type_id] = collect($emps)->toArray();
    }
    return array('categoty'=>$critical_ass,'value'=>$critical_emp);
}

function empBase_assessment_type_score($employees, $notify_id) {
    $finalscore = DB::table('employee_full_score')->whereIn('employee_id', $employees)->where('notification_id',$notify_id)->where('company_id',getCompanyID())->get()->all();
    if(count($finalscore)==0){
        return false;
    }
    $assess_self = array();
    $assess_eve = array();
    foreach ($finalscore as $f) {
        $assess_self[$f->assessment_type_id][] = $f->cons_w_self;
        $assess_eve[$f->assessment_type_id][] = $f->cons_w_appraisal;
    }
    $final_asses = array();
    $final_asses_full = array();
    foreach($assess_self as $k => $v) {
        $final_asses[$k] = (mean($assess_self[$k]) + mean($assess_eve[$k])) / 2;
        $final_asses_full[$k] = array('self'=>mean($assess_self[$k]), 'eve'=>mean($assess_eve[$k]));
    }
    foreach ($final_asses as $key => $value) {
        $ass[] = getAssessmentType($key);
        $assval[] = $value;
    }
    return array('categoty'=>$ass,'value'=>$assval,'fulldata'=>$final_asses_full);
}

function empBaseSkillCtiticalzone($employees, $notifyid) {
    return $employee_full_score = DB::table('employee_full_score')
                ->where('notification_id',$notifyid)
                ->whereIn('employee_id', $employees)
                ->where('remark', 'CMTR')
                ->where('company_id', getCompanyID())
                ->get()->all();
}

function getTrainingZone($employees, $notifyid){
    $skill = empBaseSkillCtiticalzone($employees, $notifyid);
    $cz = array();
    foreach($skill as $s) {
        $cz[$s->assessment_type_id][$s->skill_set_id] = $cz[$s->assessment_type_id][$s->skill_set_id] + 1;
    }
    $czfinal = array();
    foreach($cz as $k => $v) {
        arsort($v);
        $czfinal[$k] = $v;
    }
    return $czfinal;
}

function getAssesmentCount($id,$email){

    $my =  DB::table('oranagram_structure')
        ->where('oranagram_structure.company_id',getCompanyID())
        ->join('employees','employees.oranagram_id','=','oranagram_structure.id')
        ->where('employees.email',$email)
        ->where('oranagram_structure.id',$id)->get()->all();

    $my_parent =  DB::table('oranagram_structure')
        ->where('oranagram_structure.company_id',getCompanyID())
        ->join('employees','employees.oranagram_id','=','oranagram_structure.id')
        ->where('oranagram_structure.id',$my[0]->parent_id)
        ->where('oranagram_structure.is_super','!=',1)
        ->where('employees.employee_type',0)
        ->get()->all();

    $peers =  DB::table('oranagram_structure')
        ->where('company_id',getCompanyID())
        ->where('parentid',$my[0]->parentid)
        ->where('id','!=',$id)
        ->where('parent_id',$my_parent[0]->id)
        ->get()->all();

    $my_levels =  DB::table('employees')
        ->where('oranagram_id',$id)
        ->where('email','!=',$email)
        ->get()->all();

    $my_childs =  DB::table('oranagram_structure')
        ->where('oranagram_structure.company_id',getCompanyID())
        ->join('employees','employees.oranagram_id','=','oranagram_structure.id')
        ->where('oranagram_structure.parent_id',$my[0]->oranagram_id)
        ->where('employees.employee_type',0)
        ->get()->all();

    $my_gen_sec = DB::table('general_secretary')
        ->join('employees','employees.id','=','general_secretary.general_secretary')
        ->where('employees',$my[0]->id)
        ->where('general_secretary.company_id',getCompanyID())
        ->select('general_secretary.*', 'employees.oranagram_id')
        ->get()->all();
    $commonemp = [2,3];
    $g_employee = DB::table('employees')->where('company_id',getCompanyID())->whereIn('employee_type', $commonemp)->get()->all();
/*
    dd(count(collect($my)->toArray()),
    count(collect($my_parent)->toArray()),
    count(collect($peers)->toArray()),
    count(collect($my_levels)->toArray()),
    count(collect($my_childs)->toArray()),
    count(collect($my_gen_sec)->toArray()),
    count(collect($g_employee)->toArray())
);
*/

    $count  = 0;
    if($my) {
        $count = $count + count(collect($my)->toArray());
    }
    if($my_parent) {
        $count = $count + count(collect($my_parent)->toArray());
    }
    if($peers) {
        $count = $count + count(collect($peers)->toArray());
    }
    if($my_levels) {
        $count = $count + count(collect($my_levels)->toArray());
    }
    if($my_childs) {
        $count = $count + count(collect($my_childs)->toArray());
    }
    if($my_gen_sec) {
        $count = $count + count(collect($my_gen_sec)->toArray());
    }
    $admin = array();
    $receptionist = array();
    if($g_employee) {
        foreach ($g_employee as $ge){
            if($ge->employee_type == 2){
                $admin[] = $ge->id;
            }else{
                $receptionist[] = $ge->id;
            }
        }
        $count = ($my[0]->admin==1)? $count + count($admin):$count;
        $count = ($my[0]->reception==1)? $count + count($receptionist):$count;
    }

    return $count;
}

function completedAssessmentCount($emp,$email, $notify_id) {
    $u = DB::table('cms_users')->where('email',$email)->get()->first();
    $res = DB::table('assessment_forms_data')->where('user_id',$u->id)->where('notify_id',$notify_id)->get()->all();
    $g = array();
    foreach($res as $r){
        $g[$r->employee] = $r->employee;
    }
    return count($g);
}

function fetchEmployeeScore($emp,$notify_id) {
    $results = DB::select( DB::raw("SELECT  @a:=@a+1 rank,
    score,employee_id FROM    employee_finall_score,
    (SELECT @a:= 0) AS a WHERE notification_id=:notification_id and employee_id in (".implode(',',$emp).") ORDER BY score + 0 ASC"), array(
        'notification_id' => $notify_id,
    ));
    $ra = array();
    foreach($results as $r){
        $ra[] = $r->score;
    }
    return array('result'=>$results,'count'=>count($ra));
}

function rankCalculate($percentile, $count) {
    //Rank = Percentile / 100 * (number of items + 1)
    $rank = ($percentile / 100) * ($count + 1);
    return ceil($rank-1);
}

function remove_outliers($dataset, $magnitude = 1) {

    //$dataset = array(20.50, 80.30, 70.95, 15.25, 99.97, 85.56, 69.77);
    $count = count($dataset);
    $mean = array_sum($dataset) / $count; // Calculate the mean
    $deviation = sqrt(array_sum(array_map("sd_square", $dataset, array_fill(0, $count, $mean))) / $count) * $magnitude; // Calculate standard deviation and times by magnitude

    return array_filter($dataset, function($x) use ($mean, $deviation) { return ($x <= $mean + $deviation && $x >= $mean - $deviation); }); // Return filtered array of values that lie within $mean +- $deviation.
  }

  function sd_square($x, $mean) {
    return pow($x - $mean, 2);
  }

  function getappraisalvalue($category,$level,$column) {
    return DB::table('appraisal_percent')->where('category_id',$category)->where('level_id',$level)->where('company_id',getCompanyID())->value($column);
  }

  function levelbaseemployeelist($category,$notify,$range) {

      //->where('employee_level',$category)
    $empys = DB::table('employees')->where('company_id',getCompanyID())->where('employee_level',$category)->get()->all();
    $data = "<ul>";
    if($empys) {
        foreach($empys as $e) {
            $emp[] = $e->id;
        }
        $res = fetchEmployeeScore($emp,$notify);

        $data .= "<ul>";
        if ($res['count'] > 0) {
            $rng = explode('-',$range);
            $rank1 = rankCalculate($rng[0], $res['count']);
            $rank2 = rankCalculate($rng[1], $res['count']);

            $tp = $res['result'];
            for ($r = ($res['count']-1); $r >= 0 ; $r--) {
                $empdata = getEmployeeData($tp[$r]->employee_id);
                if($rng[0] && $rng[1]) {
                    if((int)$rank1 >= $tp[$r]->rank && (int)$rank2 <= $tp[$r]->rank){
                        $data .= "<li>" . $empdata->employee_name . "</li>";
                    }
                }
            }
            $data .= "</ul>";
        } else {
            $data .= 'No data found';
        }
    } else {
        $data .= 'No data found';
    }

    return $data;
  }

  function getBudgetName($id) {
    return DB::table('budget')->where('id',$id)->value('name_of_budget');
  }

  function getAssessmenttypeName($id) {
    return DB::table('assessment_notifier')->where('id',$id)->value('a_name');
  }

  function getTrainingName($id) {
    return DB::table('training_head')->where('id',$id)->value('name');
  }

  function getBudgetPlanUsingAssAndSkill($budgetid, $assessmenttype, $skillset) {
    return DB::table('budget_plans')->where('budget_parent',$budgetid)->where('assessments_type_id',$assessmenttype)->where('skill_sets',$skillset)->get()->first();
  }

  function getBudgetAmount($id) {
    return DB::table('budget')->where('id',$id)->value('amount');
  }

  function assigned_Budget_Amount($id){
        $budget_plans =  DB::table('budget_plans')
        ->where('budget_plans.budget_parent',$id)
        ->get()
        ->all();

        $budget =  DB::table('budget')
        ->where('budget.id',$id)
        ->select('budget.amount')
        ->get()
        ->all();

        $percentage = array();
        $amount = 0;
        $i = 0;
        foreach($budget as $a => $b){
            $amount = $b->amount;
        }

        foreach($budget_plans as $m => $n){
            // dd($n);
            $percentage[$i] = $n->percentage;
            $i++;
        }

        $assigned_amount = array_sum($percentage);
        //dd($amount);
        //dd($percentage);
        //dd($assigned_amount);
        return $assigned_amount;
}



function getEmployeeCategory($id) {
    return DB::table('employee_category')->where('id',$id)->value('category');
  }

function getneedtrainingtoemployee($notifyid, $assessment_type_id, $skill_set_id) {
    $employees = DB::table('employee_full_score')
                ->where('notification_id',$notifyid)
                ->where('assessment_type_id',$assessment_type_id)
                ->where('skill_set_id',$skill_set_id)
                ->where('remark', 'CMTR')
                ->where('company_id', getCompanyID())
                ->get()->all();
    $html = "<ul>";
    foreach($employees as $emp) {
        $html .= "<li>".getEmployeeName($emp->employee_id)."</li>";
    }
    return $html .= "</ul>";
}

function getthirdpartyvalue($assessment_id, $employee_id){
    $employees = DB::table('thirdparty_evaluation')
                ->where('assessments_id',$assessment_id)
                ->where('employee_id',$employee_id)
                ->value('percentage');
    return $employees;
}

function organogramDelete($id){
    $parents = DB::table('oranagram_structure')->where('parent_id',$id)->get()->all();
    foreach($parents as $p) {
        DB::table('oranagram_structure')->where('id',$p->id)->delete();
        organogramDelete($p->id);
    }
}

function getTrainers($assessment_id,$skill_set_id){


    $parents = DB::table('trainings')
    ->where('assessment_id',$assessment_id)
    ->where('skillset_id',$skill_set_id)
    ->get()->all();
    // dd($parents);
    return $parents;
}

function getAssessmentList(){
    $budget =  DB::table('assessments')->get()->all();
    return $budget;
}

function getSkillSetList(){
    $budget =  DB::table('skill_sets')->get()->all();
    return $budget;
}

function getBudgetYear($id){

    $budget =  DB::table('budget')
    ->where('budget.id',$id)
    ->select('budget.year')
    ->get()
    ->all();

    $year = "Budget Management of the Year ";

    foreach($budget as $a => $b){
        $year .= $b->year;
    }

    // dd($year);

    return $year;
}

function getGlobalSettingsThirdparty(){
    $value = DB::table('global_settings')
    ->value('thirdparty_evaluation');

    // dd($value);
    return $value;
}

function factoranalysisScore($emp, $notify){
    $empfact = array();
    $facrqus =  DB::table('employee_review_questions_list')
        ->where('company_id',getCompanyID())
        ->orderBy('id', 'asc')
        ->get()
        ->all();
        $indfact = array();
        $indfact[] = 'Employee';
    foreach ($emp as $fq) {
        $indfact[] = $fq->question;
    }
    $empfact[] = $indfact;
    foreach($emp as $e) {
        $facrscor =  DB::table('employee_satisfaction_scores')
        ->where('company_id',getCompanyID())
        ->where('employee_id',$e)
        ->orderBy('question_id', 'asc')
        ->get()
        ->all();
        if ($facrscor) {
            $indfact = array();
            $indfact[] = $e;
            foreach($facrscor as $f) {
                $indfact[] = $f->rating;
            }
        }
        $empfact[] = $indfact;
    }

    if (file_exists(storage_path('app/uploads/'.'ccompany_fact_'.getCompanyID().'_'.$notify.'.csv'))) {
        unlink(storage_path('app/uploads/'.'ccompany_fact_'.getCompanyID().'_'.$notify.'.csv'));
    }
    $excel = \App::make('excel');
    \Excel::create('ccompany_fact_'.getCompanyID().'_'.$notify, function($excel) use($scores) {
        $excel->sheet('score', function($sheet) use($scores) {
            $sheet->fromArray($empfact, null, 'A1', false, false);
        });
    })->store('csv', storage_path('app/uploads'));
    return url('uploads/'.'ccompany_fact_'.getCompanyID().'_'.$notify.'.csv');
}

function getParentOrgCopy($notify_id, $copyNorify_id) {
    $org =  DB::table('oranagram_structure')
        ->where('company_id',getCompanyID())
        ->where('assessment_id',$notify_id)
        ->where('is_super',1)
        ->orderBy('id', 'asc')
        ->get()->first();
    return copyOrgStru($notify_id, $copyNorify_id, $org->parent_id, uniqid('epes'));
}

function copyOrgStru($notify_id, $copyNorify_id, $parentid, $parentidCopy) {
    $orgs =  DB::table('oranagram_structure')
        ->where('company_id',getCompanyID())
        ->where('assessment_id',$notify_id)
        ->where('parent_id',$parentid)
        ->get()->all();
    if($orgs) {
        foreach($orgs as $org) {
            $id = DB::table('oranagram_structure')->insertGetId([
                'parentid'           => $org->parentid,
                'head_name'           => $org->head_name,
                'department_sub_id'  => $org->department_sub_id,
                'Designation'        => $org->Designation,
                'parent_id'          => $parentidCopy,
                'assessment_id'       => $copyNorify_id,
                'is_super'       => $org->is_super,
                'company_id'       => $org->company_id
            ]);
            copyOrgStru($notify_id, $copyNorify_id, $org->id, $id);
        }
    } else {
        return false;
    }
}
