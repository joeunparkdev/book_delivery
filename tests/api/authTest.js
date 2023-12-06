import pkg from 'uuid';
const { v4: uuidv4 } = pkg;

const signupTest = async () => {
  try {
    const signupHeaders = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };
    const email = `user_${uuidv4()}@email.com`;
    const signupContent = JSON.stringify({
      username: "조",
      password: "000000",
      confirmPassword: "000000",
      email,
    });

    const signupResponse = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      body: signupContent,
      headers: {
        ...signupHeaders,
        "Content-Type": "application/json",
      },
    });

    if (!signupResponse.ok) {
      throw new Error(
        `Failed to fetch the sign up data. Status: ${signupResponse.status}`,
      );
    }

    return { email, ...(await signupResponse.json()) };
  } catch (error) {
    console.error("Error in sign up test:", error);
    throw error;
  }
};

const signinTest = async (email,password) => {
  try {
    const signinHeaders = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    const signinBody = JSON.stringify({
      email: email,
      password: password,
    });

    const signinResponse = await fetch("http://localhost:3000/api/auth/signin", {
      method: "POST",
      body: signinBody,
      headers: signinHeaders,
    });

    if (!signinResponse.ok) {
      throw new Error(`Failed to log in. Status: ${signinResponse.status}`);
    }

    const accessTokenData = await signinResponse.json();
    if (!accessTokenData || !accessTokenData.accessToken) {
      throw new Error(
        `No valid access token available. Token data: ${JSON.stringify(
          accessTokenData,
        )}`,
      );
    }

    return accessTokenData.accessToken;
  } catch (error) {
    console.error("Error in getAccessToken:", error);
    throw error;
  }
};

const signoutTest = async (accessToken) => {
  try {
    const headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await fetch("http://localhost:3000/api/auth/signout", {
      method: "POST",
      headers: headersList,
    });

    return await response.json();
  } catch (error) {
    console.error("Error in signoutTest:", error);
    throw error;
  }
};

const main = async () => {
  try {
    const { email, user } = await signupTest();
    console.log("sign up user got created:", user);

    const accessToken = await signinTest(email, password);
    console.log("Access Token:", accessToken);

    const signout = await signoutTest(accessToken);
    console.log("signout result:", signout);
  } catch (error) {
    console.error("Error:", error);
  }
};

main();
