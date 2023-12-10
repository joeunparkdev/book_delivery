<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  let signInData = {
    username: "",
    password: "",
  };

  onMount(async () => {
    try {
      const response = await fetch("https://localhost:3002/api/users/me");
      const userData = await response.json();
      signInData.username = userData.username;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  });

  async function signIn() {
    try {
      const response = await fetch("https://localhost:3002/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
        credentials: "include", // CORS 정책
      });

      const data = await response.json();

      if (response.ok) {
        // 로그인 성공 시 메인 페이지로 이동하면서 서버로부터 받은 쿠키를 저장
        document.cookie = data.accessToken;

        // 메인 페이지로 이동합니다.
        navigate("/");
      } else {
        console.error("Sign In Response:", data);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }
</script>

<main>
  <h1>🎄 Sign In 🎅</h1>
  <form on:submit|preventDefault={signIn}>
    <label for="username">🎅 Username:</label>
    <input type="text" bind:value="{signInData.username}" />

    <label for="password">🔒 Password:</label>
    <input type="password" bind:value="{signInData.password}" />

    <button type="submit">🎄 Sign In</button>
  </form>
</main>

<style>
  main {
    text-align: center;
    margin: 2em;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    margin-top: 10px;
    font-size: 1.2em;
  }

  input {
    margin-top: 5px;
    padding: 8px;
    font-size: 1em;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    font-size: 1.2em;
    background-color: #e74c3c;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: #c0392b;
  }
</style>
