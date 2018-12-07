@extends('crudbooster::admin_template')
@section('content')

<div class="">
    <form action="" method="GET">
        <div class="form-group col-md-12">
          <label for="exampleInputEmail1">Old Password:</label>
          <input type="password" class="form-control" name="oldpwd" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Old Password">
          <small id="emailHelp" class="form-text text-muted">Enter your old password here!</small>
        </div>
        <div class="form-group col-md-12">
            <label for="inputPassword" class="control-label">Enter New Password</label>
            <div class="form-inline row">
                <div class="form-group col-md-12">
                <input type="password" name="newpwd" data-minlength="6" class="form-control" id="inputPassword" placeholder="Password" required>
                <div class="help-block">Minimum of 6 characters</div>
                </div>
                <div class="form-group col-md-12">
                <input type="password" name="conewpwd" class="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required>
                <div class="help-block with-errors"></div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>

@endsection