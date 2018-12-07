<?php // /app/Http/Middleware/Cors.php
namespace App\Http\Middleware;
use Closure;
class Cors {
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}
