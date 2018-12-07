@extends('crudbooster::admin_template')
@section('content')

    <section>
        <div class="row">
            <div class="col-lg-12">
                <div class="box-outer-div padding-3">
                    <form method="GET" action="" name="appraisalform" class="form-inline">
                        <select name="notify" class="form-control">
                            <option value="">* Select Assessment</option>
                            <option value="0"> Default Org</option>
                            @foreach ($notify_id as $item)
                                <option value="{{$item->id}}" {{($as->id == $item->id) ? "selected" : ""}}>{{$item->a_name}}</option>
                            @endforeach
                        </select>
                            <button type="submit" class="btn btn-success">Get Structure</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="boardmembers">
            @if ($boardmember)
                <div class="row">
                    @foreach ($boardmember as $b)
                        <div class="col-md-3">
                            <div class="boardmem">
                                <div class="node">
                                    <div class="title"><i class="fa fa-users symbol"></i>{{$b->name}}</div>
                                    <div class="content">{{$b->designation}}</div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            @endif
        </div>
        @if ($data_users)
            <div id="chart-container"></div>
        @endif
    </section>

@endsection

@push('bottom')

    <script type="text/javascript">

        $(function () {
            @if ($data_users)
                $.mockjax({
                    url: '/orgchart/initdata',
                    responseTime: 1000,
                    contentType: 'application/json',
                    responseText: <?php  echo json_encode($data_users); ?>
                });

                $('#chart-container').orgchart({
                    'data': '/orgchart/initdata',
                    'nodeContent': 'title'
                });
            @endif
        });

    </script>
@endpush
