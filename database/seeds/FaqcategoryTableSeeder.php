<?php

use Illuminate\Database\Seeder;

class FaqcategoryTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('faqcategory')->delete();
        
        \DB::table('faqcategory')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'gsdfgsfdgsdfg',
                'created_at' => '2018-08-30 20:36:37',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'qwerqewrqe',
                'created_at' => '2018-08-30 20:36:44',
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'xcvxcbv',
                'created_at' => '2018-08-30 20:36:48',
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Animal',
                'created_at' => '2018-08-31 16:52:56',
                'updated_at' => '2018-08-31 16:56:43',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Mathematics',
                'created_at' => '2018-08-31 16:57:22',
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}