var = hotel{
    name:'Quay',
    rooms:40,
    booked:25,

checkAvaliability: function() {
    return this.rooms - this.booked;
}

};
