@extends('crudbooster::admin_template')
@section('content')
    <section>


        @if(isset($empty))
            <div class="row">
                <div class="col-lg-12">
                    <form method="get" action="">
                        <label>
                            Choose Assessments
                        </label>
                        <select id="notify_id" class="form-control" name="notify_id">
                            <?php
                            $da = DB::table('assessment_notifier')
                                ->where('company_id', getCompanyID())
                                ->get()->all();
                            foreach ($da as $as) {
                                echo "<option value='$as->id'> $as->a_name </option>";
                            }
                            ?>
                        </select>
                        <div class="form-group">
                            <input type="submit" value="Analysis" class="btn btn-success">
                        </div>
                    </form>

                </div>
            </div>
        @else
            <div class="row">
                <div class="col-md-6">
                    <div id="boxplot" style="height: 400px; margin: auto; min-width: 310px; max-width: 600px"></div>
                </div>
                <div class="col-md-6">
                    <div id="basicline" style="height: 400px; margin: auto; min-width: 310px; max-width: 600px"></div>
                </div>
            </div>
            @if(isset($full))
                <div class="row">
                    <div class="col-lg-12">
                        <hr/>
                    </div>
                    <div class="col-md-6">
                        <div id="scatter"></div>
                    </div>
                    <div class="col-md-6">
                        <div id="lineChart"></div>
                    </div>
                </div>

                <div class="row mt-2 mb-2">

                    <div class="col-md-8">
                        <div class="box-outer-div">
                            <div class="row">
                                <div class="col-md-4 d-flex justify-content-center gery-border-right">
                                    <div class="box-inner-div">
                                        <h5 class="text-bold mb-0">Total Employees</h5>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="counter-count fa-3x employee-count-color">
                                                    {{ getTotalEmployees() }}
                                                </p>
                                            </div>
                                            <div class="col-md-6">
                                                <i class="fa fa-user fa-3x" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-center gery-border-right">
                                    <div class="box-inner-div">
                                        <h5 class="text-bold mb-0">Total Department</h5>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="counter-count fa-3x dept-count-color">{{ getTotaldepartments() }}</p>
                                            </div>
                                            <div class="col-md-6">
                                                <i class="fa fa-exclamation-triangle fa-3x" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 d-flex justify-content-center">
                                    <div class="box-inner-div">
                                        <h5 class="text-bold mb-0">Total JD</h5>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="counter-count fa-3x heads-count-color">
                                                    {{ getTotalJD() }}</p>
                                            </div>
                                            <div class="col-md-6">
                                                <i class="fa fa-users fa-3x" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="graph-backgroung padding-5 mt-2" id="container1">


                        </div>


                    </div>
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="box-outer-div padding-5">
                                    <h3>Score</h3>
                                    <div class="list-group">
                                        <a href="#"
                                           class="list-group-item d-flex justify-content-between no-border year-active alert alert-danger">
                                            <span>Year(2018 - 2019)</span>
                                            <span>N/A</span>
                                        </a>
                                        <a href="#"
                                           class="list-group-item d-flex justify-content-between no-border ">
                                            <span>Year(2017 - 2018)</span>
                                            <span>N/A</span>
                                        </a>
                                        <a href="#"
                                           class="list-group-item d-flex justify-content-between no-border">
                                            <span>Year(2016 - 2017)</span>
                                            <span>N/A</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="row mt-2 mb-2">
                    <div class="col-md-6 graph-backgroung">
                        <p class="mb-0 pt-4"><b>Critical Zones</b></p>

                        {!! $horizontalBar->render() !!}
                    </div>
                    <div class="col-md-6">
                        <div class="box-shadow bg-white padding-5 table-responsive">
                            <div class="row pb-1 pt-1 d-flex align-items-center">
                                <div class="col-md-6">
                                    <p><b>Top Performance</b></p>
                                </div>

                                <div class="col-md-6">
                                    <select id="filter-by-brand" class="form-control" name="nname"
                                            onchange="getperformanceLevel(this.value)">
                                        <option value="" selected>Filter By Range</option>

                                        <option value="0-12">Highest</option>
                                        <option value="12-25">Next highest</option>
                                        <option value="25-34">Middle rated</option>
                                        <option value="0-0">Next Middle Rated</option>
                                        <option value="12-22">Low rated</option>
                                        <option value="0-0">Next Low Rated</option>
                                        <option value="0-7">Lowest rated</option>
                                    </select>
                                </div>

                            </div>
                            <table id="example" class="table table-bordered table-hover table-striped table-responsive"
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




                <div class="row mt-2 mb-2">
                    <div class="col-md-6">
                        <div class="box-shadow bg-white padding-5 table-responsive">
                            <div class="row pb-1 pt-1 d-flex align-items-center">
                                <div class="col-md-6">
                                    <p><b>Close Monitoring & Training</b></p>
                                </div>

                            </div>
                            <table id="MonitoringTraining" class="table table-bordered table-hover table-striped table-responsive" style="width: 100%;"
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
                                @foreach($employee_full_score as $emps)
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
                            </table>
                        </div>
                    </div>


                    <div class="col-md-6">
                        <div class="box-shadow bg-white padding-5p padding-5 table-responsive">
                            <div class="row pb-1 pt-1 d-flex align-items-center">
                                <div class="col-md-6">
                                    <p><b>Assesment Status</b></p>
                                </div>
                                <div class="col-md-6">
                                    <span class="due-date-css">Due Date: {{ $as->duration_to }}</span>
                                </div>
                            </div>
                            <table id="userNotCompleted" class="table table-bordered table-hover table-striped table-responsive"
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
                                @foreach($userNotCompleted as $emp)
                                    <tr role="row" class="odd">
                                        <td class="sorting_1">{{ $emp->employee_name }}</td>
                                        <td>{{ $emp->designation }}</td>
                                        @if(CheckMyAssessments($emp->oranagram_id,$emp->email,$companyID))
                                            <td>{{ CheckMyAssessments($emp->oranagram_id,$emp->email,$companyID) }}</td>
                                            @if(getCompletedAs($emp->id,request()->get('notify_id')))
                                                <td>{{ getCompletedAs($emp->id,request()->get('notify_id')) }}</td>
                                                <td>0</td>
                                            @else
                                                <td>{{ getCompletedAs($emp->id,request()->get('notify_id')) }}</td>
                                                <td>{{ getCompletedAs($emp->id,request()->get('notify_id')) }}</td>
                                            @endif
                                        @else
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>

                                        @endif
                                    </tr>
                                @endforeach

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="row mt-2 mb-2">
                    <div class="col-lg-12">
                    <div class="box">
                        <table class="table table-bordered table-hover table-striped table-responsive">
                            <tr>
                                <th>Minimum</th>
                                <th>Maximum</th>
                                <th>Mean</th>
                                <th>Standard Deviation</th>
                                <th>variance</th>
                                <th>median</th>
                                <th>skew</th>
                                <th>skew</th>
                                <th>skew</th>
                            </tr>
                            <tr>


                                @foreach($full->DataStats[0][0] as $k => $v)
                                    <td>{{ $v }}</td>
                                @endforeach
                            </tr>
                        </table>

                        <table class="table table-bordered table-hover table-striped table-responsive">
                            <tr>
                            @foreach($full->resultData as $sec)

                                @foreach($sec[0] as $k => $v)
                                    @if(is_object($v))
                                        <tr>
                                            <td>{{ $k }}
                                                <table class="table table-bordered table-hover table-striped table-responsive">
                                                    <tr>
                                                        @foreach($v as $d => $kv)
                                                            <th>{{ $d }} </th>
                                                            <td>{!! (float)$kv !!}</td>
                                                        @endforeach
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    @else
                                        <tr>
                                            <th>{{ $k }} </th>
                                            <td>{!! $v !!}</td>
                                        </tr>
                                        @endif
                                        @endforeach

                                        @endforeach
                                        </tr>
                        </table>


                    </div>
                </div>
                </div>
            @endif


        @endif


    </section>
@endsection
@if(!isset($empty))
    @push('bottom')
        <script>

            Highcharts.chart('boxplot', {

                chart: {
                    type: 'boxplot'
                },

                title: {
                    text: 'Employee\'s Box Plot'
                },

                legend: {
                    enabled: false
                },

                xAxis: {
                    categories: ['1', '2', '3', '4', '5'],
                    title: {
                        text: 'Experiment No.'
                    }
                },

                yAxis: {
                    title: {
                        text: 'Observations'
                    },
                    plotLines: [{
                        value:  <?php echo $average;?>,
                        color: 'red',
                        width: 1,
                        label: {
                            text: 'Theoretical mean:  <?php echo $average;?>',
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
                        <?php echo json_encode($plot_box)?>,

                    ],
                    tooltip: {
                        headerFormat: '<em>Experiment No {point.key}</em><br/>'
                    }
                }, {
                    name: 'Outlier',
                    color: Highcharts.getOptions().colors[0],
                    type: 'scatter',
                    data: [ // x, y positions where 0 is the first category
                        [<?php echo $min;?>, <?php echo $max;?>],


                    ],
                    marker: {
                        fillColor: 'white',
                        lineWidth: 1,

                        lineColor: Highcharts.getOptions().colors[0]
                    },
                    tooltip: {
                        pointFormat: 'Observation: {point.y}'
                    }
                }]

            });

            Highcharts.chart('basicline', {

                title: {
                    text: 'Employment Scores'
                },

                subtitle: {
                    text: ''
                },
                xAxis: {
                    pointStart: 1,
                    tickInterval: 1,

                },
                yAxis: {
                    title: {
                        text: 'Number of Employees'
                    },
                    plotLines: [{
                        color: 'red',
                        value: '<?php echo $average;?>', // Insert your average here
                        width: '1',
                        zIndex: 2 // To not get stuck below the regular plot lines
                    }]
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },

                    }
                },

                series: [{
                    name: 'Employee Scores',
                    data: <?php echo json_encode($chart_data);?>
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


            @if(isset($full))
            Highcharts.chart('scatter', {
                chart: {
                    type: 'scatter',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Abserror vs DependentData '
                },

                xAxis: {
                    title: {
                        enabled: true,
                        text: 'Height'
                    },
                    startOnTick: true,
                    endOnTick: true,
                    showLastLabel: true
                },
                yAxis: {
                    title: {
                        text: 'Scores'
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
                    name: 'Employee Ranks',
                    color: 'rgba(223, 83, 83, .5)',
                    data: [
                        <?php
                        $last_array = end($IndependentData);
                        foreach ($IndependentData as $d) {
                            echo "[$d],";
                        }
                        ?>
                    ]

                },]
            });


            Highcharts.chart('lineChart', {

                title: {
                    text: 'DependentData vs IndependentData'
                },

                xAxis: {
                    tickInterval: 1
                },

                yAxis: {
                    type: 'logarithmic',
                    minorTickInterval: 0.1
                },

                tooltip: {
                    headerFormat: '<b>{series.name}</b><br />',
                    pointFormat: 'x = {point.x}, y = {point.y}'
                },

                series: [{
                    data: <?php echo json_encode($abserror);?>,
                    pointStart: 1
                }]
            });

            @endif


            $("#userNotCompleted,#MonitoringTraining").DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'excel', 'pdf',
                ]
            });

            // number counter
            // $('.counter-count').each(function () {
            //     $(this).prop('Counter', 0).animate({
            //         Counter: $(this).text()
            //     }, {
            //         duration: 5000,
            //         easing: 'swing',
            //         step: function (now) {
            //             $(this).text(Math.ceil(now));
            //         }
            //     });
            // });
            // http://jsfiddle.net/phpepe/dKLDc/
            $(function () {
                $('#container').highcharts({
                    chart: {
                        type: 'line',
                        zoomType: 'xy'
                    },
                    title: {
                        text: 'Polynomial regression - with extrapolation'
                    },
                    subtitle: {
                        text: 'Source: Heinz  2003'
                    },
                    xAxis: {
                        title: {
                            enabled: true,
                            text: 'Height (cm)'
                        },
                        startOnTick: true,
                        endOnTick: true,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: 'Weight (kg)'
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        x: 100,
                        y: 70,
                        floating: true,
                        backgroundColor: '#FFFFFF',
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
                                // headerFormat: '<b>{series.name}</b><br>',
                                // pointFormat: '{point.x} cm, {point.y} kg'
                            }
                        }
                    },
                    series: [{
                        regression: false,
                        regressionSettings: {
                            type: 'polynomial',
                            color: 'rgba(223, 183, 83, .9)',
                            dashStyle: 'dash',
                            order: 6,
                        },
                        name: 'R^2 = 0.92',
                        color: 'rgba(223, 83, 83, .5)',
                        data: [[167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3]]

                    }]
                });
            });

            Highcharts.chart('container1', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Final Score'
                },
                xAxis: {
                    categories: <?php echo json_encode($flabel);?>
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: $("#assessment_form option:selected").html(),
                    data: <?php echo json_encode($fdata);?>
                }]
            });

            axios.get('/api/getPerformance?notify_id='+$('#notify_id').val())
                .then(function (res) {
                    $("#dataShowPerfomance").html(res.data.data);
                });


            function getperformanceLevel(range) {

                var array = range.split("-");
                console.log(array);
                axios.get('/api/getPerformance?notify_id='+$('#notify_id').val()+'&range1=' + array[0] + "&range2=" + array[1] + "&company_id={{ getCompanyID() }}")
                    .then(function (res) {
                        $("#dataShowPerfomance").html(res.data.data);
                    });

            }

        </script>

    @endpush
@endif
