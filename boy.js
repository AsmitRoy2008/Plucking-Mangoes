class boy
{
	constructor(x,y,w,h)
	{
		var options = {
			isStatic: true			
			}
		this.x = x;
		this.y = y;
		this.w = w
		this.h = h
		this.body = Bodies.rectangle(x, y, w, h , options);
        this.image = loadImage("images/boy.png")
 		World.add(world, this.body);

	}
	display()
	{
			var boyPos = this.body.position;		
			push();
			translate(boyPos.x, boyPos.y);
			imageMode(CENTER)
			image(0, 0, this.w, this.h);
			pop();
			
	}

}
