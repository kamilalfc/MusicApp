import { v4 as uuidv4 } from "uuid";

function chillHop() {
	return [
		{
			name: "Daydream",
			artist: "Aiguille",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			id: uuidv4(),
			color: ["#FEDAC5", "#A386B2"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9275",
			active: true,
		},
		{
			name: "Fond Memories",
			artist: "Sitting Duck, Hoffy Beats",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/04/dd0cba2d16eb4006a11f5efa542a2fec53ffa4ee-1024x1024.jpg",
			id: uuidv4(),
			color: ["#F8E799", "#BBDA91"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=7995",
			active: false,
		},
		{
			name: "5 am",
			artist: "Ruck P, Shuko",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
			id: uuidv4(),
			color: ["#C3BAD7", "#1F487C"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10309",
			active: false,
		},
		{
			name: "leaving",
			artist: "Ian Ewing",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
			id: uuidv4(),
			color: ["#FBAE7B", "#008481"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=7888",
			active: false,
		},
		{
			name: "Keep Going",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nightfall",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Reflection",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Under the City Stars",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
	];
}

export default chillHop;
