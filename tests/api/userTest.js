async function signinTest() {
  try {
    let signinHeaders = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let signinBody = JSON.stringify({
      username: "user_1700105588592@example.com",
      password: "000000",
    });

    let signinResponse = await fetch("http://localhost:3000/api/auth/signin", {
      method: "POST",
      body: signinBody,
      headers: signinHeaders,
    });

    if (!signinResponse.ok) {
      throw new Error("Failed to log in. Status: " + signinResponse.status);
    }

    let accessTokenData = await signinResponse.json();
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

async function mypageTest(accessToken) {
  try {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer " + accessToken,
    };

    let response = await fetch("http://localhost:3000/api/users/me", {
      method: "GET",
      headers: headersList,
    });
    return await response.json();
  } catch (error) {
    console.error("Error in mypageTest:", error);
    throw error;
  }
}

async function main() {
  try {
    const accessToken = await signinTest();
    console.log("Access Token:", accessToken);

    const mypageResult = await mypageTest(accessToken);
    console.log("mypageTest result:", mypageResult);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
