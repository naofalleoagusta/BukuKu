import { Link } from "react-router-dom";

export type BreadcrumbProps = {
  breadcrumbs: { text: string; path: string }[];
};

const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => {
  return (
    <div className="flex gap-2 text-white text-sm sm:text-base mb-8 font-">
      {breadcrumbs.map((breadcrumb, idx) => (
        <>
          <span key={idx} className="hover:underline">
            <Link to={breadcrumb.path}>{breadcrumb.text}</Link>
          </span>
          {idx < breadcrumbs.length - 1 && <span>/</span>}
        </>
      ))}
    </div>
  );
};

export default Breadcrumb;
