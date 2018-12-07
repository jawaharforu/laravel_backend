@extends('crudbooster::admin_template')
@section('content')
    <section>

        <div class="row">

                <div class="col-lg-12">
                    <form method="get" action="">
                        <select class="form-control" name="notify">
                            <?php
                            $da = DB::table('assessment_notifier')
                                ->get()->all();
                            foreach ($da as $as) {
                                echo "<option value='$as->id'> $as->a_name </option>";
                            }
                            ?>
                        </select>
                        <div class="form-group">
                            <input type="submit" value="Show Graphs" class="btn btn-success">
                        </div>
                    </form>

                </div>


            <h4 class="text-center">{{ $content }}</h4>



        </div>
    </section>
@endsection
