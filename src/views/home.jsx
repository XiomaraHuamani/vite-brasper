import Layout from "@/components/layout";
import HeaderHome from "@/components/home/Header";
import Bancos from "@/components/home/Bancos";

const Home = () => {
  return (
    <Layout>
      <HeaderHome />
      <Bancos />
    </Layout>
  );
};

export default Home;
