<?php

use Illuminate\Database\Seeder;

class CmsUsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cms_users')->delete();
        
        \DB::table('cms_users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Super Admin',
                'photo' => 'uploads/1/2018-08/screen_shot_2018_08_26_at_93218_pm.png',
                'email' => 'admin@360epes.com',
                'password' => '$2y$10$5znd0SrTrWefxdr.jebOK.V4.U2ueswWE8BJKSZyCCYrsScjFR47W',
                'id_cms_privileges' => 1,
                'created_at' => '2018-08-27 14:40:39',
                'updated_at' => '2018-08-27 14:41:18',
                'status' => 'Active',
                'remember_token' => '',
                'company_id' => 0,
                'middle_name' => NULL,
                'last_name' => NULL,
                'is_verified' => 1,
            ),
            1 => 
            array (
                'id' => 118,
                'name' => '1',
                'photo' => NULL,
                'email' => 'company1@360epes.com',
                'password' => '$2y$10$vmxkRv2barAdZnylnBhkyuhx4hKcqlnOsy3urftQE7u3HWSsNd.Wq',
                'id_cms_privileges' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
                'status' => NULL,
                'remember_token' => '$2y$10$d12aAD2ZffBQQopFd6sSg.Ft6qXKO1Ic9ZtdwivnPRjpQjWaPkj3O',
                'company_id' => 27,
                'middle_name' => '1',
                'last_name' => '11',
                'is_verified' => 0,
            ),
            2 => 
            array (
                'id' => 119,
                'name' => 'Employee',
                'photo' => 'uploads/1/2018-08/screen_shot_2018_08_02_at_50231_pm.png',
                'email' => 'employee@360epes.com',
                'password' => '$2y$10$5Kr.bVyhq07WnvrSjcZr9e2uqiLPm5BbRz2aRyYFd1oRdZFpHu4rC',
                'id_cms_privileges' => 2,
                'created_at' => '2018-08-31 12:23:42',
                'updated_at' => NULL,
                'status' => NULL,
                'remember_token' => NULL,
                'company_id' => 27,
                'middle_name' => NULL,
                'last_name' => NULL,
                'is_verified' => 0,
            ),
        ));
        
        
    }
}