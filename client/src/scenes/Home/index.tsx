import { useEffect } from "react";
import { useNavigate } from "react-router";
import { UserType } from "src/shared/types";
import Content from "./Content";

type Props = {
  user: UserType | null;
};
const Home = ({ user }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  // console.log("user in home section: ", user)
  
  return (
    <main className="w-full h-full mt-20">
      <Content />
    </main>
  );
}

export default Home;
