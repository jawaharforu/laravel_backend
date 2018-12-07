<?php

use Illuminate\Database\Seeder;

class CmsModulsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cms_moduls')->delete();
        
        \DB::table('cms_moduls')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Notifications',
                'icon' => 'fa fa-cog',
                'path' => 'notifications',
                'table_name' => 'cms_notifications',
                'controller' => 'NotificationsController',
                'is_protected' => 1,
                'is_active' => 1,
                'created_at' => '2018-08-27 20:10:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Privileges',
                'icon' => 'fa fa-cog',
                'path' => 'privileges',
                'table_name' => 'cms_privileges',
                'controller' => 'PrivilegesController',
                'is_protected' => 1,
                'is_active' => 1,
                'created_at' => '2018-08-27 20:10:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Privileges Roles',
                'icon' => 'fa fa-cog',
                'path' => 'privileges_roles',
                'table_name' => 'cms_privileges_roles',
                'controller' => 'PrivilegesRolesController',
                'is_protected' => 1,
                'is_active' => 1,
                'created_at' => '2018-08-27 20:10:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Users Management',
                'icon' => 'fa fa-users',
                'path' => 'users',
                'table_name' => 'cms_users',
                'controller' => 'AdminCmsUsersController',
                'is_protected' => 0,
                'is_active' => 1,
                'created_at' => '2018-08-27 20:10:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Settings',
                'icon' => 'fa fa-cog',
                'path' => 'settings',
                'table_name' => 'cms_settings',
                'controller' => 'SettingsController',
                'is_protected' => 1,
                'is_active' => 1,
                'created_at' => '2018-08-27 20:10:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Module Generator',
                'icon' => 'fa fa-database',
                'path' => 'module_generator',
                'table_name' => 'cms_moduls',
                'controller' => 'ModulsController',
                'is_protected' => 1,
                'is_active' => 1,
                'created_at' => '2018-08-27 20:10:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Menu Management',
                'icon' => 'fa fa-bars',
                'path' => 'menu_management',
                'table_name' => 'cms_menus',
                'controller' => 'MenusController',
                'is_protected' => 1,
                'is_active' => 1,
                'created_at' => '2018-08-27 20:10:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Email Templates',
                'icon' => 'fa fa-envelope-o',
                'path' => 'email_templates',
                'table_name' => 'cms_email_templates',
                'controller' => 'EmailTemplatesController',
                'is_protected' => 1,
                'is_active' => 1,
                'created_at' => '2018-08-27 20:10:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'Statistic Builder',
                'icon' => 'fa fa-dashboard',
                'path' => 'statistic_builder',
                'table_name' => 'cms_statistics',
                'controller' => 'StatisticBuilderController',
                'is_protected' => 1,
                'is_active' => 1,
                'created_at' => '2018-08-27 20:10:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'API Generator',
                'icon' => 'fa fa-cloud-download',
                'path' => 'api_generator',
                'table_name' => '',
                'controller' => 'ApiCustomController',
                'is_protected' => 1,
                'is_active' => 1,
                'created_at' => '2018-08-27 20:10:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'Log User Access',
                'icon' => 'fa fa-flag-o',
                'path' => 'logs',
                'table_name' => 'cms_logs',
                'controller' => 'LogsController',
                'is_protected' => 1,
                'is_active' => 1,
                'created_at' => '2018-08-27 20:10:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            11 => 
            array (
                'id' => 12,
                'name' => 'Companies',
                'icon' => 'fa fa-glass',
                'path' => 'companies',
                'table_name' => 'companies',
                'controller' => 'AdminCompaniesController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-27 20:21:07',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            12 => 
            array (
                'id' => 13,
                'name' => 'Head Trainers',
                'icon' => 'fa fa-glass',
                'path' => 'training_head',
                'table_name' => 'training_head',
                'controller' => 'AdminTrainingHeadController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-27 20:29:15',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            13 => 
            array (
                'id' => 14,
                'name' => 'Budget',
                'icon' => 'fa fa-glass',
                'path' => 'budget',
                'table_name' => 'budget',
                'controller' => 'AdminBudgetController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-27 20:32:57',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            14 => 
            array (
                'id' => 15,
                'name' => 'Products',
                'icon' => 'fa fa-glass',
                'path' => 'products',
                'table_name' => 'products',
                'controller' => 'AdminProductsController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-27 20:39:19',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            15 => 
            array (
                'id' => 16,
                'name' => 'Departmets',
                'icon' => 'fa fa-glass',
                'path' => 'departments',
                'table_name' => 'departments',
                'controller' => 'AdminDepartmentsController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-27 20:41:47',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            16 => 
            array (
                'id' => 17,
            'name' => 'Skill Sets ( Headers)',
                'icon' => 'fa fa-glass',
                'path' => 'skill_sets',
                'table_name' => 'skill_sets',
                'controller' => 'AdminSkillSetsController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-27 20:57:11',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            17 => 
            array (
                'id' => 18,
                'name' => 'Assessments Types',
                'icon' => 'fa fa-glass',
                'path' => 'assessments',
                'table_name' => 'assessments',
                'controller' => 'AdminAssessmentsController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-27 21:20:05',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            18 => 
            array (
                'id' => 19,
                'name' => 'Question Bank',
                'icon' => 'fa fa-glass',
                'path' => 'questions',
                'table_name' => 'questions',
                'controller' => 'AdminQuestionsController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-27 21:21:36',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            19 => 
            array (
                'id' => 20,
                'name' => 'Scale Sets',
                'icon' => 'fa fa-glass',
                'path' => 'scale',
                'table_name' => 'scale',
                'controller' => 'AdminScaleController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-27 21:29:16',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            20 => 
            array (
                'id' => 21,
                'name' => 'CMS',
                'icon' => 'fa fa-glass',
                'path' => 'pages',
                'table_name' => 'pages',
                'controller' => 'AdminPagesController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-27 21:48:43',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            21 => 
            array (
                'id' => 22,
                'name' => 'Job Description',
                'icon' => 'fa fa-glass',
                'path' => 'job_desc',
                'table_name' => 'job_desc',
                'controller' => 'AdminJobDescController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-28 00:38:11',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            22 => 
            array (
                'id' => 23,
                'name' => 'Employee Roles',
                'icon' => 'fa fa-glass',
                'path' => 'employees_types',
                'table_name' => 'employees_types',
                'controller' => 'AdminEmployeesTypesController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-28 17:42:17',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            23 => 
            array (
                'id' => 24,
                'name' => 'Employee Management',
                'icon' => 'fa fa-glass',
                'path' => 'employees',
                'table_name' => 'employees',
                'controller' => 'AdminEmployeesController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-28 17:44:26',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            24 => 
            array (
                'id' => 25,
                'name' => 'Questions Assigning to JD',
                'icon' => 'fa fa-question-circle',
                'path' => 'job_desc_mapped_questions',
                'table_name' => 'job_desc_mapped_questions',
                'controller' => 'AdminJobDescMappedQuestionsController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-28 18:59:10',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            25 => 
            array (
                'id' => 26,
                'name' => 'Oranagram Structure',
                'icon' => 'fa fa-glass',
                'path' => 'oranagram_structure',
                'table_name' => 'oranagram_structure',
                'controller' => 'AdminOranagramStructureController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-28 21:06:22',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            26 => 
            array (
                'id' => 27,
                'name' => 'Budget Plans',
                'icon' => 'fa fa-glass',
                'path' => 'budget_plans',
                'table_name' => 'budget_plans',
                'controller' => 'AdminBudgetPlansController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-29 19:46:06',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            27 => 
            array (
                'id' => 28,
                'name' => 'Testimonial',
                'icon' => 'fa fa-glass',
                'path' => 'testimonial',
                'table_name' => 'testimonial',
                'controller' => 'AdminTestimonialController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-30 18:18:29',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            28 => 
            array (
                'id' => 29,
                'name' => 'Feature',
                'icon' => 'fa fa-glass',
                'path' => 'feature',
                'table_name' => 'feature',
                'controller' => 'AdminFeatureController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-30 19:35:42',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            29 => 
            array (
                'id' => 30,
                'name' => 'Blog',
                'icon' => 'fa fa-glass',
                'path' => 'blog',
                'table_name' => 'blog',
                'controller' => 'AdminBlogController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-30 19:53:39',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            30 => 
            array (
                'id' => 31,
                'name' => 'Productroadmap',
                'icon' => 'fa fa-glass',
                'path' => 'productroadmap',
                'table_name' => 'productroadmap',
                'controller' => 'AdminProductroadmapController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-30 20:02:25',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            31 => 
            array (
                'id' => 32,
                'name' => 'Whitepaper',
                'icon' => 'fa fa-glass',
                'path' => 'whitepaper',
                'table_name' => 'whitepaper',
                'controller' => 'AdminWhitepaperController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-30 20:08:42',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            32 => 
            array (
                'id' => 33,
                'name' => 'Career',
                'icon' => 'fa fa-glass',
                'path' => 'career',
                'table_name' => 'career',
                'controller' => 'AdminCareerController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-30 20:15:03',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            33 => 
            array (
                'id' => 34,
                'name' => 'Contactus',
                'icon' => 'fa fa-glass',
                'path' => 'contact',
                'table_name' => 'contact',
                'controller' => 'AdminContactController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-30 20:22:58',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            34 => 
            array (
                'id' => 35,
                'name' => 'Faqcategory',
                'icon' => 'fa fa-glass',
                'path' => 'faqcategory',
                'table_name' => 'faqcategory',
                'controller' => 'AdminFaqcategoryController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-30 20:34:08',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            35 => 
            array (
                'id' => 36,
                'name' => 'Faqsubcategory',
                'icon' => 'fa fa-glass',
                'path' => 'faqsubcategory',
                'table_name' => 'faqsubcategory',
                'controller' => 'AdminFaqsubcategoryController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-30 20:34:47',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            36 => 
            array (
                'id' => 37,
                'name' => 'Faq',
                'icon' => 'fa fa-glass',
                'path' => 'faq',
                'table_name' => 'faq',
                'controller' => 'AdminFaqController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-08-30 20:35:41',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            37 => 
            array (
                'id' => 38,
                'name' => 'hrindexform',
                'icon' => 'fa fa-glass',
                'path' => 'hrindex_form',
                'table_name' => 'hrindex_form',
                'controller' => 'AdminHrindexFormController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-09-03 12:04:00',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            38 => 
            array (
                'id' => 39,
                'name' => 'Hr Index Question Type',
                'icon' => 'fa fa-glass',
                'path' => 'hrindex_question_type',
                'table_name' => 'hrindex_question_type',
                'controller' => 'AdminHrindexQuestionTypeController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-09-03 14:54:36',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            39 => 
            array (
                'id' => 40,
                'name' => 'Hr Index Questions',
                'icon' => 'fa fa-glass',
                'path' => 'hrindex_questions',
                'table_name' => 'hrindex_questions',
                'controller' => 'AdminHrindexQuestionsController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-09-03 15:04:44',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            40 => 
            array (
                'id' => 41,
                'name' => 'Weightage Management',
                'icon' => 'fa fa-glass',
                'path' => 'weight_age',
                'table_name' => 'weight_age',
                'controller' => 'AdminWeightAgeController',
                'is_protected' => 0,
                'is_active' => 0,
                'created_at' => '2018-09-03 16:53:02',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}