"use client";
import React, { useState } from "react";
import Link from "next/link";
const page = (props) => {
  return (
    <div>
      <div id="nav">
        <div id="logo">{props.user}</div>
        <div id="nav-item">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Blogs">Blog</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
