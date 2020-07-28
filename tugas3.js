function seleksiNilai(nilaiAwal,nilaiAkhir,dataArray){
    if (nilaiAwal > nilaiAkhir){
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if (dataArray.length < 5){
        console.log("Jumlah angka dalam data array tidak ada")
    }else {
        const nilaiBaru = []
        const nilai = dataArray.sort((a,b) => a-b)
        nilai.forEach(seleksi => { 
            if (seleksi > nilaiAwal && seleksi < nilaiAkhir){
                nilaiBaru.push(seleksi)
            }
          })
          console.log(nilaiBaru)
    }
}
seleksiNilai(5, 20 ,[2, 25, 4, 14, 17, 30, 8])
