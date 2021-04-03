import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </>
  );
};

export default AboutPage;
