async function loginTest() {
  try {
    let loginHeaders = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let loginBody = JSON.stringify({
      username: "ssssd@dsgs.com",
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

async function logoutTest(accessToken) {
  try {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer " + accessToken,
    };

    let response = await fetch("http://localhost:3000/api/users/logout", {
      method: "POST",
      headers: headersList,
    });
    return await response.json();
  } catch (error) {
    console.error("Error in logoutTest:", error);
    throw error;
  }
}

async function main() {
  try {
    const accessToken = await loginTest();
    console.log("Access Token:", accessToken);

    const mypageResult = await mypageTest(accessToken);
    console.log("mypageTest result:", mypageResult);

    const logout = await logoutTest(accessToken);
    console.log("logout result:", logout);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
