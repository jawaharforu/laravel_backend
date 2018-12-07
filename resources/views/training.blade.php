@extends('crudbooster::admin_template')
@section('content')
    <section>
        <div class="row">
            <div class="col-lg-12">
                <div class="box-outer-div padding-3">
                    <p>Training taking</p>
                    @if ($train['training'])
                        <table class="table table-bordered">
                            <tr>
                                <th>Assessment Type</th>
                                <th>Skill set</th>
                                <th>Training Head</th>
                                <th>Budget Allocated</th>
                                <th>Employees</th>
                                <th>Trainers</th>
                            </tr>
                            @foreach ($train['training'] as $item)
                                <tr>
                                    <td>{{getAssessmentType($item->assessments_type_id)}}</td>
                                    <td>{{getSkillSet($item->skill_sets)}}</td>
                                    <td>{{getTrainingName($item->parentID)}}</td>
                                    <td>{{percentage_of_amount($item->percentage, $budget_details->amount)}}</td>
                                    <td><?php echo getneedtrainingtoemployee($budget_details->notify_id, $item->assessments_type_id, $item->skill_sets); ?></td>
                                    <td>
                                        <?php 
                                            $parents = getTrainers($item->assessments_type_id, $item->skill_sets); 
                                            $trainers = "";
                                            foreach ($parents as $keyt => $valuet) {
                                                $trainers .= "Name: ".$valuet->Name.",Address: ".$valuet->address."<br/>";
                                            }
                                            echo $trainers;
                                        ?>
                                    </td>
                                </tr>
                            @endforeach
                        </table>
                    @else
                        <p>Budget plan not created</p>
                    @endif

                </div>
            </div>
        </div>

        <div class="row mt-2 mb-2">
            <div class="col-lg-12">
                <div class="box-outer-div padding-3">
                    <p>Need to allocate budget</p>
                    <table class="table table-bordered">
                        <tr>
                            <th>Assessment Type</th>
                            <th>Skill set</th>
                            <th>Employees</th>
                        </tr>
                        @foreach ($train['neadtraining'] as $item)
                            <tr>
                                <td>{{getAssessmentType($item['assessmenttype'])}}</td>
                                <td>{{getSkillSet($item['skill'])}}</td>
                                <td><?php echo getneedtrainingtoemployee($budget_details->notify_id, $item['assessmenttype'], $item['skill']); ?></td>
                            </tr>
                        @endforeach
                    </table>
                </div>
            </div>
        </div>
    </section>
@endsection
@push('bottom')
    $(document).ready(function(){

    });
@endpush
