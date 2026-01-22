//let const (deklarasi variabel)
let umur = 17       // let tuh buat variable yang isinya berubah rubah
const nama = "kai"  // const untuk yang isinya tetap, tidak bisa diubah

console.log("Halo namaku " + nama, "Umurku " + umur);

//function dan arrow function
function ive(){
    console.log("halo ive")  // kalau butuh this pakainya regular function, dan untuk method di object
}

const en = () => {
    console.log("hai yujin") // kalau buat callback pakai yang arrow ini
}

//if-else
if(umur < 17){
    console.log("belum punya ktp")
} else {
    console.log("punya ktp")
}

let usia = 0;

if (usia < 17){
    console.log("kamu belum punya ktp")
} else if (usia = 17){
    console.log("tahun ini kamu buat ktp")
} else {
    console.log("kamu umurnya " + usia)
}

//loop 
for(kelas = 1 ; kelas < 12 ; kelas++){
    console.log("kelas " + kelas)
}

//loop while
while (umur < 7) {
    console.log ("umur = " + en)
    umur++
}

//do-while
let nari = false

do {
    console.log("nanda nari")
}

while (nari)

// array
const siswa = ["karina","nanda","yahya","dzakwan"]
console.log("nama " + siswa)

// object
const sea = {
    nama: "nanda",
    kelas: "12 rpl a",
    umur: 17,
    jurusan: "rpl"
}
console.log(sea)