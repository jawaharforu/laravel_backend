<?php

use Illuminate\Database\Seeder;

class SkillSetsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('skill_sets')->delete();
        
        \DB::table('skill_sets')->insert(array (
            0 => 
            array (
                'id' => 1,
                'skill_set_name' => 'Bevis Velazquez',
                'description' => 'Incidunt aut minus adipisci dolores vero qui sit explicabo Sit',
                'role' => 1,
                'assessments_type_id' => NULL,
                'company_id' => 1,
                'created_at' => '2018-08-27 21:21:18',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'skill_set_name' => 'Test',
                'description' => '',
                'role' => 1,
                'assessments_type_id' => NULL,
                'company_id' => 0,
                'created_at' => '2018-08-28 18:29:40',
                'updated_at' => NULL,
                'deleted_at' => '2018-08-28 18:45:56',
            ),
            2 => 
            array (
                'id' => 3,
                'skill_set_name' => 'test',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 1,
                'company_id' => 0,
                'created_at' => '2018-08-28 18:48:50',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'skill_set_name' => 'Ignatius England',
                'description' => 'Sed ipsum in voluptatum veniam',
                'role' => 0,
                'assessments_type_id' => 10,
                'company_id' => 118,
                'created_at' => '2018-08-29 21:12:57',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'skill_set_name' => 'Alec Hamilton',
                'description' => 'Consectetur ipsam sint assumenda asperiores dolor maxime magni',
                'role' => 0,
                'assessments_type_id' => 10,
                'company_id' => 118,
                'created_at' => '2018-08-29 23:07:36',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'skill_set_name' => 'Sara Blankenship',
                'description' => 'Aliqua Aperiam non doloremque quis aspernatur inventore officia similique perspiciatis quis hic ut fugiat quis accusantium dolorem facilis',
                'role' => 0,
                'assessments_type_id' => 15,
                'company_id' => 118,
                'created_at' => '2018-08-29 23:07:41',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'skill_set_name' => 'Whoopi Campbell',
                'description' => 'Magna consequuntur sed adipisicing eaque eos explicabo Iure impedit quod molestiae',
                'role' => 0,
                'assessments_type_id' => 15,
                'company_id' => 27,
                'created_at' => '2018-08-29 23:08:22',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            7 => 
            array (
                'id' => 8,
                'skill_set_name' => 'Email proficiency',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 14:06:03',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            8 => 
            array (
                'id' => 9,
                'skill_set_name' => 'MS Word proficiency',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 14:06:49',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            9 => 
            array (
                'id' => 10,
                'skill_set_name' => 'MS PowerPoint proficiency',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 14:07:04',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            10 => 
            array (
                'id' => 11,
                'skill_set_name' => 'MS Excel proficiency',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 14:07:17',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            11 => 
            array (
                'id' => 12,
                'skill_set_name' => 'Internet proficiency',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:06:46',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            12 => 
            array (
                'id' => 13,
                'skill_set_name' => 'Proficiency in use of Technical data',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:07:26',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            13 => 
            array (
                'id' => 14,
                'skill_set_name' => 'MIS proficiency',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:07:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            14 => 
            array (
                'id' => 15,
                'skill_set_name' => 'Values and ethics',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:07:50',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            15 => 
            array (
                'id' => 16,
                'skill_set_name' => 'Prioritization Skills',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:08:05',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            16 => 
            array (
                'id' => 17,
                'skill_set_name' => 'Emotional balance',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:08:48',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            17 => 
            array (
                'id' => 18,
                'skill_set_name' => 'Job fulfilment',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:09:07',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            18 => 
            array (
                'id' => 19,
                'skill_set_name' => 'Customer focus',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:09:19',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            19 => 
            array (
                'id' => 20,
                'skill_set_name' => 'Learning ability',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:09:29',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            20 => 
            array (
                'id' => 21,
                'skill_set_name' => 'Detail orientation',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:09:42',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            21 => 
            array (
                'id' => 22,
                'skill_set_name' => 'Listening skills',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:09:54',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            22 => 
            array (
                'id' => 23,
                'skill_set_name' => 'Organizational affiliation',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 16,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:10:10',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            23 => 
            array (
                'id' => 24,
                'skill_set_name' => 'Planning',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 17,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:10:34',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            24 => 
            array (
                'id' => 25,
                'skill_set_name' => 'Monitoring',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 17,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:11:00',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            25 => 
            array (
                'id' => 26,
                'skill_set_name' => 'Control',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 17,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:11:14',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            26 => 
            array (
                'id' => 27,
                'skill_set_name' => 'Compliance',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 17,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:11:26',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            27 => 
            array (
                'id' => 28,
                'skill_set_name' => 'Administrative',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 17,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:11:35',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            28 => 
            array (
                'id' => 29,
                'skill_set_name' => 'Housekeeping',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 17,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:11:45',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            29 => 
            array (
                'id' => 30,
                'skill_set_name' => 'Initiative',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 17,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:12:09',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            30 => 
            array (
                'id' => 31,
                'skill_set_name' => 'Strategic support',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 17,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:12:20',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            31 => 
            array (
                'id' => 32,
                'skill_set_name' => 'Trainings',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 17,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:12:33',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            32 => 
            array (
                'id' => 33,
                'skill_set_name' => 'External coordination',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 17,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:12:43',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            33 => 
            array (
                'id' => 34,
                'skill_set_name' => 'Internal Coordination',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 17,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:12:54',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            34 => 
            array (
                'id' => 35,
                'skill_set_name' => 'Feedback',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 18,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:13:07',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            35 => 
            array (
                'id' => 36,
                'skill_set_name' => 'Team Skills',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 18,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:13:19',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            36 => 
            array (
                'id' => 37,
                'skill_set_name' => 'Conflict management',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 18,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:13:54',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            37 => 
            array (
                'id' => 38,
                'skill_set_name' => 'Goal Orientation',
                'description' => '',
                'role' => 0,
                'assessments_type_id' => 18,
                'company_id' => 0,
                'created_at' => '2018-08-31 15:14:06',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}