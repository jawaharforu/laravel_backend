@extends('crudbooster::admin_template')
@section('content')
    <section>
        @if ($assessment_detail)
                    <table class="preview-table">
                        <tr>
                            <th>Name</th>
                            <th>Period of Time</th>
                            <th>Description</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Due date</th>
                            <th>Employees Count</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td> <p>{{$assessment_detail->a_name}}</p></td>
                            <td>
                                @switch($assessment_detail->period_of_time)
                                    @case(1)
                                        <p>Yearly</p>
                                        @break
                                    @case(2)
                                        <p>Half-yearly</p>
                                        @break
                                    @case(3)
                                        <p>Quarterly</p>
                                        @break
                                    @default
                                @endswitch
                            </td>
                            <td> <p>{{$assessment_detail->a_desc}}</p></td>
                            <td> <p> {{$assessment_detail->duration_from}}</p></td>
                            <td> <p>{{$assessment_detail->duration_to}}</p></td>
                            <td> <p>{{$assessment_detail->due_date}}</p></td>
                            <td> <p> {{$emp_count}}</p></td>
                            <td>
                            <form method="POST" action="" name="assessmentapproveform">
                            {{ csrf_field() }}
                                    @if ($assessment_detail->approve==0)
                                        <input type="hidden" value="{{$assessment_detail->id}}" name="assessment_notify" />
                                        <input type="hidden" name="approve" value="1" />
                                        <button class="btn btn-info btn-send" type="submit">Notify</button>
                                    @elseif($assessment_detail->approve==1)
                                        <p class="send-sucsess">Assessment Sent Sucessfull</p>
                                    @else
                                        <p class="yetapprove">Waiting for MD approvel</p>
                                    @endif
                            </form>
                            <form method="POST" action="" name="assessmentapproveform">
                                {{ csrf_field() }}
                                    @if ($highlevel_approve == false && $assessment_detail->highlevel_approve==0)
                                        <p class="yetapprove">Waiting for MD approvel</p>
                                    @elseif($highlevel_approve == true && $assessment_detail->highlevel_approve==1)
                                        <p class="send-sucsess">Assessment Sent Sucessfully</p>
                                    @else
                                        <input type="hidden" value="{{$assessment_detail->id}}" name="assessment_notify" />
                                        <input type="hidden" name="highlevel_approve" value="1" />
                                        <button class="btn btn-info btn-send" type="submit">Notify Higher level</button>
                                    @endif
                            </td>
                            </form>
                            <form>

                            </form>
                        </tr>
                    </table>
        @endif
        @if ($mddata)
            <table class="preview-table">
                <tr>
                    <th>Name</th>
                    <th>Period of Time</th>
                    <th>Description</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Due date</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td> <p>{{$mddata->a_name}}</p></td>
                    <td>
                        @switch($mddata->period_of_time)
                            @case(1)
                                <p>Yearly</p>
                                @break
                            @case(2)
                                <p>Half-yearly</p>
                                @break
                            @case(3)
                                <p>Quarterly</p>
                                @break
                            @default
                        @endswitch
                    </td>
                    <td> <p>{{$mddata->a_desc}}</p></td>
                    <td> <p> {{$mddata->duration_from}}</p></td>
                    <td> <p>{{$mddata->duration_to}}</p></td>
                    <td> <p>{{$mddata->due_date}}</p></td>
                    <td>
                    <form method="POST" action="" name="assessmentapproveform">
                    {{ csrf_field() }}
                            @if ($mddata->approve==0)
                                <input type="hidden" value="{{$mddata->id}}" name="assessment_notify" />
                                <input type="hidden" name="approve" value="1" />
                                <button class="btn btn-info btn-send" type="submit">Notify</button>
                            @else
                                <p class="send-sucsess">Assessment Sent Sucessfull</p>
                            @endif
                    </form>
                    </td>
                </tr>
            </table>
        @endif

    </section>
@endsection
