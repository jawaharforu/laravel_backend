<?php

use Illuminate\Database\Seeder;

class UserVerificationsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('user_verifications')->delete();
        
        
        
    }
}