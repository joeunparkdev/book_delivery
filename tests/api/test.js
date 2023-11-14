
async function getAccessToken() {
    try {
        let loginHeaders = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
        };

        let loginBody = JSON.stringify({
            "username": "ssssd@dsgs.com",
            "password": "000000"
        });

        let loginResponse = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            body: loginBody,
            headers: loginHeaders
        });

        if (!loginResponse.ok) {
            throw new Error("Failed to log in. Status: " + loginResponse.status);
        }

        let accessTokenData = await loginResponse.json();
        if (!accessTokenData || !accessTokenData.accessToken) {
            throw new Error("No valid access token available. Token data: " + JSON.stringify(accessTokenData));
        }

        return accessTokenData.accessToken;
    } catch (error) {
        console.error("Error in getAccessToken:", error);
        throw error;
    }
}

async function getProductList(accessToken) {
       console.log(accessToken);
    try {
        let productListHeaders = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer " + accessToken
        };

        let productListResponse = await fetch("http://localhost:3000/api/products/list", {
            method: "GET",
            headers: productListHeaders
        });

        if (!productListResponse.ok) {
            throw new Error("Failed to fetch the product list. Status: " + productListResponse.status);
        }

        return productListResponse.json();
    } catch (error) {
        console.error("Error in getProductList:", error);
        throw error;
    }
}

// Main function
async function main() {
    try {
        const accessToken = await getAccessToken();
        console.log("Access Token:", accessToken);

        const productList = await getProductList(accessToken);
        console.log("Product List:", productList);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the main function
main();
