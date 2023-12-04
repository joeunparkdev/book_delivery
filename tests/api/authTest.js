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

async function signinTest(email) {
  try {
    let signinHeaders = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let signinBody = JSON.stringify({
      username: email,
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

async function signoutTest(accessToken) {
  try {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer " + accessToken,
    };

    let response = await fetch("http://localhost:3000/api/auth/signout", {
      method: "POST",
      headers: headersList,
    });
    return await response.json();
  } catch (error) {
    console.error("Error in signoutTest:", error);
    throw error;
  }
}
async function main() {
  try {
    const { email, user } = await signupTest();
    console.log("sign up user got created:", user);

    const accessToken = await signinTest(email);
    console.log("Access Token:", accessToken);

    const signout = await signoutTest(accessToken);
    console.log("signout result:", signout);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
