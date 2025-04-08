import React, { useState } from "react";
import axios from "axios";

function AdminLogin() {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "",
        { adminEmail, adminPassword },
        { withCredentials: true }
      );
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
          className="border-2 mx-3 my-5 pl-3"
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
          className="border-2 mx-3 my-5 pl-3"
        />
        <button className="cursor-pointer">Login</button>
      </form>
    </>
  );
}

export default AdminLogin;
