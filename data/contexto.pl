animal(oso,1,34,40,450,3).
animal(perro,2,15,63,50,1).
animal(leon,3,14,80,190,1).
animal(caballo,4,27,88,1000,2).
animal(vaca,5,20,40,720,2).
animal(tucan,6,20,350,0,0).
animal(avestruz,7,30,70,120,2).
animal(halcon,8,15,390,1,3).
animal(pericaaustraliana,9,12,20,0,0).
animal(loro,10,30,24,0,0).
animal(escorpion,11,25,1,0,0).
animal(mariposa,12,0,48,0,0).
animal(abeja,13,0,29,0,0).
animal(cangrejo,14,12,19,0,0).
animal(mantis,15,1,2,0,0).
animal(guppys,16,2,2,0,0).
animal(tetras,17,1,3,0,0).
animal(bettas,18,3,4,0,0).
animal(guramis,19,8,4,0,0).
animal(mollys,20,1,2,0,0).
animal(anaconda,21,15,6,250,9).
animal(cocodrilo,22,100,24,1000,4).
animal(lagartija,23,10,24,0,0).
animal(gecko,24,15,48,0,0).
animal(cobra,25,10,50,12,4).
animal(salamandra,26,20,42,30,1).
animal(anfiuma,27,1,30,1,1).
animal(gallipato,28,3,10,0,0).
animal(rana,29,8,2,0,0).
animal(triton,30,1,5,0,0).

mamifero(oso).
mamifero(leon).
mamifero(vaca).
mamifero(caballo).
mamifero(perro).
vertebrados(X) :- mamifero(X).
ave(tucan).
ave(avestruz).
ave(halcon).
ave(pericaaustraliana).
ave(loro).
vertebrados(X):- ave(X).
artropodo(escorpion).
artropodo(mariposa).
artropodo(abeja).
artropodo(cangrejo).
artropodo(mantis).
invertebrados(X):- artropodo(X).
pez(guppys).
pez(tetras).
pez(bettas).
pez(guramis).
pez(mollys).
vertebrados(X):- pez(X).
reptil(anaconda).
reptil(cocodrilo).
reptil(gecko).
reptil(lagartija).
reptil(cobra).
vertebrados(X):- reptil(X).
anfibio(salamandra).
anfibio(anfiuma).
anfibio(gallipato).
anfibio(rana).
anfibio(triton).
vertebrados(X):- anfibio(X).
nacenenagua(X):- anfibio(X).
sangrefria(X):- reptil(X).
exoesqueleto(X):- artropodo(X).
tienenescamas(X):- reptil(X).
viveenagua(X):- pez(X).
ponenhuevos(X):- pez(X).
tienenalas(X):- ave(X).
puedevolar(tucan).
puedevolar(halcon).
puedevolar(loro).
sangrecaliente(X):- mamifero(X).
tomanleche(X):- mamifero(X).
longevidadbaja(X):-animal(X,_,E,_,_,_),E<10.
longevidadmedia(X):-animal(X,_,E,_,_,_),E>=10,E<60.
longevidadalta(X):-animal(X,_,E,_,_,_),E>60.
noestaenpeligro(X):- mamifero(X);ave(X);artropodo(X);pez(X);reptil(X).
animalgrande(X):-animal(X,_,_,_,P,L),P>50,L>1.
animalpequeno(X):-animal(X,_,_,_,P,L),P=<50,L=<1.
animallento(X):- animal(X,_,_,Z,_,_),Z<1.
animalnormal(X):- animal(X,_,_,Z,_,_),Z>=1,Z=<10.
animalrapido(X):- animal(X,_,_,Z,_,_),Z>10.
tienevida(X):- vertebrados(X);invertebrados(X).
puedenrespirar(X):-tienevida(X).
notienehuesos(X):- invertebrados(X).
tienehuesos(X):- vertebrados(X).
puedensentir(X):- tienevida(X).