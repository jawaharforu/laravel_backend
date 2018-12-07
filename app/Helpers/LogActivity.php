<?php


namespace App\Helpers;
use Request;
use App\LogActivity as LogActivityModel;
use crocodicstudio\crudbooster\helpers\CRUDBooster;

class LogActivity
{


    public static function addToLog($subject)
    {
        $log = [];
        $log['subject'] = $subject;
        $log['url'] = Request::fullUrl();
        $log['ip'] = Request::ip();
        $log['agent'] = Request::header('user-agent');
        $log['user_id'] = CRUDBooster::myId();
        $log['user_name'] = CRUDBooster::myName();
        LogActivityModel::create($log);
    }


    public static function logActivityLists()
    {
        return LogActivityModel::latest()->get();
    }


}
