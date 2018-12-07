<!-- First you need to extend the CB layout -->
@extends('crudbooster::admin_template')
@section('content')
    <!-- Your custom  HTML goes here -->
<style>
.content-header>h1{
    display:none;
}
.content-wrapper{
    background: url(../../assets/img/config-bg.jpg);
}
</style>

<div class="container" id="wizardcontainer">
<!-- <h1>Welcome to 360 EPES</h1></div>-->
<section  id="config-bg">
<div class="container">
  <div class="wizardmenu-container">
    <ul class="wizardmenu">
      <li class="active"><a href="{{CRUDBooster::adminPath('assessment_notifier')}}">Assessment Create</a></li>
      <li><a href="{{CRUDBooster::adminPath('departments')}}">Departments</a></li>
      <li><a href="{{CRUDBooster::adminPath('oranagram_structure')}}">Organogram</a></li>
      <li><a href="{{CRUDBooster::adminPath('global_settings')}}">Global Settings</a></li>
      <li><a href="{{CRUDBooster::adminPath('employees')}}">Employee</a></li>
      <li><a href="{{CRUDBooster::adminPath('qusasstojd')}}">Job Description</a></li>
      <li><a href="{{CRUDBooster::adminPath('weight_age/add')}}">Weightage</a></li>
      <li><a href="{{CRUDBooster::adminPath('preview')}}">Preview</a></li>
    </ul>
  </div>
  <div class="row">
    <div class="col-md-7">
    <a href="{{CRUDBooster::adminPath('preview')}}">
        <div style="overflow: hidden; margin:0px auto; margin-bottom: 50px;  width: 500px; height: 500px; position: relative; border-radius: 500px; background-color: rgb(219, 210, 210);">
          <div style="position: absolute; z-index: 1;   top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 500px, 500px, 250px); transform: rotate(314.743deg);">
              <div class="pie-part" style="position: absolute;   top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 250px, 500px, 0px); transform: rotate(45deg);">
                  <div class="config-icon">
                  <i class="fa fa-eye " style="transform: rotate(0deg); "  aria-hidden="true"></i>
                  </div>
                  <h3 class="title T1">Preview</h3>
              </div>
            </div>
            </a>

        <a href="{{CRUDBooster::adminPath('assessment_notifier')}}">
            <div  style="position: absolute; z-index: 1; top: 0px; left: 0px; width: 500px; border-radius: 500px; clip: rect(0px, 500px, 500px, 250px);">
          <div class="pie-part" style="background-color: rgb(219, 210, 210); position: absolute; top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 250px, 500px, 0px); transform: rotate(45deg);">
              <div class="config-icon">
                  <i class="fa fa-pencil-square-o" style="transform: rotate(-45deg); "  aria-hidden="true"></i>
              </div>
              <h3 class="title T2">Assessment</h3>
          </div>
        </div>
        </a>
        </a>
        <a href="{{CRUDBooster::adminPath('departments')}}">
        <div style="position: absolute; z-index: 1; top: 0px; right: 0px; width: 300px; height: 300px; border-radius: 500px; clip: rect(0px, 500px, 500px, 250px); transform: rotate(89.7429deg);">
          <div class="pie-part" style="background-color: rgb(219, 210, 210); position: absolute; top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 250px, 500px, 0px); transform: rotate(45deg);">
              <div class="config-icon">
                  <i class="fa fa-question-circle " style="transform: rotate(-135deg);" aria-hidden="true"></i>
              </div>
              <h3 class="title T4"> Departments</h3>
          </div>
        </div>
        </a>
        <a href="{{CRUDBooster::adminPath('oranagram_structure/orangram-all')}}">
        <div style="position: absolute; top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 500px, 500px, 250px); transform: rotate(134.743deg);">
          <div class="pie-part" style="background-color: rgb(219, 210, 210); position: absolute; top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 250px, 500px, 0px); transform: rotate(45deg);">
          <div class="config-icon">
                  <i class="fa  fa-sitemap " style="transform: rotate(-180deg);" aria-hidden="true"></i>
              </div>
              <h3 class="title T5">Organogram</h3>
          </div>
        </div>
        </a>
        <a href="{{CRUDBooster::adminPath('global_settings')}}">
            <div style="position: absolute; z-index: 1; top: 0px; right: 0px; width: 420px; height: 307PX; border-radius: 500px; clip: rect(0px, 500px, 500px, 250px); transform: rotate(45deg);">
              <div class="pie-part" style="background-color: rgb(219, 210, 210); position: absolute; top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 250px, 500px, 0px); transform: rotate(44.7429deg);">
                  <div class="config-icon">
                      <i class="fa fa-cogs" style="transform: rotate(-90deg);" aria-hidden="true"></i>
                  </div>
                  <h3 class="title T3">Global <br/> Settings</h3>
              </div>
            </div>
        <a href="{{CRUDBooster::adminPath('employees')}}">
        <div style="position: absolute; top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 500px, 500px, 250px); transform: rotate(179.743deg);">
          <div class="pie-part" style="background-color: rgb(219, 210, 210); position: absolute; top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 250px, 500px, 0px); transform: rotate(45deg);">
              <div class="config-icon">
                  <i class="fa fa-users" style="transform: rotate(-225deg);" aria-hidden="true"></i>
              </div>
              <h3 class="title T6">Employee </h3>
          </div>
        </div>
        </a>
        <a href="{{CRUDBooster::adminPath('qusasstojd')}}">
        <div style="position: absolute; top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 500px, 500px, 250px); transform: rotate(224.743deg);">
          <div class="pie-part" style="background-color: rgb(219, 210, 210); position: absolute; top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 250px, 500px, 0px); transform: rotate(45deg);">
              <div class="config-icon">
                  <i class="fa  fa-file-text-o " style="transform: rotate(90deg);" aria-hidden="true"></i>
              </div>
              <h3 class="title T7">Job Description</h3>
          </div>
        </div>
        </a>
        <a href="{{CRUDBooster::adminPath('weight_age/add')}}">
        <div style="position: absolute; top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 500px, 500px, 250px); transform: rotate(269.743deg);">
          <div class="pie-part" style="background-color: rgb(219, 210, 210); position: absolute; top: 0px; left: 0px; width: 500px; height: 500px; border-radius: 500px; clip: rect(0px, 250px, 500px, 0px); transform: rotate(45deg);">
              <div class="config-icon">
                  <i class="fa fa-balance-scale" style="transform: rotate(44deg);" aria-hidden="true"></i>
              </div>
              <h3 class="title T8">Weightage</h3>
          </div>
        </div>
        </a>

        <h3 class="text-logo">360 <br>EPES</h3>
      </div>

    </div>

    <div class="col-md-5 col-sm-9">
      <div class="config-introbox">
        <div class="title-blue">It All Starts with a Job Description !</div>
        <div class="content-config"> Welcome to 360 EPES! <br> Lets Start by adding your frist Job Description!
          <ul class="list-configintro">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li> Nihil odit magnam minima, soluta doloribus.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          </ul>
         <a href="{{CRUDBooster::adminPath('assessment_notifier')}}"  class="red-button">Lets Start</a>
          <a href="#"  class="help">Quick Help <i class="fa fa-question-circle-o" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<button type="button" class="btn btn-info btn-lg btn-demovideo" data-toggle="modal" data-target="#demovideo">*Demo Video</button>

<div id="demovideo" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
            <div class="modal-header">
            <div class="popup360-logo"><img src="../../assets/img/epes-logo-admin.png"></div>
            <div class="popup-logo">Welcome to 360 EPES!</div>
                <p>Check out this two minute started video.</p>

                <button type="button" class="wizard-poup close" data-dismiss="modal" aria-label="Close" (click)="onHidden('f')">
                    <span aria-hidden="true" class="white-text">×</span>
                </button>
            </div>
            <div class="modal-body">

                <video width="500px" controls>
                    <source type="video/mp4" src="../../../assets/img/file.mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML5 video.
                  </video>
                  <div class="button-lets-start">Let's Get Started</div>
                  <div class="demotext">*Demo Video</div>
            </div>
        </div>

  </div>
</div>




    <!-- ADD A PAGINATION -->
@endsection
