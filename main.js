// tipe data //
const namaToken = "BiTok";
const jaringankToken = "ETH";

console.log(`Dear Binarian, token ${namaToken} adalah token yang berada dijaringan ${jaringankToken}. Jangan sampai salah ya!`);
// Dear Binarian, token BiTok adalah token yang berada dijaringan ETH. Jangan sampai salah ya!

const hargaIDO = 0.33;
const maxAlokasi = 100;
const jumlahTokenIDO = maxAlokasi / hargaIDO;

console.log(`Dear Binarian, jumlah token yang anda dapat dari IDO dengan alokasi maksimal adalah ${jumlahTokenIDO}`)
// Dear Binarian, jumlah token yang anda dapat dari IDO dengan alokasi maksimal adalah 303.030303030303

const tokenDikunciSatuTahun = true;
const tokenDikunciSatuBulan = false;

console.log(tokenDikunciSatuTahun)
console.log(tokenDikunciSatuBulan)
// true
// false

const pleTok = null;

console.log(pleTok)
// null

let supplyBurn;

console.log(supplyBurn)
// undefined



// object literal //
const biTok = {
    namaToken: "Binar Token",
    detailToken: {
    maxSupply: 10000,
    initialSupply: 5000
    },
    hargaToken: [
        "IDO $0.33",
        "Listing $0.4"
    ]
}

console.log(biTok.namaToken)
console.log(`Max Supply ${biTok.namaToken} adalah ${biTok["detailToken"]["maxSupply"]}`)
console.log(`Initial Supply ${biTok.namaToken} adalah ${biTok["detailToken"]["initialSupply"]}`)


// array dalam Object
biTok.hargaToken.forEach(function(item) {
        console.log(`Harga ${biTok.namaToken} saat ${item}`)
        })

// array literal //
const fiturBitokLama = ["Burn", "Fee", "Tax"];
const fiturBitokBaru = [
    "Burn",
    "Fee",
    "Tax",
    "NFT"
];

console.log(`Fitur Lama ${biTok.namaToken} ada ${fiturBitokLama.length}`)
console.log(`yaitu ${fiturBitokLama}`)

console.log(`Fitur Baru ${biTok.namaToken} ada ${fiturBitokBaru.length}`)
console.log(`yaitu ${fiturBitokBaru}`)

const arrays =[fiturBitokLama, fiturBitokBaru]
console.log(arrays)
