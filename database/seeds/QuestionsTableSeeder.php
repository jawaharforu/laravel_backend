<?php

use Illuminate\Database\Seeder;

class QuestionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('questions')->delete();
        
        \DB::table('questions')->insert(array (
            0 => 
            array (
                'id' => 2,
                'question' => 'Voluptate quam eius iure cillum dolores',
                'type' => '1',
                'role' => '1',
                'assessments_type_id' => 1,
                'company_id' => 0,
                'skill_set_id' => 3,
                'scaleid_id' => 1,
                'created_at' => '2018-08-28 18:56:56',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 3,
                'question' => 'Hic velit nobis in in cupidatat corporis corporis autem accusantium sint cupiditate praesentium consequuntur',
                'type' => '1',
                'role' => '1',
                'assessments_type_id' => 1,
                'company_id' => 0,
                'skill_set_id' => 3,
                'scaleid_id' => 1,
                'created_at' => '2018-08-28 19:26:15',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 4,
                'question' => 'Quas qui dolorem omnis voluptatum Nam facilis in blanditiis mollit autem quam',
                'type' => '3',
                'role' => '118',
                'assessments_type_id' => 10,
                'company_id' => 118,
                'skill_set_id' => 4,
                'scaleid_id' => 2,
                'created_at' => '2018-08-29 21:13:15',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 5,
                'question' => 'How proficient are you in E-mail usage for official conversation',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 8,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:27:49',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            4 => 
            array (
                'id' => 6,
                'question' => 'How proficient are you in using MS-Word to write reports',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 9,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:28:44',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            5 => 
            array (
                'id' => 7,
                'question' => 'How proficient are you in making and using presentations on computer',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 10,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:29:20',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            6 => 
            array (
                'id' => 8,
                'question' => 'How proficient are you in making and using spread sheets for data representation',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 11,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:29:50',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            7 => 
            array (
                'id' => 9,
                'question' => 'How proficient are you in using Inter/Intra-net',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 12,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:30:25',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            8 => 
            array (
                'id' => 10,
                'question' => 'Rate your proficiency in presentation of technical data.',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 13,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:30:52',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            9 => 
            array (
                'id' => 11,
                'question' => 'How proficient are you in knowledge about management information systems, such as SAP/MIS/ERP',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 14,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:31:19',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            10 => 
            array (
                'id' => 12,
                'question' => 'Tick the level of agreement: You feel the organization has an ethical core',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 15,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:31:41',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            11 => 
            array (
                'id' => 13,
                'question' => 'Do you feel that you are running from one work to another and yet not able to complete them all?',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 16,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:32:08',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            12 => 
            array (
                'id' => 14,
                'question' => 'Do you feel cheated by your fellow workmen?',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 17,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:32:33',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            13 => 
            array (
                'id' => 15,
                'question' => 'Do you often feel that your work is not being valued?',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 18,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:33:03',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            14 => 
            array (
                'id' => 16,
                'question' => 'Tick the level of agreement:',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 19,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:33:31',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            15 => 
            array (
                'id' => 17,
                'question' => 'You know how your work impacts ultimate customer’s satisfaction',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 19,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:33:50',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            16 => 
            array (
                'id' => 18,
                'question' => 'Tick the level of agreement:',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 20,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:34:29',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            17 => 
            array (
                'id' => 19,
                'question' => 'You are  a quick learner',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 20,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:34:48',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            18 => 
            array (
                'id' => 20,
                'question' => 'Tick the level of agreement:',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 21,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:35:28',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            19 => 
            array (
                'id' => 21,
                'question' => 'You have to re-do your work may times before closing it.',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 21,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:35:46',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            20 => 
            array (
                'id' => 22,
                'question' => 'Do people often tell you to slow down and let them complete what they are saying?',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 22,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:36:19',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            21 => 
            array (
                'id' => 23,
                'question' => 'What would you do if you find your Team mate harming the organization\'s assets?',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 16,
                'company_id' => 0,
                'skill_set_id' => 23,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:36:53',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            22 => 
            array (
                'id' => 24,
                'question' => 'Ensuring proper management of production process',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 24,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:37:52',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            23 => 
            array (
                'id' => 25,
                'question' => 'Effective monitoring of resources of each section',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 25,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:38:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            24 => 
            array (
                'id' => 26,
                'question' => 'Effective monitoring performance of each section',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 25,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:41:11',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            25 => 
            array (
                'id' => 27,
                'question' => 'Ensuring proper day-to-day planning',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 24,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:41:36',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            26 => 
            array (
                'id' => 28,
                'question' => 'Ensuring proper day-to-day scheduling',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 24,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:42:13',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            27 => 
            array (
                'id' => 29,
                'question' => 'Ensuring proper day-to-day monitoring',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 25,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:42:40',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            28 => 
            array (
                'id' => 30,
                'question' => 'Effective monitoring of performance of the subordinates',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 25,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:43:02',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            29 => 
            array (
                'id' => 31,
                'question' => 'Achieving production targets on day to day bases',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 26,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:43:21',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            30 => 
            array (
                'id' => 32,
                'question' => 'Effective monitoring of 3Ms',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 25,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:43:42',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            31 => 
            array (
                'id' => 33,
                'question' => 'Ensuring  optimum utilization of resources',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 26,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:44:00',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            32 => 
            array (
                'id' => 34,
                'question' => '100% compliance to prescribed quality requirements',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 27,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:44:28',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            33 => 
            array (
                'id' => 35,
                'question' => '100% compliance to Statutory requirements',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 27,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:44:55',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            34 => 
            array (
                'id' => 36,
                'question' => 'Ensuring discipline inside manufacturing premises',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 28,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:45:20',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            35 => 
            array (
                'id' => 37,
                'question' => 'Ensuring clean and hygienic manufacturing premises',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 29,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:45:41',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            36 => 
            array (
                'id' => 38,
                'question' => 'Ensuring the workforce delivers on the pre-set production targets',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 26,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:46:01',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            37 => 
            array (
                'id' => 39,
                'question' => 'Ensuring the workforce delivers on the pre-set packing targets',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 26,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:46:17',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            38 => 
            array (
                'id' => 40,
                'question' => 'Accurate estimation and related calculation for production in the unit',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 28,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:46:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            39 => 
            array (
                'id' => 41,
                'question' => 'Timely availability of MIS based information for all manufacturing related activities',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 28,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:50:29',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            40 => 
            array (
                'id' => 42,
                'question' => 'Conducting developmental trials for different machines for different products and new innovations',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 30,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:50:51',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            41 => 
            array (
                'id' => 43,
                'question' => 'Providing visionary support to The Board for further expansion and facility alteration activities',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 31,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:51:19',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            42 => 
            array (
                'id' => 44,
            'question' => 'How do you ensure that the trained person (Section heads) is well equipped to deliver on the job profile and (GMP, GHP, food safety)?',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 32,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:51:40',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            43 => 
            array (
                'id' => 45,
            'question' => 'with Leased and parent units (for achieving GCMMF sales targets)',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 33,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:52:01',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            44 => 
            array (
                'id' => 46,
                'question' => 'MCC and Dudhsagar Dairy for in time supply of raw milk',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 33,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:52:21',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            45 => 
            array (
                'id' => 47,
            'question' => 'GCMMF (timely dispatch of milk vehicles)',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 33,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:52:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            46 => 
            array (
                'id' => 48,
                'question' => 'With section heads to ensre targets are achieved :  Milk packing',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 34,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:52:58',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            47 => 
            array (
                'id' => 49,
                'question' => 'With section heads to ensre targets are achieved : UHT',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 34,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:53:20',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            48 => 
            array (
                'id' => 50,
                'question' => 'With section heads to ensre targets are achieved : Ice-cream and Dahi',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 17,
                'company_id' => 0,
                'skill_set_id' => 34,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:53:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            49 => 
            array (
                'id' => 51,
                'question' => 'How often do you discuss with your team on their current performance?',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 18,
                'company_id' => 0,
                'skill_set_id' => 35,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:54:04',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            50 => 
            array (
                'id' => 52,
                'question' => 'How  aware are you of the relationship your team shares amongst each other',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 18,
                'company_id' => 0,
                'skill_set_id' => 36,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:54:28',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            51 => 
            array (
                'id' => 53,
                'question' => 'Are you aware of the individual motivation levels of the people in your team?',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 18,
                'company_id' => 0,
                'skill_set_id' => 36,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:54:45',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            52 => 
            array (
                'id' => 54,
                'question' => 'Effectiveness in handling inter-departmental conflicts which affected the productivity of the division?',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 18,
                'company_id' => 0,
                'skill_set_id' => 37,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:55:04',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            53 => 
            array (
                'id' => 55,
                'question' => 'Effectiveness in handling intra-departmental conflicts which affected the productivity of the division?',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 18,
                'company_id' => 0,
                'skill_set_id' => 37,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:55:21',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            54 => 
            array (
                'id' => 56,
                'question' => 'Are you goal oriented [Please Substantiate your answers]',
                'type' => '2',
                'role' => '1',
                'assessments_type_id' => 18,
                'company_id' => 0,
                'skill_set_id' => 38,
                'scaleid_id' => 4,
                'created_at' => '2018-08-31 15:55:42',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}