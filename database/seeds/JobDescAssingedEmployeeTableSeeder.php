<?php

use Illuminate\Database\Seeder;

class JobDescAssingedEmployeeTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('job_desc_assinged_employee')->delete();
        
        \DB::table('job_desc_assinged_employee')->insert(array (
            0 => 
            array (
                'id' => 1,
                'company_id' => 27,
                'employee_id' => 8,
                'jdid_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'company_id' => 27,
                'employee_id' => 9,
                'jdid_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'company_id' => 27,
                'employee_id' => 10,
                'jdid_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'company_id' => 27,
                'employee_id' => 11,
                'jdid_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}