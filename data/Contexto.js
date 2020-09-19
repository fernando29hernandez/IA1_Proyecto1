var especies =
  "animal(nombre(oso),id(1))." +
  "animal(nombre(perro),id(2))." +
  "animal(nombre(leon),id(3))." +
  "animal(nombre(caballo),id(4))." +
  "animal(nombre(vaca),id(5))." +
  "animal(nombre(tucan),id(6))." +
  "animal(nombre(avestruz),id(7))." +
  "animal(nombre(halcon),id(8))." +
  "animal(nombre(pericaaustraliana),id(9))." +
  "animal(nombre(loro),id(10))." +
  "animal(nombre(escorpion),id(11))." +
  "animal(nombre(mariposa),id(12))." +
  "animal(nombre(abeja),id(13))." +
  "animal(nombre(cangrejo),id(14))." +
  "animal(nombre(mantis),id(15))." +
  "animal(nombre(guppys),id(16))." +
  "animal(nombre(tetras),id(17))." +
  "animal(nombre(bettas),id(18))." +
  "animal(nombre(guramis),id(19))." +
  "animal(nombre(mollys),id(20))." +
  "animal(nombre(anaconda),id(21))." +
  "animal(nombre(cocodrilo),id(22))." +
  "animal(nombre(lagartija),id(23))." +
  "animal(nombre(gecko),id(24))." +
  "animal(nombre(cobra),id(25))." +
  "animal(nombre(salamandra),id(26))." +
  "animal(nombre(anfiuma),id(27))." +
  "animal(nombre(gallipato),id(28))." +
  "animal(nombre(rana),id(29))." +
  "animal(nombre(triton),id(30)).";

var reglas =
  especies +
  "mamifero(oso)." +
  "mamifero(leon)." +
  "mamifero(vaca)." +
  "mamifero(caballo)." +
  "mamifero(perro)." +
  "vertebrados(X) :- mamifero(X)." +
  "ave(tucan)." +
  "ave(avestruz)." +
  "ave(halcon)." +
  "ave(pericaaustraliana)." +
  "ave(loro)." +
  "vertebrados(X):- ave(X)." +
  "artropodo(escorpion)." +
  "artropodo(mariposa)." +
  "artropodo(abeja)." +
  "artropodo(cangrejo)." +
  "artropodo(mantis)." +
  "invertebrados(X):- artropodo(X)." +
  "pez(guppys)." +
  "pez(tetras)." +
  "pez(bettas)." +
  "pez(guramis)." +
  "pez(mollys)." +
  "vertebrados(X):- pez(X)." +
  "reptil(anaconda)." +
  "reptil(cocodrilo)." +
  "reptil(gecko)." +
  "reptil(lagartija)." +
  "reptil(cobra)." +
  "vertebrados(X):- reptil(X)." +
  "anfibio(salamandra)." +
  "anfibio(anfiuma)." +
  "anfibio(gallipato)." +
  "anfibio(rana)." +
  "anfibio(triton)." +
  "vertebrados(X):- anfibio(X)." +
  "nacenenagua(X):- anfibio(X)." +
  "sangrefria(X):- reptil(X)." +
  "exoesqueleto(X):- artropodo(X)." +
  "tienenescamas(X):- reptil(X)." +
  "viveenagua(X):- pez(X)." +
  "ponenhuevos(X):- pez(X)." +
  "tienenalas(X):- ave(X)." +
  "puedevolar(tucan)." +
  "puedevolar(halcon)." +
  "puedevolar(loro)." +
  "sangrecaliente(X):- mamifero(X)." +
  "tomanleche(X):- mamifero(X)." +
  "longevidadbaja(mariposa)." +
  "longevidadbaja(abeja)." +
  "longevidadbaja(mantis)." +
  "longevidadbaja(guppys)." +
  "longevidadbaja(tetras)." +
  "longevidadbaja(bettas)." +
  "longevidadbaja(guramis)." +
  "longevidadbaja(mollys)." +
  "longevidadbaja(anfiuma)." +
  "longevidadbaja(gallipato)." +
  "longevidadbaja(rana)." +
  "longevidadbaja(triton)." +
  "longevidadmedia(salamandra)." +
  "longevidadmedia(pericaaustraliana)." +
  "longevidadmedia(oso)." +
  "longevidadmedia(leon)." +
  "longevidadmedia(vaca)." +
  "longevidadmedia(caballo)." +
  "longevidadmedia(perro)." +
  "longevidadmedia(tucan)." +
  "longevidadmedia(avestruz)." +
  "longevidadmedia(halcon)." +
  "longevidadmedia(loro)." +
  "longevidadmedia(anaconda)." +
  "longevidadmedia(escorpion)." +
  "longevidadmedia(gecko)." +
  "longevidadmedia(lagartija)." +
  "longevidadmedia(cobra)." +
  "longevidadmedia(cangrejo)." +
  "longevidadalta(cocodrilo)." +
  "noestaenpeligro(X):- mamifero(X);ave(X);artropodo(X);pez(X);reptil(X)." +
  "animalgrande(cocodrilo)." +
  "animalgrande(anaconda)." +
  "animalgrande(oso)." +
  "animalgrande(leon)." +
  "animalgrande(vaca)." +
  "animalgrande(caballo)." +
  "animalgrande(avestruz)." +
  "animalpequeno(perro)." +
  "animalpequeno(tucan)." +
  "animalpequeno(halcon)." +
  "animalpequeno(pericaaustraliana)." +
  "animalpequeno(loro)." +
  "animalpequeno(escorpion)." +
  "animalpequeno(mariposa)." +
  "animalpequeno(abeja)." +
  "animalpequeno(cangrejo)." +
  "animalpequeno(mantis)." +
  "animalpequeno(guppys)." +
  "animalpequeno(tetras)." +
  "animalpequeno(bettas)." +
  "animalpequeno(guramis)." +
  "animalpequeno(mollys)." +
  "animalpequeno(gecko)." +
  "animalpequeno(lagartija)." +
  "animalpequeno(cobra)." +
  "animalpequeno(salamandra)." +
  "animalpequeno(anfiuma)." +
  "animalpequeno(gallipato)." +
  "animalpequeno(rana)." +
  "animalpequeno(triton)." +
  "animalnormal(guppys)." +
  "animalnormal(tetras)." +
  "animalnormal(bettas)." +
  "animalnormal(guramis)." +
  "animalnormal(mollys)." +
  "animalnormal(mantis)." +
  "animalnormal(anaconda)." +
  "animalnormal(gallipato)." +
  "animalnormal(rana)." +
  "animalnormal(triton)." +
  "animalrapido(oso)." +
  "animalrapido(leon)." +
  "animalrapido(vaca)." +
  "animalrapido(caballo)." +
  "animalrapido(perro)." +
  "animalrapido(tucan)." +
  "animalrapido(avestruz)." +
  "animalrapido(halcon)." +
  "animalrapido(pericaaustraliana)." +
  "animalrapido(loro)." +
  "animalrapido(escorpion)." +
  "animalrapido(mariposa)." +
  "animalrapido(abeja)." +
  "animalrapido(cangrejo)." +
  "animalrapido(cocodrilo)." +
  "animalrapido(gecko)." +
  "animalrapido(lagartija)." +
  "animalrapido(cobra)." +
  "animalrapido(anfiuma)." +
  "animalrapido(salamandra)." +
  "tienevida(X):- vertebrados(X);invertebrados(X)." +
  "puedenrespirar(X):-tienevida(X)." +
  "notienehuesos(X):- invertebrados(X)." +
  "tienehuesos(X):- vertebrados(X)." +
  "puedensentir(X):- tienevida(X).";
module.exports = reglas;
