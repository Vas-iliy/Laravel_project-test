<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUser;
use App\Http\Requests\RegisterUser;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register()
    {
        return view('auth.register');
    }

    public function store(RegisterUser $request)
    {
        $user = User::query()->create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return redirect()->route('verification.notice');
    }

    public function loginForm()
    {
        return view('auth.login');
    }

    public function login(LoginUser $request)
    {
        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ])) {
            session()->flash('success', 'You are logged');
            /*if (Auth::user()->is_admin) {
                return redirect()->route('admin.index');
            }*/
            return redirect()->home();
        }
        return redirect()->back()->with('error', 'Incorrect login or password');
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->home();
    }
}
