
export const getAccessToken = async (username: string, password: string) => {
    const response = await fetch("http://127.0.0.1:5000/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })

    const json = await response.json();

    return json;
}


