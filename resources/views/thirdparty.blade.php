@extends('crudbooster::admin_template')
@section('content')
    <section>
        <div class="row">
            <div class="col-lg-12">
                <div class="box-outer-div padding-3">
                    <form method="GET" action="" name="appraisalform" class="form-inline">
                        <select name="notify" class="form-control">
                            <option value="">* Select Assessment</option>
                            @foreach ($notify_id as $item)
                                <option value="{{$item->id}}" {{($as->id == $item->id) ? "selected" : ""}}>{{$item->a_name}}</option>
                            @endforeach
                        </select>
                            <button type="submit" class="btn btn-success">Get Employee List</button>
                    </form>
                </div>
            </div>
        </div>
        @if($as)
            <div class="row mt-2 mb-2">
                <div class="col-lg-12">
                    <div class="box-outer-div padding-3">
                        <form action="" method="POST" name="employeesaveform">
                                {{ csrf_field() }}
                            <input type="hidden" value="{{$notify}}" name="tabledata">
                            <table class="table table-striped table-bordered">
                                <tr>
                                    <th>Employee Category</th>
                                    <th>Employee List</th>
                                    <th>Global Third party value</th>
                                </tr>
                                @foreach($employees as $key => $employee)
                                <tr>
                                    <td>{{getEmployeeCategory($key)}}</td>
                                    <td>
                                        <table>
                                            @foreach ($employee as $item)
                                            <tr>
                                                <td class="form-inline">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <label for="emp[{{$key}}][{{$item->id}}]" class="control-label">{{$item->employee_name}}</label>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <input type="number" class="form-control col-md-9" name="emp[{{$key}}][{{$item->id}}]" value="{{getthirdpartyvalue($as->id,$item->id)}}" />%
                                                        </div>
                                                           
                                                    </div>
                                                </td>                                                
                                            </tr>
                                            @endforeach
                                        </table>
                                    </td>
                                    <td>{{getGlobalSettingsThirdparty()}}</td>
                                </tr>
                                @endforeach
                            </table>
                            <button type="submit" class="btn btn-success">Save</button>
                        </form>
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
