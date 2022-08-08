const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			character: [],
			vehicles: [],
			planets: [],
			description: [],
			favorite: [], 
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// // Use getActions to call a function within a fuction
			fetchCharacters: () => {
				fetch("https://swapi.dev/api/people/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((promiseResponse) => promiseResponse.json())
					.then(data => setStore({ characters: data.results }));
			},


			fetchCharactersById: (uid) => {
				console.log("CHARACTER");
				const store = getStore();
		
				fetch("https://www.swapi.tech/api/people/" + uid, {
		
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
				  },
				})
				  .then((response) => response.json())
				  .then((result) => {
					setStore({ character: result.results });
					console.log("CHAR =====", store.character)
				  })
				  .catch((error) => console.log("error", error));
			  },
			
			fetchVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((promiseResponse) => promiseResponse.json())
					.then(data => setStore({ vehicles: data.results }));
			},
			fetchPlanets: () => {
				fetch("https://swapi.dev/api/planets/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((promiseResponse) => promiseResponse.json())
					.then(data => setStore({ planets: data.results }));
			},
			
			addFavorite: item => {
				const store = getStore();
				const validate = store.favorite.includes(item);
				if (store.favorite == [] || !validate) {
					setStore({ favorite: [...store.favorite, item] });
				}
			},

			deleteFavorite: id => {
				const store = getStore();
				const updatedList = [...store.favorite];
				updatedList.splice(id, 1);
				setStore({ favorite: [...updatedList] });
			},
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

			// 	//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
