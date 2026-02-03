<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{
    public function Home(){
        return Inertia::render('Home');
    }
    public function About(){
        return Inertia::render('About');
    }
}
