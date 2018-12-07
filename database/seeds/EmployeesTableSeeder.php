<?php

use Illuminate\Database\Seeder;

class EmployeesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('employees')->delete();
        
        \DB::table('employees')->insert(array (
            0 => 
            array (
                'id' => 8,
                'employee_code' => '98765',
                'employee_name' => 'Jessica Parks',
                'employee_type' => '2',
                'oranagram_id' => 24,
                'experience' => '7',
                'designation' => '7',
                'email' => 'xaped@mailinator.com',
                'country_code' => '8',
                'mobile' => '8',
                'address' => '8',
                'status' => 1,
                'company_id' => 27,
                'created_at' => '2018-08-29 18:38:25',
                'updated_at' => '2018-08-29 22:08:32',
                'deleted_at' => NULL,
                'parentid' => 25,
                'is_global' => 0,
            ),
            1 => 
            array (
                'id' => 9,
                'employee_code' => '87654',
                'employee_name' => 'Zephania Hahn',
                'employee_type' => '2',
                'oranagram_id' => 22,
                'experience' => '5',
                'designation' => '5',
                'email' => 'wobake@mailinator.com',
                'country_code' => '7',
                'mobile' => '7',
                'address' => '7',
                'status' => 1,
                'company_id' => 27,
                'created_at' => '2018-08-29 22:10:03',
                'updated_at' => NULL,
                'deleted_at' => NULL,
                'parentid' => 25,
                'is_global' => 0,
            ),
            2 => 
            array (
                'id' => 10,
                'employee_code' => '8765',
                'employee_name' => 'Axel Livingston',
                'employee_type' => '2',
                'oranagram_id' => 25,
                'experience' => '8',
                'designation' => '8',
                'email' => 'wyrasor@mailinator.com',
                'country_code' => '8',
                'mobile' => '8',
                'address' => '8',
                'status' => 1,
                'company_id' => 27,
                'created_at' => '2018-08-29 22:11:53',
                'updated_at' => NULL,
                'deleted_at' => NULL,
                'parentid' => 25,
                'is_global' => 0,
            ),
            3 => 
            array (
                'id' => 11,
                'employee_code' => '098765',
                'employee_name' => 'Megan Delacruz',
                'employee_type' => '6',
                'oranagram_id' => 26,
                'experience' => '7',
                'designation' => '7',
                'email' => 'nahityvy@mailinator.net',
                'country_code' => '7',
                'mobile' => '7',
                'address' => '7',
                'status' => 1,
                'company_id' => 27,
                'created_at' => '2018-08-29 22:48:55',
                'updated_at' => NULL,
                'deleted_at' => NULL,
                'parentid' => 25,
                'is_global' => 1,
            ),
            4 => 
            array (
                'id' => 12,
                'employee_code' => '98765',
                'employee_name' => 'Kumar',
                'employee_type' => '2',
                'oranagram_id' => 24,
                'experience' => '7',
                'designation' => '7',
                'email' => 'employee2@360epes.com',
                'country_code' => '8',
                'mobile' => '8',
                'address' => '8',
                'status' => 1,
                'company_id' => 27,
                'created_at' => '2018-08-29 18:38:25',
                'updated_at' => '2018-08-29 22:08:32',
                'deleted_at' => NULL,
                'parentid' => 25,
                'is_global' => 0,
            ),
        ));
        
        
    }
}