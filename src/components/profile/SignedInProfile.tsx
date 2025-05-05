"use client";

import axios from "axios";
import { useEffect } from "react";

const submitDataByGoogle = async (user: {
  name: string;
  email: string;
  image: string;
}) => {
  try {
    const checkResponse = await axios.get(
      `http://localhost:5000/users?email=${user.email}`
    );

    if (checkResponse.data.length > 0) {
      console.log("Пользователь уже существует:", checkResponse.data[0]);
      return;
    }

    await axios.post("http://localhost:5000/users", user);
    console.log("Новый пользователь добавлен:", user);
  } catch (e) {
    console.error("Ошибка при добавлении пользователя:", e);
  }
};

function SignedInProfile({
  user,
}: {
  user: { email: string; name: string; image: string } | any;
}) {
  useEffect(() => {
    if (user?.email) {
      submitDataByGoogle(user);
    }
  }, [user]);

  return <h1>Welcome, {user?.name}!!!</h1>;
}

export default SignedInProfile;
