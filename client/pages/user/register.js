import React from "react";
import Link from "next/link";
import { Input, TextField, InputLabel } from "@material-ui/core";

export default function register() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        margin: "0 auto",
        width: "100%",
        maxWidth: "800px",
        direction: "rtl",
      }}
    >
      <h1>تسجيل مستخدم جديد</h1>
      <h1>
        هل انت مسجل بالاكاديمية من قبل؟
        <Link href="/user/login">
          <span
            style={{ color: "blue", marginRight: "15px", cursor: "pointer" }}
          >
            سجل دخولك من هنا
          </span>
        </Link>
      </h1>
    </div>
  );
}
