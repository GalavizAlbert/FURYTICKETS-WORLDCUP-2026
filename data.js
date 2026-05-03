const matches = [
  { id: 1, match: "M1", date: "11 Jun", home: "🇲🇽 Mexico", away: "🇿🇦 South Africa", group: "Group A", venue: "Mexico City Stadium" },
  { id: 2, match: "M2", date: "11 Jun", home: "🇰🇷 Korea Republic", away: "🇨🇿 Czechia", group: "Group A", venue: "Estadio Guadalajara" },

  { id: 3, match: "M3", date: "12 Jun", home: "🇨🇦 Canada", away: "🇧🇦 Bosnia and Herzegovina", group: "Group B", venue: "Toronto Stadium" },
  { id: 4, match: "M4", date: "12 Jun", home: "🇺🇸 USA", away: "🇵🇾 Paraguay", group: "Group D", venue: "Los Angeles Stadium" },

  { id: 5, match: "M5", date: "13 Jun", home: "🇭🇹 Haiti", away: "🏴 Scotland", group: "Group C", venue: "Boston Stadium" },
  { id: 6, match: "M6", date: "13 Jun", home: "🇦🇺 Australia", away: "🇹🇷 Türkiye", group: "Group D", venue: "BC Place Vancouver" },
  { id: 7, match: "M7", date: "13 Jun", home: "🇧🇷 Brazil", away: "🇲🇦 Morocco", group: "Group C", venue: "New York New Jersey Stadium" },
  { id: 8, match: "M8", date: "13 Jun", home: "🇶🇦 Qatar", away: "🇨🇭 Switzerland", group: "Group B", venue: "San Francisco Bay Area Stadium" },

  { id: 9, match: "M9", date: "14 Jun", home: "🇨🇮 Côte d'Ivoire", away: "🇪🇨 Ecuador", group: "Group E", venue: "Philadelphia Stadium" },
  { id: 10, match: "M10", date: "14 Jun", home: "🇩🇪 Germany", away: "🇨🇼 Curaçao", group: "Group E", venue: "Houston Stadium" },

  { id: 11, match: "M11", date: "14 Jun", home: "🇳🇱 Netherlands", away: "🇯🇵 Japan", group: "Group F", venue: "Dallas Stadium" },
  { id: 12, match: "M12", date: "14 Jun", home: "🇸🇪 Sweden", away: "🇹🇳 Tunisia", group: "Group F", venue: "Estadio Monterrey" },

  { id: 13, match: "M13", date: "15 Jun", home: "🇸🇦 Saudi Arabia", away: "🇺🇾 Uruguay", group: "Group H", venue: "Miami Stadium" },
  { id: 14, match: "M14", date: "15 Jun", home: "🇪🇸 Spain", away: "🇨🇻 Cabo Verde", group: "Group H", venue: "Atlanta Stadium" },
  { id: 15, match: "M15", date: "15 Jun", home: "🇮🇷 IR Iran", away: "🇳🇿 New Zealand", group: "Group G", venue: "Los Angeles Stadium" },
  { id: 16, match: "M16", date: "15 Jun", home: "🇧🇪 Belgium", away: "🇪🇬 Egypt", group: "Group G", venue: "Seattle Stadium" },

  { id: 17, match: "M17", date: "16 Jun", home: "🇫🇷 France", away: "🇸🇳 Senegal", group: "Group I", venue: "New York New Jersey Stadium" },
  { id: 18, match: "M18", date: "16 Jun", home: "🇮🇶 Iraq", away: "🇳🇴 Norway", group: "Group I", venue: "Boston Stadium" },
  { id: 19, match: "M19", date: "16 Jun", home: "🇦🇷 Argentina", away: "🇩🇿 Algeria", group: "Group J", venue: "Kansas City Stadium" },
  { id: 20, match: "M20", date: "16 Jun", home: "🇦🇹 Austria", away: "🇯🇴 Jordan", group: "Group J", venue: "San Francisco Bay Area Stadium" },

  { id: 21, match: "M21", date: "17 Jun", home: "🇬🇭 Ghana", away: "🇵🇦 Panama", group: "Group L", venue: "Toronto Stadium" },
  { id: 22, match: "M22", date: "17 Jun", home: "🏴 England", away: "🇭🇷 Croatia", group: "Group L", venue: "Dallas Stadium" },
  { id: 23, match: "M23", date: "17 Jun", home: "🇵🇹 Portugal", away: "🇨🇩 Congo DR", group: "Group K", venue: "Houston Stadium" },
  { id: 24, match: "M24", date: "17 Jun", home: "🇺🇿 Uzbekistan", away: "🇨🇴 Colombia", group: "Group K", venue: "Mexico City Stadium" },

  { id: 25, match: "M25", date: "18 Jun", home: "🇨🇿 Czechia", away: "🇿🇦 South Africa", group: "Group A", venue: "Atlanta Stadium" },
  { id: 26, match: "M26", date: "18 Jun", home: "🇨🇭 Switzerland", away: "🇧🇦 Bosnia and Herzegovina", group: "Group B", venue: "Los Angeles Stadium" },
  { id: 27, match: "M27", date: "18 Jun", home: "🇨🇦 Canada", away: "🇶🇦 Qatar", group: "Group B", venue: "BC Place Vancouver" },
  { id: 28, match: "M28", date: "18 Jun", home: "🇲🇽 Mexico", away: "🇰🇷 Korea Republic", group: "Group A", venue: "Estadio Guadalajara" },

  { id: 29, match: "M29", date: "19 Jun", home: "🇧🇷 Brazil", away: "🇭🇹 Haiti", group: "Group C", venue: "Philadelphia Stadium" },
  { id: 30, match: "M30", date: "19 Jun", home: "🏴 Scotland", away: "🇲🇦 Morocco", group: "Group C", venue: "Boston Stadium" },
  { id: 31, match: "M31", date: "19 Jun", home: "🇹🇷 Türkiye", away: "🇵🇾 Paraguay", group: "Group D", venue: "San Francisco Bay Area Stadium" },
  { id: 32, match: "M32", date: "19 Jun", home: "🇺🇸 USA", away: "🇦🇺 Australia", group: "Group D", venue: "Seattle Stadium" },

  { id: 33, match: "M33", date: "20 Jun", home: "🇩🇪 Germany", away: "🇨🇮 Côte d'Ivoire", group: "Group E", venue: "Toronto Stadium" },
  { id: 34, match: "M34", date: "20 Jun", home: "🇪🇨 Ecuador", away: "🇨🇼 Curaçao", group: "Group E", venue: "Kansas City Stadium" },
  { id: 35, match: "M35", date: "20 Jun", home: "🇳🇱 Netherlands", away: "🇸🇪 Sweden", group: "Group F", venue: "Houston Stadium" },
  { id: 36, match: "M36", date: "20 Jun", home: "🇹🇳 Tunisia", away: "🇯🇵 Japan", group: "Group F", venue: "Estadio Monterrey" },

  { id: 37, match: "M37", date: "21 Jun", home: "🇺🇾 Uruguay", away: "🇨🇻 Cabo Verde", group: "Group H", venue: "Miami Stadium" },
  { id: 38, match: "M38", date: "21 Jun", home: "🇪🇸 Spain", away: "🇸🇦 Saudi Arabia", group: "Group H", venue: "Atlanta Stadium" },
  { id: 39, match: "M39", date: "21 Jun", home: "🇧🇪 Belgium", away: "🇮🇷 IR Iran", group: "Group G", venue: "Los Angeles Stadium" },
  { id: 40, match: "M40", date: "21 Jun", home: "🇳🇿 New Zealand", away: "🇪🇬 Egypt", group: "Group G", venue: "BC Place Vancouver" },

  { id: 41, match: "M41", date: "22 Jun", home: "🇳🇴 Norway", away: "🇸🇳 Senegal", group: "Group I", venue: "New York New Jersey Stadium" },
  { id: 42, match: "M42", date: "22 Jun", home: "🇫🇷 France", away: "🇮🇶 Iraq", group: "Group I", venue: "Philadelphia Stadium" },
  { id: 43, match: "M43", date: "22 Jun", home: "🇦🇷 Argentina", away: "🇦🇹 Austria", group: "Group J", venue: "Dallas Stadium" },
  { id: 44, match: "M44", date: "22 Jun", home: "🇯🇴 Jordan", away: "🇩🇿 Algeria", group: "Group J", venue: "San Francisco Bay Area Stadium" },

  { id: 45, match: "M45", date: "23 Jun", home: "🏴 England", away: "🇬🇭 Ghana", group: "Group L", venue: "Boston Stadium" },
  { id: 46, match: "M46", date: "23 Jun", home: "🇵🇦 Panama", away: "🇭🇷 Croatia", group: "Group L", venue: "Toronto Stadium" },
  { id: 47, match: "M47", date: "23 Jun", home: "🇵🇹 Portugal", away: "🇺🇿 Uzbekistan", group: "Group K", venue: "Houston Stadium" },
  { id: 48, match: "M48", date: "23 Jun", home: "🇨🇴 Colombia", away: "🇨🇩 Congo DR", group: "Group K", venue: "Estadio Guadalajara" },

  { id: 49, match: "M49", date: "24 Jun", home: "🏴 Scotland", away: "🇧🇷 Brazil", group: "Group C", venue: "Miami Stadium" },
  { id: 50, match: "M50", date: "24 Jun", home: "🇲🇦 Morocco", away: "🇭🇹 Haiti", group: "Group C", venue: "Atlanta Stadium" },
  { id: 51, match: "M51", date: "24 Jun", home: "🇨🇭 Switzerland", away: "🇨🇦 Canada", group: "Group B", venue: "BC Place Vancouver" },
  { id: 52, match: "M52", date: "24 Jun", home: "🇧🇦 Bosnia and Herzegovina", away: "🇶🇦 Qatar", group: "Group B", venue: "Seattle Stadium" },
  { id: 53, match: "M53", date: "24 Jun", home: "🇨🇿 Czechia", away: "🇲🇽 Mexico", group: "Group A", venue: "Mexico City Stadium" },
  { id: 54, match: "M54", date: "24 Jun", home: "🇿🇦 South Africa", away: "🇰🇷 Korea Republic", group: "Group A", venue: "Estadio Monterrey" },

  { id: 55, match: "M55", date: "25 Jun", home: "🇨🇼 Curaçao", away: "🇨🇮 Côte d'Ivoire", group: "Group E", venue: "Philadelphia Stadium" },
  { id: 56, match: "M56", date: "25 Jun", home: "🇪🇨 Ecuador", away: "🇩🇪 Germany", group: "Group E", venue: "New York New Jersey Stadium" },
  { id: 57, match: "M57", date: "25 Jun", home: "🇯🇵 Japan", away: "🇸🇪 Sweden", group: "Group F", venue: "Dallas Stadium" },
  { id: 58, match: "M58", date: "25 Jun", home: "🇹🇳 Tunisia", away: "🇳🇱 Netherlands", group: "Group F", venue: "Kansas City Stadium" },
  { id: 59, match: "M59", date: "25 Jun", home: "🇹🇷 Türkiye", away: "🇺🇸 USA", group: "Group D", venue: "Los Angeles Stadium" },
  { id: 60, match: "M60", date: "25 Jun", home: "🇵🇾 Paraguay", away: "🇦🇺 Australia", group: "Group D", venue: "San Francisco Bay Area Stadium" },


    { id: 61, match: "M61", date: "26 Jun", home: "🇳🇴 Norway", away: "🇫🇷 France", group: "Group I", venue: "Boston Stadium" },
  { id: 62, match: "M62", date: "26 Jun", home: "🇸🇳 Senegal", away: "🇮🇶 Iraq", group: "Group I", venue: "Toronto Stadium" },
  { id: 63, match: "M63", date: "26 Jun", home: "🇪🇬 Egypt", away: "🇮🇷 IR Iran", group: "Group G", venue: "Seattle Stadium" },
  { id: 64, match: "M64", date: "26 Jun", home: "🇳🇿 New Zealand", away: "🇧🇪 Belgium", group: "Group G", venue: "BC Place Vancouver" },
  { id: 65, match: "M65", date: "26 Jun", home: "🇨🇻 Cabo Verde", away: "🇸🇦 Saudi Arabia", group: "Group H", venue: "Houston Stadium" },
  { id: 66, match: "M66", date: "26 Jun", home: "🇺🇾 Uruguay", away: "🇪🇸 Spain", group: "Group H", venue: "Estadio Guadalajara" },

  { id: 67, match: "M67", date: "27 Jun", home: "🇵🇦 Panama", away: "🏴 England", group: "Group L", venue: "New York New Jersey Stadium" },
  { id: 68, match: "M68", date: "27 Jun", home: "🇭🇷 Croatia", away: "🇬🇭 Ghana", group: "Group L", venue: "Philadelphia Stadium" },
  { id: 69, match: "M69", date: "27 Jun", home: "🇩🇿 Algeria", away: "🇦🇹 Austria", group: "Group J", venue: "Kansas City Stadium" },
  { id: 70, match: "M70", date: "27 Jun", home: "🇯🇴 Jordan", away: "🇦🇷 Argentina", group: "Group J", venue: "Dallas Stadium" },
  { id: 71, match: "M71", date: "27 Jun", home: "🇨🇴 Colombia", away: "🇵🇹 Portugal", group: "Group K", venue: "Miami Stadium" },
  { id: 72, match: "M72", date: "27 Jun", home: "🇨🇩 Congo DR", away: "🇺🇿 Uzbekistan", group: "Group K", venue: "Atlanta Stadium" },

  // ===== ROUND OF 32 =====
  { id: 73, match: "M73", date: "28 Jun", home: "Group A Runner-up", away: "Group B Runner-up", group: "Round of 32", venue: "Los Angeles Stadium" },

  { id: 74, match: "M74", date: "29 Jun", home: "Group E Winner", away: "Best 3rd Place", group: "Round of 32", venue: "Boston Stadium" },
  { id: 75, match: "M75", date: "29 Jun", home: "Group F Winner", away: "Group C Runner-up", group: "Round of 32", venue: "Monterrey Stadium" },
  { id: 76, match: "M76", date: "29 Jun", home: "Group C Winner", away: "Group F Runner-up", group: "Round of 32", venue: "Houston Stadium" },

  { id: 77, match: "M77", date: "30 Jun", home: "Group I Winner", away: "Best 3rd Place", group: "Round of 32", venue: "New York Stadium" },
  { id: 78, match: "M78", date: "30 Jun", home: "Group E Runner-up", away: "Group I Runner-up", group: "Round of 32", venue: "Dallas Stadium" },
  { id: 79, match: "M79", date: "30 Jun", home: "Group A Winner", away: "Best 3rd Place", group: "Round of 32", venue: "Mexico City Stadium" },

  { id: 80, match: "M80", date: "1 Jul", home: "Group L Winner", away: "Best 3rd Place", group: "Round of 32", venue: "Atlanta Stadium" },
  { id: 81, match: "M81", date: "1 Jul", home: "Group D Winner", away: "Best 3rd Place", group: "Round of 32", venue: "San Francisco Bay Area Stadium" },
  { id: 82, match: "M82", date: "1 Jul", home: "Group G Winner", away: "Best 3rd Place", group: "Round of 32", venue: "Seattle Stadium" },

  { id: 83, match: "M83", date: "2 Jul", home: "Group K Runner-up", away: "Group L Runner-up", group: "Round of 32", venue: "Toronto Stadium" },
  { id: 84, match: "M84", date: "2 Jul", home: "Group H Winner", away: "Group J Runner-up", group: "Round of 32", venue: "Los Angeles Stadium" },
  { id: 85, match: "M85", date: "2 Jul", home: "Group B Winner", away: "Best 3rd Place", group: "Round of 32", venue: "Vancouver Stadium" },

  { id: 86, match: "M86", date: "3 Jul", home: "Group J Winner", away: "Group H Runner-up", group: "Round of 32", venue: "Miami Stadium" },
  { id: 87, match: "M87", date: "3 Jul", home: "Group K Winner", away: "Best 3rd Place", group: "Round of 32", venue: "Kansas City Stadium" },
  { id: 88, match: "M88", date: "3 Jul", home: "Group D Runner-up", away: "Group G Runner-up", group: "Round of 32", venue: "Dallas Stadium" },

  // ===== ROUND OF 16 =====
  { id: 89, match: "M89", date: "4 Jul", home: "Winner Match 74", away: "Winner Match 77", group: "Round of 16", venue: "Philadelphia Stadium" },
  { id: 90, match: "M90", date: "4 Jul", home: "Winner Match 73", away: "Winner Match 75", group: "Round of 16", venue: "Houston Stadium" },

  { id: 91, match: "M91", date: "5 Jul", home: "Winner Match 76", away: "Winner Match 78", group: "Round of 16", venue: "New York Stadium" },
  { id: 92, match: "M92", date: "5 Jul", home: "Winner Match 79", away: "Winner Match 80", group: "Round of 16", venue: "Mexico City Stadium" },

  { id: 93, match: "M93", date: "6 Jul", home: "Winner Match 83", away: "Winner Match 84", group: "Round of 16", venue: "Dallas Stadium" },
  { id: 94, match: "M94", date: "6 Jul", home: "Winner Match 81", away: "Winner Match 82", group: "Round of 16", venue: "Seattle Stadium" },

  { id: 95, match: "M95", date: "7 Jul", home: "Winner Match 86", away: "Winner Match 88", group: "Round of 16", venue: "Atlanta Stadium" },
  { id: 96, match: "M96", date: "7 Jul", home: "Winner Match 85", away: "Winner Match 87", group: "Round of 16", venue: "Vancouver Stadium" },

  // ===== QUARTER FINALS =====
  { id: 97, match: "M97", date: "9 Jul", home: "Winner Match 89", away: "Winner Match 90", group: "Quarter-final", venue: "Boston Stadium" },
  { id: 98, match: "M98", date: "10 Jul", home: "Winner Match 93", away: "Winner Match 94", group: "Quarter-final", venue: "Los Angeles Stadium" },
  { id: 99, match: "M99", date: "11 Jul", home: "Winner Match 91", away: "Winner Match 92", group: "Quarter-final", venue: "Miami Stadium" },
  { id: 100, match: "M100", date: "11 Jul", home: "Winner Match 95", away: "Winner Match 96", group: "Quarter-final", venue: "Kansas City Stadium" },

  // ===== SEMI FINALS =====
  { id: 101, match: "M101", date: "14 Jul", home: "Winner Match 97", away: "Winner Match 98", group: "Semi-final", venue: "Dallas Stadium" },
  { id: 102, match: "M102", date: "15 Jul", home: "Winner Match 99", away: "Winner Match 100", group: "Semi-final", venue: "Atlanta Stadium" },

  // ===== FINALS =====
  { id: 103, match: "M103", date: "18 Jul", home: "Loser Match 101", away: "Loser Match 102", group: "3rd Place", venue: "Miami Stadium" },
  { id: 104, match: "FINAL", date: "19 Jul", home: "W101", away: "W102", group: "Final", venue: "New York New Jersey Stadium" }
];
