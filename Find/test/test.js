const res = require('express/lib/response');
var MyArray = require('../MyArray');


describe('push ,pop', () => {
    test('push ,pop("toey","150","teacher","0921812246") ', () => {
        var array = new MyArray();
        array.push("toey");
        var pp = array.pop();
        expect(pp).toStrictEqual({ "0": "toey" });

    });
});
describe('getmax', () => {
    test('getmax() ', () => {
        var array = new MyArray();
        element = {
            "name": "toey",
            "wage": Number("70"),
            "job": "teacher",
            "tel": "0921812246"
        }

        array.push(element)
        element1 = {
            "name": "dad",
            "wage": Number("60"),
            "job": "dancer",
            "tel": "0957865621"
        }

        array.push(element1)


        element2 = {
            "name": "dad",
            "wage": Number("100"),
            "job": "dancer",
            "tel": "0957865621"
        }

        array.push(element2)

        var cmx = array.getMax();

        var cmmx = cmx.wage;
        expect(cmmx).toBe(100);

    });
});

describe('size', () => {
    test('size() ', () => {
        var array = new MyArray();
        element = {
            "name": "toey",
            "wage": Number("70"),
            "job": "teacher",
            "tel": "0921812246"
        }

        array.push(element)
        element1 = {
            "name": "dad",
            "wage": Number("60"),
            "job": "dancer",
            "tel": "0957865621"
        }

        array.push(element1)


        element2 = {
            "name": "dad",
            "wage": Number("100"),
            "job": "dancer",
            "tel": "0957865621"
        }

        array.push(element2)
        var soa = array.size();
        expect(soa).toBe(3);
    });
});
describe('getmin()', () => {
    test('getmin() ', () => {
        var array = new MyArray();
        element = {
            "name": "toey",
            "wage": Number("70"),
            "job": "teacher",
            "tel": "0921812246"
        }

        array.push(element)
        element1 = {
            "name": "dad",
            "wage": Number("60"),
            "job": "dancer",
            "tel": "0957865621"
        }

        array.push(element1)


        element2 = {
            "name": "dad",
            "wage": Number("100"),
            "job": "dancer",
            "tel": "0957865621"
        }

        array.push(element2)

        var cmn = array.getMin();
        var cmmn = cmn.wage;
        expect(cmmn).toBe(60);


    });
});
describe('getCountTeacher', () => {
    test('getCountTeacher(1) ', () => {
        var array = new MyArray();
        element = {
            "name": "toey",
            "wage": Number("70"),
            "job": "teacher",
            "tel": "0921812246"
        }
        array.push(element)
        element1 = {
            "name": "toesadasday",
            "wage": Number("1500"),
            "job": "teache",
            "tel": "0921812246"
        }
        array.push(element1)

        var gct = array.getCountTeacher();
        expect(gct).toBe(1);
    });
});

describe('getCountSinger', () => {
    test('getCountSinger(1) ', () => {
        var array = new MyArray();
        element = {
            "name": "toey",
            "wage": Number("150"),
            "job": "singer",
            "tel": "0921812246"
        }
        array.push(element)
        var gcs = array.getCountSinger();
        expect(gcs).toBe(1);
    });
});

describe('getCountDancer', () => {
    test('getCountDancer(1) ', () => {
        var array = new MyArray();
        element = {
            "name": "toey",
            "wage": Number("150"),
            "job": "dancer",
            "tel": "0921812246"
        }
        array.push(element)
        var gcd = array.getCountDancer();
        expect(gcd).toBe(1);
    });
});
describe('getCountDoctor', () => {
    test('getCountDoctor(1) ', () => {
        var array = new MyArray();
        element = {
            "name": "toey",
            "wage": Number("150"),
            "job": "doctor",
            "tel": "0921812246"
        }
        array.push(element)
        var gcdc = array.getCountDoctor();
        expect(gcdc).toBe(1);
    });
});
describe('getCountActor', () => {
    test('getCountActor(1) ', () => {
        var array = new MyArray();
        element = {
            "name": "toey",
            "wage": Number("150"),
            "job": "actor",
            "tel": "0921812246"
        }
        array.push(element)
        var gca = array.getCountActor();
        expect(gca).toBe(1);
    });
});

describe('getAvg', () => {
    test('getAvg(200) ', () => {
        var array = new MyArray();
        element = {
            "name": "toey",
            "wage": Number("150"),
            "job": "actor",
            "tel": "0921812246"
        }
        array.push(element);
        element1 = {
            "name": "toey",
            "wage": Number("250"),
            "job": "dancer",
            "tel": "0921812246"
        }
        array.push(element1);
        var gav = array.getAvg();
        expect(gav).toBe(200);
    });
});



