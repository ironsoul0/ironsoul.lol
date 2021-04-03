import Link from "next/link";

const IndexPage = () => (
  <>
    <h1>Hello Next.js</h1>
    <p>kek</p>
    <p>kek</p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </>
);

export default IndexPage;
