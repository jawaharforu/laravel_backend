<?php

use Illuminate\Database\Seeder;

class HrindexFormTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('hrindex_form')->delete();
        
        \DB::table('hrindex_form')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'basava',
                'email' => 'basava@gmail.com',
                'mobile' => '7899017743',
                'designation' => 'junior',
                'companyname' => 'zolipe',
                'industry' => 'it',
                'created_at' => '2018-09-03 20:16:44',
                'updated_at' => '2018-09-03 20:16:56',
            ),
            1 => 
            array (
                'id' => 3,
                'name' => 'admin',
                'email' => 'basavaprabhu777@gmail.com',
                'mobile' => '9876543210',
                'designation' => 'Employee',
                'companyname' => 'test',
                'industry' => 'test',
                'created_at' => '2018-09-03 14:47:46',
                'updated_at' => '2018-09-03 20:17:46',
            ),
        ));
        
        
    }
}