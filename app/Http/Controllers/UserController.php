<?php

namespace App\Http\Controllers;

use App\Models\Tool;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $products = Tool::with('category')->paginate(9);
        return Inertia::render('Home', compact('products'));
    }
}
