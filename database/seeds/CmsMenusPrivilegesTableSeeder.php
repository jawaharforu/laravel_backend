<?php

use Illuminate\Database\Seeder;

class CmsMenusPrivilegesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cms_menus_privileges')->delete();
        
        \DB::table('cms_menus_privileges')->insert(array (
            0 => 
            array (
                'id' => 1,
                'id_cms_menus' => 1,
                'id_cms_privileges' => 1,
            ),
            1 => 
            array (
                'id' => 2,
                'id_cms_menus' => 2,
                'id_cms_privileges' => 1,
            ),
            2 => 
            array (
                'id' => 3,
                'id_cms_menus' => 3,
                'id_cms_privileges' => 1,
            ),
            3 => 
            array (
                'id' => 6,
                'id_cms_menus' => 6,
                'id_cms_privileges' => 1,
            ),
            4 => 
            array (
                'id' => 16,
                'id_cms_menus' => 14,
                'id_cms_privileges' => 3,
            ),
            5 => 
            array (
                'id' => 17,
                'id_cms_menus' => 14,
                'id_cms_privileges' => 1,
            ),
            6 => 
            array (
                'id' => 19,
                'id_cms_menus' => 12,
                'id_cms_privileges' => 1,
            ),
            7 => 
            array (
                'id' => 20,
                'id_cms_menus' => 15,
                'id_cms_privileges' => 1,
            ),
            8 => 
            array (
                'id' => 21,
                'id_cms_menus' => 4,
                'id_cms_privileges' => 3,
            ),
            9 => 
            array (
                'id' => 22,
                'id_cms_menus' => 4,
                'id_cms_privileges' => 1,
            ),
            10 => 
            array (
                'id' => 23,
                'id_cms_menus' => 7,
                'id_cms_privileges' => 3,
            ),
            11 => 
            array (
                'id' => 24,
                'id_cms_menus' => 7,
                'id_cms_privileges' => 1,
            ),
            12 => 
            array (
                'id' => 26,
                'id_cms_menus' => 9,
                'id_cms_privileges' => 3,
            ),
            13 => 
            array (
                'id' => 27,
                'id_cms_menus' => 9,
                'id_cms_privileges' => 1,
            ),
            14 => 
            array (
                'id' => 28,
                'id_cms_menus' => 10,
                'id_cms_privileges' => 3,
            ),
            15 => 
            array (
                'id' => 29,
                'id_cms_menus' => 10,
                'id_cms_privileges' => 1,
            ),
            16 => 
            array (
                'id' => 33,
                'id_cms_menus' => 11,
                'id_cms_privileges' => 3,
            ),
            17 => 
            array (
                'id' => 34,
                'id_cms_menus' => 11,
                'id_cms_privileges' => 1,
            ),
            18 => 
            array (
                'id' => 35,
                'id_cms_menus' => 8,
                'id_cms_privileges' => 3,
            ),
            19 => 
            array (
                'id' => 36,
                'id_cms_menus' => 8,
                'id_cms_privileges' => 1,
            ),
            20 => 
            array (
                'id' => 37,
                'id_cms_menus' => 5,
                'id_cms_privileges' => 3,
            ),
            21 => 
            array (
                'id' => 38,
                'id_cms_menus' => 5,
                'id_cms_privileges' => 1,
            ),
            22 => 
            array (
                'id' => 46,
                'id_cms_menus' => 20,
                'id_cms_privileges' => 1,
            ),
            23 => 
            array (
                'id' => 48,
                'id_cms_menus' => NULL,
                'id_cms_privileges' => 3,
            ),
            24 => 
            array (
                'id' => 49,
                'id_cms_menus' => NULL,
                'id_cms_privileges' => 2,
            ),
            25 => 
            array (
                'id' => 50,
                'id_cms_menus' => 22,
                'id_cms_privileges' => 3,
            ),
            26 => 
            array (
                'id' => 51,
                'id_cms_menus' => 22,
                'id_cms_privileges' => 2,
            ),
            27 => 
            array (
                'id' => 52,
                'id_cms_menus' => 21,
                'id_cms_privileges' => 3,
            ),
            28 => 
            array (
                'id' => 53,
                'id_cms_menus' => 19,
                'id_cms_privileges' => 3,
            ),
            29 => 
            array (
                'id' => 54,
                'id_cms_menus' => 18,
                'id_cms_privileges' => 3,
            ),
            30 => 
            array (
                'id' => 56,
                'id_cms_menus' => 23,
                'id_cms_privileges' => 3,
            ),
            31 => 
            array (
                'id' => 57,
                'id_cms_menus' => 17,
                'id_cms_privileges' => 3,
            ),
            32 => 
            array (
                'id' => 58,
                'id_cms_menus' => 24,
                'id_cms_privileges' => 1,
            ),
            33 => 
            array (
                'id' => 59,
                'id_cms_menus' => 25,
                'id_cms_privileges' => 1,
            ),
            34 => 
            array (
                'id' => 60,
                'id_cms_menus' => 26,
                'id_cms_privileges' => 1,
            ),
            35 => 
            array (
                'id' => 61,
                'id_cms_menus' => 27,
                'id_cms_privileges' => 1,
            ),
            36 => 
            array (
                'id' => 62,
                'id_cms_menus' => 28,
                'id_cms_privileges' => 1,
            ),
            37 => 
            array (
                'id' => 63,
                'id_cms_menus' => 29,
                'id_cms_privileges' => 1,
            ),
            38 => 
            array (
                'id' => 64,
                'id_cms_menus' => 30,
                'id_cms_privileges' => 1,
            ),
            39 => 
            array (
                'id' => 65,
                'id_cms_menus' => 31,
                'id_cms_privileges' => 1,
            ),
            40 => 
            array (
                'id' => 66,
                'id_cms_menus' => 32,
                'id_cms_privileges' => 1,
            ),
            41 => 
            array (
                'id' => 67,
                'id_cms_menus' => 33,
                'id_cms_privileges' => 1,
            ),
            42 => 
            array (
                'id' => 68,
                'id_cms_menus' => 34,
                'id_cms_privileges' => 1,
            ),
            43 => 
            array (
                'id' => 69,
                'id_cms_menus' => 35,
                'id_cms_privileges' => 1,
            ),
            44 => 
            array (
                'id' => 70,
                'id_cms_menus' => 36,
                'id_cms_privileges' => 1,
            ),
            45 => 
            array (
                'id' => 72,
                'id_cms_menus' => 37,
                'id_cms_privileges' => 3,
            ),
            46 => 
            array (
                'id' => 73,
                'id_cms_menus' => 37,
                'id_cms_privileges' => 1,
            ),
            47 => 
            array (
                'id' => 74,
                'id_cms_menus' => 16,
                'id_cms_privileges' => 2,
            ),
        ));
        
        
    }
}