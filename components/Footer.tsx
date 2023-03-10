import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  // Dark Mode
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <footer className="font-serif text-center bg-black p-5 text-white w-full absolute bottom-0 max-sm:px-2">
      <div className="flex text-center justify-between items-center max-w-4xl mx-auto px-2">
        <div className="flex w-1/12 justify-start">
          <button
            role="button"
            aria-label="Toggle Dark Mode"
            className="border p-1 rounded-full w-6 overflow-hidden transition-all bg-white dark:bg-black hover:scale-125"
            onClick={() => setDark(!dark)}
          >
            <div
              className={`flex flex-row w-9 gap-1 duration-300 ${
                dark ? "-translate-x-1/2" : "translate-x-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-black"
              >
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-white"
              >
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
              </svg>
            </div>
          </button>
        </div>
        <div className="grow items-center justify-center">
          <p>Copyright &copy; {year}, www.xchen.org</p>
        </div>
        <div className="flex w-1/12 max-sm:w-2/12 justify-end gap-2">
          <Link href="https://github.com/xuc323">
            <Image
              src="/github.svg"
              width={24}
              height={24}
              alt="github link"
              className="bg-white rounded-full p-1 transition-all hover:scale-125"
            />
          </Link>
          <Link href="mailto:xuc@xchen.org?subject=[Website Contact]&body=Hello,%0D%0D[Your message goes here....]%0D%0D%0DBest,%0D[Your Name]">
            <Image
              src="/email.svg"
              width={24}
              height={24}
              alt="email link"
              className="bg-white rounded-full p-1 transition-all hover:scale-125"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
