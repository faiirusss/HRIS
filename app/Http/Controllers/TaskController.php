<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
     $tasks = Task::with('employee')->get();
     return Inertia::render('Tasks/index', [
      'tasks' => $tasks
     ]);
    }

    public function create()
    {
        $employees = Employee::all();
        return Inertia::render('Tasks/create', [
            'employees' => $employees
        ]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'title'=> 'required|string|min:3|max:255',
            'description' => 'required|string',
            'assigned_to' => 'required',
            'due_date' => 'required|date',
            'status' => 'required|string    ',
        ]);

        Task::create($validated);

        return redirect()->route('tasks.index')->with('succes', 'Task createdd successfully');
    }


}
