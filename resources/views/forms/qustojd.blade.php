@extends('crudbooster::admin_template')
@section('content')
    <section>
        <a id="jdnextprcs" class="btn btn-info btn-next" href="{{CRUDBooster::adminPath('job_desc_assinged_employee')}}">Next Process</a>
        <div class="">
            <p>Name: {{$emp_detail->employee_name}}</p>
        </div>
            <ul class="nav nav-tabs jd-assign">
                <li class="active"><a data-toggle="tab" href="#exist">Select Existing JD</a></li>
                <li><a data-toggle="tab" href="#new">Creating measurable metrics</a></li>
            </ul>

            <div class="tab-content jd-tab">
            <div id="exist" class="tab-pane fade in active">
                <form class="form-horizontal" method="POST" action="" name="selectjd">
                    {{ csrf_field() }}
                    <div class="form-group mb-0">
                        <label class="control-label col-sm-2" for="email">JD</label>
                        <div class="col-sm-10">
                        <select class="form-control" name="jd" id="seljd">
                            <option value="">*Select JD</option>
                            @foreach ($jd as $item)
                                <option value="{{$item->id}}" {{($jd_detail->id == $item->id) ? "selected" : ""}}>{{$item->name}}</option>
                            @endforeach
                        </select>
                        </div>
                    </div>
                    <div class="form-group get-data">
                        <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-primary btn-import-data pull-right">Get Data</button>
                        </div>
                    </div>
                </form>
                @if ($jd_detail)
                <div class="">
                    <div class="">
                        <button type="button" class="btn btn-jdupdate" data-toggle="collapse" data-target="#demo">Update JD</button></br></br>
                        <div id="demo" class="collapse">
                            <form class="form-horizontal" action="" name="updatejd" id="updatejd" method="POST" enctype='multipart/form-data'>
                                <input type="hidden" name="jdid" value="{{ $jd_detail->id }}" />
                                <input type="hidden" name="existfilename" value="{{ $jd_detail->filename }}" />
                                <input type="hidden" name="company_id" value="{{ getCompanyID() }}" />
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="name">JD title</label>
                                    <div class="col-sm-10">
                                    <input type="text" class="form-control" id="name" name="name"  placeholder="JD title" value="{{ $jd_detail->name }}">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="pwd">JD document</label>
                                    <div class="col-sm-10">
                                    <input type="file" class="form-control" id="filename" name="filename">
                                    </div>
                                </div>
                                <div class='form-group' id='form-group-description' style="">
                                    <label class='control-label col-sm-2'>Description</label>

                                    <div class="col-sm-10">
                                        <textarea id='textarea_description' id="description" required   name="description" class='form-control'
                                                    rows='5'>{{ $jd_detail->description }}</textarea>
                                        <div class="text-danger"></div>
                                        <p class='help-block'></p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-5">
                                    <button type="button" class="btn btn-success updatejdbtn pull-right">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="jd-details">
                        @if(isset($jd_detail->filename))
                            @php
                                $ext = pathinfo(url($jd_detail->filename), PATHINFO_EXTENSION);
                            @endphp
                            @if ($ext == 'doc' || $ext == 'docx')
                                <iframe style="width:auto;" src="http://docs.google.com/gview?url={{url($jd_detail->filename)}}&embedded=true" height="200px"></iframe>
                                {{--  <object src="{{url($jd_detail->filename)}}">
                                    <embed  src="{{url($jd_detail->filename)}}" type="application/vnd.openxmlformats-officedocument.wordprocessingml.document" height="200px" />
                                </object>  --}}
                                {{--  https://docs.google.com/viewerng/viewer?url=  --}}
                            @endif
                            @if ($ext == 'pdf')
                                <embed src="{{url($jd_detail->filename)}}#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="200px" />
                            @endif
                        @endif
                        @if(isset($jd_detail->description))
                            <div>
                                {{ $jd_detail->description }}
                            </div>
                        @endif
                    </div>
                    <div class="add-question">
                        <button type="button" class="btn btn-info btn-new-question" data-toggle="collapse" data-target="#demo123">Create New Question</button>
                        <div id="demo123" class="collapse">
                            <h4 class="modal-title">Create Questions</h4>
                            <form class="form-horizontal" action="" id="newquestions" name="newquestions" method="POST">
                                    <input type="hidden" name="company_id" value="{{ getCompanyID() }}" id="company_id" />
                                    <input type="hidden" name="type" value="2" />
                                    <input type="hidden" name="role" value="1" />
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="question">Question:</label>
                                    <div class="col-sm-5">
                                    <input type="text" class="form-control" id="question" placeholder="Enter question" name="question">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="assessments_type_id">Assessments Type:</label>
                                    <div class="col-sm-10">
                                        <select class="form-control" name="assessments_type_id">
                                                <option value="">*Select Assessments type</option>
                                                @foreach ($assessmenttype as $item)
                                                    <option value="{{$item->id}}">{{$item->name}}</option>
                                                @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="skill_set_id">Skills:</label>
                                    <div class="col-sm-10">
                                            <select class="form-control" name="skill_set_id">
                                                    <option value="">*Select Skills</option>
                                            </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="scaleid_id">Scale:</label>
                                    <div class="col-sm-10">
                                            <select class="form-control" name="scaleid_id">
                                                    <option value="">*Select Scale</option>
                                                    @foreach ($scales as $item)
                                                        <option value="{{$item->id}}">{{$item->options}}</option>
                                                    @endforeach
                                            </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-5">
                                    <button type="button" class="btn btn-success questionsub pull-right">Create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="importjd-btns">
                    <a href="#" id="getassqueslist" class="btn  btn-primary btn-import-data">Assigned Questions List</a>
                    <button type="button" class="btn btn-primary btn-import-data btn-import-jd" data-toggle="modal" data-target="#JDModal">Import questions from JD</button>
                    </div>

                    <div class="jd-questions">
                        <table class="table table-striped" id="allquestionlist">
                            <thead>
                                <tr>
                                <th class="table_slno">Sl.No</th>
                                <th class="table_question">Question</th>
                                <th class="table_assessmenttype">Assessment type</th>
                                <th class="table_skills">Skills</th>
                                <th class="table_action">Assign Questions</th>
                                </tr>
                            </thead>
                            <tbody id="allQuestionTable">

                            </tbody>
                        </table>
                    </div>
                    @if ($emp_detail)
                        <div class="">
                            <input type="hidden" name="empid" id="empid" value="{{$emp_detail->id}}" />
                            <button type="button" class="btn btn-default asstoemp">Assign to Emp</button>
                        </div>
                    @else
                        <div class="">
                            <a class="btn btn-info" href="{{CRUDBooster::adminPath('weight_age/add')}}">Assign Weightage</a>
                        </div>
                    @endif
                </div>
                @endif
            </div>
            <div id="new" class="tab-pane fade">
                <form class="form-horizontal" action="" id="newjdadd" enctype='multipart/form-data'>
                    <input type="hidden" name="company_id" value="{{ getCompanyID() }}" />
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">JD title</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" name="name"  placeholder="JD title">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="pwd">Import JD/KPI</label>
                        <div class="col-sm-10">
                        <input type="file" class="form-control" id="filename" name="filename">
                        </div>
                    </div>
                    <div class='form-group' id='form-group-description' style="">
                        <label class='control-label col-sm-2'>Description</label>

                        <div class="col-sm-10">
                            <textarea id='textarea_description' id="description" required   name="description" class='form-control'
                                        rows='5'></textarea>
                            <div class="text-danger"></div>
                            <p class='help-block'></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-5">
                        <button type="button" class="btn btn-success jdsubmit pull-right">Submit</button>
                        <button type="reset" class="btn btn-default jdreset pull-right">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            <div class="modal fade" id="JDModal" role="dialog">
                <div class="modal-dialog">

                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">Import Question from JD</h4>
                    </div>
                    <div class="modal-body">
                        <select class="form-control" name="quesjd" id="quesjd">
                            <option value="0">*Select JD</option>
                            @foreach ($jd as $item)
                                <option value="{{$item->id}}">{{$item->name}}</option>
                            @endforeach
                        </select>
                        <button type="button" class="btn btn-primary btn-import-data questionimport">Import</button>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>

                </div>
            </div>
            <div class="modal fade" id="assQuestionListmodal" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Assigned Questions</h4>
                    </div>
                    <div class="modal-body">
                        <table class="table table-striped assQuestionListtable">
                            <thead>
                                <tr>
                                <th>Sl.No</th>
                                <th>Question</th>
                                <th>Assessment type</th>
                                <th>Skills</th>
                                </tr>
                            </thead>
                            <tbody id="assignedQuestionList">

                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success exportdata">Export Questions</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>

                </div>
            </div>
    </section>
@endsection
@push('bottom')
    <script src="/js/jquery.tabletoCSV.js"></script>
    <script>
        $(document).ready(function () {
            $('.exportdata').click(function(){
                $(".assQuestionListtable").tableToCSV({
                    filename: 'assignedQuestion'
                });
            });
            var skills = JSON.parse('<?php echo $skills; ?>');
            $(".jdsubmit").on("click", function (e) {
                var formData = new FormData($('form#newjdadd')[0]);
                $.ajax({
                    url: "<?php echo URL::to('/'); ?>/api/post/jdcreateing",
                    type: 'POST',
                    data: formData,
                    async: false,
                    success: function (res) {
                        if(res.success === false){
                            alert(res.msg);
                        } else {
                            if($('#empid').length > 0) {
                                window.location.href = "<?php echo CRUDBooster::adminPath('qusasstojd'); ?>/?jd="+res.data.id+"&emp="+$('#empid').val();
                            } else {
                                window.location.href = "<?php echo CRUDBooster::adminPath('qusasstojd'); ?>/?jd="+res.data.id;
                            }
                        }
                    },
                    cache: false,
                    contentType: false,
                    processData: false
                });
                return false;
            });
            $('select[name=assessments_type_id]').change(function(){
                $('select[name=skill_set_id]').html('<option value="" selected="selected">*Select Skills</option>');
                $.each(skills[$(this).val()], function( index, value ) {
                    $('select[name=skill_set_id]').append($('<option></option>').val(index).html(value));
                });
            });
            $(".questionsub").on("click", function (e) {
                var formData = new FormData($('form#newquestions')[0]);
                $.ajax({
                    url: "<?php echo URL::to('/'); ?>/api/questions",
                    type: 'POST',
                    data: $("form#newquestions").serialize(),
                    success: function (res) {
                        getAllQuestions($('#quesjd').val(), 0, 0);
                        $("#newquestions")[0].reset();
                    }
                });
                return false;
            });
            var oTable = $("#allquestionlist").DataTable();
            function getAllQuestions(jdid, del, refjd){
                oTable.destroy();
                $.get("<?php echo URL::to('/'); ?>/api/get/allquestions/"+jdid+"?del="+del+"&cmp="+$('#company_id').val()+"&refjd="+refjd, function(data, status){
                    $('#allQuestionTable').html(data);
                    oTable = $('#allquestionlist').DataTable({
                        "pageLength": 5000
                      });
                });
            }
            function getAssignQuestionsList(jdid){
                $.get("<?php echo URL::to('/'); ?>/api/get/assignedquestions/"+jdid, function(data, status){
                    $('#assignedQuestionList').html(data);
                    $('#assQuestionListmodal').modal('show');
                });
            }
            getAllQuestions('<?php echo (empty($jd_detail->id)) ? 0 : $jd_detail->id; ?>', 0, 0);
            $('.questionimport').click(function(){
                getAllQuestions($('#seljd').val(), 1, $('#quesjd').val());
                $('#JDModal').modal('hide');
            });
            function mapQues(check, jdid, qid){
                $.get("<?php echo URL::to('/'); ?>/api/get/mapquestions/"+check+"?jdid="+jdid+"&qid="+qid, function(data, status){
                    console.log(data);
                });
            }
            $('#allQuestionTable').on('click', '.assques', function(){
                var jdid = $('#seljd').val();
                var qid = $(this).attr('data-id');
                if($(this).is(':checked')) {
                    mapQues(1, jdid, qid);
                } else {
                    mapQues(0, jdid, qid);
                }
            });
            $(".asstoemp").on("click", function (e) {
                $.ajax({
                    url: "<?php echo URL::to('/'); ?>/api/post/assigntoemp",
                    type: 'POST',
                    data: {employee_id:$('#empid').val(),jdid_id:$('#seljd').val(),company_id:$('#company_id').val()},
                    success: function (res) {
                        window.location.href = "<?php echo CRUDBooster::adminPath('weight_age/add'); ?>/?jd="+$('#seljd').val();
                    }
                });
                return false;
            });
            $(".updatejdbtn").on("click", function (e) {
                var formData = new FormData($('form#updatejd')[0]);
                $.ajax({
                    url: "<?php echo URL::to('/'); ?>/api/post/jdcreateing",
                    type: 'POST',
                    data: formData,
                    async: false,
                    success: function (res) {
                        if(res.success === false){
                            alert(res.msg);
                        } else {
                            if($('#empid').length > 0) {
                                window.location.href = "<?php echo CRUDBooster::adminPath('qusasstojd'); ?>/?jd="+res.data.id+"&emp="+$('#empid').val();
                            } else {
                                window.location.href = "<?php echo CRUDBooster::adminPath('qusasstojd'); ?>/?jd="+res.data.id;
                            }
                        }
                    },
                    cache: false,
                    contentType: false,
                    processData: false
                });
                return false;
            });
            $('#getassqueslist').click(function(){
                getAssignQuestionsList($('#seljd').val());
            });
        });
    </script>
@endpush
