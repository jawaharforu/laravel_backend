<?php

use Illuminate\Database\Seeder;

class ContactTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('contact')->delete();
        
        \DB::table('contact')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'admin',
                'email' => 'sdfsf@gmail.com',
                'mobile' => '7899017743',
                'countrycode' => '+91',
                'message' => 'test',
                'created_at' => '2018-08-31 16:50:31',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'admin',
                'email' => 'sdfsf@gmail.com',
                'mobile' => '7899017743',
                'countrycode' => '+91',
                'message' => 'test',
                'created_at' => '2018-09-03 12:38:49',
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'asdf',
                'email' => 'asdef@gmail.ocm',
                'mobile' => '1234567898',
                'countrycode' => '+91',
                'message' => '951345',
                'created_at' => '2018-09-03 13:11:06',
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}