<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    protected $table = 'tools';
    protected $fillable = [
        'name',
        'description',
        'category_id',
        'image',
        'price',
        'listing_type',
        'stock',
        'status',
        'gps_coordinates',
    ];

    public function category()
    {
        return $this->belongsTo(ToolCategory::class);
    }
}
