import type { NextPage } from "next";
import Head from "next/head";
import { SocialIcon } from "react-social-icons";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aman Jha</title>
      </Head>

      <div className="flex w-full h-screen font-sans text-white bg-fiery_rose ">
        <div className="flex items-center justify-center w-full p-32 m-3 bg-zinc-900 border-fiery_rose rounded-3xl">
          <div className="flex flex-col justify-start">
            <h1 className="text-6xl font-bold text-fiery_rose-500">
              Hey, it&apos;s Aman{" "}
              <span>
                <SocialIcon
                  url="https://twitter.com/amanjha__"
                  fgColor="#EB6276"
                  bgColor="transparent"
                  className=""
                />
              </span>
            </h1>
            <h3 className="mt-2 text-3xl font-semibold">
              I&apos;m building the future of user interfaces at{" "}
              <a
                className="font-bold underline text-fiery_rose-100 hover:text-fiery_rose underline-offset-4"
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
