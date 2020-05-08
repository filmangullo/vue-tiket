<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TransaksiResource extends JsonResource
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
          'id' =>$this->id,
          'name_tiket' =>$this->tiket->name_tiket,
          'qty' =>$this->qty,
          'status' =>$this->status,
          'harga_tiket' =>$this->tiket->harga_tiket,
          // 'created_at' =>$this->created_at
        ];
    }
}
