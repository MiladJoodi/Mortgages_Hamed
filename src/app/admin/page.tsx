import Container from "@/components/Container";
import Dashboard from "@/components/Dashboard/Dashboard";
import Dashboard2 from "@/components/Dashboard/Dashboard2";

const page = () => {
  return (
    <section className="p-4 h-[1000px]">
      <Container>
        <Dashboard2 />
      </Container>
    </section>
  );
};

export default page;
