@extends('crudbooster::admin_template')
@section('content')



            <div>



<div class="panel panel-default">
<div class="panel-heading">
<strong><i class="fa fa-glass"></i> Add Employee Management</strong>
</div>

<div class="panel-body" style="padding:20px 0px 0px 0px">
            <form class="form-horizontal" method="post" id="form" enctype="multipart/form-data" action="">
                  <div class="box-body" id="parent-form-area">

                                <div class="form-group header-group-0 " id="form-group-employee_code" style="">
<label class="control-label col-sm-2">
Employee Code
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<input title="Employee Code" required="" maxlength="255" class="form-control" name="employee_code" id="employee_code" value="" type="text">

<div class="text-danger"></div>
<p class="help-block"></p>

</div>
</div>    <div class="form-group header-group-0 " id="form-group-employee_name" style="">
<label class="control-label col-sm-2">
Employee Name
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<input title="Employee Name" required="" maxlength="255" class="form-control" name="employee_name" id="employee_name" value="" type="text">

<div class="text-danger"></div>
<p class="help-block"></p>

</div>
</div>    <div class="form-group header-group-0 " id="form-group-employee_type" style="">
<label class="control-label col-sm-2">Employee Role
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<select style="width:100%" class="form-control select2-hidden-accessible" id="employee_type" required="" name="employee_type" tabindex="-1" aria-hidden="true">

                                                    <option value="">** Please select a Employee Role</option>
    <option value="2">Developer</option><option value="1">HR</option>                    <!--end-datatable-ajax-->

<!--end-relationship-table-->

<!--end-datatable-->
</select><span class="select2 select2-container select2-container--default select2-container--below" dir="ltr" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-employee_type-container"><span class="select2-selection__rendered" id="select2-employee_type-container" title="Developer">Developer</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
<div class="text-danger">

</div><!--end-text-danger-->
<p class="help-block"></p>

</div>
</div>
<div class="form-group header-group-0 " id="form-group-department_sub_id" style="">
<label class="control-label col-sm-2">Employee Department
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<select class="form-control" id="department_sub_id" data-value="" required="" name="department_sub_id">
<option value="">** Please select a Employee Department</option>
<option value="11">ANDROID</option><option value="12">HEAD DEP</option><option value="10">IOS</option><option value="13">TL - IOS</option><option value="14">USA - Android</option>        </select>
<div class="text-danger"></div>
<p class="help-block"></p>
</div>
</div>    <div class="form-group header-group-0 " id="form-group-or_levels" style="">
<label class="control-label col-sm-2">Employee Department
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<select class="form-control" id="or_levels" data-value="" required="" name="or_levels"><option value="">** Please select a Employee Department</option></select>
<div class="text-danger"></div>
<p class="help-block"></p>
</div>
</div>    <div class="form-group header-group-0 " id="form-group-experience" style="">
<label class="control-label col-sm-2">
Experience
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<input title="Experience" required="" maxlength="255" class="form-control" name="experience" id="experience" value="" type="text">

<div class="text-danger"></div>
<p class="help-block"></p>

</div>
</div>    <div class="form-group header-group-0 " id="form-group-designation" style="">
<label class="control-label col-sm-2">
Designation
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<input title="Designation" required="" maxlength="255" class="form-control" name="designation" id="designation" value="" type="text">

<div class="text-danger"></div>
<p class="help-block"></p>

</div>
</div>    <div class="form-group header-group-0 " id="form-group-email" style="">
<label class="control-label col-sm-2">Email
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-envelope"></i></span>
<input name="email" style="display: none" type="email">
<input title="Email" required="" placeholder="Please enter a valid email address" maxlength="255" class="form-control" name="email" id="email" value="" type="email">
</div>
<div class="text-danger"></div>
<p class="help-block"></p>
</div>
</div>    <div class="form-group header-group-0 " id="form-group-country_code" style="">
<label class="control-label col-sm-2">
Country Code
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<input title="Country Code" required="" maxlength="255" class="form-control" name="country_code" id="country_code" value="" type="text">

<div class="text-danger"></div>
<p class="help-block"></p>

</div>
</div>    <div class="form-group header-group-0 " id="form-group-mobile" style="">
<label class="control-label col-sm-2">
Mobile
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<input title="Mobile" required="" maxlength="255" class="form-control" name="mobile" id="mobile" value="" type="text">

<div class="text-danger"></div>
<p class="help-block"></p>

</div>
</div>    <div class="form-group header-group-0 " id="form-group-address" style="">
<label class="control-label col-sm-2">
Address
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<input title="Address" required="" maxlength="255" class="form-control" name="address" id="address" value="" type="text">

<div class="text-danger"></div>
<p class="help-block"></p>

</div>
</div>    <div class="form-group header-group-0 " id="form-group-status" style="">
<label class="control-label col-sm-2">Status
<span class="text-danger" title="This field is required">*</span>
</label>

<div class="col-sm-10">
<select class="form-control" id="status" data-value="" required="" name="status">
<option value="">** Please select a Status</option>
<option value="1">Active</option><option value="0">In-Active</option>        </select>
<div class="text-danger"></div>
<p class="help-block"></p>
</div>
</div>    <input name="company_id" value="0" type="hidden">                                            </div><!-- /.box-body -->

<div class="box-footer" style="background: #F5F5F5">

    <div class="form-group">
        <label class="control-label col-sm-2"></label>
        <div class="col-sm-10">
                                                                                        <a href="http://localhost:8000/ng/ver1/employees" class="btn btn-default"><i class="fa fa-chevron-circle-left"></i> Back</a>

                                                        <input name="submit" value="Save &amp; Add More" class="btn btn-success" type="submit">

                                                        <input name="submit" value="Save" class="btn btn-success" type="submit">

                                        </div>
    </div>


</div><!-- /.box-footer-->

</form>

</div>
</div>
</div>


    </section>
@endsection




@push('bottom')

    <script type="text/javascript">
$(function () {
$('#department_sub_id, input:radio[name=department_sub_id]').change(function () {
    var $current = $("#or_levels");
    var parent_id = $(this).val();
    var fk_name = "department_sub_id";
    var fk_value = $(this).val();
    var datatable = "oranagram_structure,department_sub_id".split(',');
                                var datatableWhere = "";
                        var table = datatable[0].trim('');
    var label = datatable[1].trim('');
    var value = "";

    if (fk_value != '') {
        $current.html("<option value=''>Please wait loading... Employee Department");
        $.get("/ng/ver1/employees/data-table?table=" + table + "&label=" + label + "&fk_name=" + fk_name + "&fk_value=" + fk_value + "&datatable_where=" + encodeURI(datatableWhere), function (response) {
            if (response) {
                $current.html("<option value=''>** Please select a Employee Department");
                $.each(response, function (i, obj) {
                    var selected = (value && value == obj.select_value) ? "selected" : "";
                    $("<option " + selected + " value='" + obj.select_value + "'>" + obj.select_label + "</option>").appendTo("#or_levels");
                })
                $current.trigger('change');
            }
        });
    } else {
        $current.html("<option value=''>** Please select a Employee Department");
    }
})

$('#department_sub_id').trigger('change');
$("input[name='department_sub_id']:checked").trigger("change");
$("#or_levels").trigger('change');
})
</script>


@endpush
