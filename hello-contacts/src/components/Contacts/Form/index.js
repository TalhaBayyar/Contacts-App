import {useEffect, useState} from "react";
const initialFormsValues = {fullname: "", phone_number: ""}
function Form({addContacts, contacts}){
    
    
    const [form, setForm] = useState(initialFormsValues)

    useEffect( () => {
        setForm(initialFormsValues)

    } , [contacts])

    
    const onChangeInput = (e) => {
      setForm({...form, [e.target.name]: [e.target.value]})    
    }


    const onSubmit = (e) => {
        e.preventDefault()
        if(form.fullname === "" || form.phone_number === ""){
          return false
        }
        
        addContacts([...contacts, form])

        
    }

    return(
        <form onSubmit={onSubmit}>
           <div> 
             <input name="fullname" placeholder="Fullname" onChange={onChangeInput} value={form.fullname} />
           </div>
           <div> 
             <input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} value={form.phone_number}/>
           </div>
            <div className="btn">
                <button>Add</button>
            </div>


        </form>
    )
}
export default Form

/* 
1- Form component içerisinde 2 input olacak varsayılan olarak text olarak geldiği için type türü tanımı yapmaya gerek yoktur.
2- Butona bastığımız anda event'i tetiklememiz lazım kayıt ekleme yapacağız ve aynı zaman da bir veri girildiğinde inputlara bunları state'e yazmamız gerekir.. 
3- usesState tanımı yapıyoruz varsayılan olarak name'ler için boş değerlerini gönderdik
4- sonra bir fonksiyon yazıcaz input'un içeriği değiştiği anda bunu state atamasını yapabilmesi için gerekli olan fonksiyon olacak onChangeInput olarak yazdık ve bize burda bir event geliyor 'e' olarak tanımlayabiliriz sonra içerisinde setForm kullanıp atama işlemi için varsayılan olarak obje bize obje olarak gönderiyoruz ve varsayılan değerleri koruyarak, sonra da e.target.name girilen e.target.value girilen value ne ise ona eşitledik
5- diğer adımda butona bastığımız anda ne olacağını belirliyoruz form'u onSubmit ediyoruz tıkladğımız anda bunu loglayarak deniyoruz geliştirici aracı consoledan baktığımız zaman tıklayıp gönderdiğimiz anda form state log'nu gördük fakat sonra sayfa yenileniyor bunun sebebi form etiketinin varsayılan bir davranışı var varsayılan davranış nedir bu formun gideceği EndPoint olur o EndPoint'e gider veriyi oraya gönderir veya çeker birşeyler yapar dolasıyla burda sayfa yenilenme işlemi oluyor bizim bu sayfa yenilenme işlemini submit işlemi yapıldığında varsayılan davranışı durdurmamız lazım onun içinde onSubmit'de event ile preventDefault() adında bir metod ile bunu durdurabiliriz. Birde şunu yapabiliriz onSubmit işlemi gerçekleştiğinde eğer formun içindeki input'ları girilen değerler geçersiz ise bunu durdurabiliriz işlemi devam ettirmeyebiliriz. bunu da kontrol yapısı ile yukarıda olduğu gibi eğeer durum belirtilen koşul ifadesindeki gibi olursa işlem geçersiz olarak false formu gönderme.
6- bu işlem sırasına kadar formu geliştirmiş olduk bundan sonra yapmamız gereken nedir.. burdaki kayıtları bir state'e eklemek gerekiyor ki List component'inde onları listeleyebilelim.. eğer kullanıcı kayıtlarını bu form component'i içinde bir state'de tutarsak bu state'i list component'ine nasıl taşıcaz böyle bir problememiz var o yüzden biz o state'i yani kullanıcıların ekleneceği state'i eğer Contacts component'inde tutarsak ve bu state'e ekleme yapılacak olan set işlemi yapacak olan fonksiyonu eğer form component'ine geçersek problem kalmıcak şimdi Contacts component'ine gidiyoruz orda yazmaya devam edelim...... devam ediyoruz addContacts prop olarak aldık bunu log'ladık atama tanım yapacak olan fonksiyonu buraya aldık o zaman artık onSubmit olduğunda addContacts'i kullanarak atama işlemi yapabiliriz array olarak bizim form'mumuz doğrundan bir obje olduğu için içerisine yerleştirebiliriz.... sonra tekrar Contacts compenent'ine gidelim orda yazalım...... devam nedeni addContacts([form]) işlemi yaptığımızda array'a tek bir obje ataması yapıyoruzya önceki verileri korumadağımız için onlar gitmiş oluyor Contacts component'nde elimizde var olan contacts gönderirsek prop olarak ve array'mize eski verileri koruyarak atama yaparsak problem çözülecektir

7- şimdi'de herhangi bir kayıt eklendiği anda formu resetleyelim yani input'ların içerisini boşaltalım input'larımıza birer value vermedik verelim, şimdi bu form temizleme işi için karşımıza birden fazla durum çıkıyor aslında birincisi onSubmit çalıştığında kayıt eklendiği anda form'un içerisine setForm'u kullanarak atama yaparak bu işlemi yapabiliriz.. birden fazla input işlemi olabileceği için bunu initialFormsValues ile dışardan tanımlayıp dahil ettik... birde bu setForm işlemini onSubmit içerisinde yapmak istemiyorsak yan etkileri kullanarak yapmak istiyorsak useEffect ile 





*/