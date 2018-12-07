@extends('crudbooster::admin_template')
@section('content')
    <div class="container">
        <div class="row">
            @if(empty($questions))
                <div class="col-md-12" id="after-submit">
                    <div class="after-review">
                        <p class="already-submitted text-center">You have already submitted feedback! Thank you for your
                            valuable
                            time!</p>
                    </div>
                </div>
            @else
                <div class="col-md-12" id="before-submit">
                    <h2>Questions</h2>
                    <form id="reviewForm" method="post" action="{{CRUDBooster::adminPath('submit-review')}}">
                        <input type="hidden" value="{{$notify_id}}" name="notify_id" />
                        {{ csrf_field() }}
                        <table class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>Sl No.</th>
                                <th>Question</th>
                                <th>Rating(s)</th>
                            </tr>
                            </thead>
                            <tbody>

                            @foreach($questions as $d)
                                <tr>
                                    <td>{{$d->id}}</td>
                                    <td>{{$d->question}}</td>
                                    <td>
                                        <div id="stars{{$d->id}}" data-ques="{{$d->id}}" class="starrr"></div>
                                        <input id="count{{$d->id}}" class="count" name="count[{{$d->id}}]" value="0"
                                               type="hidden">
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        <div class="row">
                            <div class="col-md-12">
                                <input type="submit" value="Submit Review" id="submitReview_from" disabled="disabled">
                            </div>
                        </div>
                    </form>
                </div>
            @endif
        </div>

    </div>
@endsection
@push('bottom')
    <script>
        var __slice = [].slice;

        (function ($, window) {
            var Starrr;

            Starrr = (function () {
                Starrr.prototype.defaults = {
                    rating: void 0,
                    numStars: 5,
                    change: function (e, value) {
                    }
                };

                function Starrr($el, options) {
                    var i, _, _ref,
                        _this = this;

                    this.options = $.extend({}, this.defaults, options);
                    this.$el = $el;
                    _ref = this.defaults;
                    for (i in _ref) {
                        _ = _ref[i];
                        if (this.$el.data(i) != null) {
                            this.options[i] = this.$el.data(i);
                        }
                    }
                    this.createStars();
                    this.syncRating();
                    this.$el.on('mouseover.starrr', 'span', function (e) {
                        return _this.syncRating(_this.$el.find('span').index(e.currentTarget) + 1);
                    });
                    this.$el.on('mouseout.starrr', function () {
                        return _this.syncRating();
                    });
                    this.$el.on('click.starrr', 'span', function (e) {
                        return _this.setRating(_this.$el.find('span').index(e.currentTarget) + 1);
                    });
                    this.$el.on('starrr:change', this.options.change);
                }

                Starrr.prototype.createStars = function () {
                    var _i, _ref, _results;

                    _results = [];
                    for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
                        _results.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));
                    }
                    return _results;
                };

                Starrr.prototype.setRating = function (rating) {
                    if (this.options.rating === rating) {
                        rating = void 0;
                    }
                    this.options.rating = rating;
                    this.syncRating();
                    return this.$el.trigger('starrr:change', rating);
                };

                Starrr.prototype.syncRating = function (rating) {
                    var i, _i, _j, _ref;

                    rating || (rating = this.options.rating);
                    if (rating) {
                        for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
                            this.$el.find('span').eq(i).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
                        }
                    }
                    if (rating && rating < 5) {
                        for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
                            this.$el.find('span').eq(i).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
                        }
                    }
                    if (!rating) {
                        return this.$el.find('span').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
                    }
                };

                return Starrr;

            })();
            return $.fn.extend({
                starrr: function () {
                    var args, option;

                    option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                    return this.each(function () {
                        var data;

                        data = $(this).data('star-rating');
                        if (!data) {
                            $(this).data('star-rating', (data = new Starrr($(this), option)));
                        }
                        if (typeof option === 'string') {
                            return data[option].apply(data, args);
                        }
                    });
                }
            });
        })(window.jQuery, window);

        $(function () {
            return $(".starrr").starrr();
        });

        $(document).ready(function () {

            $('.starrr').on('starrr:change', function (e, value) {
                var id = $(this).attr('data-ques');
                var allCount = [];
                $('#count' + id).val(value);
                $('.count').each(function () {
                    if ($(this).val() > 0) {
                        allCount.push($(this).val());
                    }
                });
                console.log($('.count').length);
                console.log($(allCount.length));
                if ($('.count').length == allCount.length) {
                    $('input#submitReview_from').removeAttr('disabled');
                }
            });

            // $('#submitReview_from').on('click',function () {
            //     $ctoken =$('meta[name="csrf-token"]').attr('content')
            //     $fromdata = $('#reviewForm').serialize();
            //     console.log($fromdata.split('&'));
            //     $.ajax({
            //         type: "POST",
            //         url: "/submit-review",
            //         data: {_token: $ctoken, data: $fromdata.split('&')}
            //     }).done(function (msg) {
            //         console.log("Data Saved: " + msg);
            //     });
            // })
        });
    </script>
@endpush
