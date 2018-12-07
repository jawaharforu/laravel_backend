@extends('crudbooster::admin_template')
@section('content')
    <section>
            <div class='form-group'>
                <form method="POST" action="">
                        {{ csrf_field() }}
                        <label>Assessment form</label>
                        <select id="assessment_form" name="assessid" class="form-control">
                            <option value="all">Over all Result</option>
                            @foreach ($notify_id as $item)
                            <option value="{{$item->id}}" {{($assessid == $item->id) ? "selected" : ""}}>{{$item->a_name}}</option>
                            @endforeach
                        </select>
                        <button type="submit" class="btn btn-success getlistscore pull-right">Get Records</button>
                </form>
            </div>
            <div class="fulldata">
                @if ($overallscore && $overallscore!=false)
                    <div>
                        <p>Score: {{ $overallscore }}</p>
                        <div id="jg2" class="gauge"></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6" id="container1" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                    </div>
                    <div class="row">
                        @foreach ($fullskill as $k => $item)
                            <div class="col-sm-6" id="container{{$k}}" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                        @endforeach
                    </div>
                    <div class="row">
                        @if ($fullgap)
                            @foreach ($fullgap as $k => $item)
                                <div class="col-sm-6" id="containergap{{$k}}" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                            @endforeach
                        @endif
                    </div>
                @else
                    <div class="row">
                        <p><h1 style="text-align:center;">No Data Available!</h1></p>
                    </div>
                @endif

            </div>
    </section>
@endsection
@if ($overallscore && $overallscore!=false)
@push('bottom')
<script src="/js/raphael-2.1.4.min.js"></script>
<script src="/js/justgage.js"></script>
<script>
        document.addEventListener("DOMContentLoaded", function(event) {

            var jg2 = new JustGage({
              id: "jg2",
              value : <?php echo $overallscore; ?>,
              min: 0,
              max: 100,
              gaugeWidthScale: 0.6,
              customSectors: {
                ranges: [{
                  color : "#43bf58",
                  lo : 0,
                  hi : 50
                },{
                  color : "#ff3b30",
                  lo : 51,
                  hi : 100
                }]
              },
              counter: true
            });

            document.getElementById('jg2_refresh').addEventListener('click', function() {
              jg2.refresh(getRandomInt(0, 100));
            });
        });
        Highcharts.chart('container1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Column chart with negative values'
            },
            xAxis: {
                categories: <?php echo json_encode($assess_cate);?>
            },
            credits: {
                enabled: false
            },
            series: [{
                name: $("#assessment_form option:selected").html(),
                data: <?php echo json_encode($assess_value);?>
            }]
        });
        <?php
            foreach($fullskill as $k => $item) {
        ?>
        Highcharts.chart('container<?php echo $k; ?>', {
            chart: {
                type: 'column'
            },
            title: {
                text: <?php echo "'".getAssessmentType($k)."'";?>
            },
            xAxis: {
                categories: <?php echo json_encode($item['name']);?>
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}'//<br/>Total: {point.stackTotal}
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'Eve',
                data: <?php echo json_encode($item['eve']);?>
            },
            {
                name: 'Self',
                data: <?php echo json_encode($item['self']);?>
            }]
        });
        <?php } ?>
        <?php
            foreach($fullgap as $k => $item) {
        ?>
        Highcharts.chart('containergap<?php echo $k; ?>', {
            chart: {
                type: 'column'
            },
            title: {
                text: <?php echo "'".getAssessmentType($k)."'";?>
            },
            xAxis: {
                categories: <?php echo json_encode($item['name']);?>
            },
            yAxis: {
                softMax: 100,
                min: -100,
                plotLines: [{
                  value: -5,
                  width: 1,
                  color: 'rgba(204,0,0,0.75)'
                },{
                  value: 5,
                  width: 1,
                  color: 'rgba(204,0,0,0.75)'
                }]
            },
            credits: {
                enabled: false
            },
            series: [{
                name: $("#assessment_form option:selected").html(),
                data: <?php echo json_encode($item['gap']);?>
            }]
        });
        <?php } ?>
</script>
@endpush
@endif
