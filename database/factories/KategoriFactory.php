<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Kategori;
use Faker\Generator as Faker;

$factory->define(Kategori::class, function (Faker $faker) {

    $word = $faker->word;
    return [
        'name_kategori' => $word,
    ];
});
