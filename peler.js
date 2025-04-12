function getInput() {
    var nama = document.getElementById("nama").value;
    var umur = parseInt(document.getElementById("umur").value);
    return { nama: nama, umur: umur }; 
}

function hitung(data) {
    if (data.umur >= 10) {
        return data.nama + " Kontol Panjang";
    } else {
        return data.nama + " Kontol Cilik";
    }
}

function tampilkanHasil(hasil) {
    document.getElementById("hasil").innerHTML = hasil;
}

function main() {
    var data = getInput();
    var hasil = hitung(data);
    tampilkanHasil(hasil);
}