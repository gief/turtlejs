// Configure Mocha, telling both it and chai to use BDD-style tests. 
mocha.setup("bdd");
chai.should();

function assert(expr, msg) {
    if (!expr) throw new Error(msg || 'failed');
}

describe('Turtle', function () {
    it('a. Left and Right', function () {
        var t_test = new Turtle();
        t_test.lt(370);
        t_test.rt(5);
        t_test.rt(365);
        assert(0 == t_test.d, 'expected 0, got ' + t_test.d);
    });

    it('b. Left and Right chaining', function () {
        var t_test = new Turtle();
        t_test.lt(370).rt(5).rt(365);
        assert(0 == t_test.d, 'expected 0, got ' + t_test.d);
    });
    it('c. Fwd and back @ 0 degrees', function () {
        var t_test = new Turtle();
        t_test.fd(100).bk(100).setRounding(false);
        assert(0 == t_test.x, 'x: expected 0, got ' + t_test.x);
        assert(0 == t_test.y, 'y: expected 0, got ' + t_test.y);
    });
    it('d. Fwd and back @ 89, 179, 289, 359 degrees', function () {
        var t_test = new Turtle();
        t_test.lt(89).fd(100).bk(100);
        assert(0 == t_test.x, 'x: expected 0, got ' + t_test.x);
        assert(0 == t_test.y, 'y: expected 0, got ' + t_test.y);

        t_test.lt(90).fd(100).bk(100);
        assert(0 == t_test.x, 'x: expected 0, got ' + t_test.x);
        assert(0 == t_test.y, 'y: expected 0, got ' + t_test.y);

        t_test.lt(90).fd(100).bk(100);
        assert(0 == t_test.x, 'x: expected 0, got ' + t_test.x);
        assert(0 == t_test.y, 'y: expected 0, got ' + t_test.y);

        t_test.lt(90).fd(100).bk(100);
        assert(0 == t_test.x, 'x: expected 0, got ' + t_test.x);
        assert(0 == t_test.y, 'y: expected 0, got ' + t_test.y);
    });
    it('e. Right-angle circuit ', function () {
        var t_test = new Turtle();
        t_test.fd(100).rt(90).fd(100).rt(90).fd(100).rt(90).fd(100);
        assert(90 == t_test.d, 'd: expected 90, got d:' + t_test.d);
        assert(0 == t_test.x, 'x: expected 0, got ' + t_test.x);
        assert(0 == t_test.y, 'y: expected 0, got ' + t_test.y);

    });
    it('f. Obtuse angle circuit', function () {
        var t_test = new Turtle();
        t_test.setRounding(true);
        t_test.fd(1)
            .lt(90)
            .fd(88 + 1)
            .lt(180 - 45)
            .fd(Math.sqrt(2))
            .lt(45)
            .fd(88);
        assert(270 == t_test.d, 'd: expected 270, got d:' + t_test.d);
        assert(0 == t_test.x, 'x: expected 0, got ' + t_test.x);
        assert(0 == t_test.y, 'y: expected 0, got ' + t_test.y);
    });
    it('g. Rounding', function () {
        var t_test = new Turtle();
        t_test.lt(2).fd(29);
        assert(t_test.x - Math.round(t_test.x) != 0, 'X was rounded:' + t_test.x);
    });
});

// Run all our test suites.  Only necessary in the browser.
mocha.run();

// test
var t = new Turtle();
t.rt(90);
console.log(t.d);

var h = (Math.sqrt(3) / 2),
    radius = 100,
    xp = 250,
    yp = 150,
    xp2 = radius + xp + radius / 2,
    yp2 = radius * h + yp,
    turtle = new Turtle();
var
hexagonData = [
    [{
        "x": radius + xp,
            "y": yp
    }, // right
    {
        "x": radius / 2 + xp,
            "y": radius * h + yp
    }, // bottom right
    {
        "x": -radius / 2 + xp,
            "y": radius * h + yp
    }, // bottom left
    {
        "x": -radius + xp,
            "y": yp
    }, // left
    {
        "x": -radius / 2 + xp,
            "y": -radius * h + yp
    }, // upper left
    {
        "x": radius / 2 + xp,
            "y": -radius * h + yp
    } // upper right
    ],
    [{
        "x": turtle.setX(radius + xp2).x,
            "y": turtle.setY(yp2).y
    }, {
        "x": turtle.x,
            "y": turtle.y
    }, {
        "x": turtle.lt(180 - 360 / 6).fd(100).x,
            "y": turtle.y
    }, {
        "x": turtle.lt(360 / 6).fd(100).x,
            "y": turtle.y
    }, {
        "x": turtle.lt(360 / 6).fd(100).x,
            "y": turtle.y
    }, {
        "x": turtle.lt(360 / 6).fd(100).x,
            "y": turtle.y
    }, {
        "x": turtle.lt(360 / 6).fd(100).x,
            "y": turtle.y
    }]
];
