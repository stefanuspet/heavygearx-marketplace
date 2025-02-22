<?php

namespace App\Http\Controllers;

use App\Models\Tool;
use App\Models\ToolCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Tool::with('category')->get();
        $category = ToolCategory::all();
        return Inertia::render('Admin/Product', ['products' => $product, 'categories' => $category]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all(), $request->file('image'));

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'category_id' => 'required|exists:tool_categories,id',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif',
            'price' => 'required',
            'listing_type' => 'required',
            'status' => 'required',
            'stock' => 'required',
        ]);

        try {
            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('images', 'public');
                // Simpan path di database
            } else {
                return back()->withErrors(['image' => 'Gagal mengunggah gambar.']);
            }


            Tool::create([
                'name' => $request->name,
                'description' => $request->description,
                'category_id' => $request->category_id,
                'image' => $path,
                'price' => $request->price,
                'listing_type' => $request->listing_type,
                'status' => $request->status,
                'stock' => $request->stock,
            ]);

            return redirect()->back()->with('success', 'Product added successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'An error occurred while adding the product: ' . $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Tool $tool)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validasi input
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'category_id' => 'required|exists:tool_categories,id',
            // 'image' => 'nullable|sometimes|image|mimes:jpeg,png,jpg,gif',
            'price' => 'required|numeric',
            'listing_type' => 'required',
            'status' => 'required',
            'stock' => 'required|integer',
        ]);

        try {
            // Cek apakah Tool ditemukan
            $tool = Tool::findOrFail($id);

            // Cek jika ada file gambar baru
            if ($request->hasFile('image')) {
                // dd("ada file gambar baru");
                if ($tool->image) {
                    Storage::disk('public')->delete($tool->image);
                }
                $path = $request->file('image')->store('images', 'public');
                $validatedData['image'] = $path;
            } else {
                $validatedData['image'] = $tool->image;
            }

            $tool->update($validatedData);


            return redirect()->back()->with('success', 'Product updated successfully.');
        } catch (\Exception $e) {

            return redirect()->back()->with('error', 'An error occurred while updating the product.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $tool = Tool::findOrFail($id);
            $tool->delete();

            return redirect()->back()->with('success', 'Product deleted successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'An error occurred while deleting the product: ' . $e->getMessage());
        }
    }
}
