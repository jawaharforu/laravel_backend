<?php

namespace App\Http\Controllers;

use App\Repo\FileConversion;
use CRUDBooster;
use Session;
use Request;
//use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Repo\FileConversion as WT;
use Illuminate\Support\Facades\Storage;
use App\Repo\HttpRequest;
use App;
use COM;
use Carbon\Carbon;

class MainController extends Controller
{
    public function index()
    {
        return view('welcome');
    }
    public function sub()
    {
        $data = [];
        $data['allCompanies'] = DB::table('companies')
//            ->select('companies.company_name','companies.industry','companies.no_of_employees','companies.company_contact','companies.created_at' )
            ->join('cms_users','cms_users.company_id','=','companies.id')
            ->get();
//        dd($data);
        return view('subscription',$data);
    }

    public function superAdmin()
    {
        $data = array();
        $dept_emp = getAllCompanies();
//dd($dept_emp);
        $data['dept_emp'] = $dept_emp;
        return view('dashboard', $data);
    }

    public function submitReviewRatings()
    {
        $dat = Request::all();
        $empid = getEmployeeByUserIDFull(getEmployeeID());
        //dd($dat);
        foreach ($dat['count'] as $a => $value) {
            $data[] = [
                'question_id' => $a,
                'rating' => $value,
                'company_id' => getCompanyID(),
                'employee_name' => getCompanyName(),
                'employee_id' => $empid->id,
                'notify_id' => $dat['notify_id']
            ];

        }
        //dd($data);
        DB::table('employee_satisfaction_scores')->insert($data);
        return redirect(purl('review'));
    }

    public function getCompanyDashBoard()
    {

        $companyID = DB::table('assessment_notifier')
            ->where('id', request()->get('notify_id'))
            ->where('company_id', getCompanyID())
            ->value('company_id');
        if ($companyID) {
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

            return view('company', compact('employee_finall_score', 'employee_full_score', 'companyID', 'horizontalBar', 'fdata', 'flabel', 'as', 'userNotCompleted'));
        } else {
            CRUDBooster::redirect(purl(''), 'Assessment ID Not Exists', 'info');
        }
    }

    public function sendMail()
    {

    }

    public function asses($id)
    {

        $data = DB::table('oranagram_structure')
            ->where('parentid', $id)
            ->Orwhere('department_sub_id', $id)
            ->get()
            ->all();

//        dd($data);
    }

    public function file_totext(Request $request)
    {

        $custom_file_name = time() . str_random(14) . "." . $request->file('file')->getClientOriginalExtension();
        $file = $request->file('file')->storeAs('test', $custom_file_name);
        $path = storage_path() . "/app/test/" . $custom_file_name;

        $WT = new FileConversion($path);
        $output = $WT->convertToText();
        return $output;
    }

    public function getWeights()
    {
        $data = DB::table('job_desc_mapped_questions')
            ->join('questions', 'questions.id', '=', 'job_desc_mapped_questions.questionid_id')
            ->where('job_desc_mapped_questions.job_desc_id', 7)
            ->get(['assessments_type_id', 'skill_set_id'])->unique();

        $v = [];
        foreach ($data as $d) {
            $v[$d->assessments_type_id][] = $d->skill_set_id;
        }

        dd($v);
    }


    public function charts()
    {
        return view('charts');
    }

    public function department()
    {
        return view('dep');
    }

    public function getWeightsList($jdid)
    {
        $data = DB::table('job_desc_mapped_questions')
            ->join('questions', 'questions.id', '=', 'job_desc_mapped_questions.questionid_id')
            ->where('job_desc_mapped_questions.job_desc_id', $jdid)
            ->get(['assessments_type_id', 'skill_set_id'])->unique();

        $v = [];
        foreach ($data as $d) {
            $v[$d->assessments_type_id][] = $d->skill_set_id;
        }
        $html = "";
        $html .= "<input type='hidden' value='" . $jdid . "' name='jdid'/>";
        foreach ($v as $key => $value) {
            $html .= "
                <h3>" . getAssessmentType($key) . "</h3>";
            foreach ($value as $skill) {
                $weg = getWeightageValues($jdid, $key, $skill);
                if (empty($weg) || $weg == null) {
                    $we = DB::table('skill_sets')->where('id', $skill)->value('weightage');
                    $w = (empty($we)) ? 1 : $we;
                } else {
                    $w = $weg;
                }
                $html .= "<div class='form-group'>
                        <label class='control-label'>" . getSkillSet($skill) . "</label>
                        <input type='text' name='skillset[" . $key . "][" . $skill . "]' value='" . $w . "' />
                    </div>
                ";
            }
        }
        $html .= "<input type='submit' value='submit' class='btn btn-success' />";
        return $html;
    }

    public function SalimPage()
    {
        // dd("test");
        return view('home');
    }


    public function dashboard()
    {


        if (!Session::get('admin_id')) {

            return redirect(url(config('crudbooster.ADMIN_PATH') . "/login"));
        }
        if (CRUDBooster::myPrivilegeId() == 2) {
            return redirect(url(config('crudbooster.ADMIN_PATH') . "/empdash"));
        }
        if (CRUDBooster::myPrivilegeId() == 4) {
            return view('emp');
        }
        if (CRUDBooster::myPrivilegeId() == 3) {
            return view('home');
        }
        if (CRUDBooster::isSuperadmin()) {
            return view('home');
        }


    }

    public function getEmpList($notify_id, $company_id)
    {


        DB::table('employee_finall_score')->where('notification_id', $notify_id)->delete();
        DB::table('employee_full_score')->where('notification_id', $notify_id)->delete();
        $employes = DB::table('employees')
            ->where('company_id', $company_id)
            ->where('employee_type', '!=' ,2)
            ->get()->all();
        foreach ($employes as $e) {
            getConsolidateScore($e->id, $notify_id, $company_id);
        }
        return DB::table('employee_finall_score')
            ->join('employees', 'employees.id', '=', 'employee_finall_score.employee_id')
            ->where('employees.company_id', $company_id)->where('notification_id', $notify_id)
            ->get(['employees.id', 'employee_code', 'employee_name', 'score'])->all();

    }

    public function review()
    {
        $data = [];
        $empid = getEmployeeByUserIDFull(getEmployeeID());
        /* Check if the user has already submited the feedback*/
        $fb_submit = DB::table('employee_satisfaction_scores')
            ->where('employee_id', '=', $empid->id)->exists();
        $data['emp_data']   = DB::table('employees')
        ->where('email', CRUDBooster::me()->email)
        ->get()
        ->first();

        $levelcheck = DB::table('employee_category')
        ->where('id', $data['emp_data']->employee_level)
        ->get()
        ->first();

        if($levelcheck->mdevaulate == 0){
            $dates = DB::table('assessment_notifier')
            ->where('company_id',getCompanyID())
            ->where('a_type',1)
            ->where('approve',1)
            ->orderBy('id', 'desc')
            ->get()
            ->first();
        } else {
            $dates = DB::table('assessment_notifier')
            ->where('company_id',getCompanyID())
            ->where('a_type',1)
            ->where('highlevel_approve',1)
            ->orderBy('id', 'desc')
            ->get()
            ->first();
        }

        $now = Carbon::now();

        $start_date = Carbon::parse($dates->duration_from);
        $end_date = Carbon::parse($dates->due_date);

        //dd(getEmployeeID());
        if ($fb_submit) {
            return view('review', $data);
        } else if ($now->between($start_date,$end_date)) {
            $data['notify_id']      = $dates->id;
            $data['questions'] = DB::table('employee_review_questions_list')->select('id', 'company_id', 'question')
                ->where('company_id', '=', getCompanyID())
                ->get();
            return view('review', $data);
        } else {
            return view('review', $data);
        }
        /* Gett all questions from DB*/

    }

    public function myTestAddToLog()
    {
        \LogActivity::addToLog('My Testing Add To Log.');
        dd('log insert successfully.');
    }

    public function logActivity()
    {

        $logs = \LogActivity::logActivityLists();
        return view('logActivity', compact('logs'));
    }

    public function getEmployeScore()
    {
        $emp = request()->get('emp');

        $full = request()->get('full');
        $notify_id = request()->get('notify_id');
        $data = [];
        $data['notifyid'] = $notify_id;
        $data['page_title'] = 'Assessment Form';
        $data['notify_id'] = DB::table('assessment_notifier')->where('company_id', getCompanyID())->get()->all();
        if (!empty($emp) && $full == "n") {
            $empscores = DB::table('employee_full_score')->where('company_id', getCompanyID())->where('employee_id', $emp)->where('notification_id', $notify_id)->get()->all();
            $fullarray = [];
            foreach ($empscores as $s) {
                $fullarray[$s->assessment_type_id][] = $s;
            }
            $data['emp_full_score'] = $fullarray;
            $data['empdetail'] = getEmployeeData($emp);
            $data['full'] = 'N';
        } else if (!empty($emp) && $full == "y") {
            $empselfscores = DB::table('assessment_forms_data')->where('employee', $emp)->where('form_type', 'self')->where('notify_id', $notify_id)->get()->all();
            $fullarray = [];
            foreach ($empselfscores as $s) {
                $empotherscores = DB::table('assessment_forms_data')->where('employee', $emp)->where('question_id', $s->question_id)->where('notify_id', $notify_id)->get()->all();
                $fullarray[$s->question_id][] = $empotherscores;
            }
            $data['emp_list'] = DB::table('assessment_forms_data')->where('employee', $emp)->select('user_id')
                ->groupBy('user_id')->get();

            $data['que_list'] = DB::table('assessment_forms_data')->where('employee', $emp)->select('question_id')
                ->groupBy('question_id')->get();
            foreach ($data['que_list'] as $qq) {
                $que[] = $qq->question_id;
            }
            $data['questions'] = DB::table('questions')
            ->whereIn('id', $que)
            ->get()
            ->all();
            $data['emp_full_score'] = $fullarray;
            $data['empdetail'] = getEmployeeData($emp);
            $data['full'] = 'Y';
        }
        return view('assessmentscore', $data);
    }

    public function getmdScore()
    {
        $notify_id = request()->get('assessment_form');
        $data = [];
        $data['notifyid'] = $notify_id;
        $data['page_title'] = 'Assessment Form';
        $data['notify_id'] = DB::table('assessment_notifier')
        ->where('company_id', getCompanyID())
        ->get()
        ->all();
        // dd(getCompanyID());
        if (!empty($notify_id)) {
            $data['notifyid'] = $notify_id;

            $c = getorganogramid($notify_id);
            $d = getemployee($c);
            $e = calculatemdscore($d,$c,$notify_id,'md');
            $f = calculatemdscore($d,$c,$notify_id,'self');

            $data['mdscore'] = $e;
            $data['mdselfscore'] = $f;
        }

        // $data = [];
        $data['assessid'] = request()->get('assessid');
        $data['emp_data'] = DB::table('employees')
        ->where('email', CRUDBooster::me()->email)
        ->get()->first();
        if ($data['emp_data']->employee_type == 1) {
            $data['notify_id'] = DB::table('assessment_notifier')
            ->where('company_id', getCompanyID())
            ->where('a_type', 2)
            ->get()->all();
        } else {
            $data['notify_id'] = DB::table('assessment_notifier')
            ->where('company_id', getCompanyID())
            ->where('a_type', 1)
            ->get()->all();
        }


        if (empty($data['assessid']) || $data['assessid'] == 'all') {
            $data['overallscore'] = averageofallscore($data['emp_data']->id);
            $data['assess_score'] = overallfullsccore_assessment_type($data['emp_data']->id);
            $data['skill_score'] = overallfullsccore_skill($data['emp_data']->id);
            $data['gap_score'] = overallfullsccore_gap($data['emp_data']->id);
        } else {
            $data['overallscore'] = scoreof_assess($data['emp_data']->id, $data['assessid']);
            $data['assess_score'] = assesstsccore_assessment_type($data['emp_data']->id, $data['assessid']);
            $data['skill_score'] = assesstsccore_skill($data['emp_data']->id, $data['assessid']);
            $data['gap_score'] = assesstsccore_gap($data['emp_data']->id, $data['assessid']);
        }
        if ($data['assess_score'] != false) {
            foreach ($data['assess_score'] as $key => $value) {
                $ass[] = getAssessmentType($key);
                $assval[] = $value;
            }
        }
        $data['assess_cate'] = $ass;
        $data['assess_value'] = $assval;
        if ($data['skill_score'] != false) {
            foreach ($data['skill_score'] as $k => $v) {
                foreach ($v as $kk => $vv) {
                    $data['fullskill'][$k]['name'][] = getSkillSet($kk);
                    $data['fullskill'][$k]['self'][] = $vv['self'];
                    $data['fullskill'][$k]['eve'][] = $vv['eve'];
                }
            }
        }
        if ($data['gap_score'] != false) {
            foreach ($data['gap_score'] as $k => $v) {
                foreach ($v as $kk => $vv) {
                    $data['fullgap'][$k]['name'][] = getSkillSet($kk);
                    $data['fullgap'][$k]['gap'][] = $vv[0];
                }
            }
        }

        // dd($data);
        return view('mdscore',$data);
    }

    public function getHelpPopUp($page)
    {

        switch ($page) {
            case 'global_settings':
                $page = "asdfasd";
                break;
            case 'global_settings123':
                $page = "123124";
                break;
            case 'assessment_notifier':
                $page = "asdfasd";
                break;
        }
        $html = '
        <a id="weightagehelper" role="button" class="btn btn-default pull-right costumModal22">
                Help
        </a>
         <div class="wrapper-model-slide">
 <div id="costumModals" class="costumModals">
        <div>
            <div>
                <div>
                    <button type="button" class="close button-id-close">
                        ×
                    </button>
                </div>
                <div><h3>Global Settings</h3>
                    <p>
                        The Description about the page will come here!
                    </p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default close button-id-close" data-dismiss="modal" aria-hidden="true">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
 </div>
        ';
        return $html;
    }
    public function employeDashboard()
    {
        $data = [];
        $data['assessid'] = request()->get('assessid');
        $data['emp_data'] = DB::table('employees')
        ->where('email', CRUDBooster::me()->email)
        ->get()->first();
        if ($data['emp_data']->employee_type == 1) {
            $data['notify_id'] = DB::table('assessment_notifier')
            ->where('company_id', getCompanyID())
            ->where('a_type', 2)
            ->get()->all();
        } else {
            $data['notify_id'] = DB::table('assessment_notifier')
            ->where('company_id', getCompanyID())
            ->where('a_type', 1)
            ->get()->all();
        }

        if (empty($data['assessid']) || $data['assessid'] == 'all') {
            $data['overallscore'] = averageofallscore($data['emp_data']->id);
            $data['assess_score'] = overallfullsccore_assessment_type($data['emp_data']->id);
            $data['skill_score'] = overallfullsccore_skill($data['emp_data']->id);
            $data['gap_score'] = overallfullsccore_gap($data['emp_data']->id);
        } else {
            $data['overallscore'] = scoreof_assess($data['emp_data']->id, $data['assessid']);
            $data['assess_score'] = assesstsccore_assessment_type($data['emp_data']->id, $data['assessid']);
            $data['skill_score'] = assesstsccore_skill($data['emp_data']->id, $data['assessid']);
            $data['gap_score'] = assesstsccore_gap($data['emp_data']->id, $data['assessid']);
        }
        if ($data['assess_score'] != false) {
            foreach ($data['assess_score'] as $key => $value) {
                $ass[] = getAssessmentType($key);
                $assval[] = $value;
            }
        }
        $data['assess_cate'] = $ass;
        $data['assess_value'] = $assval;
        if ($data['skill_score'] != false) {
            foreach ($data['skill_score'] as $k => $v) {
                foreach ($v as $kk => $vv) {
                    $data['fullskill'][$k]['name'][] = getSkillSet($kk);
                    $data['fullskill'][$k]['self'][] = $vv['self'];
                    $data['fullskill'][$k]['eve'][] = $vv['eve'];
                }
            }
        }
        if ($data['gap_score'] != false) {
            foreach ($data['gap_score'] as $k => $v) {
                foreach ($v as $kk => $vv) {
                    $data['fullgap'][$k]['name'][] = getSkillSet($kk);
                    $data['fullgap'][$k]['gap'][] = $vv[0];
                }
            }
        }
        return view('employedashboard', $data);
    }

    public function checkingpercentail()
    {
        //$scores = array(22.3, 32.4, 12.1, 54.6, 76.8, 87.3, 54.6, 45.5, 87.9);
        //echo mypercentile($scores, 100);
        echo working_acquaintance(32, 27);
    }

    public function deptDashboard()
    {
        $notify = request()->get('notify');
        $data = array();
        if ($notify) {
            $data['as'] = DB::table('assessment_notifier')->where('id', $notify)->get()->first();
            $data['departments'] = DB::table('departments')->where('company_id', getCompanyID())->get()->all();
            $dept = request()->get('dept');
            if ($dept) {
                $data['dept'] = $dept;
                $dept_emp = getDeptEmployees($dept);
                if (count($dept_emp) > 0) {
                    $data['dept_emp'] = $dept_emp;
                    $score = getScoreOfEmployees($dept_emp, $notify);
                    if ($score['average'] != '') {
                        $empallscore = $score['individual'];
                        $feedbackquestions = DB::table('employee_review_questions_list')->select('id', 'company_id', 'question')
                ->where('company_id', '=', getCompanyID())
                ->get();
                $feedheader = array('Employee');
                foreach($feedbackquestions as $feedb) {
                    $feedheader[] = $feedb->question;
                }
                $feedscore = array();
                $feedscore[] = $feedheader;
                foreach($dept_emp as $em){
                    $fbarray = array($em);
                    foreach($feedbackquestions as $feedbs) {
                        $fbscore = DB::table('employee_satisfaction_scores')
                ->where('employee_id', $em)->where('question_id', $feedbs->id)->where('notify_id', $notify)->value('rating');
                        $fbarray[] = $fbscore;
                    }
                    $feedscore[] = $fbarray;
                }
                ////////////////////
                if (file_exists(storage_path('app/uploads/'.'ccompany_fb_'.getCompanyID().'_'.$notify.'.csv'))) {
                    unlink(storage_path('app/uploads/'.'ccompany_fb_'.getCompanyID().'_'.$notify.'.csv'));
                }
                $excel = \App::make('excel');
                \Excel::create('ccompany_fb_'.getCompanyID().'_'.$notify, function($excel) use($feedscore) {
                    $excel->sheet('score', function($sheet) use($feedscore) {
                        $sheet->fromArray($feedscore);
                    });
                })->store('csv', storage_path('app/uploads'));
                $fbscore_file = url('uploads/'.'ccompany_fb_'.getCompanyID().'_'.$notify.'.csv');
                $data['fbscore_file'] = $fbscore_file;
                //////////////////////////
                        if (count($empallscore) <= 10) {
                            $data['empallscore'] = $score['individual'];
                        } else {

                            $unsortallscores = DB::table('employee_finall_score')
                                ->where('notification_id', $notify)
                                ->where('company_id', getCompanyID())
                                ->get()->all();

                            $allscores = DB::select( DB::raw("SELECT  @a:=@a+1 rank,
                                score,employee_id FROM    employee_finall_score,
                                (SELECT @a:= 0) AS a WHERE notification_id=:notification_id AND employee_id IN (".implode(',',$dept_emp).") ORDER BY score + 0 ASC"), array(
                                    'notification_id' => $notify,
                                ));
                            /*
                            $d = "";
                            foreach ($allscores as $sck => $scv) {
                                $d .= "$scv->employee_id\t{$scv->score}\r\n";
                            }
                            */
                            $jj = 1;
                            $scores = array();
                            foreach ($allscores as $sck => $scv) {
                                $scores[] = array($jj, $scv->score);
                                $jj++;
                            }
                            if (file_exists(storage_path('app/uploads/'.'ccompany_dept'.$dept.'_'.getCompanyID().'_'.$notify.'.csv'))) {
                                unlink(storage_path('app/uploads/'.'ccompany_dept'.$dept.'_'.getCompanyID().'_'.$notify.'.csv'));
                            }
                            $excel = \App::make('excel');
                            \Excel::create('ccompany_dept'.$dept.'_'.getCompanyID().'_'.$notify, function($excel) use($scores) {
                                $excel->sheet('score', function($sheet) use($scores) {
                                    $sheet->fromArray($scores);
                                });
                            })->store('csv', storage_path('app/uploads'));
                            $score_file = url('uploads/'.'ccompany_dept'.$dept.'_'.getCompanyID().'_'.$notify.'.csv');
                            $data['score_file'] = $score_file;
                            if (count($empallscore) > 30) {
                                $data['check'] = "normal";
                                $data['empallscore'] = $score['individual'];
                            } else if (count($empallscore) > 10 && count($empallscore) <= 30) {
                                $data['check'] = "tdist";
                                $data['empallscore'] = $score['individual'];
                            }
                        }
                        $data['fullscore'] = $score['average'];
                        $data['maxscore'] = $score['maxscore'];
                        $data['criticalzone'] = empBaseAssessmentCtiticalzone($dept_emp, $notify);
                        $data['finalscore'] = empBase_assessment_type_score($dept_emp, $notify);
                        $data['criticalzone_skill'] = empBaseSkillCtiticalzone($dept_emp, $notify);
                        $data['trainingzone_skill'] = getTrainingZone($dept_emp, $notify);

                    } else {
                        $data['nodata'] = "No Data Available!";
                    }
                } else {
                    $data['nodata'] = "No Data Available!";
                }
            }
            //fetchEmployeeScore($notify);
            return view('departmentdashboard', $data);
        } else {
            $data['empty'] = 'yes';
            return view('departmentdashboard', $data);
        }
    }

    public function companyDashboard()
    {
        $notify = request()->get('notify');
        $data = array();
        if ($notify) {
            $data['as'] = DB::table('assessment_notifier')->where('id', $notify)->get()->first();
            $dept_emp = getAllEmployees(getCompanyID());
            $data['dept_emp'] = $dept_emp;
            $score = getScoreOfEmployees($dept_emp, $notify);
            // dd($score);
            $notifydata = DB::table('assessment_notifier')
            // ->where('company_id', getCompanyID())
            ->where('id', '!=', $notify)
            ->where('a_type', 1)
            ->get()->all();
            // dd($notifydata);
            $assessment_array = array();
            foreach($notifydata as $ass) {
                $assessment_array[] = array($ass->a_name, getScoreOfEmployees($dept_emp, $ass->id));
            }

            $data['previousassesment'] = $assessment_array;
            // dd($data);
            if ($score['average'] != '') {
                $empallscore = $score['individual'];
                $feedbackquestions = DB::table('employee_review_questions_list')->select('id', 'company_id', 'question')
                ->where('company_id', '=', getCompanyID())
                ->get();
                $feedheader = array('Employee');
                foreach($feedbackquestions as $feedb) {
                    $feedheader[] = $feedb->question;
                }
                $feedscore = array();
                $feedscore[] = $feedheader;
                foreach($dept_emp as $em){
                    $fbarray = array($em);
                    foreach($feedbackquestions as $feedbs) {
                        $fbscore = DB::table('employee_satisfaction_scores')
                ->where('employee_id', $em)->where('question_id', $feedbs->id)->where('notify_id', $notify)->value('rating');
                        $fbarray[] = $fbscore;
                    }
                    $feedscore[] = $fbarray;
                }
                //////////////////////////
                if (file_exists(storage_path('app/uploads/'.'ccompany_fb_'.getCompanyID().'_'.$notify.'.csv'))) {
                    unlink(storage_path('app/uploads/'.'ccompany_fb_'.getCompanyID().'_'.$notify.'.csv'));
                }
                $excel = \App::make('excel');
                \Excel::create('ccompany_fb_'.getCompanyID().'_'.$notify, function($excel) use($feedscore) {
                    $excel->sheet('score', function($sheet) use($feedscore) {
                        $sheet->fromArray($feedscore);
                    });
                })->store('csv', storage_path('app/uploads'));
                $fbscore_file = url('uploads/'.'ccompany_fb_'.getCompanyID().'_'.$notify.'.csv');
                $data['fbscore_file'] = $fbscore_file;
                //////////////////////////
                if (count($empallscore) <= 10) {
                    $data['empallscore'] = $score['individual'];
                } else {

                    $unsortallscores = DB::table('employee_finall_score')
                        ->where('notification_id', $notify)
                        ->where('company_id', getCompanyID())
                        ->get()->all();
                    $allscores = DB::select( DB::raw("SELECT  @a:=@a+1 rank,
                        score,employee_id FROM    employee_finall_score,
                        (SELECT @a:= 0) AS a WHERE notification_id=:notification_id ORDER BY score + 0 ASC"), array(
                            'notification_id' => $notify,
                        ));
                    $jj = 1;
                    $scores = array();
                    foreach ($allscores as $sck => $scv) {
                        $scores[] = array($jj, ($scv->score/100));
                        $jj++;
                    }
                    if (file_exists(storage_path('app/uploads/'.'ccompany_'.getCompanyID().'_'.$notify.'.csv'))) {
                        unlink(storage_path('app/uploads/'.'ccompany_'.getCompanyID().'_'.$notify.'.csv'));
                    }

                    $excel = \App::make('excel');
                    \Excel::create('ccompany_'.getCompanyID().'_'.$notify, function($excel) use($scores) {
                        $excel->sheet('score', function($sheet) use($scores) {
                            $sheet->fromArray($scores);
                        });
                    })->store('csv', storage_path('app/uploads'));
                    $score_file = url('uploads/'.'ccompany_'.getCompanyID().'_'.$notify.'.csv');
                    //$score_file = url('rstat/'.'ccompany_'.getCompanyID().'_'.$notify.'.csv');
                    $data['score_file'] = $score_file;
                    if (count($empallscore) > 30) {
                        $data['check'] = "normal";
                        $data['empallscore'] = $score['individual'];
                    } else if (count($empallscore) > 10 && count($empallscore) <= 30) {
                        $data['check'] = "tdist";
                        $data['empallscore'] = $score['individual'];
                    }
                }
                $data['fullscore'] = $score['average'];
                $data['maxscore'] = $score['maxscore'];
                $data['criticalzone'] = empBaseAssessmentCtiticalzone($dept_emp, $notify);
                $data['finalscore'] = empBase_assessment_type_score($dept_emp, $notify);
                $data['criticalzone_skill'] = empBaseSkillCtiticalzone($dept_emp, $notify);
                $data['trainingzone_skill'] = getTrainingZone($dept_emp, $notify);
                //dd($data);
            } else {
                $data['nodata'] = "No Data Available!";
            }
            //fetchEmployeeScore($notify);
            return view('companydashboard', $data);
        } else {
            $data['empty'] = 'yes';
            return view('companydashboard', $data);
        }
    }

    public function getTopPerformance()
    {
        $notify = request()->get('notify');
        if (request()->get('dept')) {
            $dept_emp = getDeptEmployees(request()->get('dept'));
        }
        if (request()->get('comp')) {
            $dept_emp = getAllEmployees(request()->get('comp'));
        }
        $res = fetchEmployeeScore($dept_emp, $notify);
        $data = "";
        if ($res['count'] > 0) {

            $r1 = request()->get('range1');
            $r2 = request()->get('range2');
            $rank1 = rankCalculate($r1, $res['count']);
            $rank2 = rankCalculate($r2, $res['count']);
            //dd($res['result'],$res['count'],$rank1,$rank2);
            $tp = $res['result'];
            $jj = 1;
            for ($r = ($res['count'] - 1); $r >= 0; $r--) {
                //dd($tp[$r]);
                $empdata = getEmployeeData($tp[$r]->employee_id);
                if ($r1 && $r2) {
                    if ($rank1 >= $tp[$r]->rank && $rank2 <= $tp[$r]->rank) {
                        $data .= '
                    <tr role="row" class="odd">
                                            <td data-percentage="{{ $tp[$r]->score }}" class="sorting_1"> ' . $empdata->employee_name . ' </td>
                                            <td> ' . $empdata->designation . ' </td>
                                            <td>' . $tp[$r]->score/100 . '</td>
                                        </tr>
                    ';
                    }
                } else {
                    if($jj <= 5){
                        $clr = "style='color:red'";
                    } else {
                        $clr = "";
                    }
                    $data .= '
                    <tr role="row" class="odd">
                                            <td '.$clr.' data-percentage="{{ $tp[$r]->score }}" class="sorting_1"> ' . $empdata->employee_name . ' </td>
                                            <td '.$clr.'> ' . $empdata->designation . ' </td>
                                            <td '.$clr.'>' . $tp[$r]->score/100 . '</td>
                                        </tr>
                    ';
                }
                $jj++;
            }
        } else {
            $data = '
            <tr role="row" class="odd">
                <td> No Data Available!</td>
                <td> No Data Available! </td>
                <td> No Data Available!</td>
            </tr>';
        }
        return response()->json(['data' => $data], 200);
    }

    public function thirdPartyEvaulate()
    {
        $notify = request()->get('notify');
        $data = [];
        $data['page_title'] = "Third Party Evaluation";
        $data['notify_id'] = DB::table('assessment_notifier')
        ->where('company_id', getCompanyID())
        ->get()
        ->all();

        if ($notify) {
            $data['as'] = DB::table('assessment_notifier')
            ->where('id', $notify)
            ->get()
            ->first();
        }

        $employee_category = DB::table('employee_category')
        ->where('company_id', getCompanyID())
        ->where('thirdparty', '1')
        ->get()
        ->all();

        foreach ($employee_category as $x => $y) {
            $data['employees'][$y->id] = DB::table('employees')
            ->where('employee_level', $y->id)
            ->get()
            ->all();
        }

        // dd($data);

        //category, employee id, percentage, company id get from function and assenssment id is already available
        $tabledata = request()->get('emp');
        $savingdata = array();
        if ($tabledata) {
            // dd($tabledata);
            foreach ($tabledata as $key => $tdata) {
                foreach ($tdata as $keys => $v) {
                    $savingdata[] = [
                        'employee_category' => $key,
                        'assessments_id' => $notify,
                        'percentage' => $v,
                        'employee_id' => $keys,
                        'company_id' => getCompanyID(),
                    ];
                }
            }
            DB::table('thirdparty_evaluation')
            ->where('company_id', getCompanyID())
            ->where('assessments_id', $notify)
            ->delete();
            DB::table('thirdparty_evaluation')
            ->insert($savingdata);
            // \LogActivity::addToLog('Submitted Appraisal');
        }
        // dd($tabledata);


        //dd($data);
        return view('thirdparty', $data);
    }

    public function resetpassword(){
        $data = array();
        $requestdata = request()->all();
        $emppwd = getEmployeePassword();
        $password = \Hash::make($requestdata['oldpwd']);
        // dd($password."___".$emppwd);
        if (\Hash::check($requestdata['oldpwd'], $emppwd)) {
            // dd("true");
            DB::table('cms_users')
                ->where('id', getEmployeeID())
                ->update(['password' => \Hash::make($requestdata['newpwd'])]);
        }else{
            // dd('false');
        }

        return view('resetpassword',$data);
    }

    public function cim(){
        $requestdata = request()->all();
        // dd($requestdata);
        $cim_description = $requestdata['cimdescription'];
        $company_id = getCompanyID();
        $cim = 1;
        // dd($notify_id);

        $data = [];

        $data['emp_data']   = DB::table('employees')
        ->where('email', CRUDBooster::me()->email)
        ->get()
        ->first();

        $empid = getEmployeeByUserIDFull(getEmployeeID());

        /* Check if the user has already submited the feedback*/

        $levelcheck = DB::table('employee_category')
        ->where('id', $data['emp_data']->employee_level)
        ->get()
        ->first();

        $dates = "";

        if($levelcheck->mdevaulate == 0){
            $dates = DB::table('assessment_notifier')
            ->where('company_id',getCompanyID())
            ->where('a_type',1)
            ->where('approve',1)
            ->orderBy('id', 'desc')
            ->get()
            ->first();
        } else {
            $dates = DB::table('assessment_notifier')
            ->where('company_id',getCompanyID())
            ->where('a_type',1)
            ->where('highlevel_approve',1)
            ->orderBy('id', 'desc')
            ->get()
            ->first();
        }

        $now = Carbon::now();

        $fb_submit = DB::table('cim_table')
            ->where('employee_id', getEmployeeID())
            ->where('notify_id', $dates->id)
            ->exists();
        $start_date = Carbon::parse($dates->duration_from);
        $end_date = Carbon::parse($dates->due_date);

        // dd($fb_submit);
        if ($fb_submit) {
            $data['exists']=true;
            return view('cim', $data);
        } else{
            if($cim_description != ""){
                $data[] = DB::table('cim_table')->insert(
                    [
                        'notify_id' => $dates->id ,
                        'cim_description' => $cim_description,
                        'cim' => $cim,
                        'employee_id' => getEmployeeID(),
                        'company_id' => $company_id,
                    ]
                );
            }
            return view('cim', $data);
        }
        /* Gett all questions from DB*/
    }



}
