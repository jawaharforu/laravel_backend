@extends('crudbooster::admin_template')
@section('content')
    <div class="row mt-2 mb-2">
        <div class="col-md-12">
            <div class="box-outer-div dashboard-one shadow-lg">
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-3 total-row">
                        <div class="row total-bottom">
                            <div class="col-md-8 total-title">
                                <b><p>Total Companies</p></b>
                            </div>
                            <div class="col-md-4 total-value">{{ count($dept_emp)}}</div>
                        </div>
                        <div class="row total-bottom">
                            <div class="col-md-8 total-title">
                                <b><p>Total Orders</p></b>
                            </div>
                            <div class="col-md-4 total-value">26485</div>
                        </div>
                        <div class="row">
                            <div class="col-md-8 total-title">
                                <b><p>Total Revenue</p></b>
                            </div>
                            <div class="col-md-4 total-value">26485</div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 dashboard-right">
                        {{-- <div class="row"> --}}
                            {{-- <div class="col-md-12 col-sm-12 col-lg-12 dashboard-title"> --}}
                                <p class="dashboard-title">New Clients</p>
                            {{-- </div> --}}
                            {{-- <div class="col-md-12 col-sm-12 col-lg-12"><p>Sed Ut perspiciatis unde</p></div> --}}
                        {{-- </div> --}}
                        {{-- <div class="row"> --}}
                            {{-- <div class="col-md-6 col-sm-6 col-lg-6 dashboard-value-1"> --}}
                                <p class="dashboard-value-1">281</p>
                            {{-- </div> --}}
                            {{-- <div class="col-md-6 col-sm-6 col-lg-6"><p><i class="fa fa-5x fa-building" aria-hidden="true"></i></p></div> --}}
                        {{-- </div> --}}
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 dashboard-right">
                        {{-- <div class="row"> --}}
                            {{-- <div class="col-md-12 col-sm-12 col-lg-12 dashboard-title"> --}}
                                <p class="dashboard-title">Clients Expired</p>
                            {{-- </div> --}}
                            {{-- <div class="col-md-12 col-sm-12 col-lg-12"><p>Sed Ut perspiciatis unde</p></div> --}}
                        {{-- </div> --}}
                        {{-- <div class="row"> --}}
                            {{-- <div class="col-md-6 col-sm-6 col-lg-6 dashboard-value-2"> --}}
                                <p class="dashboard-value-2">281</p>
                            {{-- </div> --}}
                            {{-- <div class="col-md-6 col-sm-6 col-lg-6"><p><i class="fa fa-5x fa-building" aria-hidden="true"></i></p></div> --}}
                        {{-- </div> --}}
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 dashboard-right">
                        {{-- <div class="row"> --}}
                            {{-- <div class="col-md-12 col-sm-12 col-lg-12 dashboard-title"> --}}
                                <p class="dashboard-title">Due for Renewal</p>
                            {{-- </div> --}}
                            {{-- <div class="col-md-12 col-sm-12 col-lg-12"><p>Sed Ut perspiciatis unde</p></div> --}}
                        {{-- </div> --}}
                        {{-- <div class="row"> --}}
                            {{-- <div class="col-md-6 col-sm-6 col-lg-6 dashboard-value-3"> --}}
                                <p class="dashboard-value-3">281</p>
                            {{-- </div> --}}
                            {{-- <div class="col-md-6 col-sm-6 col-lg-6"><p><i class="fa fa-5x fa-building" aria-hidden="true"></i></p></div> --}}
                        {{-- </div> --}}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-2 mb-2">
        <div class="col-md-6">
            <div class="box-outer-div padding-3">
                <div class="row">
                    <div class="col-md-12 salegraph-title">Sale</div>
                    <div class="col-md-12 salegraph-amount">25,580</div>
                    <div id="salegraph" class="col-md-12"></div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="box-outer-div padding-3">
                <div class="row">
                    <div class="col-md-12 subscriptiongraph-title">Subscription Type Scale</div>
                    <div id="subscriptiongraph" class="col-md-12"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-2 mb-2">
        <div class="col-md-6">
            <div class="box-outer-div padding-3">
                <div class="row"><p class="total-title">Invoices</p></div>
                <table class="table table-responsive table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-6">
            <div class="box-outer-div padding-3">
                <div class="row">
                    <p class="total-title">Due for renewal in 3 months</p>
                </div>
                <table class="table table-responsive table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="row mt-2 mb-2">
        <div class="col-md-6">
            <div class="box-outer-div padding-3">
                <div class="row">
                    <p class="total-title">Subscription expired in last 3 months</p>
                </div>
                <table class="table table-responsive table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    {{-- </div>
    <div class="row mt-2 mb-2"> --}}
            <div class="col-md-6">
                <div class="box-outer-div padding-3">
                    <div class="row"><p class="total-title">Support Request</p></div>
                    <div class="row payment">
                        <div class="col-md-8">
                            <p class="sr-title">Payment Failed</p>
                            <p class="sr-date">Date:11/08/2018</p>
                            <p class="sr-description">Sed un perspiciatis unde</p>
                        </div>
                        <div class="col-md-4">
                            <button class="btn btn-danger">Closed</button>
                        </div>
                    </div>
                    <div class="row creditcard">
                        <div class="col-md-8">
                            <p class="sr-title">Credit Card</p>
                            <p class="sr-date">Date:11/08/2018</p>
                            <p class="sr-description">Sed un perspiciatis unde</p>
                        </div>
                        <div class="col-md-4">
                            <button class="btn btn-success">Open</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="box-outer-div padding-3">
                    <div class="row"><p class="total-title">Active Companies</p></div>
                    <table class="table table-responsive table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    
@endsection
@push('bottom')
    <script>
        Highcharts.chart('subscriptiongraph', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
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
        data: [107, 31, 635, 203, 2]
    }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
    }, {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
    }]
});







Highcharts.chart('salegraph', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: ''
    },
    yAxis: {
        title: {
            text: ''
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    "series": [
        {
            "name": "Browsers",
            "colorByPoint": true,
            "data": [
                {
                    "name": "Chrome",
                    "y": 62.74,
                    "drilldown": "Chrome"
                },
                {
                    "name": "Firefox",
                    "y": 10.57,
                    "drilldown": "Firefox"
                },
                {
                    "name": "Internet Explorer",
                    "y": 7.23,
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "Safari",
                    "y": 5.58,
                    "drilldown": "Safari"
                },
                {
                    "name": "Edge",
                    "y": 4.02,
                    "drilldown": "Edge"
                },
                {
                    "name": "Opera",
                    "y": 1.92,
                    "drilldown": "Opera"
                },
                {
                    "name": "Other",
                    "y": 7.62,
                    "drilldown": null
                }
            ]
        }
    ],
    "drilldown": {
        "series": [
            {
                "name": "Chrome",
                "id": "Chrome",
                "data": [
                    [
                        "v65.0",
                        0.1
                    ],
                    [
                        "v64.0",
                        1.3
                    ],
                    [
                        "v63.0",
                        53.02
                    ],
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ],
                    [
                        "v60.0",
                        0.56
                    ],
                    [
                        "v59.0",
                        0.45
                    ],
                    [
                        "v58.0",
                        0.49
                    ],
                    [
                        "v57.0",
                        0.32
                    ],
                    [
                        "v56.0",
                        0.29
                    ],
                    [
                        "v55.0",
                        0.79
                    ],
                    [
                        "v54.0",
                        0.18
                    ],
                    [
                        "v51.0",
                        0.13
                    ],
                    [
                        "v49.0",
                        2.16
                    ],
                    [
                        "v48.0",
                        0.13
                    ],
                    [
                        "v47.0",
                        0.11
                    ],
                    [
                        "v43.0",
                        0.17
                    ],
                    [
                        "v29.0",
                        0.26
                    ]
                ]
            },
            {
                "name": "Firefox",
                "id": "Firefox",
                "data": [
                    [
                        "v58.0",
                        1.02
                    ],
                    [
                        "v57.0",
                        7.36
                    ],
                    [
                        "v56.0",
                        0.35
                    ],
                    [
                        "v55.0",
                        0.11
                    ],
                    [
                        "v54.0",
                        0.1
                    ],
                    [
                        "v52.0",
                        0.95
                    ],
                    [
                        "v51.0",
                        0.15
                    ],
                    [
                        "v50.0",
                        0.1
                    ],
                    [
                        "v48.0",
                        0.31
                    ],
                    [
                        "v47.0",
                        0.12
                    ]
                ]
            },
            {
                "name": "Internet Explorer",
                "id": "Internet Explorer",
                "data": [
                    [
                        "v11.0",
                        6.2
                    ],
                    [
                        "v10.0",
                        0.29
                    ],
                    [
                        "v9.0",
                        0.27
                    ],
                    [
                        "v8.0",
                        0.47
                    ]
                ]
            },
            {
                "name": "Safari",
                "id": "Safari",
                "data": [
                    [
                        "v11.0",
                        3.39
                    ],
                    [
                        "v10.1",
                        0.96
                    ],
                    [
                        "v10.0",
                        0.36
                    ],
                    [
                        "v9.1",
                        0.54
                    ],
                    [
                        "v9.0",
                        0.13
                    ],
                    [
                        "v5.1",
                        0.2
                    ]
                ]
            },
            {
                "name": "Edge",
                "id": "Edge",
                "data": [
                    [
                        "v16",
                        2.6
                    ],
                    [
                        "v15",
                        0.92
                    ],
                    [
                        "v14",
                        0.4
                    ],
                    [
                        "v13",
                        0.1
                    ]
                ]
            },
            {
                "name": "Opera",
                "id": "Opera",
                "data": [
                    [
                        "v50.0",
                        0.96
                    ],
                    [
                        "v49.0",
                        0.82
                    ],
                    [
                        "v12.1",
                        0.14
                    ]
                ]
            }
        ]
    }
});
    </script>
@endpush
