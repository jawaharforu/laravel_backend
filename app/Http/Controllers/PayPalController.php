<?php

namespace App\Http\Controllers;



use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Laravel\Cashier\Cashier;



class PayPalController extends Controller
{
    /**
     * @var ExpressCheckout
     */
    protected $provider;

    public function __construct()
    {
        Cashier::useCurrency('eur', '€');

    }

    public function process(){
        $user = User::find(1);
        $braintreeToken = \Braintree\ClientToken::generate();

        $user->newSubscription('main', 'mg6b')->create($braintreeToken);
    }

}