@extends('crudbooster::admin_template')
@section('content')
    <section>

        <div class="box">
            @if($options)


                <form method="post" name="asses_form_{{ $form_name }}" action="" id="asses_form_{{ $form_name }}">

                    <input type="hidden" name="type_of_assesment" value="{{ $form_name }}">
                    <input type="hidden" name="type_of_assesment" value="{{ $form_name }}">
                    <input type="hidden" name="notify_id" value="{{ $notify_id }}">
                    <input type="hidden" name="oranagram_id" value="{{ $oranagram_id }}">

                    <div class="wizard fuelux" data-initialize="wizard" id="wizardIllustration">


                        <div class="steps-container">
                            <ul class="steps">
                                @php $j = 1; @endphp
                                @foreach($options as $k => $v)


                                    <li data-step="{{ $j }}" data-name="campaign" class="active">
                                        <span class="badge">{{ $j }}</span>{{ str_replace("-"," ",$k) }}
                                        <span class="chevron"></span>
                                    </li>
                                    @php $j++; @endphp
                                @endforeach

                            </ul>
                        </div>


                        <div class="actions">
                            <button type="button" class="btn btn-default btn-prev">
                                <span class="glyphicon glyphicon-arrow-left"></span>Prev
                            </button>
                            <button type="button" class="btn btn-primary btn-next" data-last="Complete">Next
                                <span class="glyphicon glyphicon-arrow-right"></span>
                            </button>
                        </div>

                        <div class="step-content">

                            @php $j = 1; @endphp
                            @foreach($options as $k => $v)

                                <div class="step-pane active sample-pane alert" data-step="{{ $j }}">


                                    {{ csrf_field() }}
                                    @php $y = 1; @endphp
                                    @foreach($v as $q)

                                        <input type="hidden" class="qustncls" name="question_id[]"
                                               value="{{ $q->questionid_id }}">
                                        <input type="hidden" name="skill_set_id[]"
                                               value="{{ $q->skill_set_id }}">
                                        <input type="hidden" name="scale_id[]"
                                               value="{{ $q->scaleid_id }}">


                                        <div class="form-container">


                                            <div class="col-md-12 form-row">
                                                <div class="form-group">

                                                    <label>{{ $y }}. &nbsp;{{ $q->question }}</label><br/>

                                                    @php
                                                        $scl = getScaledata($q->scaleid_id);
                                                    @endphp
                                                    @if ($scl->no_of_options == 1)
                                                        <div class="col-sm-12">
                                                            <label for="door_dly_charges"
                                                                class="col-sm-2 control-label">
                                                                <input class="required textcls" type="text"
                                                                    name="answer[{{ $q->questionid_id }}]"
                                                                    value="">
                                                            </label>

                                                        </div>
                                                    @else
                                                        @php $options = (explode("\n",$q->options)) @endphp
                                                        @php $k = 1; @endphp
                                                        @foreach($options as $op)

                                                            <div class="col-sm-1">
                                                                <label for="door_dly_charges"
                                                                    class="col-sm-3 control-label">{{ $op }}
                                                                    <input class="required radiocls" type="radio"
                                                                        name="answer[{{ $q->questionid_id }}]"
                                                                        value="{{ $k }}">
                                                                </label>

                                                            </div>
                                                            @php $k++; @endphp
                                                        @endforeach
                                                    @endif


                                                </div>

                                            </div>

                                        </div>
                                        @php $y++; @endphp
                                    @endforeach

                                </div>


                                @php $j++; @endphp
                            @endforeach

                            <input class="btn btn-success submitassessmentbtn" type="submit"/>
                        </div>
                    </div>
                </form>

        </div>


        @elseif(isset($or_data))

            <div class="col-lg-12">
                <h4>SELF Assessment</h4>
                <div class="row padding-0">
                @if($_self_assesment)

                        {!!   BootBox(
                           [
                                   'icon'  =>  getEmployeeImage($child['empID']),
                                   'title'  =>  'Self Assessment',
                                   'text'  =>  'Completed',
                                   'url'  =>  'javascript:void()',
                                   'color' =>  'bg-aqua',
                                   'id' =>  'as_completed',
                           ]
                           )
                        !!}
                @else
                    {!!   BootBox(
                       [
                               'icon'  =>  getEmployeeImage($child['empID']),
                               'title'  =>  'Self Assessment',
                               'text'  =>  'Start',
                               'url'  =>  purl('assessments/start-form?type=self'),
                               'color' =>  'bg-green',
                               'id' =>  'as_start',
                       ]
                       )
                    !!}
                @endif
            </div></div>
            <div class="col-lg-12">
                <h4>Superior Assessment</h4>
                <div class="row padding-0">

                @if($_parent_assesment)
                    <p>Assessment Completed</p>
                @else
                    @php $j = 0 @endphp
                    @if(!empty($or_data['parent_q']))
                        @foreach($or_data['parent_q'] as $child)
                            @if (asseessmentcheck('parent',$child['empID'],$notify_id))
                                {!!   BootBox(
                                    [
                                            'icon'  =>  getEmployeeImage($child['empID']),
                                            'title'  =>  getEmployeeName($child['empID']),
                                            'text'  =>  'Assessment Completed',
                                            'url'  =>  '#',
                                            'color' =>  'bg-reg',
                                            'id' =>  'as_completed',
                                    ]
                                    )
                                !!}
                            @else
                                {!!   BootBox(
                                    [
                                            'icon'  =>  getEmployeeImage($child['empID']),
                                            'title'  =>  getEmployeeName($child['empID']),
                                            'text'  =>  'Start Assessment',
                                            'url'  =>  purl('assessments/start-form?type=parent&c_options='.$j),
                                            'color' =>  'bg-yellow',
                                            'id' =>  'as_start',
                                    ]
                                    )
                                !!}
                            @endif

                        @php $j++ @endphp
                        @endforeach
                    @endif
                @endif
            </div></div>
            <div class="col-lg-12">
                @if($_child_assesment)
                    <p>Assessment Completed</p>
                @else
                    <h4>Subordinate Assessment</h4>
                    <div class="row padding-0">
                    @php $j = 0 @endphp
                    @if(!empty($or_data['child_q']))
                        @foreach($or_data['child_q'] as $child)
                            @if (asseessmentcheck('child',$child['empID'],$notify_id))
                            {!!   BootBox(
                                [
                                        'icon'  =>  getEmployeeImage($child['empID']),
                                        'title'  =>  getEmployeeName($child['empID']),
                                        'text'  =>  'Assessment Completed',
                                        'url'  =>  '#',
                                        'color' =>  'bg-red',
                                        'id' =>  'as_completed',
                                ]
                                )
                             !!}
                            @else
                            {!!   BootBox(
                                [
                                        'icon'  =>  getEmployeeImage($child['empID']),
                                        'title'  =>  getEmployeeName($child['empID']),
                                        'text'  =>  'Start',
                                        'url'  =>  purl('assessments/start-form?type=child&c_options='.$j),
                                        'color' =>  'bg-green',
                                        'id' =>  'as_start',
                                ]
                                )
                             !!}
                            @endif

                            @php $j++ @endphp
                        @endforeach
                    @endif
                    </div>
                @endif
            </div>
            <div class="col-lg-12">
                @if($_peer_assesment)
                    <p>Assessment Completed</p>
                @else
                    <h4>Peer Assessment</h4>
                    <div class="row padding-0">
                    @php $j = 0 @endphp
                    @if(!empty($or_data['peer_data']))
                        @foreach($or_data['peer_data'] as $child)
                            @if(!empty($child['empID']))
                                @if (asseessmentcheck('peer',$child['empID'],$notify_id))
                                {!!   BootBox(
                                    [
                                            'icon'  =>  getEmployeeImage($child['empID']),
                                            'title'  =>  getEmployeeName($child['empID']),
                                            'text'  =>  'Completed',
                                            'url'  =>  '#',
                                            'color' =>  'bg-red',
                                            'id' =>  'as_completed',
                                    ]
                                    )
                                 !!}
                                @else
                                {!!   BootBox(
                                    [
                                            'icon'  =>  getEmployeeImage($child['empID']),
                                            'title'  =>  getEmployeeName($child['empID']),
                                            'text'  =>  'Start',
                                            'url'  =>  purl('assessments/start-form?type=peer&c_options='.$j),
                                            'color' =>  'bg-green',
                                            'id' =>  'as_start',
                                    ]
                                    )
                                 !!}
                                @endif

                            @endif
                            @php $j++ @endphp
                        @endforeach
                    @endif
                    </div>
                @endif
            </div>


            <div class="col-lg-12">
                @if($_peer_assesment)
                    <p>Assessment Completed</p>
                @else
                    <h4>General Secretary Assessment</h4>
                    <div class="row padding-0">
                    @php $j = 0 @endphp
                    @if(!empty($or_data['general_sec']))
                        @foreach($or_data['general_sec'] as $child)
                            @if(!empty($child['empID']))
                                @if (asseessmentcheck('gensec',$child['empID'],$notify_id))
                                {!!   BootBox(
                                    [
                                            'icon'  =>  getEmployeeImage($child['empID']),
                                            'title'  =>  getEmployeeName($child['empID']),
                                            'text'  =>  'Completed',
                                            'url'  =>  '#',
                                            'color' =>  'bg-red',
                                            'id' =>  'as_completed',
                                    ]
                                    )
                                 !!}
                                @else
                                {!!   BootBox(
                                    [
                                            'icon'  =>  getEmployeeImage($child['empID']),
                                            'title'  =>  getEmployeeName($child['empID']),
                                            'text'  =>  'Start',
                                            'url'  =>  purl('assessments/start-form?type=general_sec&c_options='.$j),
                                            'color' =>  'bg-green',
                                            'id' =>  'as_start',
                                    ]
                                    )
                                 !!}
                                @endif

                            @endif
                            @php $j++ @endphp
                        @endforeach
                    @endif
                    </div>
                @endif
            </div>


            <div class="col-lg-12">
                @if($_peer_assesment)
                    <p>Assessment Completed</p>
                @else
                    <h4>Admin Assessment</h4>
                    <div class="row padding-0">
                    @php $j = 0 @endphp
                    @if(!empty($or_data['admin']))
                        @foreach($or_data['admin'] as $child)
                            @if(!empty($child['empID']))
                                @if (asseessmentcheck('admin',$child['empID'],$notify_id))
                                {!!   BootBox(
                                    [
                                            'icon'  =>  getEmployeeImage($child['empID']),
                                            'title'  =>  getEmployeeName($child['empID']),
                                            'text'  =>  'Completed',
                                            'url'  =>  '#',
                                            'color' =>  'bg-red',
                                            'id' =>  'as_completed',
                                    ]
                                    )
                                 !!}
                                @else
                                {!!   BootBox(
                                    [
                                            'icon'  =>  getEmployeeImage($child['empID']),
                                            'title'  =>  getEmployeeName($child['empID']),
                                            'text'  =>  'Start',
                                            'url'  =>  purl('assessments/start-form?type=admin&c_options='.$j),
                                            'color' =>  'bg-green',
                                            'id' =>  'as_start',
                                    ]
                                    )
                                 !!}
                                @endif

                            @endif
                            @php $j++ @endphp
                        @endforeach
                    @endif
                    </div>
                @endif
            </div>


            <div class="col-lg-12">
                @if($_peer_assesment)
                    <p>Assessment Completed</p>
                @else
                    <h4>Common Receptionist Assessment</h4>
                    <div class="row padding-0">
                    @php $j = 0 @endphp
                    @if(!empty($or_data['receptionist']))
                        @foreach($or_data['receptionist'] as $child)
                            @if(!empty($child['empID']))
                                @if (asseessmentcheck('receptionist',$child['empID'],$notify_id))
                                {!!   BootBox(
                                    [
                                            'icon'  =>  getEmployeeImage($child['empID']),
                                            'title'  =>  getEmployeeName($child['empID']),
                                            'text'  =>  'Start',
                                            'url'  =>  '#',
                                            'color' =>  'bg-red',
                                            'id' =>  'as_completed',
                                    ]
                                    )
                                 !!}
                                @else
                                {!!   BootBox(
                                    [
                                            'icon'  =>  getEmployeeImage($child['empID']),
                                            'title'  =>  getEmployeeName($child['empID']),
                                            'text'  =>  'Start',
                                            'url'  =>  purl('assessments/start-form?type=receptionist&c_options='.$j),
                                            'color' =>  'bg-green',
                                            'id' =>  'as_start',

                                    ]
                                    )
                                 !!}
                                @endif

                            @endif
                            @php $j++ @endphp
                        @endforeach
                    @endif
                    </div>
                @endif
            </div>




        @else

            <h4 class="text-center">Oops! invalid link!</h4>

            @endif


            </div>
            </div>
    </section>

@endsection




@push('bottom')
    <script>
        // Custom Code

    </script>
@endpush


