<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Model\Kategori;
use App\Model\Tiket;
use App\Model\Transaksi;

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
        // factory(User::class, 20)->create();
        // factory(Kategori::class, 20)->create();
        // factory(Tiket::class, 20)->create();
        factory(Transaksi::class, 100)->create();
    }
}
