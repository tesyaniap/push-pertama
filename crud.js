let siswaData = [];
let editId = null;

// CREATE - Tambah siswa baru
const tambahSiswa = () => {
    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const umur = document.getElementById('umur').value;
    
    if (nama && kelas && umur) {
        const siswa = {
            id: Date.now(),
            nama: nama,
            kelas: kelas,
            umur: parseInt(umur)
        };
        
        siswaData.push(siswa);
        tampilkanData();
        clearForm();
    }
};

// READ - Tampilkan semua data
const tampilkanData = () => {
    const tbody = document.querySelector('#tabelSiswa tbody');
    tbody.innerHTML = '';
    
    siswaData.forEach(siswa => {
        const row = `
            <tr>
                <td>${siswa.id}</td>
                <td>${siswa.nama}</td>
                <td>${siswa.kelas}</td>
                <td>${siswa.umur}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit" onclick="editSiswa(${siswa.id})">Edit</button>
                        <button class="btn-delete" onclick="hapusSiswa(${siswa.id})">Hapus</button>
                    </div>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
};

// UPDATE - Edit siswa
const editSiswa = (id) => {
    const siswa = siswaData.find(s => s.id === id);
    
    document.getElementById('nama').value = siswa.nama;
    document.getElementById('kelas').value = siswa.kelas;
    document.getElementById('umur').value = siswa.umur;
    
    editId = id;
    document.getElementById('btnUpdate').style.display = 'inline';
};

const updateSiswa = () => {
    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const umur = document.getElementById('umur').value;
    
    const index = siswaData.findIndex(s => s.id === editId);
    siswaData[index] = { id: editId, nama, kelas, umur: parseInt(umur) };
    
    tampilkanData();
    clearForm();
    editId = null;
    document.getElementById('btnUpdate').style.display = 'none';
};

// DELETE - Hapus siswa
const hapusSiswa = (id) => {
    siswaData = siswaData.filter(s => s.id !== id);
    tampilkanData();
};

// Clear form
const clearForm = () => {
    document.getElementById('nama').value = '';
    document.getElementById('kelas').value = '';
    document.getElementById('umur').value = '';
};