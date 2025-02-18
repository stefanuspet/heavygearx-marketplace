<?php

namespace App\Http\Controllers;

use App\Models\ToolCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ToolCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = ToolCategory::all();
        return Inertia::render('Admin/Category', ['categories' => $categories]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required',
            ]
        );

        try {
            ToolCategory::create($request->all());
            return redirect()->back()->with('success', 'Category created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to create category: ' . $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(ToolCategory $toolCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ToolCategory $toolCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate(
            [
                'name' => 'required',
            ]
        );

        try {
            $category = ToolCategory::find($id);
            $category->update($request->all());
            return redirect()->back()->with('success', 'Category updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to update category: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $category = ToolCategory::find($id);
            if ($category) {
                $category->delete();
                return redirect()->back()->with('success', 'Category deleted successfully.');
            } else {
                return redirect()->back()->with('error', 'Category not found.');
            }
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to delete category: ' . $e->getMessage());
        }
    }
}
