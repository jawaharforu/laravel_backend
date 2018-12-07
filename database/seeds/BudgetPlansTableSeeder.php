<?php

use Illuminate\Database\Seeder;

class BudgetPlansTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('budget_plans')->delete();
        
        \DB::table('budget_plans')->insert(array (
            0 => 
            array (
                'id' => 1,
                'assesment_type' => 15,
                'skill_sets' => 7,
                'training_head' => NULL,
                'training_sub_head' => NULL,
                'percentage' => 24.0,
                'created_at' => '2018-08-29 23:12:19',
                'updated_at' => '2018-08-29 23:32:36',
                'company_id' => 27,
                'parentID' => 6,
                'budget_parent' => 3,
            ),
            1 => 
            array (
                'id' => 2,
                'assesment_type' => 15,
                'skill_sets' => 7,
                'training_head' => NULL,
                'training_sub_head' => 7,
                'percentage' => 34.0,
                'created_at' => '2018-08-29 23:13:55',
                'updated_at' => '2018-08-29 23:30:51',
                'company_id' => 27,
                'parentID' => 6,
                'budget_parent' => 3,
            ),
        ));
        
        
    }
}