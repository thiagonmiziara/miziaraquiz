import React from "react";

export default function QuizDaGaleraPage() {
  return <div></div>;
}

export async function getServerSideProps(context) {
  console.log(context);
  return {
    props: {}, 
  };
}
