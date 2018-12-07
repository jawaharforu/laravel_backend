<?php

use Illuminate\Database\Seeder;

class BudgetTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('budget')->delete();
        
        \DB::table('budget')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name_of_budget' => NULL,
                'year' => '1998',
                'amount' => 0.0,
                'company_id' => 1,
                'created_at' => '2018-08-27 20:34:18',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'name_of_budget' => NULL,
                'year' => '2018',
                'amount' => 200000.0,
                'company_id' => 118,
                'created_at' => '2018-08-29 19:43:15',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'name_of_budget' => 'Test Budget',
                'year' => '2018',
                'amount' => 20000.0,
                'company_id' => 27,
                'created_at' => '2018-08-29 23:05:16',
                'updated_at' => '2018-08-29 23:30:06',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}