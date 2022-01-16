<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bookable extends Model
{
    public function bookings(){
        return $this->hasMany(Booking::class);
    }

    public function availabilityFor($from, $to) :bool{
        return 0 === $this->bookings()->betweenDate($from, $to)->count();
    } 
}
