import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Wrapper from "../assets/wrappers/Navbar";
const HomeLayout = () => {
  const navigation = useNavigate();
  const isPageLoading = navigation.state === "loading";
  const value = 'some value';
  return (
    <Wrapper>
      <Navbar />
      <section className="page">
        {isPageLoading ?(
          <div className="loading" />
        ):(
          <Outlet context={value} />
        )}
        <Outlet />
      </section>
    </Wrapper>
  );
}
export default HomeLayout