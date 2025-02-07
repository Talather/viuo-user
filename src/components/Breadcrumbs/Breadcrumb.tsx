"use client"
// import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="flex flex-col gap-1 mb-3 sm:flex-row sm:items-center sm:justify-between">
      <h2
        className="ml-2 mt-1 text-[45px] font-bold leading-[30px]
        text-dark
        dark:text-white"
      >
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-0">
          <li>
            {/* <Link className="font-medium" href="/">
              Dashboard /
            </Link> */}
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
