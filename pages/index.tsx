import type { NextPage } from "next";
import Head from "next/head";
import { SocialIcon } from "react-social-icons";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aman Jha</title>
      </Head>

      <div className="flex font-sans bg-fiery_rose text-white w-full h-screen ">
        <div className="flex w-full  items-center justify-center p-32 m-3 bg-zinc-900 border-fiery_rose rounded-3xl">
          <div className="flex flex-col justify-start">
            <h1 className="text-fiery_rose-500 font-bold text-6xl">
              Hey, it&apos;s Aman{" "}
              <span>
                <SocialIcon
                  url="https://twitter.com/amanjha__"
                  fgColor="#EB6276"
                  bgColor="transparent"
                  className=" "
                />
              </span>
            </h1>
            <h3 className="text-3xl mt-2 font-semibold">
              I&apos;m building the future of user interfaces at{" "}
              <a
                className="underline font-bold text-fiery_rose-100 hover:text-fiery_rose underline-offset-4"
                href="https://lui.vercel.app"
              >
                Lui
              </a>
            </h3>
            <a
              className="mt-14 text-2xl font-semibold w-fit underline-offset-[6px] hover:text-fiery_rose underline"
              href="mailto:hey@amanjha.dev"
            >
              Get in touch →
            </a>
            <div className="mt-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
