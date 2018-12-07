<!-- First, extends to the CRUDBooster Layout -->
@extends('crudbooster::admin_template')
@section('content')
    <!-- Your html goes here -->
    <div class="wrapper-model-slide">
<div id="costumModals" class="costumModals">
       <div>
           <div>
               <div>
                   <button type="button" class="close button-id-close">
                       ×
                   </button>
               </div>
               <div>
                   <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                       proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p>
               </div>
               <div class="modal-footer">
                   <button class="btn btn-default close button-id-close" data-dismiss="modal" aria-hidden="true">
                       Close
                   </button>
               </div>
           </div>
       </div>
   </div>
</div>
    <div class='panel panel-default'>
        <div class='panel-heading'>Weightage</div>
        <a id="weightagehelper" role="button" class="btn btn-default pull-right costumModal22">
               Help
       </a>
        <div class='panel-body'>
            <div class='form-group'>
                <label>JD</label>
                <select id="jd-weightage" class="form-control">
                    <option value="">*Select JD</option>
                    @foreach ($jd as $item)
                        <option value="{{$item->id}}">{{$item->name}}</option>
                    @endforeach
                </select>
                <form method="POST" action="{{ CRUDBooster::mainpath('save-data') }}" name="weightageform" id="weightageform">
                    {{ csrf_field() }}
                    <div id="formfields"></div>
                </form>
            </div>


            </form>
        </div>
    </div>
   
@endsection
@push('top')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
@endpush
@push('bottom')
    <script src='https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.2/velocity.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.2/velocity.ui.min.js'></script>
    <script>
        $(document).ready(function(){
            var getUrlParameter = function getUrlParameter(sParam) {
                var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : sParameterName[1];
                    }
                }
            };
            $('#jd-weightage').change(function(){
                var jd = $(this).val();
                if (jd != '') {
                    $.get( "<?php echo URL::to('/'); ?>/api/get/weightage/"+jd )
                        .done(function( data ) {
                            $('#formfields').html(data);
                        });
                } else {
                    alert('select jd');
                }
            });
            var pjd = getUrlParameter('jd');
            if(typeof pjd != 'undefined') {
                $('#jd-weightage').val(pjd);
                $('#jd-weightage').change();
            }
            $(".modal").each(function(l){$(this).on("show.bs.modal",function(l){var o=$(this).attr("data-easein");"shake"==o?$(".modal-dialog").velocity("callout."+o):"pulse"==o?$(".modal-dialog").velocity("callout."+o):"tada"==o?$(".modal-dialog").velocity("callout."+o):"flash"==o?$(".modal-dialog").velocity("callout."+o):"bounce"==o?$(".modal-dialog").velocity("callout."+o):"swing"==o?$(".modal-dialog").velocity("callout."+o):$(".modal-dialog").velocity("transition."+o)})});
        });
    </script>
@endpush
