<?php
namespace App\Policies;

use App\Models\Task;
use App\Models\User;

class TaskPolicy
{


    public function viewAny(): bool
    {
        return true;
    }


    public function view(User $user, Task $task): bool
    {
        return $user->id === $task->user_id;
    }


    public function create(): bool
    {
        return true;
    }


    public function update(User $user, Task $task): bool
    {
        return $user->id === $task->user_id;
    }

}
