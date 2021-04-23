import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "طبخ",
  keywords: "وصفات, طبخ, مطبخ, شيف,أكل",
  description:
    "الطبخ هو عبارةٌ عن عمليةٍ يتمّ من خلالها دمج الأطعمةالطبخ هو عبارةٌ عن عمليةٍ يتمّ من خلالها دمج الأطعمة، وإضافة البهارات، والتوابل والمنكهات المختلفة إليها بأساليبَ، وطرقٍ مختلفةٍ بهدف جعلها جاهزة للأكل",
};

export default Meta;
