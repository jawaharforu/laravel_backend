@extends('vendor.crudbooster.admin_template')

@section('content')

    <div class="row">
        <div class="col-md-3">
            <a href="{{ purl('messages/add') }}" class="btn btn-primary btn-block margin-bottom">Compose</a>
            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">Menus</h3>

                    <div class="box-tools">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i
                                    class="fa fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="box-body no-padding">
                    <ul class="nav nav-tabs nav-stacked">
                        <li class="active">
                            <a data-toggle="tab" href="#inbox">
                                <i class="fa fa-inbox"></i> Inbox
                                <span class="label label-primary pull-right">{{ count($messages) }}</span>
                            </a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#sent">
                                <i class="fa fa-envelope-o"></i> Sent
                                <span class="label label-primary pull-right">{{ count($messages_sent) }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /. box -->

            <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-9 tab-content">
            <div id="inbox" class="tab-pane fade in active box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Inbox</h3>

                    <div class="box-tools pull-right">
                        <div class="has-feedback">
                            <input type="text" class="form-control input-sm" placeholder="Search Mail">
                            <span class="glyphicon glyphicon-search form-control-feedback"></span>
                        </div>
                    </div>
                    <!-- /.box-tools -->
                </div>
                <!-- /.box-header -->
                <div class="box-body no-padding">

                    <div class="table-responsive mailbox-messages">
                        <table class="table table-hover table-striped">
                            <tbody>
                            @foreach($messages as $m)
                                <?php $time = \Carbon\Carbon::parse($m->created_at); ?>
                                <tr>
                                    <td>
                                        <div class="icheckbox_flat-blue" aria-checked="false" aria-disabled="false"
                                             style="position: relative;"><input type="checkbox"
                                                                                style="position: absolute; opacity: 0;">
                                            <ins class="iCheck-helper"
                                                 style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                        </div>
                                    </td>
                                    <td class="mailbox-star"><a href="#"><i class="fa fa-star text-yellow"></i></a></td>
                                    <td class="mailbox-subject">
                                        @php
                                            if($m->is_read != 1) {
                                                $sub =  "<b>".substr($m->sub_title,0,30)."</b>";
                                            } else {
                                                $sub =  substr($m->sub_title,0,30);
                                            }
                                        @endphp
                                        <a href="{{ CRUDBooster::mainpath('detail/'.$m->id) }}"><?php echo $sub; ?>...</a>
                                        - {{ getEmployeeByUserID($m->msg_from) }}
                                    </td>
                                    <td class="mailbox-attachment"></td>
                                    <td class="mailbox-date">{{ $time->diffForHumans() }}</td>
                                </tr>
                            @endforeach

                            </tbody>
                        </table>
                        <!-- /.table -->
                    </div>
                    <!-- /.mail-box-messages -->
                </div>
                <!-- /.box-body -->

            </div>

            <div id="sent" class="tab-pane fade box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">Sent</h3>

                        <div class="box-tools pull-right">
                            <div class="has-feedback">
                                <input type="text" class="form-control input-sm" placeholder="Search Mail">
                                <span class="glyphicon glyphicon-search form-control-feedback"></span>
                            </div>
                        </div>
                        <!-- /.box-tools -->
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body no-padding">

                        <div class="table-responsive mailbox-messages">
                            <table class="table table-hover table-striped">
                                <tbody>
                                @foreach($messages_sent as $m)
                                    <?php $time = \Carbon\Carbon::parse($m->created_at); ?>
                                    <tr>
                                        <td>
                                            <div class="icheckbox_flat-blue" aria-checked="false" aria-disabled="false"
                                                 style="position: relative;"><input type="checkbox"
                                                                                    style="position: absolute; opacity: 0;">
                                                <ins class="iCheck-helper"
                                                     style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                            </div>
                                        </td>
                                        <td class="mailbox-star"><a href="#"><i class="fa fa-star text-yellow"></i></a></td>
                                        <td class="mailbox-subject">
                                            @php
                                                if($m->is_read != 1) {
                                                    $sub =  "<b>".substr($m->sub_title,0,30)."</b>";
                                                } else {
                                                    $sub =  substr($m->sub_title,0,30);
                                                }
                                            @endphp
                                            <a href="{{ CRUDBooster::mainpath('detail/'.$m->id) }}"><?php echo $sub; ?>...</a>
                                            - {{ getEmployeeByUserID($m->msg_from) }}
                                        </td>
                                        <td class="mailbox-attachment"></td>
                                        <td class="mailbox-date">{{ $time->diffForHumans() }}</td>
                                    </tr>
                                @endforeach

                                </tbody>
                            </table>
                            <!-- /.table -->
                        </div>
                        <!-- /.mail-box-messages -->
                    </div>
                    <!-- /.box-body -->

                </div>
            <!-- /. box -->
        </div>
        <!-- /.col -->
    </div>

@endsection
