@extends('crudbooster::admin_template')
@section('content')
    <section>
        <div class="row">
            <div class="col-lg-12">
                <div class="box-outer-div padding-3">
                    <form method="GET" action="" name="appraisalform">
                        <select name="notify_id" class="form-control">
                            <option value="">*Select Assessment</option>
                            @foreach ($notify_id as $item)
                                <option value="{{$item->id}}" {{($as->id == $item->id) ? "selected" : ""}}>{{$item->a_name}}</option>
                            @endforeach
                        </select>
                        <button type="submit" class="btn btn-success">Get List</button>
                    </form>
                </div>
            </div>
        </div>
        @if ($as)
            <div class="row mt-2 mb-2">
                <div class="col-lg-12">
                    <div class="box-outer-div padding-3">
                        <table class="table table-bordered table-hover table-striped">
                            @foreach ($employee_category as $item)
                                <tr>
                                    <th>{{$item->category}}</th>
                                    <td>
                                        <table class="table table-bordered table-hover table-striped">
                                            <tr>
                                                <th>Level</th>
                                                <th>Employees</th>
                                                <th>Fixed</th>
                                                <th>Variable</th>
                                                <th>Bonus</th>
                                            </tr>
                                            @foreach ($appraisal_level as $aprsl)
                                                <tr>
                                                    <td>{{$aprsl->level}}</td>
                                                    <td><?php echo levelbaseemployeelist($item->id,$as->id,$aprsl->percentail); ?></td>
                                                    <td>{{getappraisalvalue($item->id,$aprsl->id,'percent_fixed')}}</td>
                                                    <td>{{getappraisalvalue($item->id,$aprsl->id,'percent_variable')}}</td>
                                                    <td>{{getappraisalvalue($item->id,$aprsl->id,'percent_bonus')}}</td>
                                                </tr>
                                            @endforeach
                                        </table>
                                    </td>
                                </tr>
                            @endforeach
                        </table>
                    </div>
                </div>
            </div>
        @endif
    </section>
@endsection
@push('bottom')
    $(document).ready(function(){

    });
@endpush
