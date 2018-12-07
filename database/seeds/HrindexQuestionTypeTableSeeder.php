<?php

use Illuminate\Database\Seeder;

class HrindexQuestionTypeTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('hrindex_question_type')->delete();
        
        \DB::table('hrindex_question_type')->insert(array (
            0 => 
            array (
                'id' => 1,
                'question_type' => 'Staffing',
                'created_at' => '2018-09-03 15:06:11',
                'updated_at' => '2018-09-03 20:36:11',
            ),
            1 => 
            array (
                'id' => 2,
                'question_type' => 'Training and Development',
                'created_at' => '2018-09-03 15:06:19',
                'updated_at' => '2018-09-03 20:36:19',
            ),
            2 => 
            array (
                'id' => 3,
                'question_type' => 'Performance Systems',
                'created_at' => '2018-09-03 15:06:30',
                'updated_at' => '2018-09-03 20:36:30',
            ),
            3 => 
            array (
                'id' => 5,
                'question_type' => 'Safety and Health',
                'created_at' => '2018-09-03 15:07:06',
                'updated_at' => '2018-09-03 20:37:06',
            ),
            4 => 
            array (
                'id' => 6,
                'question_type' => 'Labour Relations',
                'created_at' => '2018-09-03 15:07:26',
                'updated_at' => '2018-09-03 20:37:26',
            ),
            5 => 
            array (
                'id' => 7,
                'question_type' => 'Internal Communication',
                'created_at' => '2018-09-03 15:07:35',
                'updated_at' => '2018-09-03 20:37:35',
            ),
            6 => 
            array (
                'id' => 8,
                'question_type' => 'Diversity',
                'created_at' => '2018-09-03 15:07:41',
                'updated_at' => '2018-09-03 20:37:41',
            ),
        ));
        
        
    }
}