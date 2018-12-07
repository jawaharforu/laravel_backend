@extends('crudbooster::admin_template')
@section('content')
    <section>
        <div class="row">
            <div class="col-lg-12">
                <div class="box-outer-div padding-3">
                    <form method="POST" action="{{ CRUDBooster::mainpath('save-data') }}" name="appraisalform">
                        {{ csrf_field() }}
                        <table class="table table-bordered">
                            @foreach ($employee_category as $item)
                                <tr>
                                    <th>{{$item->category}}</th>
                                    <td>
                                        <table class="table table-bordered">
                                            <tr>
                                                <th>Level</th>
                                                <th>Fixed</th>
                                                <th>Variable</th>
                                                <th>Bonus</th>
                                            </tr>
                                            @foreach ($appraisal_level as $aprsl)
                                                <tr>
                                                    <td>{{$aprsl->level}}</td>
                                                    <td><input type="text" name="percent_fixed[{{$item->id}}][{{$aprsl->id}}]" value="{{getappraisalvalue($item->id,$aprsl->id,'percent_fixed')}}" />%</td>
                                                    <td><input type="text" name="percent_variable[{{$item->id}}][{{$aprsl->id}}]" value="{{getappraisalvalue($item->id,$aprsl->id,'percent_variable')}}" />%</td>
                                                    <td><input type="text" name="percent_bonus[{{$item->id}}][{{$aprsl->id}}]" value="{{getappraisalvalue($item->id,$aprsl->id,'percent_bonus')}}" />%</td>
                                                </tr>
                                            @endforeach
                                        </table>
                                    </td>
                                </tr>
                            @endforeach
                        </table>
                        <button type="submit" class="btn btn-success">Save</button>
                        <a href="{{CRUDBooster::adminPath('appraisalapprover/appraisal-list')}}">Appraisal Assigned List</a>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
@push('bottom')
    $(document).ready(function(){

    });
@endpush
