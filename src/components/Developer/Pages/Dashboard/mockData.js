export const TEMP_DATA = {
	terms: {
		purpose: 'Proceeds from this project\'s raise are granted for the development of a pilot solar installation in the FabIDEAS cooperative in Aibonito. The pilot will be used to test the Open Solar platform’s smart contract and financial technology capabilities and is part of a research initiative of the  Digital Currency Initiative of the MIT Media Lab and the Yale Open Innovation Lab.',
		table: [
			{
				variable: 'Investment Type',
				value: 'Donation',
				relevantParty: 'inverSOL',
				note: 'Solar Equipment',
				status: 'confirmed',
				supportDoc: '#'
			},
			{
				variable: 'PPA Tariff',
				value: '0.24 ct/kWh',
				relevantParty: 'Oracle  / PREPA',
				note: 'Variable anchored to local tariff',
				status: 'confirmed',
				supportDoc: '#'
			},
			{
				variable: 'Return (TEY)',
				value: '3.1 %',
				relevantParty: 'Broker Dealer',
				note: 'Tax-adjusted Yield',
				status: 'signed',
				supportDoc: '#'
			},
			{
				variable: 'Maturity',
				value: '+/- 2025',
				relevantParty: 'Broker Dealer',
				note: 'Variable tied to tariff',
				status: 'signed',
				supportDoc: '#'
			},
			{
				variable: 'Guarantee',
				value: '50%',
				relevantParty: 'Foundation X',
				note: 'First-loss upon breach',
				status: 'started',
				supportDoc: '#'
			},
			{
				variable: 'Insurance',
				value: 'Premium',
				relevantParty: 'Allianz CS',
				note: 'Hurricane Coverage',
				status: 'started',
				supportDoc: '#'
			},
		],
		securityNote: 'This project does not entail the issuance of a financial security, and is structured exclusively as a restricted research grant. The project does not entail an investment since there are no financial returns offered to donors. All funds accrued through power purchasing are donated back to the Cooperative.',
	},
	projectOverview: {
		executiveSummary: [
			{
				title: 'investment',
				icon: '',
				items: [
					{value: '$5000', desc: 'capex'},
					{value: '60 %', desc: 'hardware'},
					{value: '30%', desc: 'FIRST-LOSS ESCROW'},
					{value: 'n/a', desc: 'CERTIFICATION COSTS'},
				]
			},
			{
				title: 'financials',
				icon: '',
				items: [
					{value: '3.1 %', desc: 'return (TEY)'},
					{value: 'Premium', desc: 'insurance'},
					{value: '0.24 ct/kWh', desc: 'TARIFF (VARIABLE)'},
					{value: '2028', desc: 'MATURITY (VARIABLE)'},
				]
			},
			{
				title: 'Project Size',
				icon: '',
				items: [
					{value: '1 kW', desc: 'PV SOLAR'},
					{value: '200 Wh', desc: 'STORAGE'},
					{value: '2%', desc: '% CRITICAL'},
					{value: '2.5 kW', desc: 'INVERTER CAPACITY'},
				]
			},
			{
				title: 'Sustainability Metrics',
				icon: '',
				items: [
					{value: '0.1 t/kWh', desc: 'CARBON DRAWDOWN'},
					{value: '5/7', desc: 'COMMUNITY VALUE'},
					{value: 'n/a', desc: 'LCA'},
					{value: '80%', desc: 'RESILIENCE RATING'},
				]
			},
		],
		mainImage: 'HeroBar.png',
		opportunity: {
			description: `
			Cooperativa Fábrica de Ideas de Aibonito (FabIDEAS Coop), is a project that has received the support of Instituto Nueva Escuela (INE), an independent 501c3 nonprofit organization dedicated to transforming the public education system in Puerto Rico through the Montessori philosophy and methodology. FabIDEAS Coop, is an initiative of the community linked to the INE public school S.U. Pasto in the rural town of Aibonito. FabIDEAS Coop aims to create an economic model in which a cooperative of Montessori materials with five initial members serves as an economic engine for the production and distribution of educational products and children furniture, where each additional member of the community that joins the production guild can learn product design and gradually increase his/her income source. It will act as a hub for education in distributed manufacturing to the students of SU Pasto and as an emergency shelter for community members. 
			
			The current project entails the installation of a 5kW system with InverSol’s Lumen battery and inverter unit. Solar will power critical loads in the building, including emergency lights, a telecommunication system, and main manufacturing equipment. The installed system is priced at $12’000, with $9000 being donated by Council Rock / InverSol to support the pilot and coop. The Digital Currency Initiative at the MIT Media Lab will provide a grant of $4000 to cover $3000 of labor cost by the inverSol team and $1000 of other installation services.  The FabIDEAS Coop has agreed to match this $4000 by paying for the solar electricity at the standard utility price (which the building is subject to when it purchases power from the grid) until reaches this amount in cumulative solar power payments. Once these funds accrue they will be reinvested in manufacturing units for the Fab Lab. 
			
			The project is the first full pilot of the Open Solar platform and will test the smart contracts and digital currency enabled by the platform to automate all the dynamics behind the $4000 grant, the solar power payments, and the Renewable Energy Certificates generated by the system. Financial transactions will be automated based on the data read by inverSol’s Lumen unit. 
			`},
		pilotGoals: `
			- Demonstrate contractual automation and disintermediation of renewable energy project finance using blockchain-based smart contracts, as featured in the OpenSolar platform. \t
			- Demonstrate alternative finance schemes with pay-to-own models for community ownership of solar assets.
			- Demonstrate the integration between data from internet-of-things (IoT) devices into payment schemes and climate asset tokenization (Renewable Energy Certificates).
			- Stress test all features in the OpenSolar platforms, including user experiences, fiat on and offramps and smart contracts.
			- Provide a blueprint for a finance plan to transform all of Puerto Rico’s public schools into solar powered emergency shelters.
		`
	},
	context: `
	Two after hurricane Maria hit the island, schools and local communities are still exposed to a centralized and high-carbon energy system vulnerable to climate impacts. The 2020 Earthquake left ⅓ of the island without power. Cooperatives and schools like FabIDEAS and SU Pasto are ideal places for community owned microgrids to be deployed, in order to provide greater power resilience and usher in a new energy economy to Puerto Rico. Since Hurricane Maria, community cooperatives have become nodal points facilitating discussions of concerned parents on how to increase climate & social resilience in the whole community.

The Puerto Rican (PR) government and the department of education are working to appoint schools as emergency shelters —nodes with robust energy and communication systems— for the community to reach out in the event of unavoidable climate shocks. Financing is a key gap. This project acts as a pilot finance mechanism that can help bridge the finance gap to make solar powered schools and community centers more affordable. 
	`,
	projectDetails: {
			architecture: {
				mapLayoutImage: '',
				solarOutput: {
					image: '',
					items: [
						{value: '50 x 100W', desc: 'Panel Size'},
						{value: '20 kWh', desc: 'Daily Avg Generation'},
						{value: '5kWh', desc: 'Battery Size'},
						{value: '4800W', desc: 'Inverter Size'},
					]
				},
				designDescription: 'The solar installation will be a behind-the-meter backup setup, to avoid net metering with PREPA’s grid. Future expansion deployments could consider a grid-tied two-way system. The 5kW solar photovoltaics will be installed on the FabIDEAS main building’s roof and connected to the inverSOL’s Lumen unit equipped with a 5kWh battery, a 5kW inverter, a charge regulator and internet-of-things (IoT) functionality.',
			},
			engineering: {
				installationArchetype: 'This will be a model installation in that the solar and battery support a subpanel of the building circuitry, where only critical loads have been connected. Large manufacturing machinery will not be connected to the subpanel. The system will be configured as a grid-tied installation, in that the main grid can also support other loads in the panel as well as be used to power the battery bank. The installation allows for the interconnection of an emergency generator if needed.',
				itInfrastructure: 'Main power data readings will come directly from the Lumen all-in-one powermeter unit, transmitting secure data via MQTT protocol. A second revenue-grade meter with IoT pre-pay functionality will be added for further testing integrations. IoT readings from the Lumen system will be used in a smart contract oracle to verify & validate readings for payment and REC generation. A whole building non-invasive powermeter is also contemplated to critical vs. general loads.',
				highlightedProduct: `
					Lumen by inverSOL is a smart renewable energy system for the home providing greater energy independence and backup power. Lithium NMC (LiNMC ) batteries used in Lumen are validated and produced with uncompromised safety and quality control. Wireless connectivity and computing platform allow for remote control through an app, software upgrades and smart energy management features. 
					The Lumen smart features minimize wasted solar power and reduce energy bills, eliminating the need for net metering. The proprietary algorithm built in the Lumen brain ensures solar energy is used even when there is no Sun. Enhanced user experience through an interactive touchscreen and remote control through a mobile app allow to track energy usage and savings. New features available with software updates. Robust and sleek design make Lumen a seamless fit for any interior. Touchscreen and Interactive Design ensure enhanced user experience.
				`,
			}
	},
	communityEngagement: {
		content: [
			{
				title: "consultation",
				image: "https://via.placeholder.com/450x350",
				text:
					"The MIT and Yale team will convene meetings with the FabIDEAS cooperative board to discuss project details and outreach opportunities. The team has already convened a meeting with the Parent-Teacher Organisation of the SU Pasto school, thanks to the coordination of the school’s principal Janice Alejandro, to discuss the role of new finance mechanisms for solar in the local community. Over 50 members of the community gathered to discuss the project, with unanimous approval and significant interest for its replication."
			},
			{
				title: "participation",
				image: "https://via.placeholder.com/450x350",
				text:
					"The FabIDEAS cooperative community will source volunteers and champions to act as caretakers of the system to monitor its status, report any qualitative information and coordinate with the operation & maintenance required."
			},
			{
				title: "outreach",
				image: "https://via.placeholder.com/450x350",
				text:
					"The system will be installed with instructions and visual explanations so that it can act as a pedagogical site for students and community members to learn about the merits of solar energy, electricity and basic electronics. Talks about solar energy will be convened every semester in the context of climate change communication to the community."
			},
			{
				title: "governance",
				image: "https://via.placeholder.com/450x350",
				text:
					"The board of the Cooperative and its acting President Maria Pastor will convene bi yearly meeting with the Yale-MIT team (i.e. the originators) to review processes and performance of the solar system and the smart contract. \n"
			}
		],
		linkToDocument: "https://www.someurl.com"
	},
		businessAndPayment: {
			content: [
				{
					title: "General Payment Logic",
					image: "https://via.placeholder.com/550x150",
					text:
						"The system will be funded by an in-kind donation of inverSOL, providing the solar hardware, and a grant from the Digital Currency Initiative at MIT to cover labor and other service costs. inverSOL’s donation involves the $9000 for 5kW system with  issued by the PR Department of Education covered the principle cost, used for labor and materials. The PPA revenue accrues to pay coupons and mature the bond. The MIT is registered as a first-loss guarantor. \n"
				},
				{
					title: "Capital Expenditure",
					image: "https://via.placeholder.com/550x150",
					text:
						"The expected capital cost of the project is $13000, including the U$S 9000 product value of a 5kW solar array with a Lumen unity (donated by inverSOL), $3000 of labor costs and $1000 for contingency and other services (covered by the DCI grant).\n"
				},
				{
					title: "Project Revenue",
					image: "https://via.placeholder.com/550x150",
					text:
						"The FabIDEAS cooperative will pay for the solar electricity generated at a standard $/kWh local tariff using an Open Solar platform wallet. Once accumulated payments reach $4000 (stored in the project’s smart contract escrow), these will be released back to the FabIDEAS coop wallet to be used for reinvesting in the fab lab. \n"
				},
				{
					title: "Project Expenses",
					image: "https://via.placeholder.com/550x150",
					text:
						"The project has an O&M (Operation & Management) contingency fund of $1000, but will otherwise will be covered by inverSOL’s guarantee for 5 years. After this period, the cooperative will be responsible for O&M. \n"
				},
				{
					title: "Non-profit",
					text:
						"No net-income or profits will be generated by this project. \n"
				}
			],
			linkToDocument: "https://www.someurl.com"
		},
	documents: {
		description: 'Below are the links to the contracts associated to the project. Paper based legal contract, agreements and presentation are stored in a decentralised database, and their digital fingerprint (or hash) are stored in the blockchain ledger of the project to ensure immutability. Click on the icons below to access the documents. Some contract documents are self executed by blockchain-based smart contracts that you can access below.',
	},
	blockchain: {
		description: 'The current smart contracts are written in the Go scripting language. Function names relate to specific terms or schemes of the contract, and often structured as ‘if, then’ statements. Contract descriptions in plain english are provided in grey letter prior to each function.' +
			'To perform a careful revision of smart contracts, you need a certified smart contract auditor. This project’s have been audited and approved by all parties. Learn more >',
	}
};
