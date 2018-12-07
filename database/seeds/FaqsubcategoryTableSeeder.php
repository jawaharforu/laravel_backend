<?php

use Illuminate\Database\Seeder;

class FaqsubcategoryTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('faqsubcategory')->delete();
        
        \DB::table('faqsubcategory')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'adsdffasdf',
                'faqcategoryid' => 3,
                'created_at' => '2018-08-30 20:42:35',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'cgfghdfghd',
                'faqcategoryid' => 2,
                'created_at' => '2018-08-30 20:42:44',
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Cornivorous',
                'faqcategoryid' => 4,
                'created_at' => '2018-08-31 16:53:23',
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Horbivorous',
                'faqcategoryid' => 4,
                'created_at' => '2018-08-31 16:53:35',
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Statistics',
                'faqcategoryid' => 5,
                'created_at' => '2018-08-31 16:57:44',
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Arithmetics',
                'faqcategoryid' => 5,
                'created_at' => '2018-08-31 16:57:55',
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Trigonometrics',
                'faqcategoryid' => 5,
                'created_at' => '2018-08-31 16:58:12',
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}