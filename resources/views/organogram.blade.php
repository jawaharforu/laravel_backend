<!-- First you need to extend the CB layout -->
@extends('crudbooster::admin_template')
@section('content')
<!-- Your custom  HTML goes here -->
<table class='table table-striped table-bordered'>
  <thead>
      <tr>
        {{-- <th>Assessment</th> --}}
        <th>Name</th>
        <th>No. of sublevel</th>
        <th>Sublevel</th>
        <th>Action</th>
       </tr>
  </thead>
  <tbody>
    @foreach($result as $row)
      <tr>
        {{-- <td>{{getAssessmenttypeName($row->assessment_id)}}</td> --}}
        <td>{{$row->head_name}}</td>
        <td>{{ getOrgChildCount($row->id) }}</td>
        <td><a href="{{Request::url()}}/?parent={{$row->id}}">Sub Levels</a></td>
        <td>
          <!-- To make sure we have read access, wee need to validate the privilege -->
          @if(CRUDBooster::isUpdate() && $button_edit)
          <a class='btn btn-success btn-sm' href='{{CRUDBooster::mainpath("edit/$row->id")}}'>Edit</a>
          @endif

          @if(CRUDBooster::isDelete() && $button_edit)
          <a class='btn btn-success btn-sm' href='{{CRUDBooster::mainpath("delete/$row->id")}}'>Delete</a>
          @endif
        </td>
       </tr>
    @endforeach
  </tbody>
</table>

<!-- ADD A PAGINATION -->
@endsection
