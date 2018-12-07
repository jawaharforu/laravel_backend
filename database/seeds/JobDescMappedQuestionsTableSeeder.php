<?php

use Illuminate\Database\Seeder;

class JobDescMappedQuestionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('job_desc_mapped_questions')->delete();
        
        \DB::table('job_desc_mapped_questions')->insert(array (
            0 => 
            array (
                'id' => 1,
                'questionid_id' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
                'deleted_at' => NULL,
                'job_desc_id' => 5,
            ),
            1 => 
            array (
                'id' => 2,
                'questionid_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
                'deleted_at' => NULL,
                'job_desc_id' => 5,
            ),
            2 => 
            array (
                'id' => 3,
                'questionid_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
                'deleted_at' => NULL,
                'job_desc_id' => 7,
            ),
            3 => 
            array (
                'id' => 4,
                'questionid_id' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
                'deleted_at' => NULL,
                'job_desc_id' => 7,
            ),
            4 => 
            array (
                'id' => 5,
                'questionid_id' => 4,
                'created_at' => NULL,
                'updated_at' => NULL,
                'deleted_at' => NULL,
                'job_desc_id' => 7,
            ),
        ));
        
        
    }
}