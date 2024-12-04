<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfNotAuthenticated
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if (!in_array(Auth::user()->role, $roles)) {
            return redirect('login');  // Arahkan ke login jika tidak sesuai peran
        }

        return $next($request);
    }
}
