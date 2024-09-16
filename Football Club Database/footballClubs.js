const footballClubs = [
    {
        name: "Manchester United",
        league: "Premier League",
        city: "Manchester, England",
        stadium: "Old Trafford",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        description: "Manchester United is one of the most successful football clubs in England, with a rich history and a passionate fan base.",
        players: [
            { name: "Antony", position: "Forward", number: 21, goals: 8, assists: 22 },
            { name: "Bruno Fernandes", position: "Midfielder", number: 18, goals: 8, assists: 10 },
            { name: "Harry Maguire", position: "Defender", number: 5, goals: 1, assists: 2 }
        ]
    },
    {
        name: "FC Barcelona",
        league: "La Liga",
        city: "Barcelona, Spain",
        stadium: "Camp Nou",
        image: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        description: "FC Barcelona is known for its tiki-taka style of play and has won numerous domestic and international titles.",
        players: [
            { name: "Gavi", position: "Midfielder", number: 10, goals: 15, assists: 7 },
            { name: "João Félix", position: "Forward", number: 14, goals: 3, assists: 8 },
            { name: "Raphinha", position: "Defender", number: 3, goals: 0, assists: 1 }
        ]
    },
    {
        name: "Real Madrid",
        league: "La Liga",
        city: "Madrid, Spain",
        stadium: "Santiago Bernabeu",
        image: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        description: "Real Madrid is one of the most successful football clubs globally, with a strong tradition of success.",
        players: [
            { name: "Jude Bellingham", position: "Midfielder", number: 5, goals : 10, assists: 3 },
            { name: "Vinicious Junior", position: "Left Winger", number:7, goals: 12, assists: 4 },
            { name: "Luka Modric", position: "Midfielder", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Liverpool FC",
        league: "Premier League",
        city: "Liverpool, England",
        stadium: "Anfield",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        description: "Liverpool FC has a rich history and is known for its famous anthem 'You'll Never Walk Alone.'",
        players: [
            { name: "Mohamed Salah", position: "Forward", number: 5, goals : 10, assists: 3 },
            { name: "Alisson", position: "Goalkeeper", number:7, goals: 12, assists: 4 },
            { name: "Virgil Van Dijk", position: "Defender", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Bayern Munich",
        league: "Bundesliga",
        city: "Munich, Germany",
        stadium: "Allianz Arena",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
        description: "Bayern Munich is one of the most successful football clubs in Germany and Europe.",
        players: [
            { name: "Harry Kane", position: "Striker", number: 5, goals : 10, assists: 3 },
            { name: "Joshua Kimmich", position: "Midfielder", number:7, goals: 12, assists: 4 },
            { name: "Konrad Laimer", position: "Midfielder", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "AC Milan",
        league: "Serie A",
        city: "Milan, Italy",
        stadium: "San Siro",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
        description: "AC Milan is one of Italy's most storied clubs, with a history of domestic and international success.",
        players: [
            { name: "Olivier Giroud", position: "Striker", number: 5, goals : 10, assists: 3 },
            { name: "Christian Pulisic", position: "Left winger", number:7, goals: 12, assists: 4 },
            { name: "Rafael Leao", position: "Left winger", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Paris Saint-Germain",
        league: "Ligue 1",
        city: "Paris, France",
        stadium: "Parc des Princes",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
        description: "Paris Saint-Germain is known for its star-studded lineup and is a dominant force in French football.",
        players: [
            { name: "Kylian Mbappe", position: "Striker", number: 5, goals : 10, assists: 3 },
            { name: "Marquinhos", position: "Center back", number:7, goals: 12, assists: 4 },
            { name: "Ousmane Dembele", position: "Right winger", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Arsenal",
        league: "Premier League",
        city: "London, England",
        stadium: "Emirates Stadium",
        image: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        description: "Arsenal is a prominent English club with a reputation for stylish and attacking football.",
        players: [
            { name: "Declan Rice", position: "Defender", number: 5, goals : 10, assists: 3 },
            { name: "Kai Havertz", position: "Midfielder", number:7, goals: 12, assists: 4 },
            { name: "Gabreil Martinelli", position: "Left winger", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Juventus",
        league: "Serie A",
        city: "Turin, Italy",
        stadium: "Allianz Stadium",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg",
        description: "Juventus is one of Italy's most successful clubs, with a strong presence in Serie A.",
        players: [
            { name: "Federico Chiesa", position: "Right winger", number: 5, goals : 10, assists: 3 },
            { name: "Bremer", position: "Center back", number:7, goals: 12, assists: 4 },
            { name: "Adrien Rabiot", position: "Midfielder", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Borussia Dortmund",
        league: "Bundesliga",
        city: "Dortmund, Germany",
        stadium: "Signal Iduna Park",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
        description: "Borussia Dortmund is known for its passionate fans and attacking style of play.",
        players: [
            { name: "Youssoufa Moukoko", position: "Striker", number: 5, goals : 10, assists: 3 },
            { name: "Felix Nmecha", position: "Midfielder", number:7, goals: 12, assists: 4 },
            { name: "Marco Reus", position: "Attacker", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Chelsea FC",
        league: "Premier League",
        city: "London, England",
        stadium: "Stamford Bridge",
        image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
        description: "Chelsea FC has won numerous domestic and international titles, including the UEFA Champions League.",
        players: [
            { name: "Christopher Nkunku", position: "Forward", number: 5, goals : 10, assists: 3 },
            { name: "Enzo Fernandez", position: "Midfielder", number:7, goals: 12, assists: 4 },
            { name: "Nicolos Jackson", position: "Striker", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Atletico Madrid",
        league: "La Liga",
        city: "Madrid, Spain",
        stadium: "Wanda Metropolitano",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
        description: "Atletico Madrid is known for its strong defense and competitive spirit.",
        players: [
            { name: "Antoine Griezmann", position: "Forward", number: 5, goals : 10, assists: 3 },
            { name: "Memphis Depay", position: "Forward", number:7, goals: 12, assists: 4 },
            { name: "Rodrigo De Paul", position: "Midfielder", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Tottenham Hotspur",
        league: "Premier League",
        city: "London, England",
        stadium: "Tottenham Hotspur Stadium",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
        description: "Tottenham Hotspur, also known as Spurs, has a dedicated following and a history of attractive football.",
        players: [
            { name: "Heung Min Son", position: "Left winger", number: 5, goals : 10, assists: 3 },
            { name: "James Maddison", position: "Attacker", number:7, goals: 12, assists: 4 },
            { name: "Guglielmo Vicario", position: "Goalkeeper", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Inter Milan",
        league: "Serie A",
        city: "Milan, Italy",
        stadium: "San Siro",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
        description: "Inter Milan is a historic Italian club with domestic and international success.",
        players: [
            { name: "Lautaro Martinez", position: "Striker", number: 5, goals : 10, assists: 3 },
            { name: "Yann Sommer", position: "Goalkeeper", number:7, goals: 12, assists: 4 },
            { name: "Benjamin Pavard", position: "Center back", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Ajax Amsterdam",
        league: "Eredivisie",
        city: "Amsterdam, Netherlands",
        stadium: "Johan Cruyff Arena",
        image: "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg",
        description: "Ajax Amsterdam has a rich history and is known for its focus on youth development.",
        players: [
            { name: "Josip Sutalo", position: "Center back", number: 5, goals : 10, assists: 3 },
            { name: "Geronimo Rulli", position: "Goalkeeper", number:7, goals: 12, assists: 4 },
            { name: "Branco Van Den Boomen", position: "Midfielder", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Manchester City",
        league: "Premier League",
        city: "Manchester, England",
        stadium: "Etihad Stadium",
        image: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        description: "Manchester City has risen to prominence with a strong squad and recent domestic success.",
        players: [
            { name: "Erling Haaland", position: "Striker", number: 5, goals : 10, assists: 3 },
            { name: "Kevin De Bruyne", position: "Midfielder", number:7, goals: 12, assists: 4 },
            { name: "Jack Grealish", position: "Left winger", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Napoli",
        league: "Serie A",
        city: "Naples, Italy",
        stadium: "Stadio Diego Armando Maradona",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg",
        description: "Napoli is known for its passionate fan base and attacking style of play.",
        players: [
            { name: "Victor Osimhen", position: "Striker", number: 5, goals : 10, assists: 3 },
            { name: "Alex Meret", position: "Goalkeeper", number:7, goals: 12, assists: 4 },
            { name: "Matteo Politano", position: "Right winger", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Leicester City",
        league: "EFL Championship",
        city: "Leicester, England",
        stadium: "King Power Stadium",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
        description: "Leicester City achieved a historic Premier League title win in 2015-16.",
        players: [
            { name: "Jamie Vardy", position: "Striker", number: 5, goals : 10, assists: 3 },
            { name: "Wout Faes", position: "Center back", number:7, goals: 12, assists: 4 },
            { name: "Conor Coady", position: "Center back", number:10, goals : 227, assists: 122 }
        ]
    },
    {
        name: "Sevilla FC",
        league: "La Liga",
        city: "Seville, Spain",
        stadium: "Ramón Sánchez Pizjuán",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg",
        description: "Sevilla FC has a strong presence in La Liga and has won multiple UEFA Europa League titles.",
        players: [
            { name: "Sergio Ramos", position: "Center back", number: 5, goals : 10, assists: 3 },
            { name: "Jesus Navas", position: "Right back", number:7, goals: 12, assists: 4 },
            { name: "Fernando", position: "Defender", number:10, goals : 227, assists: 122 }
        ]
    }
];

