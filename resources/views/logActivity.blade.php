@extends('crudbooster::admin_template')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Log Activity Lists</h1>
                <table class="table table-bordered">
                    <tr>
                        <th>No</th>
                        <th>User Name</th>
                        <th>Subject</th>
                        <th>URL</th>
                        <th>Ip</th>
                        <th>User Agent</th>
                        <th>Date/Time</th>
                    </tr>
                    @if($logs->count())
                        @foreach($logs as $key => $log)
                            <tr>
                                <td>{{ ++$key }}</td>
                                <td>{{ getEmployeeNameFromUser($log->user_id) }}</td>
                                <td>{{ $log->subject }}</td>
                                <td class="text-success">{{ $log->url }}</td>
                                <td class="text-warning">{{ $log->ip }}</td>
                                <td class="text-danger">{{ $log->agent }}</td>
                                <td>{{ $log->created_at }}</td>
                            </tr>
                        @endforeach
                    @endif
                </table>
            </div>
        </div>
    </div>
@endsection
@push('bottom')

@endpush
