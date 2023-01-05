<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Puppies extends Model {
    
    protected $table = 'tbl_puppies';
    protected $guarded = [];
    public $timestamps = false;
}
