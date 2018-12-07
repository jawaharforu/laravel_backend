<?php

use Illuminate\Database\Seeder;

class CmsStatisticsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cms_statistics')->delete();
        
        \DB::table('cms_statistics')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Dashboard',
                'slug' => 'dashboard',
                'created_at' => '2018-08-27 21:50:08',
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}