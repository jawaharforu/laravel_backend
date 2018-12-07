@extends('vendor.crudbooster.admin_template')

@section('content')
<section>
    <div class="box-body" id="parent-form-area">
        <div class="table-responsive">
            <table id="table-detail" class="table table-striped">
                <tbody>
                    <tr>
                        <th>From</th>
                        <td>{{ getEmployeeNameFromUser($messages->msg_from) }}</td>
                    </tr>
                    <tr>
                        <th>To</th>
                        <td>{{ getEmployeeNameFromUser($messages->msg_to) }}</td>
                    </tr>
                    <tr>
                        <th>Subject</th>
                        <td>{{ $messages->sub_title }}</td>
                    </tr>
                    <tr>
                        <th>Message</th>
                        <td><?php echo $messages->user_message; ?></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
@endsection
