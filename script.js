// ? Fake Loading

onload = function() {
  const id = document.getElementById("app")
  const Text_Runing_body = document.getElementById('Text_Runing')

  const isi_p = document.createTextNode('Peringatan web ini berisi qoutes gobless,gobless bukan goblok ya:)')

  Text_Runing_body.appendChild(isi_p)

  Text_Runing_body.style.width = '90%'
  Text_Runing_body.style.height = '10vmax'
  Text_Runing_body.style.fontSize = '1.1rem'

  id.style.backgroundColor = 'white'
  id.style.width = '100%'
  id.style.height = '100vmax'
  id.style.position = 'absolute'

  setTimeout(() => {
    id.style.display = 'none'
    Text_Runing_body.style.display = 'none'
  }, 7000);
}


// !! Qoutes Random

const button = document.getElementById("btn")
const person = document.querySelector(".person")
const qoute = document.querySelector(".qoutes")
const Loading = document.getElementById("Loading")


// ! Loading search qoutes

Loading.style.color = 'black'
Loading.style.textAlign = 'center'
Loading.style.fontSize = '1.1rem'



const qoutes = [{
  qoute: '"Semua yang kamu mau ada  di sisi lain ketakutanmu."',
  person: "George Addair"
},
{
  qoute: '"Jika pada awalnya kamu tidak berhasil,maka terjun payung bukan keahlian mu."',
  person: "Steven Wright"
},
{
  qoute: '"Tetapkan tujuan mu yang tinggi,dan jangan berhenti sampai tercapai."',
  person: "Bo Jackson"
},
{
  qoute: '"Aku lebih suka melakukan sesuatu yang sulit dan gagal dari pada tidak berusaha melakukan sesuatu."',
  person: "Robert H.Schuller"
},
{
  qoute: '"Ketekunan bukanlah balapan yang panjang,melainkan balapan pendek satu demi satu."',
  person: "Walter Elliot"
},
{
  qoute: '"Masalah bukan tanda untuk berhenti,itu adalah panduan."',
  person: "Robert H.Schuller"
},
{
  qoute: '"Lift menuju kesuksesan sedang rusak.kamu harus menggunakan tangga,selangkah demi selangkah."',
  person: "Joe Girard "
},
{
  qoute: '"Ketika gagal,kamu belajar dari kesalahan dan itu memotivasimu untuk bekerja lebih keras."',
  person: "Natalie Gulbis "
},
{
  qoute: '"Jangan berharap dapat jackpot kalau kamu tidak memasukkan beberapa sen kedalam mesin."',
  person: "Flip Wilson "
},
{
  qoute: '"Kamu tidak pernah tahu apa yang memotivasi dirimu."',
  person: "Cicly Tyson"
},
{
  qoute: '"Percayalah pada diri sendiri.kamu telah bertahan cukup jauh,dan pasti akan selamat dari hal-hal yang akan datang."',
  person: "Robert Tew"
},
{
  qoute: '"Masa lalu bisa menyakitkan.Tapi kamu bisa berlari darinya atau belajar darinya."',
  person: "V_Start 7"
},
{
  qoute: '"Menjadi pecundang yang baik berarti belajar untuk menang."',
  person: "Carl Sandburg"
},
{
  qoute: '"Keinginan untuk sukses memang penting.tapi lebih penting keinginan untuk bersiap."',
  person: "Boby Knight"
},
{
  qoute: '"Semakin sulit suatu konflik,semakin mudah kemenangannya."',
  person: "Thomas Paine"
},
]

button.addEventListener('click', function() {

  let random = Math.floor(Math.random() * qoutes.length);
  setTimeout(() => {
    Loading.style.display = 'flex'
    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;
    setTimeout(() => {
      Loading.style.display = 'none'
    }, 3000);
  }, 1000);
})