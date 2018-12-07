<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="/css/jquery.orgchart.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap.min.css">

</head>
<body>

    <div id="app">

        <div id="chart-container 456"></div>


    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="/js/jquery.mockjax.min.js"></script>

    <script type="text/javascript" src="/js/jquery.orgchart.js"></script>
    <script type="text/javascript" src="/js/common.js"></script>
    <script type="text/javascript">


        $(function() {

            $.mockjax({
                url: '/orgchart/initdata',
                responseTime: 1000,
                contentType: 'application/json',
                responseText: <?php  echo json_encode($data_users); ?>
            });

            $('#chart-container').orgchart({
                'data' : '/orgchart/initdata',
                'nodeContent': 'title'
            });

            $(  '#content_section p').addClass('goback');

        });
    </script>


</body>
</html>
