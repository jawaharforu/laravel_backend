@extends('crudbooster::admin_template')
@section('content')
    <section>

        <div class="box">
            <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>



            @if($full)
            <div class="col-lg-12">

                <img src="/DepDataVsIndepData1_modelplotLRP_14522_1536232649_5781393_1.png">
                <img src="/AbsErrVsDepDataLRP_14522_1536232649_5781393_1.png">
            <pre>

                    {!! print_r($full) !!}

            </pre>

            </div>
            @endif
        </div>
    </section>

@endsection


@push('bottom')

    <script>
        // http://jsfiddle.net/phpepe/dKLDc/
        $(function() {
            $('#container').highcharts({
                chart: {
                    type: 'scatter',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Polynomial regression - with extrapolation and different style'
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
                    regression: true,
                    regressionSettings: {
                        type: 'polynomial',
                        color: 'rgba(223, 183, 83, .9)',
                        dashStyle: 'dash',
                        order: 6,
                    },
                    name: 'R^2 = 0.92',
                    color: 'rgba(223, 83, 83, .5)',
                    data: {!!  json_encode($chart_data) !!}

                }]
            });
        });
    </script>
@endpush