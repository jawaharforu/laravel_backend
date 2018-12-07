<?php

use Illuminate\Database\Seeder;

class CmsEmailTemplatesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cms_email_templates')->delete();
        
        \DB::table('cms_email_templates')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Email Template Forgot Password Backend',
                'slug' => 'forgot_password_backend',
                'subject' => NULL,
                'content' => '<p>Hi,</p><p>Someone requested forgot password, here is your new password : </p><p>[password]</p><p><br></p><p>--</p><p>Regards,</p><p>Admin</p>',
                'description' => '[password]',
                'from_name' => 'System',
                'from_email' => 'system@crudbooster.com',
                'cc_email' => NULL,
                'created_at' => '2018-08-27 20:10:40',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Employee',
                'slug' => 'Employee',
                'subject' => 'Employee',
                'content' => '<p>Hi [name],</p><p>Welcome to EPES!</p><p>Account details:</p><p>username: [email]</p><p>password: [password]</p><p>URL: [link]<br></p><p><br></p><p><br></p><p>--</p><p>Regards,</p><p>Admin</p>',
                'description' => 'test',
                'from_name' => 'ESPS',
                'from_email' => 'postmaster@thedruidgarden.in',
                'cc_email' => NULL,
                'created_at' => '2018-09-03 12:23:29',
                'updated_at' => '2018-09-03 12:28:25',
            ),
        ));
        
        
    }
}