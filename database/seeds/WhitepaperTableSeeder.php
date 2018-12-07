<?php

use Illuminate\Database\Seeder;

class WhitepaperTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('whitepaper')->delete();
        
        \DB::table('whitepaper')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'asdfad',
                'email' => 'adsf@SADsad.SASD',
                'company' => 'adfs',
                'website' => 'asdf',
                'created_at' => '2018-08-30 20:12:27',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'admin',
                'email' => 'sdfsf@gmail.com',
                'company' => 'asdf',
                'website' => 'jaisaishankar.com',
                'created_at' => '2018-08-31 16:26:50',
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'admin',
                'email' => 'sdfsf@gmail.com',
                'company' => 'asdf',
                'website' => 'jaisaishankar.com',
                'created_at' => '2018-08-31 16:27:36',
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'admin',
                'email' => 'jawan@gmail.com',
                'company' => 'asdf',
                'website' => 'jaisaishankar.com',
                'created_at' => '2018-08-31 16:31:45',
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'zolipe',
                'email' => 'loremipsum@gmail.com',
                'company' => 'lorem ipsum',
                'website' => 'kisan.com',
                'created_at' => '2018-08-31 16:32:29',
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'test',
                'email' => 'jawan@gmail.com',
                'company' => 'asdf',
                'website' => 'jaisaishankar.com',
                'created_at' => '2018-08-31 16:34:28',
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'tswamy',
                'email' => 'jawan@gmail.com',
                'company' => 'iihr',
                'website' => 'iihr.res.in',
                'created_at' => '2018-09-03 12:41:26',
                'updated_at' => NULL,
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'test',
                'email' => 'sai@gmail.com',
                'company' => 'sf',
                'website' => 'sarvadharma.com',
                'created_at' => '2018-09-03 13:05:54',
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}