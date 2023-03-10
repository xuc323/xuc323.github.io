import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Meta from "../../components/Meta";

type projectProps = {
  message: string;
};

export default function Project(props: projectProps) {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Meta />
      <div className="py-3">
        <h1 className="text-center text-4xl font-bold">{pid}</h1>
        <div className="w-10/12 mx-auto mt-8 rounded-2xl shadow-lg">
          <p className="p-5">This page is about project {pid}.</p>
          <p className="p-5">{props.message}</p>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { message: `Message content for ${context.params?.pid}` },
  };
};
