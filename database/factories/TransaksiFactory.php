<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Transaksi;
use App\Model\Tiket;
use Faker\Generator as Faker;

$factory->define(Transaksi::class, function (Faker $faker) {
    $bool = $faker->boolean;
    return [
        'id_tiket'  => function() {
            return Tiket::all()->random();
        },
        'qty' => rand(1,10),
        'status' => $bool
    ];
});
