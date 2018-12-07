<?php

use Illuminate\Database\Seeder;

class AssessmentsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('assessments')->delete();
        
        \DB::table('assessments')->insert(array (
            0 => 
            array (
                'id' => 10,
                'name' => 'Helen Carpenter',
                'role' => NULL,
                'company_id' => 0,
                'created_at' => '2018-08-29 20:25:47',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 14,
                'name' => 'Aileen Schwartz',
                'role' => NULL,
                'company_id' => 27,
                'created_at' => '2018-08-29 23:06:50',
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 15,
                'name' => 'Jennifer Beck',
                'role' => NULL,
                'company_id' => 27,
                'created_at' => '2018-08-29 23:06:52',
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 16,
                'name' => 'Personality',
                'role' => NULL,
                'company_id' => 0,
                'created_at' => '2018-08-31 13:53:56',
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 17,
                'name' => 'Job Specific',
                'role' => NULL,
                'company_id' => 0,
                'created_at' => '2018-08-31 13:54:05',
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 18,
                'name' => 'Managerial',
                'role' => NULL,
                'company_id' => 0,
                'created_at' => '2018-08-31 13:54:12',
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}