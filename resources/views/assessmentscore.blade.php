<!-- First, extends to the CRUDBooster Layout -->
@extends('crudbooster::admin_template')
@section('content')
    <!-- Your html goes here -->
    <div class='panel panel-default scorefilterpanel'>
        <div class='panel-heading'>Assessment Scores</div>
        <div class='panel-body'>
            @if ($emp_full_score && $full == "N")
                <div class="">
                    <div class="">
                        <p class="page-header">{{$empdetail->employee_code}} - {{$empdetail->employee_name}}</p>
                    </div>
                    @foreach ($emp_full_score as $k => $af)
                        <div class="">
                            <h3 class="shadow-sm p-3 mb-5 rounded">{{getAssessmentType($k)}}</h3>
                            <table class="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr class="scoreheading">
                                    <th>Skill Set</th>
                                    <th>Self</th>
                                    <th>Evaluator</th>
                                    <th>Gap</th>
                                    <th>Remark</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($af as $sk)
                                        <tr>
                                            <td>{{getSkillSet($sk->skill_set_id)}}</td>
                                            <td>{{$sk->self}}</td>
                                            <td>{{$sk->evalator}}</td>
                                            <td>{{$sk->gap}}</td>
                                            <td>
                                                @if ($sk->remark == 'CMTR')
                                                    <p class="cmtr-s">{{$sk->remark}}</p>
                                                @else
                                                    <p class="ok-s">{{$sk->remark}}</p>
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    @endforeach
                </div>
            @elseif ($emp_full_score && $full == "Y")
                <div class="">
                    <div class="">
                        <p class="page-header">{{$empdetail->employee_code}} - {{$empdetail->employee_name}}</p>
                    </div>
                        <div class="">
                            <h3>{{getAssessmentType($k)}}</h3>
                            <table class="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                    <th>Question</th>
                                    <th>Assessment Type</th>
                                    <th>Skill Set</th>
                                    @foreach ($emp_list as $item)
                                        <th>{{getEmployeeNameFromUser($item->user_id)}}</th>
                                    @endforeach
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($questions as $sk)
                                        <tr>
                                            <td>{{$sk->question}}</td>
                                            <td>{{getAssessmentType($sk->assessments_type_id)}}</td>
                                            <td>{{getSkillSet($sk->skill_set_id)}}</td>
                                            @foreach ($emp_list as $item)
                                                <th>{{getassessmentscoreofemp($empdetail->id,$item->user_id,$notifyid,$sk->id)}}</th>
                                            @endforeach
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                    </div>
                </div>
            @else
                <div class='form-group'>
                    <div class="row score-filter form-inline">
                        <div class="col-md-8 score-filter-select ">
                            <label>Assessment form</label>
                            <select id="assessment_form" class="form-control">
                                <option value="">*Select Assessment</option>
                                @foreach ($notify_id as $item)
                                    <option value="{{$item->id}}">{{$item->a_name}}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-4 score-filter-button">
                                <button type="button" class="btn btn-success getlistscore pull-right">Calculate Score</button>
                        </div>
                    </div>
                </div>
                <div class="dataresult" style="display:none">
                    <div class="dashboardlink">

                    </div>
                    <div class="scoretable">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                <th>Sl.No.</th>
                                <th>Employee Code/Name</th>
                                <th>Score in %</th>
                                <th>View</th>
                                <th>View</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            @endif
                <div class="loader" style="display:none"><img src="/uploads/loader.gif" /></div>
        </div>
    </div>
@endsection
@push('bottom')
    <script>
        $(document).ready(function(){
            $('.getlistscore').click(function(){
                var n = $('#assessment_form').val();
                if (n != '') {
                    $('.loader').show();
                    $.get( "<?php echo URL::to('/'); ?>/api/get/assessmentscore/"+n+"/"+"<?php echo getCompanyID(); ?>" )
                        .done(function( data ) {
                            //console.log(data);
                            var i = 1;
                            $('tbody').html('');
                            data.forEach(function(element) {
                                $score = element.score/100;
                                $('tbody').append(`
                                <tr>
                                    <td>${i}</td>
                                    <td>${element.employee_code}/${element.employee_name}</td>
                                    <td>${$score.toFixed(3)}</td>
                                    <td><a href='<?php echo CRUDBooster::adminPath('scores'); ?>/?emp=${element.id}&notify_id=${n}&full=n'>View full score</a></td>
                                    <td><a href='<?php echo CRUDBooster::adminPath('scores'); ?>/?emp=${element.id}&notify_id=${n}&full=y'>View full score of eva</a></td>
                                </tr>
                                `);
                                i++;
                            });
                            if(data.length > 0){
                                $('.dataresult').show();
                                $('.dashboardlink').html(`<a class="btn btn-primary" href="<?php echo CRUDBooster::adminPath('companydashboard'); ?>/?notify=${n}">Analyse</a>`);
                            } else {
                                $('.dataresult').show();
                                $('tbody').html(`<tr><td colspan="5" style="text-align: center">No Data
                                Available!</td></tr>`);
                            }
                            $('.loader').hide();
                        });
                } else {
                    alert('select assessment');
                }
            });
        });
    </script>
    <script src="{{ asset('/js/app.js') }}"></script>
@endpush
