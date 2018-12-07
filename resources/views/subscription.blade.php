@extends('crudbooster::admin_template')
@section('content')
    <div>
        <h2>Companies Subscription Information</h2>
    </div>
    <table id="example" class="table table-striped table-bordered nowrap" style="width:100%">
        <thead>
        <tr>
            <th>Company Name</th>
            <th>Product</th>
            <th>Registration Date</th>
            <th>Email ID</th>
            <th>Contact Number</th>
            <th>Due Date</th>
            <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        @foreach($allCompanies as $Companies)
            @if(is_int($Companies->name) == 'false' || is_int($Companies->industry) == false)
        <tr>
            <td>{{$Companies->name}}</td>
            <td>{{$Companies->industry}}</td>
            <td>{{$Companies->created_at}}</td>
            <td>{{$Companies->email}}</td>
            <td>{{$Companies->company_contact}}</td>
            <td>{{$Companies->created_at}}</td>
            <td>$11,211</td>
        </tr>
        @endif
       @endforeach
        </tbody>
        <tfoot>
        <tr>
            <th>Company Name</th>
            <th>Product</th>
            <th>No of Employees</th>
            <th>Registration Date</th>
            <th>Contact Number</th>
            <th>Due Date</th>
            <th>Amount</th>
        </tr>
        </tfoot>
    </table>
@endsection
@push('bottom')
<script>
    $(document).ready(function() {
        var table = $('#example').DataTable( {
            responsive: true
        } );

        new $.fn.dataTable.FixedHeader( table );
    } );
</script>
@endpush
