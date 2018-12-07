<?php

use Illuminate\Database\Seeder;

class ScaleTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('scale')->delete();
        
        \DB::table('scale')->insert(array (
            0 => 
            array (
                'id' => 1,
                'no_of_options' => 3,
                'options' => 'yes
no
n/a',
                'role' => '1',
                'company_id' => 1,
                'created_at' => '2018-08-27 23:50:50',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'no_of_options' => 4,
                'options' => 'Good
Bad
Poor
Very Poor',
                'role' => '118',
                'company_id' => 118,
                'created_at' => '2018-08-29 21:12:48',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'no_of_options' => 5,
                'options' => 'Pariatur Aut 
proident 
consequat 
Sunt 
saepe',
                'role' => '118',
                'company_id' => 118,
                'created_at' => '2018-08-29 23:07:15',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'no_of_options' => 5,
                'options' => 'Never
Rarely
Sometime
Often
Always',
                'role' => '1',
                'company_id' => 0,
                'created_at' => '2018-08-31 15:25:03',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}