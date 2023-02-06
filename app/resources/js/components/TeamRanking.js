import TeamRankings from "../TeamRankings.js";

class TeamRanking {
	static teamRankingsContainer = document.querySelector("#team-rankings-container");

	dom = null;
	id;
	
	constructor(id) {
		this.id = id;
		this.dom = this.getDOM();
		
		TeamRanking.teamRankingsContainer.append(this.dom);
	}
	
	getDOM() {
		const template = document.createElement("tr");
		template.innerHTML = `<td>Testing Row ${this.id}</td>`;
		
		return template;
	}
}

export default TeamRanking;