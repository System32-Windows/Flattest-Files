var att = 4;
var wrong = false;
var tablew = {
    0: "QWxldGFuaW9fOA==",
    1: "RGVtb25fUm9ibG94",
    2: "YnVsZHVydA==",
    3: "R29vZEd1ZXN0"
};

var table = {
    0: "Rk85MTU=",
    1: "RkEwMDE=",
    2: "RkEwMDI=",
    3: "Z3Vlc3Q=",
};

function submit() {;
    if (att <= 0) { document.getElementById("warn").innerHTML = `Wrong username. No attempts left.`; } else {;
        for (i = 0; i < 4; i++) {;
            if (atob(tablew[i]) === document.getElementById("who").value) {;
                if (atob(table[i]) === document.getElementById("pass").value) {;

                };
            } else {
                document.getElementById("warn").innerHTML = `Wrong username. You have ${att} attempts left.`;
                wrong = true;
            };
        };
        if (wrong) {;
            att--;
            wrong = false;
        };
    };
};