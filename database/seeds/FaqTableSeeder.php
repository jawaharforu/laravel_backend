<?php

use Illuminate\Database\Seeder;

class FaqTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('faq')->delete();
        
        \DB::table('faq')->insert(array (
            0 => 
            array (
                'id' => 1,
                'faqcategoryid' => 2,
                'faqsubcategoryid' => 2,
                'question' => 'adsfsdfadsf',
                'answer' => 'asddfadsfa',
                'created_at' => '2018-08-30 20:47:02',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'faqcategoryid' => 3,
                'faqsubcategoryid' => 1,
                'question' => 'asdffasdfads',
                'answer' => 'asdfasdfadsfasdfasdfaaasdfasdf',
                'created_at' => '2018-08-30 20:47:14',
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'faqcategoryid' => 4,
                'faqsubcategoryid' => 3,
                'question' => 'What is Cornivorous?',
            'answer' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                'created_at' => '2018-08-31 16:54:03',
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'faqcategoryid' => 4,
                'faqsubcategoryid' => 4,
                'question' => 'What is horbivorous?',
            'answer' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                'created_at' => '2018-08-31 16:54:18',
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'faqcategoryid' => 5,
                'faqsubcategoryid' => 6,
                'question' => 'What does arithmetic contain?',
            'answer' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                'created_at' => '2018-08-31 16:58:47',
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'faqcategoryid' => 5,
                'faqsubcategoryid' => 5,
                'question' => 'What does statistics contain?',
            'answer' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                'created_at' => '2018-08-31 16:59:10',
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'faqcategoryid' => 5,
                'faqsubcategoryid' => 7,
                'question' => 'What does Trigonometrics contain?',
            'answer' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                'created_at' => '2018-08-31 16:59:29',
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}