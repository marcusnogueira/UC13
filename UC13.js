function Cube (length, mass ){
this.length = length
this.mass = mass
this.volume = function()
volume = length * length * length;
return volume;
}
   this.density = function() {
        var density;
        density = mass / length * length * length;
        return density;
    }
    this.surfaceArea = function() {
        var surfaceArea;
        surfaceArea = length * length * 6;
        return surfaceArea;
    }
};
