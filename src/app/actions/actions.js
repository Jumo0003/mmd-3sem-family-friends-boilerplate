    "use server"; 




export const addFavorite = async (id)=> {

    const response = await fetch ("https://api.thedogapi.com/v1/favourites", {
        method: "POST", 
        headers: {
       "x-api-key": process.env.DOG_API_KEY, 
        }, 
        body: JSON.stringify ({
            "breed.image.id": '${id}',
        }),
    }); 

    console.log("response", response)
}; 