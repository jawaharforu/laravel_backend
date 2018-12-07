<!-- First you need to extend the CB layout -->
@extends('crudbooster::admin_template')
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
@section('content')
<!-- Your custom  HTML goes here -->

<?php

  $budget_parent = 0;
  foreach($result as $rows){
    $budget_parent = $rows->budget_parent;
  }
  $budget_allocated = getBudgetAmount($budget_parent);
  $budget_used = assigned_Budget_Amount($budget_parent);
  $remaining_budget = $budget_allocated - $budget_used;

  // $parents = getTrainers(10,9);
  $trainers = "";
  foreach ($parents as $keyt => $valuet) {
      $trainers .= "Name: ".$valuet->Name.",Address: ".$valuet->address.",";
  }

  // dd($trainers);
?>
<div class="col-md-12 col-sm-12 budget-chart">
  <div class="shadow">
      <div class="panel-header text-center">Budget</div>
      <div id="container" style="max-width: 100%; height: auto; margin: 0 auto"></div>
  </div>
</div>
<div class="col-md-12 col-sm-12 budget-table">
<table class='table table-bordered table-hover table-striped'>
  <thead>
    <tr>
      <th style="text-align:center;">Budget Allocated</th>
      <th style="text-align:center;">Budget Used</th>
      <th style="text-align:center;">Remaining Budget</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td style="text-align:center;">{{$budget_allocated}}</td>
      <td style="text-align:center;">{{$budget_used}}</td>
    <td style="text-align:center;">{{$remaining_budget}}</td>
    </tr>
  </tbody>
</table>
</div>

<table class='table table-bordered table-hover table-striped'>
  <thead>
      <tr>
        <th>#</th>
        <th>Budget Name</th>
        <th>Assesment type</th>
        <th>Skill sets</th>
        <th>Training head</th>
        <th>Training sub head</th>
        <th>Amount</th>
        <th>Percentage</th>
        <th>Action</th>
       </tr>
  </thead>
  <tbody>
    <?php $pos=1;$budget_sum = array(); ?>
    @foreach($result as $row)
      <tr>
        <td>{{$pos}}</td>
        <td>{{getBudgetName($row->budget_parent)}}</td>
        <td>{{getAssessmentsName($row->assessments_type_id)}}</td>
        <td>{{getSkillSet($row->skill_sets)}}</td>
        <td>{{getTrainingName($row->parentID)}}</td>
        <td>{{getTrainingName($row->training_sub_head)}}</td>
        <td>{{$row->percentage}}</td>
        {{-- <td>{{percentage_of_amount($row->percentage, getBudgetAmount($row->budget_parent))}}</td> --}}
        <td>{{percentage_from_amount($row->percentage, getBudgetAmount($row->budget_parent))}}</td>
        <td class="updatetd">
          <!-- To make sure we have read access, wee need to validate the privilege -->
          @if(CRUDBooster::isUpdate() && $button_edit)
          <a class='btn btn-success btn-sm btn-for-edit' href='{{CRUDBooster::mainpath("edit/$row->id")}}'>Edit</a>
          @endif

          @if(CRUDBooster::isDelete() && $button_edit)
          <a class='btn btn-success btn-sm btn-for-delete' href='{{CRUDBooster::mainpath("delete/$row->id")}}'>Delete</a>
          @endif
        </td>
       </tr>
       <?php
        $pos++;
       ?>
    @endforeach
  </tbody>
</table>

<!-- ADD A PAGINATION -->
@endsection

<script type="text/javascript">

  jQuery(function() {
      var chart;
      jQuery(document).ready(function() {
          chart = new Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        renderTo: 'container'
    },
    title: {
        text: "<?php echo getBudgetYear($row->budget_parent);?>"
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y:.0f} Rs.</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Budget Management',
        colorByPoint: true,
        data: [{
            name: 'Used Budget',
            y: <?php echo $budget_used;?>,
            sliced: false,
            selected: true
        }, {
            name: 'Remaining Budget',
            y: <?php echo $remaining_budget;?>
        }]
    }]
});
      });
  
  });
 
  </script>


