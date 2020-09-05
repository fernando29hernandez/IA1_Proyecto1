var datos =[];
/*
"animal:nombre:oso,peso:450,longitud:3,annios:34,cientifico:"Ursidae",habitad:"america,asia,europa",poblacion:22000,velocidad:40."+
"animal:nombre:perro,peso:50,longitud:1,annios:15,cientifico:"Canis lupus familiaris",habitad:"mundial",poblacion:500000000,velocidad:63."+
"animal:nombre:leon,peso:190,longitud:1.7,annios:14,cientifico:"Panthera Leo",habitad:"africa",poblacion:124303,velocidad:80."+
"animal:nombre:caballo,peso:1000,longitud:2.4,annios:27,cientifico:"Equus ferus caballus",habitad:"bosque",poblacion:58000000,velocidad:88."+
"animal:nombre:vaca,peso:720,longitud:2,annios:20,cientifico:"Bos primigenius taurus",habitad:"campos",poblacion:1350000000,velocidad:40."+
"animal:nombre:tucan,peso:0.620,longitud:0.61,annios:20,cientifico:"Ramphastidae",habitad:"america,asia,europa",poblacion:5000,velocidad:350."+
"animal:nombre:avestruz,peso:120,longitud:2.6,annios:30,cientifico:"Struthio camelus",habitad:"america,africa",poblacion:1000000,velocidad:70."+
"animal:nombre:halcon,peso:1.5,longitud:3.4,annios:15,cientifico:"Falco peregrinus",habitad:"antartida",poblacion:443000,velocidad:390."+
"animal:nombre:pericaaustraliana,peso:0.03,longitud:0.18,annios:12,cientifico:"Melopsittacus undulatus",habitad:"america,asia,europa",poblacion:10000000,velocidad:20."+
"animal:nombre:loro,peso:0.03,longitud:0.18,annios:30,cientifico:"Psittacoidea",habitad:"asia,europa",poblacion:10000000,velocidad:24."+
"animal:nombre:escorpion,peso:0.03,longitud:0.21,annios:25,cientifico:"Scorpiones",habitad:"africa",poblacion:5000,velocidad:1.29."+
"animal:nombre:mariposa,peso:0.006,longitud:0.3,annios:0.75,cientifico:"Lepidoptera",habitad:"america,asia,europa,africa",poblacion:35000000,velocidad:48."+
"animal:nombre:abeja,peso:0.340,longitud:0.014,annios:0.05,cientifico:"Apis mellifera",habitad:"america,asia,europa,africa",poblacion:30000000,velocidad:29."+
"animal:nombre:cangrejo,peso:0.8,longitud:0.15,annios:12,cientifico:"Brachyura",habitad:"oceano",poblacion:100000000,velocidad:19."+
"animal:nombre:mantis,peso:0.050,longitud:0.1,annios:1,cientifico:"Mantodea",habitad:"america,asia,europa,africa",poblacion:7700000,velocidad:2.4."+
"animal:nombre:guppys,peso:0.01,longitud:0.50,annios:2,cientifico:"Poecilia reticulata",habitad:"oceano",poblacion:5000000,velocidad:2."+
"animal:nombre:tetras,peso:0.012,longitud:0.04,annios:1,cientifico:"Paracheirodon innesi",habitad:"oceano",poblacion:35000000,velocidad:3."+
"animal:nombre:bettas,peso:0.01,longitud:0.07,annios:3,cientifico:"Betta splendens",habitad:"oceano",poblacion:30000000,velocidad:4."+
"animal:nombre:guramis,peso:0.022,longitud:0.3,annios:8,cientifico:"Trichogaster leeri",habitad:"oceano",poblacion:100000000,velocidad:4."+
"animal:nombre:mollys,peso:0.01,longitud:0.01,annios:1,cientifico:"Poecilia sphenops",habitad:"oceano",poblacion:700000,velocidad:2.4."+
"animal:nombre:anaconda,peso:250,longitud:9,annios:15,cientifico:"Eunectes murinus",habitad:"america,asia,europa",poblacion:5000000,velocidad:6."+
"animal:nombre:cocodrilo,peso:1000,longitud:4.3,annios:100,cientifico:"Crocodylidae",habitad:"america,asia,europa",poblacion:35000000,velocidad:24."+
"animal:nombre:lagartija,peso:0.039,longitud:0.042,annios:10,cientifico:"Lacertilia",habitad:"america,asia,europa",poblacion:30000000,velocidad:24."+
"animal:nombre:gecko,peso:0.100,longitud:0.2,annios:15,cientifico:"Gekkota",habitad:"america,asia,europa",poblacion:100000000,velocidad:48."+
"animal:nombre:cobra,peso:12,longitud:4,annios:10,cientifico:"Ophiophagus hannah",habitad:"america,asia,europa",poblacion:700000,velocidad:50."
*/

datos.unshift({id:1,nombre:"oso",peso:450,longitud:3,annios:34,cientifico:"Ursidae",habitad:"america,asia,europa",poblacion:22000,velocidad:40,foto:"/static/images/oso.jpg"});
datos.unshift({id:2,nombre:"perro",peso:50,longitud:1,annios:15,cientifico:"Canis lupus familiaris",habitad:"mundial",poblacion:500000000,velocidad:63,foto:"/static/images/perro.jpg"});
datos.unshift({id:3,nombre:"leon",peso:190,longitud:1.7,annios:14,cientifico:"Panthera Leo",habitad:"africa",poblacion:124303,velocidad:80,foto:"/static/images/leon.png"});
datos.unshift({id:4,nombre:"caballo",peso:1000,longitud:2.4,annios:27,cientifico:"Equus ferus caballus",habitad:"bosque",poblacion:58000000,velocidad:88,foto:"/static/images/caballo.jpg"});
datos.unshift({id:5,nombre:"vaca",peso:720,longitud:2,annios:20,cientifico:"Bos primigenius taurus",habitad:"campos",poblacion:1350000000,velocidad:40,foto:"/static/images/vaca.jpg"});
datos.unshift({id:6,nombre:"tucan",peso:0.620,longitud:0.61,annios:20,cientifico:"Ramphastidae",habitad:"america,asia,europa",poblacion:5000,velocidad:350,foto:"/static/images/tucan.jpg"});
datos.unshift({id:7,nombre:"avestruz",peso:120,longitud:2.6,annios:30,cientifico:"Struthio camelus",habitad:"america,africa",poblacion:1000000,velocidad:70,foto:"/static/images/avestruz.jpg"});
datos.unshift({id:8,nombre:"halcon",peso:1.5,longitud:3.4,annios:15,cientifico:"Falco peregrinus",habitad:"antartida",poblacion:443000,velocidad:390,foto:"/static/images/halcon.jpg"});
datos.unshift({id:9,nombre:"pericaaustraliana",peso:0.03,longitud:0.18,annios:12,cientifico:"Melopsittacus undulatus",habitad:"america,asia,europa",poblacion:10000000,velocidad:20,foto:"/static/images/perica.jpg"});
datos.unshift({id:10,nombre:"loro",peso:0.03,longitud:0.18,annios:30,cientifico:"Psittacoidea",habitad:"asia,europa",poblacion:10000000,velocidad:24,foto:"/static/images/loro.jpg"});
datos.unshift({id:11,nombre:"escorpion",peso:0.03,longitud:0.21,annios:25,cientifico:"Scorpiones",habitad:"africa",poblacion:5000,velocidad:1.29,foto:"/static/images/escorpion.jpg"});
datos.unshift({id:12,nombre:"mariposa",peso:0.006,longitud:0.3,annios:0.75,cientifico:"Lepidoptera",habitad:"america,asia,europa,africa",poblacion:35000000,velocidad:48,foto:"/static/images/mariposa.jpg"});
datos.unshift({id:13,nombre:"abeja",peso:0.340,longitud:0.014,annios:0.05,cientifico:"Apis mellifera",habitad:"america,asia,europa,africa",poblacion:30000000,velocidad:29,foto:"/static/images/abeja.jpg"});
datos.unshift({id:14,nombre:"cangrejo",peso:0.8,longitud:0.15,annios:12,cientifico:"Brachyura",habitad:"oceano",poblacion:100000000,velocidad:19,foto:"/static/images/cangrejo.jpg"});
datos.unshift({id:15,nombre:"mantis",peso:0.050,longitud:0.1,annios:1,cientifico:"Mantodea",habitad:"america,asia,europa,africa",poblacion:7700000,velocidad:2.4,foto:"/static/images/mantis.jpg"});
datos.unshift({id:16,nombre:"guppys",peso:0.01,longitud:0.50,annios:2,cientifico:"Poecilia reticulata",habitad:"oceano",poblacion:5000000,velocidad:2,foto:"/static/images/guppys.jpg"});
datos.unshift({id:17,nombre:"tetras",peso:0.012,longitud:0.04,annios:1,cientifico:"Paracheirodon innesi",habitad:"oceano",poblacion:35000000,velocidad:3,foto:"/static/images/tetras.jpg"});
datos.unshift({id:18,nombre:"bettas",peso:0.01,longitud:0.07,annios:3,cientifico:"Betta splendens",habitad:"oceano",poblacion:30000000,velocidad:4,foto:"/static/images/bettas.jpg"});
datos.unshift({id:19,nombre:"guramis",peso:0.022,longitud:0.3,annios:8,cientifico:"Trichogaster leeri",habitad:"oceano",poblacion:100000000,velocidad:4,foto:"/static/images/guramis.jpg"});
datos.unshift({id:20,nombre:"mollys",peso:0.01,longitud:0.01,annios:1,cientifico:"Poecilia sphenops",habitad:"oceano",poblacion:700000,velocidad:2.4,foto:"/static/images/mollys.jpg"});
datos.unshift({id:21,nombre:"anaconda",peso:250,longitud:9,annios:15,cientifico:"Eunectes murinus",habitad:"america,asia,europa",poblacion:5000000,velocidad:6,foto:"/static/images/ananconda.jpg"});
datos.unshift({id:22,nombre:"cocodrilo",peso:1000,longitud:4.3,annios:100,cientifico:"Crocodylidae",habitad:"america,asia,europa",poblacion:35000000,velocidad:24,foto:"/static/images/cocodrilo.jpg"});
datos.unshift({id:23,nombre:"lagartija",peso:0.039,longitud:0.042,annios:10,cientifico:"Lacertilia",habitad:"america,asia,europa",poblacion:30000000,velocidad:24,foto:"/static/images/lagartija.jpg"});
datos.unshift({id:24,nombre:"gecko",peso:0.100,longitud:0.2,annios:15,cientifico:"Gekkota",habitad:"america,asia,europa",poblacion:100000000,velocidad:48,foto:"/static/images/gecko.jpg"});
datos.unshift({id:25,nombre:"cobra",peso:12,longitud:4,annios:10,cientifico:"Ophiophagus hannah",habitad:"america,asia,europa",poblacion:700000,velocidad:50,foto:"/static/images/cobra.jpg"});
datos.unshift({id:26,nombre:"salamandra ",peso:30,longitud:1.2,annios:20,cientifico:"Urodela",habitad:"America",poblacion:5000000,velocidad:42,foto:"/static/images/salamandra.jpg"});
datos.unshift({id:27,nombre:"anfiuma ",peso:1,longitud:1,annios:1,cientifico:"Amphiuma",habitad:"America,Europa,Asia",poblacion:35000000,velocidad:30,foto:"/static/images/anfiuma.jpg"});
datos.unshift({id:28,nombre:"gallipato",peso:0.0258,longitud:0.3,annios:3,cientifico:"Pleurodeles waltl",habitad:"America,Europa,Asia",poblacion:30000000,velocidad:10,foto:"/static/images/gallipato.jpg"});
datos.unshift({id:29,nombre:"rana",peso:0.022,longitud:0.3,annios:8,cientifico:"Anura",habitad:"America,Asia,Europa,Oceania",poblacion:100000000,velocidad:2,foto:"/static/images/rana.jpg"});
datos.unshift({id:30,nombre:"triton",peso:0.350,longitud:0.16,annios:1,cientifico:"Triturus",habitad:"America,Asia,Europa,Oceania",poblacion:700000,velocidad:5,foto:"/static/images/triton.jpg"});


module.exports = datos;
