import TeamRanking from "./components/TeamRanking.js";

class TeamRankings {
	loader = document.querySelector("#team-rankings-loader");
	isProcessing = false;
	
	constructor() {
		this.loadTeamRankings();
	}
	
	async loadTeamRankings() {
		if(this.isProcessing) {
			return;
		}
		
		TeamRanking.teamRankingsContainer.innerHTML = "";
		
		this.isProcessing = true;
		this.loader.style.display = "block";
		
		const response = await fetch(`/teamRankings`, {
			cache: "no-cache",
			credentials: "same-origin"
		});
				
		let data;
		try {
			data = await response.json();
		} catch(jsonSyntaxError) {
			alert("The server responded with invalid JSON.");
		    return;
		}

		this.loader.style.display = "none";
		
		console.log(data.status);
		
		if(data.status === 1) {
			for(const teamRanking of data.teamRankings) {
				new TeamRanking(
					teamRanking.id
				);
			}
		} else if(data.status === -1) {
			alert(data.error);
		}
		
		this.isProcessing = false;
	}
}

export default new TeamRankings();