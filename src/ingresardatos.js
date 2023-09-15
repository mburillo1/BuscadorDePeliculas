const { MongoClient } = require('mongodb');

// Configura la URL de conexión a tu servidor de MongoDB
const uri = 'mongodb://127.0.0.1:27017';

// Crea un nuevo cliente de MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true });

async function insertManyDocuments() {
  try {
    // Conéctate al servidor de MongoDB
    await client.connect();

    // Selecciona la base de datos y la colección en la que deseas insertar los documentos
    const db = client.db('Db');
    const collection = db.collection('peliculas');

    // Array de documentos JSON que deseas insertar
    const documentos = [
      // Documento 1
      {
        "id": 4,
        "imagen": "IronMan.png",
        "nombre": "Iron Man",
        "descripcion": "Un brillante inventor, Tony Stark, crea una armadura de alta tecnología para luchar contra el crimen como Iron Man.",
        "a": "2008",
        "d": "Después de ser secuestrado por un grupo terrorista, Tony Stark utiliza su genio para construir una armadura especial que le otorga poderes sobrehumanos. Se convierte en Iron Man para luchar contra el mal y proteger al mundo.",
        "elenco": "Tony Stark / Iron Man: Robert Downey Jr.; Pepper Potts: Gwyneth Paltrow; Obadiah Stane: Jeff Bridges.",
        "duracion": "2:06"
      },
      // Documento 2
      {
        "id": 5,
        "imagen": "WonderWoman.png",
        "nombre": "Wonder Woman",
        "descripcion": "Diana, una princesa amazona, descubre sus habilidades sobrenaturales y se convierte en la poderosa guerrera conocida como Wonder Woman.",
        "a": "2017",
        "d": "Diana Prince, una princesa de las Amazonas, descubre su verdadera herencia y se convierte en Wonder Woman. Ella lucha contra las fuerzas del mal durante la Primera Guerra Mundial.",
        "elenco": "Diana Prince / Wonder Woman: Gal Gadot; Steve Trevor: Chris Pine; Ares: David Thewlis.",
        "duracion": "2:21"
      },
      {
        "id": 6,
        "imagen": "BlackPanther.png",
        "nombre": "Black Panther",
        "descripcion": "T'Challa asume el papel de Black Panther y se convierte en el protector de Wakanda, una nación africana con tecnología avanzada.",
        "a": "2018",
        "d": "Después de la muerte de su padre, T'Challa regresa a Wakanda y asume el trono como rey y protector de la nación. Se convierte en Black Panther y lucha por el bienestar de su pueblo.",
        "elenco": "T'Challa / Black Panther: Chadwick Boseman; Killmonger: Michael B. Jordan; Nakia: Lupita Nyong'o.",
        "duracion": "2:14"
      },
      {
        "id": 7,
        "imagen": "CaptainAmerica.png",
        "nombre": "Captain America: The First Avenger",
        "descripcion": "Steve Rogers se convierte en el super soldado Captain America y lidera la lucha contra la amenaza nazis durante la Segunda Guerra Mundial.",
        "a": "2011",
        "d": "Steve Rogers, un joven frágil, se somete a un experimento que lo transforma en un super soldado. Adopta el nombre de Captain America y lidera la lucha contra la organización Hydra durante la Segunda Guerra Mundial.",
        "elenco": "Steve Rogers / Captain America: Chris Evans; Peggy Carter: Hayley Atwell; Red Skull: Hugo Weaving.",
        "duracion": "2:04"
      },
      {
        "id": 8,
        "imagen": "Thor.png",
        "nombre": "Thor",
        "descripcion": "Thor, el poderoso dios del trueno, es desterrado a la Tierra y debe demostrar su valía antes de poder regresar a Asgard.",
        "a": "2011",
        "d": "Thor es desterrado a la Tierra por su arrogancia y debe aprender la humildad antes de poder recuperar su poder y regresar a Asgard. Se enfrenta a desafíos y amenazas mientras se adapta a su vida en la Tierra.",
        "elenco": "Thor: Chris Hemsworth; Jane Foster: Natalie Portman; Loki: Tom Hiddleston.",
        "duracion": "1:55"
      },
      {
        "id": 9,
        "imagen": "Avengers.png",
        "nombre": "The Avengers",
        "descripcion": "Los superhéroes de Marvel se unen para formar un equipo, los Avengers, y proteger la Tierra de una amenaza alienígena.",
        "a": "2012",
        "d": "Los superhéroes Iron Man, Thor, Hulk, Captain America, Hawkeye y Black Widow se unen para formar un equipo llamado los Avengers. Juntos luchan contra Loki y su ejército alienígena para salvar el mundo.",
        "elenco": "Iron Man: Robert Downey Jr.; Thor: Chris Hemsworth; Hulk: Mark Ruffalo; Captain America: Chris Evans; Black Widow: Scarlett Johansson.",
        "duracion": "2:23"
      },
      {
        "id": 10,
        "imagen": "GuardiansOfTheGalaxy.png",
        "nombre": "Guardians of the Galaxy",
        "descripcion": "Un grupo de inadaptados espaciales se une para detener a un villano cósmico y salvar la galaxia.",
        "a": "2014",
        "d": "Star-Lord, Gamora, Drax, Rocket y Groot, un grupo de inadaptados espaciales, se unen para detener a Ronan el Acusador, un villano cósmico que amenaza con destruir la galaxia.",
        "elenco": "Star-Lord: Chris Pratt; Gamora: Zoe Saldana; Rocket: Bradley Cooper; Groot: Vin Diesel; Drax: Dave Bautista.",
        "duracion": "2:01"
      },
      {
        "id": 11,
        "imagen": "Deadpool.png",
        "nombre": "Deadpool",
        "descripcion": "Wade Wilson, un mercenario desfigurado, busca venganza como el antihéroe Deadpool.",
        "a": "2016",
        "d": "Wade Wilson, un mercenario con un sentido del humor retorcido, se somete a un experimento que lo deja desfigurado pero con poderes de regeneración. Adopta el nombre de Deadpool y busca venganza contra quienes lo dañaron.",
        "elenco": "Deadpool: Ryan Reynolds; Vanessa: Morena Baccarin; Ajax: Ed Skrein.",
        "duracion": "1:48"
      },
      {
        "id": 12,
        "imagen": "DoctorStrange.png",
        "nombre": "Doctor Strange",
        "descripcion": "El cirujano Stephen Strange descubre las artes místicas y se convierte en el Hechicero Supremo, protector de la realidad.",
        "a": "2016",
        "d": "El cirujano Stephen Strange sufre un accidente que daña sus manos y busca la curación en las artes místicas. Se convierte en el Hechicero Supremo y defensor de la realidad contra amenazas místicas.",
        "elenco": "Doctor Strange: Benedict Cumberbatch; El Anciano: Tilda Swinton; Mordo: Chiwetel Ejiofor.",
        "duracion": "1:55"
      },
      {
        "id": 13,
        "imagen": "AntMan.png",
        "nombre": "Ant-Man",
        "descripcion": "Scott Lang se convierte en el Hombre Hormiga y utiliza su capacidad de encogerse para realizar robos audaces.",
        "a": "2015",
        "d": "Scott Lang, un ladrón con un traje que le permite encogerse y aumentar su fuerza, se convierte en el Hombre Hormiga. Utiliza sus habilidades para llevar a cabo robos audaces y redimirse.",
        "elenco": "Scott Lang / Ant-Man: Paul Rudd; Hank Pym: Michael Douglas; Hope van Dyne: Evangeline Lilly.",
        "duracion": "1:57"
      },
      {
        "id": 14,
        "imagen": "BlackWidow.png",
        "nombre": "Black Widow",
        "descripcion": "Natasha Romanoff, la Viuda Negra, enfrenta su pasado y se involucra en una conspiración peligrosa.",
        "a": "2021",
        "d": "Natasha Romanoff, la Viuda Negra, enfrenta su pasado y se involucra en una conspiración peligrosa relacionada con el programa de entrenamiento en el que fue reclutada. Debe confrontar a una figura sombría de su pasado.",
        "elenco": "Natasha Romanoff / Viuda Negra: Scarlett Johansson; Yelena Belova: Florence Pugh; Taskmaster: Olga Kurylenko.",
        "duracion": "2:13"
      },
      {
        "id": 15,
        "imagen": "XMen.png",
        "nombre": "X-Men",
        "descripcion": "Un grupo de mutantes con habilidades extraordinarias lucha por la coexistencia pacífica entre mutantes y humanos.",
        "a": "2000",
        "d": "Los X-Men, un grupo de mutantes con habilidades extraordinarias, luchan por la coexistencia pacífica entre mutantes y humanos. Se enfrentan a amenazas mutantes y humanas por igual.",
        "elenco": "Profesor X: Patrick Stewart; Magneto: Ian McKellen; Wolverine: Hugh Jackman; Jean Grey: Famke Janssen.",
        "duracion": "1:44"
      },
      {
        "id": 16,
        "imagen": "Batman.png",
        "nombre": "The Dark Knight",
        "descripcion": "Batman se enfrenta al Joker, un villano psicótico que amenaza a Gotham City.",
        "a": "2008",
        "d": "Batman se enfrenta al Joker, un villano psicótico que amenaza con sembrar el caos en Gotham City. La batalla entre el bien y el mal alcanza su punto culminante mientras Batman busca detener al Joker.",
        "elenco": "Batman: Christian Bale; Joker: Heath Ledger; Harvey Dent / Dos Caras: Aaron Eckhart.",
        "duracion": "2:32"
      },
      {
        "id": 17,
        "imagen": "Superman.png",
        "nombre": "Man of Steel",
        "descripcion": "Clark Kent, un extraterrestre con habilidades sobrehumanas, se convierte en Superman y protege la Tierra de amenazas alienígenas.",
        "a": "2013",
        "d": "Clark Kent, un extraterrestre con habilidades sobrehumanas, se convierte en Superman y protege la Tierra de amenazas alienígenas, incluyendo al malvado General Zod.",
        "elenco": "Superman: Henry Cavill; Lois Lane: Amy Adams; General Zod: Michael Shannon.",
        "duracion": "2:23"
      },
      {
        "id": 18,
        "imagen": "Aquaman.png",
        "nombre": "Aquaman",
        "descripcion": "Arthur Curry, mitad humano y mitad atlante, debe reclamar su lugar como rey de Atlantis y enfrentar una amenaza submarina.",
        "a": "2018",
        "d": "Arthur Curry, un hombre mitad humano y mitad atlante, debe reclamar su lugar como rey de Atlantis y enfrentar a su hermano Orm, quien amenaza con desatar una guerra submarina.",
        "elenco": "Aquaman: Jason Momoa; Mera: Amber Heard; Orm: Patrick Wilson.",
        "duracion": "2:23"
      },
      {
        "id": 19,
        "imagen": "CaptainMarvel.png",
        "nombre": "Captain Marvel",
        "descripcion": "Carol Danvers, una piloto de la Fuerza Aérea, adquiere poderes extraterrestres y se convierte en Captain Marvel.",
        "a": "2019",
        "d": "Carol Danvers, una piloto de la Fuerza Aérea, se ve envuelta en un conflicto alienígena y adquiere poderes extraterrestres. Se convierte en Captain Marvel y lucha por la paz en el universo.",
        "elenco": "Carol Danvers / Captain Marvel: Brie Larson; Nick Fury: Samuel L. Jackson; Talos: Ben Mendelsohn.",
        "duracion": "2:03"
      },
      {
        "id": 20,
        "imagen": "Shazam.png",
        "nombre": "Shazam!",
        "descripcion": "Billy Batson, un adolescente, adquiere poderes mágicos y se convierte en el superhéroe Shazam al pronunciar una palabra.",
        "a": "2019",
        "d": "Billy Batson, un adolescente huérfano, adquiere poderes mágicos que le permiten transformarse en el superhéroe Shazam al pronunciar una palabra especial. Aunque tiene el cuerpo de un adulto, conserva su mente adolescente.",
        "elenco": "Billy Batson / Shazam: Asher Angel; Shazam (forma adulta): Zachary Levi; Dr. Thaddeus Sivana: Mark Strong.",
        "duracion": "2:12"
      }

    ];

    // Inserta los documentos en la colección
    const resultado = await collection.insertMany(documentos);

    console.log(`Se insertaron ${resultado.insertedCount} documentos con éxito`);
  } finally {
    // Cierra la conexión al cliente de MongoDB
    client.close();
  }
}

// Llama a la función para insertar varios documentos
insertManyDocuments();