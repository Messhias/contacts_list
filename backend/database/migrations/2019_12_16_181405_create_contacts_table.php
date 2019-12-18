<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string("name", 30)
                ->comment("
                    Default contact name.
                ");

            $table->string("phone", 15)
                ->index()
                ->comment("
                    The contact phone, it'll be a index to enhance queries searches.
                ");

            $table->string("description", 150)
                ->nullable()
                ->comment("
                    Default contact description.
                ");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
}
