<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::factory()->createMany(
            [
                ['name' => '給料'],
                ['name' => '住宅ローン'],
                ['name' => '奨学金'],
                ['name' => 'クレジットカード'],
            ]
        );
    }
}
