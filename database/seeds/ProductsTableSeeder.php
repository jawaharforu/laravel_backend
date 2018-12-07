<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('products')->delete();
        
        \DB::table('products')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Curran Jordan',
                'type' => 'Adipisicing aperiam qui rerum provident incididunt et voluptas voluptates odio',
                'amount' => 'Aliquip odit laboriosam harum ullamco molestiae accusantium mollitia quia illum tenetur et ab cum mollit et',
                'number_of_employee' => '778',
                'amount_per_employee' => 'Blanditiis dolorum ut neque aut dicta',
                'additional_features' => 'Ut nihil inventore debitis non dolores qui officiis ea at et quod voluptas omnis cupiditate aut odit quia non at',
                'status' => 0,
                'company_id' => 1,
                'created_at' => '2018-08-27 20:41:24',
                'updated_at' => NULL,
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}