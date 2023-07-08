class  Perhitungan{
    constructor (data){
        this.data = data
    }
    hitungTotalUmur(){
        this.totalUmur = 0
        for (let index = 0; index < data.length; index++) {
            this.totalUmur += Number(data[index].umur)
            
        }
        console.log(this.totalUmur)
    }
    hitungTotalSangu(){
        this.totalSangu = 0
        for (let index = 0; index < data.length; index++) {
            this.totalSangu += Number(data[index].sangu)
            
        }
        console.log(this.totalSangu)
    }

    asyncHitungTotalUmur = (data) =>{
        return new Promise((resolve,reject)=>{
            this.totalUmur = 0
            for (let index = 0; index < data.length; index++) {
                this.totalUmur += Number(data[index].umur)
                
            }
            resolve(this.totalUmur)
        })
    }

    asyncHitungTotalSangu = (data) =>{
        return new Promise((resolve,reject)=>{
            this.totalSangu = 0
            for (let index = 0; index < data.length; index++) {
                this.totalSangu += Number(data[index].sangu)
                
            }
            resolve(this.totalSangu)
        })
    }
    hitungAll(){
        Promise.all([this.asyncHitungTotalUmur(this.data), this.asyncHitungTotalSangu(this.data)]).then(
            (result) =>{
                for (let cek of result){
                    console.log(cek)
                }
                console.log("Hitung Selesai")
            }
        )
    }
}

class Statistik extends Perhitungan{
    constructor(data){
        super(data)
    }
    outputData(){
        console.log("Total Umur"+this.totalUmur)
        console.log("Total Sangu"+this.totalSangu)
    }
}