@extends('crudbooster::admin_template')
@section('content')

@if($exists == "")
    <div class="row mt-2 mb-2">
        <div class="col-md-6">
            <div class="box-outer-div padding-3">
                <div class="row">
                    <div class="form-inline">
                        <div class="col-md-5"><label>CIM</label></div>
                        <div class="col-md-1">
                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="1">
                            <label class="custom-control-label" for="customRadio1">Yes</label>
                        </div>
                        <div class="col-md-1">  
                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="0">
                            <label class="custom-control-label" for="customRadio2">No</label>
                        </div>
                        <div class="col-md-5"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endif
<div class="row mt-2 mb-2" id="formcheck">
    <div class="col-md-6">
        <div class="box-outer-div padding-3">
            <div class="row">
                <div class="row cim-form" id="#cimform">
                    <form action="" method="GET">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Cim Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name ="cimdescription" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@if($exists == "true")
    <div class="row mt-2 mb-2" id="datacheck">
        <div class="col-md-6">
            <div class="box-outer-div padding-3">
                <div class="row">
                    <h1><b>Data Exists</b></h1>
                </div>
            </div>
        </div>
    </div>
@endif
    
@endsection
@push('bottom')
<script>
    $(document).ready(function(){
        
        $("#customRadio2").prop("checked", true);
        $('#formcheck').hide();
        $('form').hide();
        
        if($("#customRadio1").on("click", function(){
            $('form').show();
            $('#formcheck').show();
            $("#datacheck").hide();
        }));

        if($("#customRadio2").on("click", function(){
            $('form').hide();
            $('#formcheck').hide();
        }));
           
    });
</script>

@endpush