async function loginTest() {
  try {
    let loginHeaders = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let loginBody = JSON.stringify({
      username: "user_1700105588592@example.com",
      password: "000000",
    });

    let loginResponse = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: loginBody,
      headers: loginHeaders,
    });

    if (!loginResponse.ok) {
      throw new Error("Failed to log in. Status: " + loginResponse.status);
    }

    let accessTokenData = await loginResponse.json();
    if (!accessTokenData || !accessTokenData.accessToken) {
      throw new Error(
        "No valid access token available. Token data: " +
          JSON.stringify(accessTokenData),
      );
    }

    return accessTokenData.accessToken;
  } catch (error) {
    console.error("Error in getAccessToken:", error);
    throw error;
  }
}

async function getProductList(accessToken) {
  try {
    let productListHeaders = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    let productListResponse = await fetch(
      "http://localhost:3000/api/products/list",
      {
        method: "GET",
        headers: productListHeaders,
      },
    );

    if (!productListResponse.ok) {
      throw new Error(
        "Failed to fetch the product list. Status: " +
          productListResponse.status,
      );
    }

    return productListResponse.json();
  } catch (error) {
    console.error("Error in getProductList:", error);
    throw error;
  }
}

async function getProduct(accessToken, productId) {
  try {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    let response = await fetch(
      "http://localhost:3000/api/products/list/" + productId,
      {
        method: "GET",
        headers: headersList,
      },
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch the product. Status: " + response.status,
      );
    }

    return response.json();
  } catch (error) {
    console.error("Error in getProduct:", error);
    throw error;
  }
}

async function createProduct(accessToken) {
  try {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      title: "아이폰15 MAX",
      content: "얼마 사용하지 않은 제품 팝니다.",
    });

    let response = await fetch("http://localhost:3000/api/products/create", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    if (!response.ok) {
      throw new Error(
        "Failed to create the product. Status: " + response.status,
      );
    }
    return response.json();
  } catch (error) {
    console.error("Error in creating the product:", error);
    throw error;
  }
}

async function modifyProduct(accessToken, productId) {
  try {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      title: "아이폰14 MAX",
      content: "얼마 사용하지 않은 제품 팝니다.",
    });

    let response = await fetch(
      "http://localhost:3000/api/products/modify/" + productId,
      {
        method: "PUT",
        body: bodyContent,
        headers: headersList,
      },
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch the product. Status: " + response.status,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error in modifying the product:", error);
    throw error;
  }
}
async function deleteProduct(accessToken, productId) {
  try {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer " + accessToken,
    };

    let response = await fetch(
      "http://localhost:3000/api/products/delete/" + productId,
      {
        method: "DELETE",
        headers: headersList,
      },
    );
    if (!response.ok) {
      throw new Error(
        "Failed to fetch the product. Status: " + response.status,
      );
    }

    return response.json();
  } catch (error) {
    console.error("Error in deleting the product:", error);
    throw error;
  }
}

async function main() {
  try {
    const accessToken = await loginTest();
    console.log("Access Token:", accessToken);

    const createdProduct = await createProduct(accessToken);
    console.log("Created Product:", createdProduct);
    const productId = createdProduct.productId;

    const productList = await getProductList(accessToken);
    console.log("Product List:", productList);

    const product = await getProduct(accessToken, productId);
    console.log("Retreived Product:", product);

    const modifiedProduct = await modifyProduct(accessToken, productId);
    console.log("Modified Product:", modifiedProduct);

    const deletedProduct = await deleteProduct(accessToken, productId);
    console.log("Deleted Product:", deletedProduct);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
