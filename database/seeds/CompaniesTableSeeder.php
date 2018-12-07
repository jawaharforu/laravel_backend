<?php

use Illuminate\Database\Seeder;

class CompaniesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('companies')->delete();
        
        \DB::table('companies')->insert(array (
            0 => 
            array (
                'id' => 1,
                'jobtitle' => 'Accusantium voluptas aut quia voluptate corporis assumenda reiciendis',
                'company_name' => 'Rivers Cunningham Associates',
                'industry' => 'Eos sint nulla iusto aliquam ipsum',
                'no_of_employees' => '45',
                'company_contact' => 'Mcpherson Vargas Associates',
                'company_address' => 'Frazier Finch LLC',
                'country_code' => 'Labore nemo iusto laboris aute quo officia deleniti id atque dolores culpa expedita adipisci nisi quia officia est quisquam error',
                'country' => 'Sit odio eum magna commodo possimus ipsum impedit eligendi similique qui doloribus commodo autem praesentium quam',
                'state' => 'Explicabo Reiciendis et sed cum molestias sint et velit dolor dolorum et',
                'city' => 'Totam ea temporibus aut neque eos quia mollitia autem non velit consequatur reprehenderit omnis voluptatem',
                'logo' => 'uploads/1/2018-08/Screen_Shot_2018-08-26_at_9_32_18_PM.png',
                'status' => 1,
                'created_at' => '2018-08-27 20:25:43',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 27,
                'jobtitle' => 'test',
                'company_name' => '1',
                'industry' => '1',
                'no_of_employees' => '1',
                'company_contact' => '1',
                'company_address' => '1',
                'country_code' => '1',
                'country' => '1',
                'state' => '1',
                'city' => '1',
                'logo' => NULL,
                'status' => 1,
                'created_at' => '2018-08-28 05:00:02',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}