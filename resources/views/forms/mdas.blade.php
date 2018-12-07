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

                                        <input type="hidden" name="question_id[]"
                                               value="{{ $q->questionid_id }}">
                                        <input type="hidden" name="skill_set_id[]"
                                               value="{{ $q->skill_set_id }}">
                                        <input type="hidden" name="scale_id[]"
                                               value="{{ $q->scaleid_id }}">


                                        <div class="form-container">
                                            <div class="col-md-12 form-row">
                                                <div class="form-group">

                                                    <label>{{ $y }}. &nbsp;{{ $q->question }}</label><br/>

                                                    @php $options = (explode("\n",$q->options)) @endphp
                                                    @php $k = 1; @endphp
                                                    @foreach($options as $op)

                                                        <div class="col-sm-1">
                                                            <label for="door_dly_charges"
                                                                   class="col-sm-3 control-label">{{ $op }}
                                                                <input class="required" type="radio"
                                                                       name="answer[{{ $q->questionid_id }}]"
                                                                       value="{{ $k }}">
                                                            </label>

                                                        </div>
                                                        @php $k++; @endphp
                                                    @endforeach

                                                </div>

                                            </div>

                                        </div>
                                        @php $y++; @endphp
                                    @endforeach

                                </div>


                                @php $j++; @endphp
                            @endforeach

                            <input class="btn btn-success" type="submit"/>
                        </div>
                    </div>
                </form>

        </div>


        @elseif(isset($or_data))

            <div class="col-lg-12">
                <h4>MD Assessment</h4>
                <div class="row padding-0">

                @if($_parent_assesment)
                    <p>Assessment Completed</p>
                @else
                    @php $j = 0; @endphp
                    @if(!empty($or_data))
                        @foreach($or_data as $child)
                            @if (asseessmentcheck('md',$child['empID'],$notify_id))
                                {!!   BootBox(
                                    [
                                        'icon'  =>  getEmployeeImage($child['empID']),
                                        'title'  =>  getEmployeeName($child['empID']),
                                        'text'  =>  'Assessment Completed',
                                        'url'  =>  '#',
                                        'color' =>  'bg-reg',
                                    ]
                                    )
                                !!}
                            @else
                                {!!   BootBox(
                                    [
                                            'icon'  =>  getEmployeeImage($child['empID']),
                                            'title'  =>  getEmployeeName($child['empID']),
                                            'text'  =>  'Start Assessment',
                                            'url'  =>  purl('assessments/md-form?type=md&c_options='.$j),
                                            'color' =>  'bg-yellow',
                                    ]
                                    )
                                !!}
                            @endif

                        @php $j+1; @endphp
                        @endforeach
                    @endif
                @endif
            </div></div>




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


