<?php

namespace evilnet\inbox;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    public function messages(){
        return $this->hasMany('evilnet\inbox\Messages');
    }
}
