<?php

use Illuminate\Database\Seeder;

class JobDescTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('job_desc')->delete();
        
        \DB::table('job_desc')->insert(array (
            0 => 
            array (
                'id' => 6,
                'name' => 'Developer',
                'description' => '<p>tresr</p>',
                'filename' => NULL,
                'company_id' => 27,
                'assinged_q' => NULL,
                'created_at' => '2018-08-29 21:25:03',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 7,
                'name' => 'Designer',
                'description' => '<p>test</p>',
                'filename' => NULL,
                'company_id' => 27,
                'assinged_q' => NULL,
                'created_at' => '2018-08-29 21:25:24',
                'updated_at' => '2018-08-29 22:23:08',
            ),
            2 => 
            array (
                'id' => 8,
                'name' => 'Tester',
                'description' => '<p>At lease they need to know automation</p><p>Good communication skills</p><p>Good writing skills</p><p>Knowledge in test cases</p><p><br></p>',
                'filename' => NULL,
                'company_id' => 118,
                'assinged_q' => NULL,
                'created_at' => '2018-08-30 22:07:26',
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}