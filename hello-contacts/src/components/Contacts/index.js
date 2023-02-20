import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import  "./styles.css"

function Contacts(){
    const [contacts, setContacts] = useState([
        {
            fullname: "Adnan",
            phone_number: "123124"
        },
        {
            fullname: "Ahmet",
            phone_number: "131120"
        },
        {
            fullname: "Talha",
            phone_number: "441281"
        }
    ])

    useEffect(() => {
        console.log(contacts);
    }, [contacts])


    return(
        
        <div id="container">
        <h1>Contacts App</h1>
            <List contacts={contacts}/>
            <Form addContacts={setContacts} contacts={contacts}/>
        </div>
    )
}
export default Contacts


// Bu bölüme kadar öğrendiklerimizde bir örnek uygulama geliştirmeye çalışarak öğrendiklerimizi pekiştirmeye çalışalım...Telefon rehberi uygulaması olarak düşünebiliriz buraya kadar öğrendiklerimizle bunu yapabiliriz.. şimdi bir dizin oluşturduk components adında componentlerimizi oluştururken components dizini altına dosya ve dizin yapısını, isimlendirmesini, hiyerarşisini düzgün bir şekilde kurmamız gerekiyor components'lerin ihtiyaç duyduğu birden fazla dosya olabiliyor stil, query vs. bunları ayırmış olabiliriz dolasıyla componentin ihtiyac duyacağı kendi içindeki bütün tanımları tek bir dizin altında toplamak en matıklısı... bunu tek bir component içerisinde de oluşturabilirdik ama iki component yaptık filtreleme listeleme için bir alan ve form için bir alan   


/*

6- şimdi burda useState kullanarak bir state oluşturacağız kayıtlarımızın ekeleneceği state burda duracak useState tanımı yaptık varsayılan olarak veri tipini array yaptık çünkü birden fazla elemanı burda tutmak istiyoruz setContacts'i Form component'imize gönderirsek prop olarak prop isimini istediğimiz gibi verebiliriz tekrardan Form component'ine geçiyoruz....... buraya gelikd şimdi useEffect kullanarak bir contacts'a atama yapıldığında o son güncel halini görmeye çalışalım useEffect tanımını yaptıktan sonra dependencey array'imizi contacts'i ekliyoruz hani Form copmonent'inde form submit edildiğinde addContacts([form]) bir ekleme işlemi yapıyoruz ya bu şekilde bu ekleme işlemi yapıldıktan sonra bu array'in son halini görmek istiyoruz log'layarak ve array geldi altında bir tanem obje var bir tane daha eklersek yine ayınısını gösterdi biz ama iki tane gönderdik sebebi..... diğer Form component'nde yazalım



*/

