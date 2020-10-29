<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//routes
// Route::middleware('api')->group(function () {
    Route::post('add-item', 'App\Http\Controllers\ItemController@add');
    Route::get('get-item/{type?}', 'App\Http\Controllers\ItemController@getItem');
    Route::get('select-item{itemid?}/{selected?}', 'App\Http\Controllers\ItemController@selectItem');
// });

