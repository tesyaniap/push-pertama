// fungsi  classic

function halo(nama, kelas)
{
    console.log("halo " + nama + " " + kelas)
}

halo("jahwan", "11 rpl a");

// function
function ea()
{
    console.log("wow")
}

ea();

//arrow function
const sapa = (nama) => {
    console.log("hai " + nama)
}

sapa("yujin")

//arrow function singkat

const yaya = nama => console.log("hai " + nama);

yaya("yahya")

//pakai this
const ive = {
    nama: "liz",
    hai: function () {
        console.log(this.nama)
    }
}

console.log(ive);