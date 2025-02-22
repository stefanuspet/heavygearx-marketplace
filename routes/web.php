<?php

use App\Http\Controllers\AbuseRuleController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ChatMessageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RentReportController;
use App\Http\Controllers\SaleReportController;
use App\Http\Controllers\ToolCategoryController;
use App\Http\Controllers\ToolController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::get('/', [UserController::class, 'index'])->name('user.home');

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/admin-dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('/admin-product', [ToolController::class, 'index'])->name('admin.product');
    Route::post('/admin-product', [ToolController::class, 'store'])->name('admin.product.store');
    Route::post('/admin-product/{id}', [ToolController::class, 'update'])->name('admin.product.update');
    Route::delete('/admin-product/{id}', [ToolController::class, 'destroy'])->name('admin.product.destroy');

    // category
    Route::get('/admin-category', [ToolCategoryController::class, 'index'])->name('admin.category');
    Route::post('/admin-category', [ToolCategoryController::class, 'store'])->name('admin.category.store');
    Route::put('/admin-category/{id}', [ToolCategoryController::class, 'update'])->name('admin.category.update');
    Route::delete('/admin-category/{id}', [ToolCategoryController::class, 'destroy'])->name('admin.category.destroy');


    Route::get('/admin-transaction', [TransactionController::class, 'index'])->name('admin.transaction');
    Route::get('/admin-rentreport', [RentReportController::class, 'index'])->name('admin.rentreport');
    Route::get('/admin-salereport', [SaleReportController::class, 'index'])->name('admin.salereport');
    Route::get('/admin-listuser', [AdminController::class, 'listUser'])->name('admin.listuser');
    Route::get('/admin-rule', [AbuseRuleController::class, 'index'])->name('admin.rule');
    Route::get('/admin-chat', action: [ChatMessageController::class, 'index'])->name('admin.chat');
});

require __DIR__ . '/auth.php';
