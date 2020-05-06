<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Model\Tiket;

class Kategori extends Model
{
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $guarded = [];

    public function tiket()
    {
      return $this->hasMany(Tiket::class, 'id_kategori', 'id');
    }
}
