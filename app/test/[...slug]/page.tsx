import React from "react";

function SlugPage({ params }: { params: { slug: Array<string> } }) {
  return <div>Slug Page {params.slug}</div>;
}

export default SlugPage;
