<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Model\Tiket;

class Transaksi extends Model
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
      return $this->belongsTo(Tiket::class, 'id_tiket', 'id');
    }
}
