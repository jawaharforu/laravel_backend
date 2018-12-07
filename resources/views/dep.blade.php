@extends('crudbooster::admin_template')
@section('content')
    <section>
        <div class="row">
            <div class="col-md-12">
                <div class="box-outer-div">
                    <div class="row">
                        <div class="col-md-3 d-flex justify-content-center gery-border-right">
                            <div class="row">
                                <div class="col-md-12 gery-border-bottom">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <h5 class="text-center text-bold mb-0">Total Employees</h5>
                                            <p class="text-center text-grey">This is dummy text </p>
                                        </div>
                                        <div class="col-md-5">
                                            <p class="counter-count fa-2x employee-count-color">34578</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 gery-border-bottom">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <h5 class="text-center text-bold mb-0">Total Employees</h5>
                                            <p class="text-center text-grey">This is dummy text </p>
                                        </div>
                                        <div class="col-md-5">
                                            <p class="counter-count fa-2x employee-count-color">1,800</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <h5 class="text-center text-bold mb-0">Total Employees</h5>
                                            <p class="text-center text-grey">This is dummy text </p>
                                        </div>
                                        <div class="col-md-5">
                                            <p class="counter-count fa-2x employee-count-color"><i class="fa
                                            fa-inr"></i> 20L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center gery-border-right">
                            <div class="box-inner-div">
                                <h5 class="text-bold mb-0">Total Employees</h5>
                                <p class="text-left text-grey">This is dummy text </p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <p class="counter-count fa-3x employee-count-color">281</p>
                                    </div>
                                    <div class="col-md-6">
                                        <i class="fa fa-user fa-5x" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center gery-border-right">
                            <div class="box-inner-div">
                                <h5 class="text-bold mb-0">Total Department</h5>
                                <p class="text-left text-grey">This is dummy text </p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <p class="counter-count fa-3x dept-count-color">521</p>
                                    </div>
                                    <div class="col-md-6">
                                        <i class="fa fa-exclamation-triangle fa-5x" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center gery-border-right">
                            <div class="box-inner-div">
                                <h5 class="text-bold mb-0">Total Devisions</h5>
                                <p class="text-left text-grey">This is dummy text </p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <p class="counter-count fa-3x division-count-color">200</p>
                                    </div>
                                    <div class="col-md-6">
                                        <i class="fa fa-refresh fa-5x" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="row mt-2 mb-2">
                    <div class="col-md-12">
                        <div class="graph-backgroung padding-5">
                            <div class="row pb-1 pt-1 d-flex align-items-center">
                                <div class="col-md-7">
                                    <p><b>Sales</b></p>
                                </div>
                                <div class="col-md-5">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <i class="fa fa-2x fa-refresh" aria-hidden="true"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <select class="filter-by-day" name="nname">
                                                <option value="" selected>Today</option>
                                                <option value="AL">Alabama</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 class="pt-4"><b>Sales</b></h4>
                            <div id="sales-chart" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="box-shadow bg-white padding-5 table-responsive">
                            <div class="row pb-1 pt-1 d-flex align-items-center">
                                <div class="col-md-7">
                                    <h4><b>Invoices</b></h4>
                                </div>
                                <div class="col-md-5">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <i class="fa fa-2x fa-refresh" aria-hidden="true"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <select class="filter-by-day" name="nname">
                                                <option value="" selected>Today</option>
                                                <option value="AL">Alabama</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table class="table table-hover">
                                <thead>

                                </thead>
                                <tbody>
                                <tr>
                                    <td>0450</td>
                                    <td>precipitats unde</td>
                                    <td><span class="due-soon">Due Soon</span></td>
                                    <td>8/6/2018</td>
                                    <td>Strength</td>
                                    <td><i class="fa fa-inr"></i>25,850</td>
                                </tr>
                                <tr>
                                    <td>1025</td>
                                    <td>precipitats unde</td>
                                    <td><span class="expired">Expied</span></td>
                                    <td>8/6/2018</td>
                                    <td>Growth</td>
                                    <td><i class="fa fa-inr"></i>25,850</td>
                                </tr>
                                <tr>
                                    <td>058</td>
                                    <td>precipitats unde</td>
                                    <td><span class="approved">Approved</span></td>
                                    <td>8/6/2018</td>
                                    <td>Strength</td>
                                    <td><i class="fa fa-inr"></i>25,850</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="col-md-12">
                        <div class="box-shadow bg-white padding-5 table-responsive">
                            <div class="row pb-1 pt-1 d-flex align-items-center">
                                <div class="col-md-7">
                                    <h4><b>Support Request</b></h4>
                                </div>
                                <div class="col-md-5">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <i class="fa fa-2x fa-refresh" aria-hidden="true"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <select class="filter-by-day" name="nname">
                                                <option value="" selected>Today</option>
                                                <option value="AL">Alabama</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <h3>Payment failed</h3>
                                                <span>4 Jan 2018, 05:00 PM</span>
                                                <p>st ut precipitats unde omnis</p>
                                            </td>
                                            <td class="button-align-middle">
                                                <span class="pay-sucess">Closed</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3>Payment failed</h3>
                                                <span>4 Jan 2018, 05:00 PM</span>
                                                <p>st ut precipitats unde omnis</p>
                                            </td>
                                            <td class="button-align-middle">
                                                <span class="pay-failed">Open</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-6">
                <div class="row mt-2 mb-2">
                    <div class="col-md-12">
                        <div class="graph-backgroung padding-5">
                            <p class="mb-0 pt-4"><b>Final Score</b></p>
                            <div id="subs-chart" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="col-md-12">
                        <div class="graph-backgroung padding-5">
                            <h4>Due for renewal in 3 months</h4>
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th class="table-heading-color">Company Name</th>
                                    <th class="table-heading-color">Date</th>
                                    <th class="table-heading-color">Subscription Type</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>precipitats unde</td>
                                    <td>8/6/2018</td>
                                    <td class="table-heading-color">Strength</td>
                                </tr>
                                <tr>
                                    <td>precipitats unde</td>
                                    <td>8/6/2018</td>
                                    <td class="table-heading-color">Growth</td>
                                </tr>
                                </tbody>
                            </table>
                            <h4>Subscription expired in last 3 months</h4>
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th class="table-heading-color">Company Name</th>
                                    <th class="table-heading-color">Date</th>
                                    <th class="table-heading-color">Subscription Type</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>precipitats unde</td>
                                    <td>8/6/2018</td>
                                    <td class="table-heading-color">Strength</td>
                                </tr>
                                <tr>
                                    <td>precipitats unde</td>
                                    <td>8/6/2018</td>
                                    <td class="table-heading-color">Growth</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="box-shadow bg-white padding-5 table-responsive">
                            <div class="row pb-1 pt-1 d-flex align-items-center">
                                <div class="col-md-7">
                                    <h4><b>Active Companies</b></h4>
                                </div>
                                <div class="col-md-5">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <i class="fa fa-2x fa-refresh" aria-hidden="true"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <select class="filter-by-day" name="nname">
                                                <option value="" selected>Today</option>
                                                <option value="AL">Alabama</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <table class="table table-striped">
                                        <thead>
                                        <tr>
                                            <th class="table-heading-color">Company Name</th>
                                            <th class="table-heading-color">Date</th>
                                            <th class="table-heading-color">Subscription Type</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>precipitats unde</td>
                                            <td>8/6/2018</td>
                                            <td class="table-heading-color">Strength</td>
                                        </tr>
                                        <tr>
                                            <td>precipitats unde</td>
                                            <td>8/6/2018</td>
                                            <td class="table-heading-color">Growth</td>
                                        </tr>
                                        <tr>
                                            <td>precipitats unde</td>
                                            <td>8/6/2018</td>
                                            <td class="table-heading-color">Growth</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




@endsection


@push('bottom')

    <script>
        $('select').select2();
        Highcharts.chart('sales-chart', {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: ' '
            },
            subtitle: {
                text: ' '
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: ' ',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: ' ',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: ' ',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: -170,
                verticalAlign: 'right',
                y: 0,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
            },
            series: [{
                name: 'Rainfall',
                type: 'column',
                yAxis: 1,
                data: [30, 25, 40, 32, 38.0, 38.0, 45.6, 38.5, 30.4, 23.1],
                tooltip: {
                    valueSuffix: ' mm'
                }

            }, {
                name: 'Temperature',
                type: 'spline',
                data: [30, 25, 30, 32, 38.0, 38.0, 45.6, 38.5, 30.4, 23.1],
                tooltip: {
                    valueSuffix: '°C'
                }
            }]
        });

        Highcharts.chart('subs-chart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: ' '
            },
            subtitle: {
                text: ' '
            },
            xAxis: {
                categories: ['Foundation', 'Strength', 'Growth'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: ' ',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: -80,
                floating: true,
                borderWidth: 1,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Year 1800',
                data: [45, 45, 67]
            }]
        });

    </script>
@endpush