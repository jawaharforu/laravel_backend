<?php

use gburtini\Distributions\Normal;




Route::group( [ 'middleware' => [ 'web' ], 'prefix' => config( 'crudbooster.ADMIN_PATH' ) ], function () {
    Route::get('/subscription', 'MainController@sub')->name('sub');
    Route::get('/dashboard', 'MainController@superAdmin')->name('superAdmin');
    Route::get('/review', 'MainController@review')->name('addLogActivity');
    Route::post('/submit-review', 'MainController@submitReviewRatings');
    Route::get('/add-to-log', 'MainController@myTestAddToLog')->name('addLogActivity');
    Route::get('/logActivity', 'MainController@logActivity')->name('logActivity');
    Route::any('/', 'MainController@dashboard');
    Route::any('/scores', 'MainController@getEmployeScore');
    Route::any('/mdscores', 'MainController@getmdScore');
    Route::any('/qusasstojd', 'AdminJobDescMappedQuestionsController@QuestionAssignToJd');
    Route::any('/postjdcreateing','AdminJobDescMappedQuestionsController@jdSubmit');
    Route::any('/company','MainController@getCompanyDashBoard');
    Route::any('/charts','MainController@charts');
    Route::any('/department','MainController@department');
    Route::any('/preview','AdminAssessmentApproveController@previewPage');
    Route::any('/empdash','MainController@employeDashboard');
    Route::any('/deptdashboard','MainController@deptDashboard');
    Route::any('/companydashboard','MainController@companyDashboard');
    Route::any('/checking','MainController@checkingpercentail');
    Route::any('/thirdparty','MainController@thirdPartyEvaulate');
    Route::any('/mess','AdminMessagesController@getIndex');
    Route::any('/resetpassword','MainController@resetpassword');
    Route::any('/cim','MainController@cim');


    Route::any('/excelcheck',function(){
        getParentOrgCopy(13, 14);
    });


    Route::any('/testT',function (){
        echo "adsfasdfa";
        $ScoreArray = array(28,32,41,55,67,73,85,85,85,87,91,112,126,140,143,152,157,160,168);
        //==============================end demo data=============================

        //KEEP: This counts the number of elements in the array
        $n = count($ScoreArray);

        //KEEP: take 1 away from N because element indexes start at 0
        $top_n= $n-1;

        //find the top (highest value) score (the array was sorted in the original query)
        $Q4=$ScoreArray[$top_n];

        //find the bottom (lowest value) score
        $Q0=$ScoreArray[0];

        //for the 3rd quartile
        $k_3=(.75*($top_n));
        $K3=floor($k_3);
        $f3=($k_3-$K3);
        $Q3=$ScoreArray[$K3]+($f3*($ScoreArray[$K3+1]-$ScoreArray[$K3]));

        //for the 2nd quartile (median)
        $k_2=(.5*($top_n));
        $K2=floor($k_2);
        $f2=($k_2-$K2);
        $Q2=$ScoreArray[$K2]+($f2*($ScoreArray[$K2+1]-$ScoreArray[$K2]));

        //for the 1st quartile
        $k_1=(.25*($top_n));
        $K1=floor($k_1);
        $f1=($k_1-$K1);
        $Q1=$ScoreArray[$K1]+($f1*($ScoreArray[$K1+1]-$ScoreArray[$K1]));

        print ("<p>\n");
        print ("Q4 score: $Q4<br>\n");
        print ("Q3 score: $Q3<br>\n");
        print ("Q2 score: $Q2<br>\n");
        print ("Q1 score: $Q1<br>\n");
        print ("Q0 score: $Q0<br>\n");

    });

});

Route::get('/{any}', 'MainController@index')->where('any', '.*');


