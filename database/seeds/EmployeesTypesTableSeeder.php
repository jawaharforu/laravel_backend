<?php

use Illuminate\Database\Seeder;

class EmployeesTypesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('employees_types')->delete();
        
        \DB::table('employees_types')->insert(array (
            0 => 
            array (
                'id' => 1,
                'role_name' => 'HR',
                'role_desc' => 'TestTestTest',
                'company_id' => NULL,
                'created_at' => '2018-08-28 17:42:59',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'role_name' => 'Developer',
                'role_desc' => 'test',
                'company_id' => 0,
                'created_at' => '2018-08-28 20:26:28',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'role_name' => 'HR',
                'role_desc' => 'test',
                'company_id' => 118,
                'created_at' => '2018-08-29 21:08:55',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'role_name' => 'Designer',
                'role_desc' => 'test',
                'company_id' => 118,
                'created_at' => '2018-08-29 21:25:37',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'role_name' => 'Designer',
                'role_desc' => 'test',
                'company_id' => 118,
                'created_at' => '2018-08-29 21:26:06',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'role_name' => 'Designer',
                'role_desc' => 'dsf',
                'company_id' => 27,
                'created_at' => '2018-08-29 21:27:35',
                'updated_at' => '2018-08-29 21:27:45',
                'deleted_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'role_name' => 'Jr. Tester',
                'role_desc' => 'Who has less than 1 year experience',
                'company_id' => 27,
                'created_at' => '2018-08-30 22:13:04',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}