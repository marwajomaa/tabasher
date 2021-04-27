import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Input, TextField, InputLabel } from "@material-ui/core";
import loginStyles from "../../styles/Login.module.css";

export default function login() {
  const { push } = useRouter();
  const [values, setValue] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      userNameOrEmailAddress: values.email,
      password: values.password,
    };
    const url = "https://api.tabasher.dev/api/TokenAuth/Authenticate";
    try {
      const res = await axios.post(url, loginData, {
        headers: {
          "Content-Type": "application/json",
          "Abp.TenantId": "32",
        },
      });

      if (res.data) {
        if (res.data.result.accessToken) {
          const token = res.data.result.accessToken;
          localStorage.setItem("token", token);
          push("/");
        }
      }

      console.log(res.data.result);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={loginStyles.loginWrapper}>
      <h1>تسجيل الدخول</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label for="email">
            البريد الإلكتروني<span>*</span>
          </label>
          <input
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label for="password">
            كلمة المرور<span>*</span>
          </label>
          <input
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">تسجيل الدخول</button>
      </form>
    </div>
  );
}
