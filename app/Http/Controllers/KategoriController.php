<?php

namespace App\Http\Controllers;

use App\Model\Kategori;
use App\Http\Resources\KategoriResource;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return KategoriResource::collection(Kategori::latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $kategori = Kategori::create($request->all());

        return response(new KategoriResource($kategori), Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Categori  $categori
     * @return \Illuminate\Http\Response
     */
    public function show(Kategori $kategori)
    {
        return new KategoriResource($kategori);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Categori  $categori
     * @return \Illuminate\Http\Response
     */
    public function edit(Categori $categori)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Categori  $categori
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kategori $kategori)
    {
        $kategori->update($request->all());

        return response('updated', Response::HTTP_CREATED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Categori  $categori
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kategori $kategori)
    {
        $kategori->delete();

        return response('deleted', Response::HTTP_OK);
    }
}
