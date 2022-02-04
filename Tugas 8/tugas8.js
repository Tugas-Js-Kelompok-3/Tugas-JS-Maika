//Soal 3
function biji(jumlah){
  const hasil = jumlah.map(el =>{
      const arrayBaru = ""
      
      return el += arrayBaru
  })
  const split = hasil[3].split(',')
  hasil.pop()
  console.log(hasil,split.join(' '));
}
biji(['hallo','nama','saya',['lucky','fauzi', ['kelas',['11', ['rpl','2']]]]])


//Soal 4
const obj = {
    nama: "Maika",
    kelas: "RPL 2",
    umur: 17,
    nikah: false,
    Hp: {
      nama: "Infinix Smart 6",
      spesifikasiHp: {
          chipset: "Unisoc SC9863A",
          ram: "2 GB",
          rom: "32 GB",
          camera: "8mp"
          }
      }
    }
    console.log(Obj.Hp)