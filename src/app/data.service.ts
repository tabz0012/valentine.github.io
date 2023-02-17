import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  icon=[
    {icon:"fa-horse" ,
    text:"  سوف يقام مزاد خيول وعربات اليوم الموافق 2/16 الساعه التاسعه مساء بتوقيت مكه المكرمة  جميع من يريد عرض خيله أو العربة الخاصة به يجب أن يأتي قبل بدء المزاد بنصف ساعه والرجاء من الأخوه المواطنين عدم التوجة إلى موقع المزاد قبل الساعه التاسعة",
    info:"تنوية عام : في حال أتيت إلى المزاد يمنع منع باتا التحدث ويجب عليك رفع يدك فقط للمزايدة وسوف يقوم المنظم بإعطائك الفرصة للمزايدة في حال عدم الإلتزام في شروط المزاد يتم إبعادك من المزاد وسجنك 30 شهر فورا  . ",
    image1:"1.png ",
    image2:"1.png "},

    {iconw:"إعلان جديد !!!",icon:"fa-gun" ,
    text:"  سوف يقام مزاد خيول وعربات اليوم الموافق 2/16 الساعه التاسعه مساء بتوقيت مكه المكرمة  جميع من يريد عرض خيله أو العربة الخاصة به يجب أن يأتي قبل بدء المزاد بنصف ساعه والرجاء من الأخوه المواطنين عدم التوجة إلى موقع المزاد قبل الساعه التاسعة",
    info:"تنوية عام : في حال أتيت إلى المزاد يمنع منع باتا التحدث ويجب عليك رفع يدك فقط للمزايدة وسوف يقوم المنظم بإعطائك الفرصة للمزايدة في حال عدم الإلتزام في شروط المزاد يتم إبعادك من المزاد وسجنك 30 شهر فورا  . ",
    image1:"1.png ",
    image2:"1.png "},
    {iconw:"إعلان جديد !!!",icon:"fa-shop" ,
    text:"  سوف يقام مزاد خيول وعربات اليوم الموافق 2/16 الساعه التاسعه مساء بتوقيت مكه المكرمة  جميع من يريد عرض خيله أو العربة الخاصة به يجب أن يأتي قبل بدء المزاد بنصف ساعه والرجاء من الأخوه المواطنين عدم التوجة إلى موقع المزاد قبل الساعه التاسعة",
    info:"تنوية عام : في حال أتيت إلى المزاد يمنع منع باتا التحدث ويجب عليك رفع يدك فقط للمزايدة وسوف يقوم المنظم بإعطائك الفرصة للمزايدة في حال عدم الإلتزام في شروط المزاد يتم إبعادك من المزاد وسجنك 30 شهر فورا  . ",
    image1:"1.png ",
    image2:"1.png "},
    
  ]

  bundles = [
    { image: "1.png", title: "ROBIN HOOD VIP",price: "349.99€"  , link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "صاحب هوتيل", price: "219.99€" , link: "https://valentine.tebex.io/package/5475374"  },
    { image: "1.png", title: "ZORRO", price: "189.99€" , link: "https://valentine.tebex.io/package/5320383"  },
    { image: "1.png", title: "DJANGO", price: "79.99€", link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "VIP VALENTINE", price: "109.99€" , link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "VIP DAIMOND", price: "94.99€", link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "VIP GOLD", price: "71.99€", link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "VIP SILVER", price: "51.99€", link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "GUNSMITH", price: "49.99€", link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png",title: "gang-قبيله خاصه", price: "101.99€", link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png",title: "HORSE TRAINER", price: "101.99€", link: "https://valentine.tebex.io/package/5468122"  },
    ];
  gold=[
    { image: "1.png", title: "GOLD- 35 PCS",price: "75.99€"  , link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "GOLD- 25 PCS", price: "45.99€" , link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "GOLD- 15 PCS", price: "29.99€" , link: "https://valentine.tebex.io/package/5468122"  },
    
  ]
  horses=[
    { image: "1.png", title: "horse",price: "75.99€"  , link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "horse", price: "45.99€" , link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "horse", price: "29.99€" , link: "https://valentine.tebex.io/package/5468122"  },
  ]
  subscribe=[
    { image: "1.png", title: "bundle",price: "75.99€"  , link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "bundle", price: "45.99€" , link: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", title: "bundle", price: "29.99€" , link: "https://valentine.tebex.io/package/5468122"  },
  ]
  twitch=[
    { image: "1.png", name: "wael",twitch: "https://www.twitch.tv/"  , discord: "TaBz#3471"},
    { image: "1.png", name: "mohamad",twitch: "https://www.twitch.tv/"  , discord: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", name: "wael",twitch: "https://www.twitch.tv/"  , discord: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", name: "wael",twitch: "https://www.twitch.tv/"  , discord: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", name: "mohamad",twitch: "https://www.twitch.tv/"  , discord: "https://valentine.tebex.io/package/5468122"  },
    { image: "1.png", name: "wael",twitch: "https://www.twitch.tv/"  , discord: "https://valentine.tebex.io/package/5468122"  },
    
  ]
rules=[
  { title:"kanoun1" ,rule:"wael" },
]
  pic=[
    {image1:"pic-1.png",info1:"gang",
    image2:"pic-1.png",info2:"police",
    image3:"pic-1.png",info3:"people",
    image4:"pic-1.png",info4:"pic-1",
    image5:"pic-1.png",info5:"pic-1",
    image6:"pic-1.png",info6:"pic-1",
  }
  ]
  
  


  constructor() { }
}
