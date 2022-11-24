-***npm install*** komutuyla bağımlılıklar yüklendikten sonra -***npm start*** ile proje çalıştırılabilir.

---**/entry/5 ile id'si 5 olan entry çekilecekse gelen entry objesi şu şekilde olabilir:**
entry:{

		id:5,
		baslikID:11,
		baslik:"kou iletişim fakültesi",
		entry:"<div> <img src='...'/> <h1>iletişim fak çok güzel</h1><p>iletişim fakültesi o kadar da güzel değil</p> </div>",
		entryImage:"...",
		haveImage:true,
		date:"24.11.2022",
		userID:21,
		userName:"faruk akar",
		userAvatar:"..."
}

---**/baslik/18 ile id'si 18 olan başlık çekilecekse gelen başlık objesi şu şekilde olabilir:**
baslik:{

		id:18,
		baslikName:"falan filan",
		entryler:[
		-yukarıdaki entryler şeklinde objeler dönebilir-
		],
		tags:[
			{tagID:3,tagName:"Sinema"},
			{tagID:5,tagName:"Müzik"}
		]
}

---**/baslik/18/entry/3 ile 18 id' li başlıktaki 3 id'li entry dönerse de işe yarar.**

Sol frame'de son 24 saatteki açılmış başlıklar listelenecek. Sıralaması en yakın tarihten en uzak tarihe olabilir. Oylama sistemi geldikten sonra zaten puana göre yukarı çıkacak.

Anasayfa ekranındaki slider'da gündem yani son 24 saatteki en popüler başlıklar yüklenecek ancak ilk etapta oylama sistemi yapmadığımız için rastgele 5 başlık dönse yeter.

Anasayfada tags'lerin altındaki entryler de ilk etapta rastgele 5 entry olabilir.

**/duyurular ile son 1 ayda yüklenmiş duyurular listelenebilir,
/duyurular/7 ile id'si 7 olan duyuru objesi şu şekilde olabilir:**
duyuru:{
		
		id:7,
		duyuruName:"umuttepede köpekler toplatılsın kampanyası",
		duyuruText:"ya bence barınaklar çözüm değil :((",
		duyuruTarihi:"24.11.2022",
		userID:21,
		userName:"faruk akar",
		userAvatar:"..."
}

iş ilanları da duyurular ile aynı formatta olucak zaten hiçbir farkı yok.