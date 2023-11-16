const { v4: uuidv4 } = require("uuid");

async function signupTest() {
  try {
    let signupHeaders = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };
    let email = `user_${uuidv4()}@email.com`;
    let signupContent = JSON.stringify({
      username: "조",
      email: email,
      password: "000000",
      confirmPassword: "000000",
    });

    let signupResponse = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      body: signupContent,
      headers: {
        ...signupHeaders,
        "Content-Type": "application/json",
      },
    });

    if (!signupResponse.ok) {
      throw new Error(
        "Failed to fetch the sign up data. Status: " + signupResponse.status,
      );
    }

    return { email, ...(await signupResponse.json()) };
  } catch (error) {
    console.error("Error in sign up test:", error);
    throw error;
  }
}

async function loginTest(email) {
  try {
    let loginHeaders = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let loginBody = JSON.stringify({
      username: email,
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

async function main() {
  try {
    const { email, user } = await signupTest();
    console.log("sign up user got created:", user);

    const accessToken = await loginTest(email);
    console.log("Access Token:", accessToken);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
