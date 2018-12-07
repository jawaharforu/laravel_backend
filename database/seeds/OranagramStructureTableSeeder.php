<?php

use Illuminate\Database\Seeder;

class OranagramStructureTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('oranagram_structure')->delete();
        
        \DB::table('oranagram_structure')->insert(array (
            0 => 
            array (
                'id' => 21,
                'parentid' => 25,
                'department_sub_id' => NULL,
                'head_name' => 'MD',
                'Designation' => 'MD',
                'parent_id' => 'epes5b867ca854940',
                'created_at' => '2018-08-29 21:59:52',
                'updated_at' => NULL,
                'is_super' => 1,
                'company_id' => 27,
            ),
            1 => 
            array (
                'id' => 22,
                'parentid' => 25,
                'department_sub_id' => 26,
                'head_name' => 'PM',
                'Designation' => 'PM',
                'parent_id' => '21',
                'created_at' => '2018-08-29 22:00:06',
                'updated_at' => NULL,
                'is_super' => 0,
                'company_id' => 27,
            ),
            2 => 
            array (
                'id' => 23,
                'parentid' => 27,
                'department_sub_id' => NULL,
                'head_name' => 'PM',
                'Designation' => 'PM',
                'parent_id' => '21',
                'created_at' => '2018-08-29 22:00:26',
                'updated_at' => NULL,
                'is_super' => 0,
                'company_id' => 27,
            ),
            3 => 
            array (
                'id' => 24,
                'parentid' => 25,
                'department_sub_id' => 26,
                'head_name' => 'TL 1',
                'Designation' => 'TL 1',
                'parent_id' => '22',
                'created_at' => '2018-08-29 22:08:05',
                'updated_at' => NULL,
                'is_super' => 0,
                'company_id' => 27,
            ),
            4 => 
            array (
                'id' => 25,
                'parentid' => 25,
                'department_sub_id' => 26,
                'head_name' => 'SR Developer',
                'Designation' => 'SR Developer',
                'parent_id' => '24',
                'created_at' => '2018-08-29 22:10:33',
                'updated_at' => NULL,
                'is_super' => 0,
                'company_id' => 27,
            ),
            5 => 
            array (
                'id' => 26,
                'parentid' => 25,
                'department_sub_id' => 26,
                'head_name' => 'GM',
                'Designation' => 'GM',
                'parent_id' => '22',
                'created_at' => '2018-08-29 22:40:58',
                'updated_at' => '2018-08-29 22:41:43',
                'is_super' => 0,
                'company_id' => 27,
            ),
        ));
        
        
    }
}