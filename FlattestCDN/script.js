var att = 4;
var tablew = {
    0: "Aletanio_8",
    1: "Demon_Roblox",
    2: "buldurt",
    3: "GoodGuest"
};

var table = {
    0: "FO915",
    1: "FA001",
    2: "FA002",
    3: "FV001",
};

function submit() {;
    if (att <= 0) {
        document.getElementById("warn").innerHTML = `Wrong username and/or password. No attempts left.`;
    } else {;
        if (tablew[0] === document.getElementById("who").value || tablew[1] === document.getElementById("who").value || tablew[2] === document.getElementById("who").value || tablew[3] === document.getElementById("who").value) {;
            if (table[0] === document.getElementById("pass").value || table[1] === document.getElementById("pass").value || table[2] === document.getElementById("pass").value || table[3] === document.getElementById("pass").value) {;
                document.getElementById("warn").innerHTML = ""
                document.getElementById("thefiles").innerHTML = `<h3>The zip password is ${atob("RmxhdHRlc3RGaWxlcw==")}</h3><a href='Labels.zip'>Label Pack</a><br><a href='Posters%20and%20Infographics.zip'>Posters and Infographics Pack</a><br><a href='Logo%20Pack.zip'>Logo Pack</a><br><a href='Spam%20Pack.zip'>Spam Pack</a><br>`
            } else {
                document.getElementById("warn").innerHTML = `Wrong FPID. You have ${att} attempts left.`;
                att--
            }
        } else {
            document.getElementById("warn").innerHTML = `Wrong username. You have ${att} attempts left.`;
            att--
        };
    };
};