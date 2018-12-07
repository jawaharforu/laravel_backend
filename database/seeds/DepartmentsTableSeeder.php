<?php

use Illuminate\Database\Seeder;

class DepartmentsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('departments')->delete();
        
        \DB::table('departments')->insert(array (
            0 => 
            array (
                'id' => 18,
                'name' => 'MD',
                'visiblity_for' => 118,
                'parentid' => 0,
                'company_id' => 118,
                'created_at' => '2018-08-29 20:57:50',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 19,
                'name' => 'Development',
                'visiblity_for' => 118,
                'parentid' => 12,
                'company_id' => 118,
                'created_at' => '2018-08-29 21:49:27',
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 25,
                'name' => 'Management Dept',
                'visiblity_for' => 27,
                'parentid' => 0,
                'company_id' => 27,
                'created_at' => '2018-08-29 21:59:21',
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 26,
                'name' => 'Andriod',
                'visiblity_for' => 27,
                'parentid' => 25,
                'company_id' => 27,
                'created_at' => '2018-08-29 21:59:27',
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 27,
                'name' => 'IOS',
                'visiblity_for' => 27,
                'parentid' => 25,
                'company_id' => 27,
                'created_at' => '2018-08-29 21:59:33',
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 28,
                'name' => 'Testing',
                'visiblity_for' => 27,
                'parentid' => 25,
                'company_id' => 27,
                'created_at' => '2018-08-30 22:17:21',
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}