<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{


    protected $fillable = [
        'user_id',
        'title',
        'description',
        'due_date',
        'is_completed',
    ];


    protected function casts(): array
    {
        return [
            'due_date' => 'datetime',
            'is_completed' => 'boolean',
        ];
    }


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
