<?php

use Illuminate\Database\Seeder;

class TrainingHeadTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('training_head')->delete();
        
        \DB::table('training_head')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Russell Calderon',
                'parentID' => 54,
                'company_id' => 1,
                'created_at' => '2018-08-27 20:32:43',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Audra Pickett',
                'parentID' => 52,
                'company_id' => 1,
                'created_at' => '2018-08-27 21:58:07',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Holly Maldonado',
                'parentID' => 1,
                'company_id' => 0,
                'created_at' => '2018-08-29 20:01:29',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Tara Fuller',
                'parentID' => 1,
                'company_id' => 27,
                'created_at' => '2018-08-29 20:01:59',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Len Franklin',
                'parentID' => 1,
                'company_id' => 0,
                'created_at' => '2018-08-29 20:02:03',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Faith Frederick',
                'parentID' => 0,
                'company_id' => 27,
                'created_at' => '2018-08-29 23:10:27',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Emerson Sanders',
                'parentID' => 6,
                'company_id' => 27,
                'created_at' => '2018-08-29 23:13:27',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}