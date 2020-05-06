<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Tiket;
use Faker\Generator as Faker;
use App\Model\Kategori;

$factory->define(Tiket::class, function (Faker $faker) {
    $word = $faker->word;
    $type = $faker->company;
    return [
        'name_tiket' => $word,
        'id_kategori' => function() {
            return Kategori::all()->random();
        },
        'harga_tiket' => rand(50000,100000),
        'jumlah_tiket' => rand(1,100),
        'jenis_tiket' => $type
    ];
});
