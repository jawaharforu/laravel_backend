<?php

use Illuminate\Database\Seeder;

class GlobalSettingsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('global_settings')->delete();
        
        
        
    }
}