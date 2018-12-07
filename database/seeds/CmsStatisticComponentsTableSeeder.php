<?php

use Illuminate\Database\Seeder;

class CmsStatisticComponentsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cms_statistic_components')->delete();
        
        \DB::table('cms_statistic_components')->insert(array (
            0 => 
            array (
                'id' => 2,
                'id_cms_statistics' => 1,
                'componentID' => '2878c7f75601df5a367e04002cb79256',
                'component_name' => 'smallbox',
                'area_name' => 'area1',
                'sorting' => 0,
                'name' => NULL,
            'config' => '{"name":"Total Companies","icon":"ion-bag","color":"bg-green","link":"#","sql":"SELECT count(*) FROM `companies`"}',
                'created_at' => '2018-08-27 21:50:18',
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}