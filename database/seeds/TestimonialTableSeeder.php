<?php

use Illuminate\Database\Seeder;

class TestimonialTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('testimonial')->delete();
        
        \DB::table('testimonial')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'asdfads',
                'description' => 'asdfasdfasdf',
                'image' => 'uploads/1/2018-08/360epes9.png',
                'status' => 1,
                'company_id' => 0,
                'created_at' => '2018-08-30 18:26:00',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'What is Lorem Ipsum?',
                'description' => '<p><strong style="margin: 0px; padding: 0px; font-family: &quot;Open Sans&quot;, Arial, sans-serif; text-align: justify;">Lorem Ipsum</strong><span style="font-family: &quot;Open Sans&quot;, Arial, sans-serif; text-align: justify;">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br></p>',
                'image' => 'uploads/1/2018-08/pexels_photo_619948.jpeg',
                'status' => 1,
                'company_id' => NULL,
                'created_at' => '2018-08-31 16:01:32',
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Why do we use it?',
            'description' => '<p><span style="font-family: &quot;Open Sans&quot;, Arial, sans-serif; text-align: justify;">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span><br></p>',
                'image' => 'uploads/1/2018-08/pexels_photo_50626.jpeg',
                'status' => 1,
                'company_id' => NULL,
                'created_at' => '2018-08-31 16:02:13',
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Where does it come from?',
            'description' => '<p><span style="font-family: &quot;Open Sans&quot;, Arial, sans-serif; text-align: justify;">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span><br></p>',
                'image' => 'uploads/1/2018-08/pexels_photo_860613.jpeg',
                'status' => 1,
                'company_id' => NULL,
                'created_at' => '2018-08-31 16:02:43',
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Where can I get some?',
                'description' => '<p><span style="font-family: &quot;Open Sans&quot;, Arial, sans-serif; text-align: justify;">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</span><br></p>',
                'image' => 'uploads/1/2018-08/pexels_photo_59523.jpeg',
                'status' => 1,
                'company_id' => NULL,
                'created_at' => '2018-08-31 16:03:15',
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}