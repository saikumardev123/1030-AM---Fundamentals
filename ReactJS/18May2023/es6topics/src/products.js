import axios from 'axios';
export function products() {
    return new Promise(async function (resolve) {
        try {
            var response = await axios.get("https://fakestoreapi.com/products");
            if (response) {
                resolve(response.data);
            }
        }
        catch (error) {
            resolve("some error occured");
        }
    }).then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    })


}