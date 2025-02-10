import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return <div>page</div>;
};

export const generateStaticParams = async () => {
  const views = [1, 2];

  return views.map((id) => ({
    view: id.toString(),
  }));
};
export default page;
