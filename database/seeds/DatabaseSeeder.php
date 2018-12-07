<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        $this->call(AssessmentFormsTableSeeder::class);
        $this->call(AssessmentFormsDataTableSeeder::class);
        $this->call(AssessmentWeightAgeTableSeeder::class);
        $this->call(AssessmentsTableSeeder::class);
        $this->call(BlogTableSeeder::class);
        $this->call(BudgetTableSeeder::class);
        $this->call(BudgetPlansTableSeeder::class);
        $this->call(CareerTableSeeder::class);
        $this->call(CmsApicustomTableSeeder::class);
        $this->call(CmsApikeyTableSeeder::class);
        $this->call(CmsDashboardTableSeeder::class);
        $this->call(CmsEmailQueuesTableSeeder::class);
        $this->call(CmsEmailTemplatesTableSeeder::class);
        $this->call(CmsLogsTableSeeder::class);
        $this->call(CmsMenusTableSeeder::class);
        $this->call(CmsMenusPrivilegesTableSeeder::class);
        $this->call(CmsModulsTableSeeder::class);
        $this->call(CmsNotificationsTableSeeder::class);
        $this->call(CmsPrivilegesTableSeeder::class);
        $this->call(CmsPrivilegesRolesTableSeeder::class);
        $this->call(CmsSettingsTableSeeder::class);
        $this->call(CmsStatisticComponentsTableSeeder::class);
        $this->call(CmsStatisticsTableSeeder::class);
        $this->call(CmsUsersTableSeeder::class);
        $this->call(CompaniesTableSeeder::class);
        $this->call(ContactTableSeeder::class);
        $this->call(DepartmentsTableSeeder::class);
        $this->call(EmailListTableSeeder::class);
        $this->call(EmployeesTableSeeder::class);
        $this->call(EmployeesTypesTableSeeder::class);
        $this->call(FaqTableSeeder::class);
        $this->call(FaqcategoryTableSeeder::class);
        $this->call(FaqsubcategoryTableSeeder::class);
        $this->call(FeatureTableSeeder::class);
        $this->call(GlobalSettingsTableSeeder::class);
        $this->call(HrindexFormTableSeeder::class);
        $this->call(HrindexQuestionTypeTableSeeder::class);
        $this->call(HrindexQuestionsTableSeeder::class);
        $this->call(JobDescTableSeeder::class);
        $this->call(JobDescAssingedEmployeeTableSeeder::class);
        $this->call(JobDescMappedQuestionsTableSeeder::class);
        $this->call(OranagramStructureTableSeeder::class);
        $this->call(ProductroadmapTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(QuestionsTableSeeder::class);
        $this->call(ScaleTableSeeder::class);
        $this->call(SkillSetWeightAgeTableSeeder::class);
        $this->call(SkillSetsTableSeeder::class);
        $this->call(TestimonialTableSeeder::class);
        $this->call(TrainingHeadTableSeeder::class);
        $this->call(UserVerificationsTableSeeder::class);
        $this->call(WeightAgeTableSeeder::class);
        $this->call(WhitepaperTableSeeder::class);
    }
}