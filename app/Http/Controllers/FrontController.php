<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\DB;

class FrontController extends Controller
{
    public function Home(){
        return Inertia::render('Home');
    }
    public function About(){
        return Inertia::render('About');
    }
    public function Book(){

  $bookings =  DB::table('bookings')->get();
        return Inertia::render('Book',['bookings'=>$bookings]);
    }
    public function create(){

 
        return Inertia::render('BookEntry');
    }
    public function store(Request $request){
dd($request);
 
        return Inertia::render('BookStore');
    }
}
