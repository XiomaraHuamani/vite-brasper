import Layout from "@/components/layout";
import HeaderHome from "@/components/home/Header";
import Bancos from "@/components/home/Bancos";
import Acerca from "@/components/home/Acerca";
import Services from "@/components/home/Services";
import WorkProcess from "@/components/home/WorkProcess";

const Home = () => {
  return (
    <Layout>
      <HeaderHome />
      <Bancos />
      <Acerca />
      <Services />
      <WorkProcess />
    </Layout>
  );
};

export default Home;
