class dustbin
{
	constructor(x,y)
	{
        this.image=loadImage("sprites/paper.png")
		var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
	}
	display()
	{
			 elipseMode(RADIUS);
    }
}