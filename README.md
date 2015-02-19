TurtleJS
=========

Navigate a Cartesian coordinate system using Logo-inspired commands

Usage
----

Instantiate a new Turtle object and tell it to turn left, right, forward, or backwards.

```
	var t = new Turtle();
	t.setRounding(true); // configure Turtle to round its calculations after each command
	t.fd(1)
		.lt(90)
		.fd(88 + 1)
		.lt(180 - 45)
		.fd(Math.sqrt(2))
		.lt(45)
		.fd(88);
	
	alert("x is " + t.x);
	alert("y is " + t.y);
```

License
----

BSD 3-Clause License
