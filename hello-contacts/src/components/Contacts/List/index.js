import React, { useState } from "react";

function List({contacts}){
    const [filterText, setFilterText] = useState("");


    const filtered = contacts.filter( (item) => {
        return Object.keys(item).some( (key) => 
            item[key].toString().toLowerCase().includes(filterText.toLowerCase())
         )
    } )


    console.log(filtered);
    return(
        <div>

         <input placeholder="Filter contact" value={filterText} onChange={ (e) => setFilterText(e.target.value) }/>   
          
          <ul className="list">
            {
                filtered.map( (contact, i) => <li key={i}>
                    <span>{contact.fullname}</span>
                    <span>{contact.phone_number}</span>
                </li> )
            }
          </ul>

          <p className="p">Total Contacts ({filtered.length})</p>
        </div>
    )
}
export default List


// Şimdi sıra geldi eklemeiş olduğumuz kayıtları belirtilen alanda gösterme kısmına bunu da List component alanında yani burada yapacağız eklenen kayıtları Contacts componentinden prop olarak List Component'ne gönderdik bunuda map fonksiyonu ile gösterdik


/*

1- şimdi yapmamız gereken eklenen kayıtlar arasında filtreleme yapılması sağlayacak filtreleme inputunu yapmak ilk olarak varsayılan olarak 3 tane kulllanıcı kaydı yaptık Contacts component'i üzerinden 
2- öncelikle input'a veri girildiği anda bunu state'mize yazmamız gerekiyor o yuzden useState Hook'nu kullanarak işlemi yaptık varsayılan olarak boş bir değer sonra value olarak input'a bunu veriyoruz ve sonra input'a giriş yapıldığında event ile bunu yazdırma işlemi tanımlamış olduk.
3- şimdi yapmamız gereken biz listelemeyi yaparken doğrudan bize gelen contacts'i map'liyoruz ya şimdi yapmamız gereken bu contacts map'lemek yerine contacts yukarıda filtre'leyip sonra o filtrelenmiş sonucları listelememiz gerekiyor contacts array'i filter metodu ile burda bize item geliyor her döndüğünde sonra içerisinde retrun işlemi yapıyoruz şimdi burda dikkat etmemiz gereken şey ismini de yazsa numarsınıda yazmaya başlasa onu bizim göstermemiz lazım kullanıcıya dolasıyla burda Object.keys adında bir metoda var Object sınıfının altında bu bize  objenin key'lerini veriyor sonra item'ın key'lerini aldık sonra ise some metodunu kullanıyoruz some metodunun yaptığı herhangi biri demek herhangi biri eğer şarta uyuyorsa true dönüyor ve biz o kaydı kullanabiliriz anlamına geliyor sonra some içinde de arrow function yazalım burda bize her defasında ilgili key gelecek sonrada item[key] item.fullname gibi düşünebiliriz bunu sonra bunu string'e çevirelim belki string gelmez hemen altı küçültme işlemi yapıcaz lowercase ile sonra da includes dedikten sonra elimizde bir filter text'i vardıya işte bu filter text onun içerisinde var mı yok mu anlamaya çalışacağız.... sonra da filtered contacts'ın yerinde kullandık..

4- şimdi filtered'da elimizdeki kaydı alıyoruz ilk olarak 'contacts', bunu filter ile filtreledik buda bize her defasında item döndürüyor sonra bu item'ın bu bir obje oldugu için key'lerine ayırıyoruz fullname ve phone_number sonra bu iki key'den some yani herhangi birisinin içerisinde filterText.toLowerCase() bu ifade geciyorsa o zamanda bunu bize filter'la
 
*/