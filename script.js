let araba = {
    marka : "jaguar",
    model : "xs",
    yıl : [2020, 2022],
    benzin : 10,  //  10 lt benzin
    info : function (params) {  
        console.log(`Markası : ${this.marka}, modeli : ${this.yıl}`) // thisi koymamız gerekiyor. nedeni dışarda harici bir tanımlama varmı diye bakmasın.
    },
    setFuel (params){   // fonksiyonu bu şekilde de tamamlıyoruz.
        this.benzin += params
    },
    getFuel : (params) => {    // arrow fonksiyonda this e ulaşamıyor.
         araba.km = params
         let result = araba.km * araba.benzin
         console.log(araba.benzin)
        return result
    }
}
console.log(araba)
araba.info()   // fonksiyonu bu şekilde çağırıyoruz.
araba.setFuel(15);    // burada setFuel fonksiyonuna ekleme yaptık.
console.log(araba.benzin)  // ekleme yaptığımız set fuel e benzinden ulaşmış olduk.
araba.getFuel(1000)
console.log(araba)

// Privacy objectlerde bazı yerler özeldir. (_)altçizgi koyarak onun özel olduğunu ve değişmemesi gerektiğini gösteriyoruz.

// ===========Getters && Setters==========*/
// bunlar fonksiyon gibi çalışıyor. başında get olarak yazıyoruz. 

// getters

let student = {
    name: "ali",
    surname :"yılmaz",
    get fulname (){
        return this.name + " "+ this.surname // fonksiyondan farkı başına get koyuyoruz property oluyor.
    }
}
console.log(student.fulname)


// destructuring ve spreading
//Spread
let a =[5,3,6]; // array'lerde bu şekilde kullanıyorduk.
let b = [...a , 7] //3 noktasız yaparsak a yı array olarak içeri alır.
console.log(b)


let student1 = {
    name: "ali",
    surname :"yılmaz",
    age : 25,
}
let newStu = {...student1, ders:"math"}   // objectlerde de bu şekilde Spread Operatörü kullanıyoruz.
console.log(newStu)

// destruct
const first = a[0];  // klasik yol
console.log(first)

const [ilk] = a   // array içibe değişken tanımlıyoruz ona eşitsin diyoruz. eğer 2 değer verirsek arrayın 2 değerini alıyor.
                 // const [ilk, ikinci] = a
console.log(ilk)
const [ılk, ıkinci,ücuncu] = a   
console.log(ilk,ıkinci , ücuncu)

const [x, , , y] =b; // çıktısı 5,7 dir index numarasına göre eşleşiyor.[x, , , y]
console.log(x,y)     // arraylerde bu şekilde kullanılıyor.

// klasik yol 

let ilkisim = student.name; // isme ulaşmak için ya variableye atayacağız yadaaa
console.log(ilkisim)

console.log(student.name)  // bu şekilde yazdıracağız.

// objectlerde hepsini tanımlamamız gerekiyor.

const {name, surname, age} = student1 // burda hepsini almamız gerekiyor.
console.log(name, surname, age)

// farklı bir isim kullanmak istersek.

const rectangle = {
    width : 20,
    height : 10,
}
const { width:w, height : h}= rectangle;
console.log(w,h)

//fonksiyonlarda object kullanımı

function areaCalc(obj) {
    console.log(obj.width * obj.height)
}
areaCalc(rectangle)

// fonksiyon içinde destruct kullanımı

function areaCalculate({width,height}) {
    console.log(width*height)
}
areaCalculate(rectangle)