@extends('crudbooster::admin_template')
@section('content')
    <section>
        @if ($empty != 'yes')
            <div class="row">
                <div class="col-lg-12">
                    <div class="box-outer-div padding-3">
                        <div class="row companydashboard-assessment">
                            <div class="col-md-3"><span class="due-date-css shadow">{{ $as->a_name }}</span></div>
                            <div class="col-md-3"><span class="due-date-css shadow">From:{{ $as->duration_from }}</span>
                            </div>
                            <div class="col-md-3"><span class="due-date-css shadow">To:{{ $as->duration_to }}</span>
                            </div>
                            <div class="col-md-3"><span class="due-date-css shadow">Due date:{{ $as->due_date }}</span>
                            </div>
                        </div>
                        <div class="row companydashboard-budget">
                            <div class="col-md-3">
                                <span class="due-date-css shadow">
                                    <a href="<?php echo CRUDBooster::adminPath('budget'); ?>">Yearly Budget</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            @if ($previousassesment)
                <div class="previousassesment" style="display:none">
                    <div class="row mt-2 mb-2">
                        <div class="col-md-12">
                            <div class="box-outer-div padding-3">
                                <table class="table table-striped table-responsive">
                                    <thead>
                                        <th style="text-align:center;font-weight:bolder;">
                                            Assessment
                                        </th>
                                        <th style="text-align:center;font-weight:bolder;">
                                            Average Score
                                        </th>
                                    </thead>
                                @foreach ($previousassesment as $prev)
                                    <tbody>
                                        <td style="font-weight:bold;">
                                            <h4>{{$prev[0]}}</h4>
                                        </td>
                                        <td>
                                            <h4>{{$prev[1]['average']}}</h4>
                                        </td>
                                    </tbody>
                                    {{-- @foreach ($prev[1] as $keyprev => $valueprev)
                                        <h1>{{$valueprev}}</h1>
                                    @endforeach --}}
                                @endforeach
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            @endif
            @if ($fullscore)
                <div class="row mt-2 mb-2">
                    <div class="col-md-12">
                        <div class="box-outer-div padding-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <div id="jg2" class="gauge"></div>
                                </div>
                                <div class="col-md-12">
                                    <div class="row">

                                        <div class="col-lg-4">
                                            <div class="shadow panel panel-info">
                                                <div class="panel-heading">
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <i class="fa fa-5x fa-users" aria-hidden="true"></i>
                                                        </div>
                                                        <div class="col-xs-6 text-right companydashbaord-totalemployees">
                                                            <p class="announcement-heading"
                                                               style="font-size: 30px; font-weight: 700;">
                                                                {{ count($dept_emp)
                                                             }}
                                                            </p>
                                                            <p class="announcement-text">Total Employees</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="shadow panel panel-danger">
                                                <div class="panel-heading">
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <i class="fa fa-tasks fa-5x"></i>
                                                        </div>
                                                        <div class="col-xs-6 text-right companydashbaord-score">
                                                            <p class="announcement-heading"
                                                               style="font-size: 30px; font-weight: 700;">{{ ceil($fullscore) }}</p>
                                                            <p class="announcement-text">Score</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="shadow panel panel-success companydashbaord-clickfor-panel">
                                                <div class="panel-heading">
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <i class="fa fa-tachometer fa-5x"></i>
                                                        </div>
                                                        <div class="col-xs-6 text-right companydashbaord-clickfor">
                                                            <p class="announcement-heading"
                                                               style="font-size: 30px; font-weight: 700;">Click for</p>
                                                            <a href="<?php echo CRUDBooster::adminPath('deptdashboard'); ?>/?notify=<?php echo $as->id; ?>">
                                                                <p class="announcement-text"> Department dashboard</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @if ($check == 'tdist')
                <div class="row mt-2 mb-2" id="tdistbumain" style="display:none;">
                    <div class="col-md-12">
                        <div id="tdistbu" class="shadow"></div>
                    </div>
                    <div class="col-md-12">
                        <div id="tdistbuscater"></div>
                    </div>
                    <div class="row mt-2 mb-2">
                        <div class="col-md-12">
                            <div class="graphdetailspvalues"></div>
                            <div id="graphdetails"></div>
                        </div>
                    </div>
                </div>
                <div class="distfindconfirm row" style="display:none;">
                        <div class="col-md-12">
                            <div class="row mt-2 mb-2">
                                <div class="col-md-12">
                                    <div id="notnalscater" class="shadow"></div>
                                </div>
                            </div>

                            <div class="row mt-2 mb-2" id="pvaluesmain">
                                <div class="col-md-12">
                                    <div id="pvalues"></div>
                                </div>
                            </div>
                            <div id="normalitygraphmain">
                                <div class="row mt-2 mb-2">
                                    <div class="col-md-12">
                                        <div id="normalitygraphdf" class="shadow"></div>
                                    </div>
                                </div>
                                <div class="row mt-2 mb-2">
                                    <div class="col-md-12">
                                        <div id="normdistbuscaterdf" class="shadow"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2 mb-2">
                                <div class="col-md-12">
                                    <div class="graphdetailspvalues"></div>
                                    <div id="graphdetailsdf"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
                @if ($check == 'normal')
                <div class="row normalconfirm" style="display:none;">
                    <div class="col-md-6">
                        <div class="row mt-2 mb-2">
                            <div class="col-md-12">
                                <div id="notnalscater" class="shadow"></div>
                            </div>
                        </div>

                        <div class="row mt-2 mb-2" id="pvaluesmain">
                            <div class="col-md-12">
                                <div id="pvalues"></div>
                            </div>
                        </div>
                        <div id="normalitygraphmain">
                            <div class="row mt-2 mb-2">
                                <div class="col-md-12">
                                    <div id="normalitygraph" class="shadow"></div>
                                </div>
                            </div>
                            <div class="row mt-2 mb-2">
                                <div class="col-md-12">
                                    <div id="normdistbuscater" class="shadow"></div>
                                </div>
                            </div>
                            <div class="row mt-2 mb-2">
                                <div class="col-md-12">
                                    <div id="normalitybox" class="shadow"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2 mb-2">
                            <div class="col-md-12">
                                <div id="graphdetailspvalues"></div>
                                <div id="graphdetails"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div id="normalitygraphmainout">
                            <div class="row mt-2 mb-2">
                                <div class="col-md-12">
                                    <div id="normalitygraphscat" class="shadow"></div>
                                </div>
                            </div>
                            <div class="row mt-2 mb-2">
                                <div class="col-md-12">
                                    <div id="normalitygraphout" class="shadow"></div>
                                </div>
                            </div>
                            <div class="row mt-2 mb-2">
                                <div class="col-md-12">
                                    <div id="normdistbuscaterout" class="shadow"></div>
                                </div>
                            </div>
                            <div class="row mt-2 mb-2">
                                <div class="col-md-12">
                                    <div id="normalityboxout" class="shadow"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2 mb-2">
                            <div class="col-md-12">
                                <div id="graphdetailspvaluesout"></div>
                                <div id="graphdetailsout"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="distfindconfirm row" style="display:none;">
                    <div class="col-md-12">
                        <div class="row mt-2 mb-2">
                            <div class="col-md-12">
                                <div id="notnalscater" class="shadow"></div>
                            </div>
                        </div>

                        <div class="row mt-2 mb-2" id="pvaluesmain">
                            <div class="col-md-12">
                                <div id="pvalues"></div>
                            </div>
                        </div>
                        <div id="normalitygraphmain">
                            <div class="row mt-2 mb-2">
                                <div class="col-md-12">
                                    <div id="normalitygraphdf" class="shadow"></div>
                                </div>
                            </div>
                            <div class="row mt-2 mb-2">
                                <div class="col-md-12">
                                    <div id="normdistbuscaterdf" class="shadow"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2 mb-2">
                            <div class="col-md-12">
                                <div id="graphdetailspvaluesdf"></div>
                                <div id="graphdetailsdf"></div>
                            </div>
                        </div>
                    </div>
                </div>
                @endif
                @if ($check != 'normal' && $check != 'tdist')
                <div class="row">
                    <div class="col-md-12">
                        <div class="row mt-2 mb-2">
                            <div class="col-md-12">
                                <div id="notnalscater" class="shadow"></div>
                            </div>
                        </div>
                    </div>
                </div>
                @endif

                <div class="row mt-2 mb-2">
                    <div class="col-md-12">
                        <div class="shadow">
                            <div class="panel-header">
                                <div class="row">
                                    <div class="col-md-8">
                                        <p>Top Performance</p>
                                    </div>
                                    <div class="col-md-4">
                                        <select id="filter-by-brand" class="form-control" name="nname"
                                                onchange="getperformanceLevel(this.value)">
                                            <option value="" selected>Filter By Range</option>
                                            <option value="all">All</option>
                                            <option value="100-95">Highest</option>
                                            <option value="94-80">Next highest</option>
                                            <option value="79-45">Middle rated</option>
                                            <option value="44-25">Next Middle Rated</option>
                                            <option value="24-10">Low rated</option>
                                            <option value="9-4">Next Low Rated</option>
                                            <option value="3-1">Lowest rated</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="box-shadow bg-white padding-3 table-responsive">
                                <table id="example" class="table table-striped"
                                       style="width: 100%;"
                                       role="grid" aria-describedby="example_info">
                                    <thead>
                                    <tr role="row">
                                        <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1"
                                            colspan="1"
                                            aria-sort="ascending" aria-label="Name: activate to sort column descending"
                                        >Name
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                                            aria-label="Position: activate to sort column ascending">
                                            Designation
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                                            aria-label="Office: activate to sort column ascending">
                                            Department
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody id="dataShowPerfomance">


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="shadow">
                            <div class="panel-header">Yearly Assessment</div>
                            <div id="finalscore" class="dashboard-graph-css" style="min-width: 310px; max-width: 800px;
                        height:
                        400px; margin: 0
                        auto"></div>
                        </div>
                    </div>
                </div>

                <div class="row mt-2 mb-2">
                    <div class="col-md-6">
                        <div class="shadow">
                            <div class="panel-header">Close Monitoring & Trainings for Employees</div>
                            <div id="criticalzone" class="dashboard-graph-css"
                                 style="min-width: 310px; max-width: 800px; height: 400px; margin: 0 auto"></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="shadow">
                            <div class="panel-header">Self Assessment V/S Evaluator Assessment</div>
                            <div id="averageofemp" class="dashboard-graph-css"
                                 style="min-width: 310px; max-width: 800px; height: 400px; margin: 0 auto"></div>
                        </div>
                    </div>
                </div>

                <div class="row mt-2 mb-2">
                    <div class="col-md-12">
                        <div class="shadow">
                            <div class="panel-header">Close Monitoring & Training</div>
                            <div class="box-shadow bg-white padding-5 table-responsive">
                                <table id="MonitoringTraining" class="table table-striped" style="width: 100%;"
                                       role="grid" aria-describedby="example_info">
                                    <thead>
                                    <tr role="row">
                                        <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1"
                                            colspan="1"
                                            aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                            Name
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                                            aria-label="Position: activate to sort column ascending">
                                            Department
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                                            aria-label="Office: activate to sort column ascending">
                                            Assessment Type
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                                            aria-label="Office: activate to sort column ascending">
                                            Skill Set
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($criticalzone_skill as $emps)
                                        <tr role="row" class="odd">
                                            <td class="sorting_1">
                                                {{ getEmployeeName($emps->employee_id) }}
                                            </td>
                                            <td>{{ GetDeptNamebyScore($emps->employee_id) }}</td>
                                            <td>{{ getAssessmentsName($emps->assessment_type_id) }}</td>
                                            <td>{{ getSkillSet($emps->skill_set_id) }}</td>
                                        </tr>
                                    @endforeach

                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Assessment Type</th>
                                        <th>Skill Set</th>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-2 mb-2">
                    <div class="panel-header">Top Zones for close monitoring & Training</div>
                    @foreach ($trainingzone_skill as $key => $item)
                        <div class="col-md-4">
                            <div id="training{{$key}}"></div>
                        </div>
                    @endforeach
                </div>

                <div class="row mt-2 mb-2">
                    <div class="col-md-12">
                        <div class="shadow">
                            <div class="panel-header">
                                <div class="row">
                                    <div class="col-md-9">
                                        <p>Assessment Status</p>
                                    </div>
                                    <div class="col-md-3">
                                        <span class="due-date-css">Due Date: {{ date('d-m-Y', strtotime($as->duration_to))}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="box-shadow bg-white padding-5p padding-3 table-responsive">
                                <table id="userNotCompleted" class="table table-striped table-responsive"
                                       style="width: 100%;"
                                       role="grid" aria-describedby="example_info">
                                    <thead>
                                    <tr role="row">
                                        <th>Employee Name</th>
                                        <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1"
                                            colspan="1"
                                            aria-sort="ascending" aria-label="Name: activate to sort column descending"
                                        >Designation
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                                            aria-label="Position: activate to sort column ascending">
                                            Total
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                                            aria-label="Office: activate to sort column ascending">
                                            Assesment Completed
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                                            aria-label="Office: activate to sort column ascending">
                                            Assesment Pending
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($dept_emp as $e)
                                        @php
                                            $emp = getEmployeeData($e);
                                        @endphp
                                        <tr role="row" class="odd">
                                            <td class="sorting_1">{{ $emp->employee_name }}</td>
                                            <td>{{ $emp->designation }}</td>
                                            <td>{{ getAssesmentCount($emp->oranagram_id,$emp->email) }}</td>
                                            <td>{{ completedAssessmentCount($emp->id,$emp->email,$as->id) }}</td>
                                            <td>{{ getAssesmentCount($emp->oranagram_id,$emp->email) - completedAssessmentCount($emp->id,$emp->email,$as->id) }}</td>
                                        </tr>
                                    @endforeach

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="col-md-12">
                        <p>Factor Analysis</p>
                        <div id="factoranalysistable">
                            <table class="table table-striped table-responsive"
                            style="width: 100%;">
                                <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Factor 1</th>
                                    <th>Factor 2</th>
                                    <th>Factor 3</th>
                                <tr>
                                </thead>
                                <tbody id="facttable">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            @else

            @endif
        @else
            <p>Assessment not selected</p>
        @endif
    </section>
    <p>{{$score_file}}</p>
@endsection
@push('bottom')
    <script src="/js/raphael-2.1.4.min.js"></script>
    <script src="/js/justgage.js"></script>
    <script src="//cdn.jsdelivr.net/npm/jstat@latest/dist/jstat.min.js"></script>
    <script>
        ////////////////////////
        document.addEventListener("DOMContentLoaded", function (event) {

            var jg2 = new JustGage({
                id: "jg2",
                value: <?php echo $fullscore; ?>,
                min: 0,
                max: '100%',
                gaugeWidthScale: 0.6,
                customSectors: {
                    ranges: [{
                        color: "red",
                        lo: 0,
                        hi: '50'
                    }, {
                        color: "green",
                        lo: '51',
                        hi: '100'
                    }]
                },
                counter: true
            });

            document.getElementById('jg2_refresh').addEventListener('click', function () {
                jg2.refresh(getRandomInt(0, 100));
            });
        });
        ////////////////////////////////
        Highcharts.chart('finalscore', {
            exporting: {enabled: false},
            chart: {
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 0,
                    beta: 0,
                    depth: 20
                }
            },
            title: {
                text: ''
            },
            plotOptions: {
                column: {
                    depth: 25,
                    colorByPoint: true
                }
            },
            colors: ['#77a1e5', '#c42525', '#a6c96a', '#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
                '#492970', '#f28f43'],
            xAxis: {
                categories: <?php echo json_encode($finalscore['categoty']);?>,
                labels: {
                    skew3d: true,
                    style: {
                        fontSize: '16px'
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Percentage(%)'
                }
            },
            series: [{
                name: 'Assessment Type',
                data: [
                    <?php
                    $d = array();
                    foreach ($finalscore['value'] as $v) {
                        $d[] = percentage_of_amount($v, 100);
                    }
                    echo implode(',', $d);
                    ?>
                ],
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }]
        });
        /// critical zone
        Highcharts.chart('criticalzone', {
            exporting: {enabled: false},
            chart: {
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 0,
                    beta: 0,
                    depth: 20
                }
            },
            title: {
                text: ''
            },
            plotOptions: {
                column: {
                    depth: 25,
                    colorByPoint: true
                }
            },
            colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#77a1e5', '#c42525', '#a6c96a', '#910000', '#1aadce',
                '#492970', '#f28f43'],
            xAxis: {
                categories: [
                    <?php
                    $d = array();
                    foreach ($criticalzone['categoty'] as $ke => $v) {
                        $d[] = "'" . getAssessmentType($ke) . "'";
                    }
                    echo implode(',', $d);
                    ?>
                ],
                labels: {
                    skew3d: true,
                    style: {
                        fontSize: '16px'
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Number of employees'
                }
            },
            series: [{
                name: 'Assessment Type',
                data: [
                    <?php
                    $d = array();
                    foreach ($criticalzone['value'] as $v) {
                        $d[] = count($v);
                    }
                    echo implode(',', $d);
                    ?>
                ],
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}'
                }
            }]
        });
        //////// average of emp score
        Highcharts.chart('averageofemp', {
            exporting: {enabled: false},
            chart: {
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 0,
                    beta: 0,
                    depth: 20
                }
            },
            title: {
                text: ''
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            xAxis: {
                categories: <?php echo json_encode($finalscore['categoty']);?>,
                labels: {
                    skew3d: true,
                    style: {
                        fontSize: '16px'
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Percentage(%)'
                }
            },
            series: [{
                name: 'Self',
                data: [
                    <?php
                    $d = array();
                    foreach ($finalscore['fulldata'] as $v) {
                        $d[] = percentage_of_amount($v['self'], 100);
                    }
                    echo implode(',', $d);
                    ?>
                ],
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                },
            }, {
                name: 'Eve',
                data: [
                    <?php
                    $d = array();
                    foreach ($finalscore['fulldata'] as $v) {
                        $d[] = percentage_of_amount($v['eve'], 100);
                    }
                    echo implode(',', $d);
                    ?>
                ]
            }
            ]
        });
        ////////
        @foreach ($trainingzone_skill as $key => $item)

        Highcharts.chart('training{{$key}}', {
            exporting: {enabled: false},
            chart: {
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 0,
                    beta: 0,
                    depth: 20
                }
            },
            title: {
                text: ''
            },
            plotOptions: {
                column: {
                    depth: 25,
                    colorByPoint: true
                }
            },
            colors: ['#77a1e5', '#c42525', '#a6c96a', '#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
                '#492970', '#f28f43'],
            xAxis: {
                categories: [
                    <?php
                    $d = array();
                    $l = 1;
                    foreach ($item as $k => $v) {
                        if ($l <= 3) {
                            $d[] = "'" . getSkillSet($k) . "'";
                        }
                        $l++;
                    }
                    echo implode(',', $d);
                    ?>
                ],
                labels: {
                    skew3d: true,
                    style: {
                        fontSize: '11px'
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },
            series: [{
                name: '{{getAssessmentType($key)}}',
                data: [
                    <?php
                    $d = array();
                    $l = 1;
                    foreach ($item as $k => $v) {
                        if ($l <= 3) {
                            $d[] = $v;
                        }
                        $l++;
                    }
                    echo implode(',', $d);
                    ?>
                ],
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}'
                },
            }]
        });
        @endforeach
        $("#MonitoringTraining").DataTable({
            initComplete: function () {
                this.api().columns().every(function () {
                    var column = this;
                    var select = $('<select><option value=""></option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                            var val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );

                            column
                                .search(val ? '^' + val + '$' : '', true, false)
                                .draw();
                        });

                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>')
                    });
                });
            },
            dom: 'Bfrtip',
            buttons: [
                'excel', 'pdf',
            ]
        });

        $("#userNotCompleted").DataTable({
            dom: 'Bfrtip',
            buttons: [
                'excel', 'pdf',
            ]
        });

        axios.get('/api/getTopPerformance?notify=<?php echo $as->id; ?>&comp=<?php echo getCompanyID(); ?>')
            .then(function (res) {
                $("#dataShowPerfomance").html(res.data.data);
            });


        function getperformanceLevel(range) {
            if (range == 'all') {
                axios.get('/api/getTopPerformance?notify=<?php echo $as->id; ?>&comp=<?php echo getCompanyID(); ?>')
                    .then(function (res) {
                        $("#dataShowPerfomance").html(res.data.data);
                    });
            } else {
                var array = range.split("-");
                axios.get('/api/getTopPerformance?notify=<?php echo $as->id; ?>&comp=<?php echo getCompanyID(); ?>&range1=' + array[0] + "&range2=" + array[1])
                    .then(function (res) {
                        $("#dataShowPerfomance").html(res.data.data);
                    });
            }

        }
        ////////////////////////////////
        Highcharts.chart('notnalscater', {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Employee Score in Scatter Graph'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Employee No.'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Employee Score'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '',
                        pointFormat: '[Employee No.{point.x},Employee Score:{point.y}]'
                    }
                }
            },
            series: [{
                type: 'scatter',
                name: 'Employee score',
                color: 'rgba(223, 83, 83, .5)',
                data: [<?php
                    $d = array();
                    //sort($empallscore);
                    $k = 1;
                    foreach ($empallscore as $ke => $v) {
                        $d[] = $v;
                        $k++;
                    }
                    // dd(implode(',', $d));
                    echo implode(',', $d);
                    ?>
                ]

            }]
        });
        ////////////////////////////////
        @if ($score_file)
        function normalitytestcall(file) {
            $.get("http://staging-epes.drupalised.com/rstat/" + file, function (testdata) {
                $('#graphdetailspvaluesdf').html(`
                <table class="table table-striped table-responsive">
                        <tr>
                            <th>anderson pvalue</th><td>${testdata[0].anderson_pval_string}</td>
                        </tr>
                        <tr>
                            <th>shapiro pvalue</th><td>${testdata[0].shapiro_pval_string}</td>
                        </tr>
                    </table>
                `);
                var pval = testdata[0].anderson_pval;
                if (parseFloat(pval.toString().substr(0,6)) > 0.1) {
                    normaldist();
                    $('.normalconfirm').show();
                } else {
                    distfind();
                    $('.distfindconfirm').show();
                }
            });
        }

        function distfind() {
            //distfindvalue('ccompany_51_22_find_dist.json');
            $.post("http://staging-epes.drupalised.com/rstat/rstat.php", {
                check: 'distfind',
                file: '<?php echo $score_file; ?>'
            }, function (ndata) {
                console.log("file", ndata);
                distfindvalue(ndata);
            })
            .fail(function (ndata) {
                console.log("efile", ndata.responseText);
                distfindvalue(ndata.responseText);
            });
        }

        function distfindvalue(ndata) {
            $.get("http://staging-epes.drupalised.com/rstat/" + ndata, function (normdata) {
                var distarray = [];
                $.each(normdata.dist_data, function (index, value) {
                    distarray.push([normdata.input[index], value]);
                });
                Highcharts.chart('normalitygraphdf', {
                    chart: {
                        zoomType: 'xy'
                    },
                    title: {
                        text: normdata.dist_name[0]
                    },
                    xAxis: {
                        title: {
                            enabled: true,
                            text: 'Emp'
                        },
                        startOnTick: true,
                        endOnTick: true,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: ''
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        x: 100,
                        y: 70,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                        borderWidth: 1
                    },
                    plotOptions: {
                        scatter: {
                            marker: {
                                radius: 5,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineColor: 'rgb(100,100,100)'
                                    }
                                }
                            },
                            states: {
                                hover: {
                                    marker: {
                                        enabled: false
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<b>{series.name}</b><br>',
                                pointFormat: '{point.x}, {point.y}'
                            }
                        }
                    },
                    series: [{
                        type: 'scatter',
                        name: 'Employee score',
                        color: 'rgba(223, 83, 83, .5)',
                        data: distarray
                    }]
                });
                Highcharts.chart('normdistbuscaterdf', {
                    exporting: {enabled: false},
                    title: {
                        text: 'Curve Fit'
                    },
                    xAxis: {
                        tickInterval: 1
                    },
                    yAxis: {
                        title: {
                            text: 'Score'
                        }
                    },

                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 1
                        }
                    },

                    series: [{
                        type: 'spline',
                        name: 'Scater',
                        data: normdata.equation_val
                    }, {
                        type: 'scatter',
                        name: 'score',
                        data: normdata.input
                    }],

                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    }

                });

                $('#graphdetailsdf').html(`
                <table class="table table-striped table-responsive">
                    <tr>
                        <th>Dist Name</th><td>${normdata.dist_name[0]}</td>
                    </tr>
                    <tr>
                        <th>Equation</th><td>${normdata.equation[0]}</td>
                    </tr>
                    <tr>
                        <th>mean</th><td>${normdata.mean[0]}</td>
                    </tr>
                    <tr>
                        <th>median</th><td>${normdata.median[0]}</td>
                    </tr>
                    <tr>
                        <th>max</th><td>${normdata.max[0]}</td>
                    </tr>
                    <tr>
                        <th>sd</th><td>${normdata.sd[0]}</td>
                    </tr>
                    <tr>
                        <th>se</th><td>${normdata.se[0]}</td>
                    </tr>
                    <tr>
                        <th>skewness</th><td>${normdata.skewness[0]}</td>
                    </tr>
                    <tr>
                        <th>kurtosis</th><td>${normdata.kurtosis[0]}</td>
                    </tr>
                    <tr>
                        <th>variance</th><td>${normdata.variance[0]}</td>
                    </tr>
                    <tr>
                        <th>r_squared</th><td>${normdata.r_squared[0]}</td>
                    </tr>
                    <tr>
                        <th>adjust_r_squared</th><td>${normdata.adjust_r_squared[0]}</td>
                    </tr>
                    <tr>
                        <th>rmse</th><td>${normdata.rmse[0]}</td>
                    </tr>
                    <tr>
                        <th>mae</th><td>${normdata.mae[0]}</td>
                    </tr>
                </table>
                `);
            });
        }

        function normaldist() {
            $.post("http://staging-epes.drupalised.com/rstat/rstat.php", {
                check: 'normdist',
                file: '<?php echo $score_file; ?>'
            }, function (ndata) {
                console.log("file", ndata);
                normdataget(ndata);
            })
                .fail(function (ndata) {
                    console.log("efile", ndata.responseText);
                    normdataget(ndata.responseText);
                });
            ///////////////////////////////////////
            $.post("http://staging-epes.drupalised.com/rstat/rstat.php", {
                check: 'normdistout',
                file: '<?php echo $score_file; ?>'
            }, function (ndataout) {
                console.log("file", ndataout);
                normdatagetout(ndataout);
            })
                .fail(function (ndataout) {
                    console.log("efile", ndataout.responseText);
                    normdatagetout(ndataout.responseText);
                });
        }

        function normdataget(ndata) {
            $.get("http://staging-epes.drupalised.com/rstat/" + ndata, function (normdata) {
                var normalityarray = [];
                $.each(normdata.norm_data, function (index, value) {
                    normalityarray.push([normdata.input[index], value]);
                });
                Highcharts.chart('normalitygraph', {
                    chart: {
                        zoomType: 'xy'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        title: {
                            enabled: true,
                            text: 'Emp'
                        },
                        startOnTick: true,
                        endOnTick: true,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: ''
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        x: 100,
                        y: 70,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                        borderWidth: 1
                    },
                    plotOptions: {
                        scatter: {
                            marker: {
                                radius: 5,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineColor: 'rgb(100,100,100)'
                                    }
                                }
                            },
                            states: {
                                hover: {
                                    marker: {
                                        enabled: false
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<b>{series.name}</b><br>',
                                pointFormat: '{point.x}, {point.y}'
                            }
                        }
                    },
                    series: [{
                        type: 'scatter',
                        name: 'Employee score',
                        color: 'rgba(223, 83, 83, .5)',
                        data: normalityarray
                    }]
                });
                Highcharts.chart('normdistbuscater', {
                    exporting: {enabled: false},
                    title: {
                        text: 'With outlayers'
                    },
                    xAxis: {
                        tickInterval: 1
                    },
                    yAxis: {
                        title: {
                            text: 'Score'
                        }
                    },

                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 1
                        }
                    },

                    series: [{
                        type: 'spline',
                        name: 'Scater',
                        data: normdata.equation_val
                    }, {
                        type: 'scatter',
                        name: 'score',
                        data: normdata.input
                    }],

                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    }

                });
                Highcharts.chart('normalitybox', {

                    chart: {
                        type: 'boxplot'
                    },

                    title: {
                        text: 'Highcharts Box Plot Example'
                    },

                    legend: {
                        enabled: false
                    },

                    xAxis: {
                        categories: ['1'],
                        title: {
                            text: ''
                        }
                    },

                    yAxis: {
                        title: {
                            text: 'Observations'
                        },
                        plotLines: [{
                            value: normdata.mean[0],
                            color: 'red',
                            width: 1,
                            label: {
                                text: 'Mean: ' + normdata.mean[0],
                                align: 'center',
                                style: {
                                    color: 'gray'
                                }
                            }
                        }]
                    },

                    series: [{
                        name: 'Observations',
                        data: [
                            normdata.input
                        ],
                        tooltip: {
                            headerFormat: '<em>Experiment No {point.key}</em><br/>'
                        }
                    }]

                });
                $('#graphdetails').html(`
                <table class="table table-striped table-responsive">
                    <tr>
                        <th>Equation</th><td>${normdata.equation[0]}</td>
                    </tr>
                    <tr>
                        <th>mean</th><td>${normdata.mean[0]}</td>
                    </tr>
                    <tr>
                        <th>median</th><td>${normdata.median[0]}</td>
                    </tr>
                    <tr>
                        <th>max</th><td>${normdata.max[0]}</td>
                    </tr>
                    <tr>
                        <th>sd</th><td>${normdata.sd[0]}</td>
                    </tr>
                    <tr>
                        <th>se</th><td>${normdata.se[0]}</td>
                    </tr>
                    <tr>
                        <th>skewness</th><td>${normdata.skewness[0]}</td>
                    </tr>
                    <tr>
                        <th>kurtosis</th><td>${normdata.kurtosis[0]}</td>
                    </tr>
                    <tr>
                        <th>variance</th><td>${normdata.variance[0]}</td>
                    </tr>
                    <tr>
                        <th>r_squared</th><td>${normdata.r_squared[0]}</td>
                    </tr>
                    <tr>
                        <th>adjust_r_squared</th><td>${normdata.adjust_r_squared[0]}</td>
                    </tr>
                    <tr>
                        <th>rmse</th><td>${normdata.rmse[0]}</td>
                    </tr>
                </table>
                `);
            });
        }

        ////////////////////////////////////////////////////////////////////
        function normdatagetout(ndataout) {
            $.get("http://staging-epes.drupalised.com//rstat/" + ndataout, function (normdataout) {
                var normalityarrayout = [];
                var normalityarrayoutscater = [];
                $.each(normdataout.norm_data, function (index, value) {
                    normalityarrayout.push([normdataout.input[index], value]);
                });
                $.each(normdataout.input, function (index, value) {
                    normalityarrayoutscater.push([index + 1, value]);
                });
                Highcharts.chart('normalitygraphscat', {
                    chart: {
                        zoomType: 'xy'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        title: {
                            enabled: true,
                            text: ''
                        },
                        startOnTick: true,
                        endOnTick: true,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: ''
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        x: 100,
                        y: 70,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                        borderWidth: 1
                    },
                    plotOptions: {
                        scatter: {
                            marker: {
                                radius: 5,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineColor: 'rgb(100,100,100)'
                                    }
                                }
                            },
                            states: {
                                hover: {
                                    marker: {
                                        enabled: false
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<b>{series.name}</b><br>',
                                pointFormat: '{point.x}, {point.y}'
                            }
                        }
                    },
                    series: [{
                        type: 'scatter',
                        name: 'Employee score',
                        color: 'rgba(223, 83, 83, .5)',
                        data: normalityarrayoutscater
                    }]
                });
                $('#normalitygraphout').highcharts({
                    exporting: {enabled: false},
                    chart: {
                        zoomType: 'xy'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        title: {
                            enabled: true,
                            text: 'Emp'
                        },
                        startOnTick: true,
                        endOnTick: true,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: ''
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        x: 100,
                        y: 70,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                        borderWidth: 1
                    },
                    plotOptions: {
                        scatter: {
                            marker: {
                                radius: 5,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineColor: 'rgb(100,100,100)'
                                    }
                                }
                            },
                            states: {
                                hover: {
                                    marker: {
                                        enabled: false
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<b>{series.name}</b><br>',
                                pointFormat: '{point.x}, {point.y}'
                            }
                        }
                    },
                    series: [{
                        type: 'scatter',
                        name: 'Employee score',
                        color: 'rgba(223, 83, 83, .5)',
                        data: normalityarrayout
                    }]
                });
                Highcharts.chart('normdistbuscaterout', {
                    exporting: {enabled: false},
                    title: {
                        text: 'Without outlayers'
                    },
                    xAxis: {
                        tickInterval: 1
                    },
                    yAxis: {
                        title: {
                            text: 'Score'
                        }
                    },

                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 1
                        }
                    },

                    series: [{
                        type: 'spline',
                        name: 'Scater',
                        data: normdataout.equation_val
                    }, {
                        type: 'scatter',
                        name: 'score',
                        data: normdataout.input
                    }],

                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    }

                });
                Highcharts.chart('normalityboxout', {

                    chart: {
                        type: 'boxplot'
                    },

                    title: {
                        text: 'Highcharts Box Plot Example'
                    },

                    legend: {
                        enabled: false
                    },

                    xAxis: {
                        categories: ['1'],
                        title: {
                            text: ''
                        }
                    },

                    yAxis: {
                        title: {
                            text: 'Observations'
                        },
                        plotLines: [{
                            value: normdataout.mean[0],
                            color: 'red',
                            width: 1,
                            label: {
                                text: 'Mean: ' + normdataout.mean[0],
                                align: 'center',
                                style: {
                                    color: 'gray'
                                }
                            }
                        }]
                    },

                    series: [{
                        name: 'Observations',
                        data: [
                            normdataout.input
                        ],
                        tooltip: {
                            headerFormat: '<em>Experiment No {point.key}</em><br/>'
                        }
                    }]

                });
                $('#graphdetailsout').html(`
                <table class="table table-striped table-responsive">
                    <tr>
                        <th>Equation</th><td>${normdataout.equation[0]}</td>
                    </tr>
                    <tr>
                        <th>mean</th><td>${normdataout.mean[0]}</td>
                    </tr>
                    <tr>
                        <th>median</th><td>${normdataout.median[0]}</td>
                    </tr>
                    <tr>
                        <th>max</th><td>${normdataout.max[0]}</td>
                    </tr>
                    <tr>
                        <th>sd</th><td>${normdataout.sd[0]}</td>
                    </tr>
                    <tr>
                        <th>se</th><td>${normdataout.se[0]}</td>
                    </tr>
                    <tr>
                        <th>skewness</th><td>${normdataout.skewness[0]}</td>
                    </tr>
                    <tr>
                        <th>kurtosis</th><td>${normdataout.kurtosis[0]}</td>
                    </tr>
                    <tr>
                        <th>variance</th><td>${normdataout.variance[0]}</td>
                    </tr>
                    <tr>
                        <th>r_squared</th><td>${normdataout.r_squared[0]}</td>
                    </tr>
                    <tr>
                        <th>adjust_r_squared</th><td>${normdataout.adjust_r_squared[0]}</td>
                    </tr>
                    <tr>
                        <th>rmse</th><td>${normdataout.rmse[0]}</td>
                    </tr>
                </table>
                `);
            });
        }

        function tdistcall(file) {
            $.get("http://staging-epes.drupalised.com/rstat/" + file, function (tdata) {
                var normalityarray = [];
                $.each(tdata.norm_data, function (index, value) {
                    normalityarray.push([tdata.input[index], value]);
                });
                console.log(tdata);
                $('#tdistbu').highcharts({
                    exporting: {enabled: false},
                    chart: {
                        zoomType: 'xy'
                    },
                    title: {
                        text: 'Height Versus Weight of 507 Individuals by Gender'
                    },
                    xAxis: {
                        title: {
                            enabled: true,
                            text: 'Emp'
                        },
                        startOnTick: true,
                        endOnTick: true,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: ''
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        x: 100,
                        y: 70,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                        borderWidth: 1
                    },
                    plotOptions: {
                        scatter: {
                            marker: {
                                radius: 5,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineColor: 'rgb(100,100,100)'
                                    }
                                }
                            },
                            states: {
                                hover: {
                                    marker: {
                                        enabled: false
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<b>{series.name}</b><br>',
                                pointFormat: '{point.x}, {point.y}'
                            }
                        }
                    },
                    series: [{
                        type: 'scatter',
                        name: 'Employee score',
                        color: 'rgba(223, 83, 83, .5)',
                        data: normalityarray
                    }]
                });
                Highcharts.chart('tdistbuscater', {
                    exporting: {enabled: false},
                    title: {
                        text: 'scater'
                    },
                    xAxis: {
                        tickInterval: 1
                    },
                    yAxis: {
                        title: {
                            text: 'Score'
                        }
                    },

                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 1
                        }
                    },

                    series: [{
                        type: 'spline',
                        name: 'Scater',
                        data: tdata.equation_val
                    }, {
                        type: 'scatter',
                        name: 'score',
                        data: tdata.input
                    }],

                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    }

                });
                $('#graphdetails').html(`
                <table class="table table-striped table-responsive">
                    <tr>
                        <th>Equation</th><td>${tdata.equation[0]}</td>
                    </tr>
                    <tr>
                        <th>mean</th><td>${tdata.mean[0]}</td>
                    </tr>
                    <tr>
                        <th>median</th><td>${tdata.median[0]}</td>
                    </tr>
                    <tr>
                        <th>max</th><td>${tdata.max[0]}</td>
                    </tr>
                    <tr>
                        <th>sd</th><td>${tdata.sd[0]}</td>
                    </tr>
                    <tr>
                        <th>se</th><td>${tdata.se[0]}</td>
                    </tr>
                    <tr>
                        <th>skewness</th><td>${tdata.skewness[0]}</td>
                    </tr>
                    <tr>
                        <th>kurtosis</th><td>${tdata.kurtosis[0]}</td>
                    </tr>
                    <tr>
                        <th>variance</th><td>${tdata.variance[0]}</td>
                    </tr>
                    <tr>
                        <th>r_squared</th><td>${tdata.r_squared[0]}</td>
                    </tr>
                    <tr>
                        <th>adjust_r_squared</th><td>${tdata.adjust_r_squared[0]}</td>
                    </tr>
                    <tr>
                        <th>rmse</th><td>${tdata.rmse[0]}</td>
                    </tr>
                </table>
                `);
            });
        }

        @if ($check == 'normal')
        $.post("http://staging-epes.drupalised.com/rstat/rstat.php", {
            check: 'test',
            file: '<?php echo $score_file; ?>'
        }, function (tstdata) {
            console.log("file", tstdata);
            normalitytestcall(tstdata);
        })
            .fail(function (tstdata) {
                console.log("efile", tstdata.responseText);
                normalitytestcall(tstdata.responseText);
            });
        @endif
        function tdisttestcall(file) {
            $.get("http://staging-epes.drupalised.com/rstat/" + file, function (testdata) {
                $('.graphdetailspvalues').html(`
                <table class="table table-striped table-responsive">
                        <tr>
                            <th>anderson pvalue</th><td>${testdata[0].anderson_pval_string}</td>
                        </tr>
                        <tr>
                            <th>shapiro pvalue</th><td>${testdata[0].shapiro_pval_string}</td>
                        </tr>
                    </table>
                `);
                var pval = testdata[0].anderson_pval;
                if (parseFloat(pval.toString().substr(0,6)) > 0.1) {
                    plottdist();
                    $('#tdistbumain').show();
                } else {
                    distfind();
                    $('.distfindconfirm').show();
                }
            });
        }

        function plottdist(){
            $.post("http://staging-epes.drupalised.com/rstat/rstat.php", {
                check: 'tdist',
                file: '<?php echo $score_file; ?>'
            }, function (tdata) {
                console.log("file", tdata);
                tdistcall(tdata);
            })
            .fail(function (tdata) {
                console.log("efile", tdata.responseText);
                tdistcall(tdata.responseText);
            });
        }
        @if ($check == 'tdist')
        //tdisttestcall('ccompany_51_22_test.json');
        $.post("http://staging-epes.drupalised.com/rstat/rstat.php", {
            check: 'test',
            file: '<?php echo $score_file; ?>'
        }, function (tstdata) {
            console.log("file", tstdata);
            tdisttestcall(tstdata);
        })
            .fail(function (tstdata) {
                console.log("efile", tstdata.responseText);
                tdisttestcall(tstdata.responseText);
        });
        @endif
        //callAPI('test');
        //callAPI('normdist');
        //readFile('company_37_11_norm.json');
        @endif

        $('#criticalzone').click(function () {
            $('body #MonitoringTraining_wrapper .buttons-excel').click();
        });

        //factoranalysistable
        @if ($fbscore_file)
        function factoranalysis(file) {
            $.get("http://staging-epes.drupalised.com/rstat/" + file, function (fbdata) {
                $.each(fbdata.factors, function (index, value) {
                    $('#facttable').append(`
                        <tr>
                            <td>${value._row.replace(".", " ")}</td>
                            <td>${value.Factor1}</td>
                            <td>${value.Factor2}</td>
                            <td>${value.Factor3}</td>
                        </tr>
                        `);
                });
            });
        }

        $.post("http://staging-epes.drupalised.com/rstat/rstat.php", {
            check: 'fact',
            file: '<?php echo $fbscore_file; ?>'
        }, function (fbdata) {
            console.log("file", fbdata);
            factoranalysis(fbdata);
        })
            .fail(function (fbdata) {
                console.log("efile", fbdata.responseText);
                factoranalysis(fbdata.responseText);
            });
        @endif

    </script>
@endpush
