<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Model\Kategori;

class Tiket extends Model
{
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $guarded = [];

    public function kategori()
    {
      return $this->belongsTo(Kategori::class, 'id_kategori', 'id');
    }
}
