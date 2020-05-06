<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TiketResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [

          'name_kategori' =>$this->kategori->name_kategori,
          'name_tiket' =>$this->name_tiket,
          'harga_tiket' =>$this->harga_tiket,
          'jenis_tiket' =>$this->jenis_tiket,
          'jumlah_tiket' =>$this->jumlah_tiket,
          // 'created_at' =>$this->created_at
        ];
    }
}
