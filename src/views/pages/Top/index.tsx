import React from "react";
import Default from "src/views/components/templates/Default";
import { H1 } from "src/views/components/atoms/heading/H1";
import { H2 } from "src/views/components/atoms/heading/H2";

export const Top: React.FC = () => {
  return (
    <Default>
      <>
        <H1>トップページ</H1>
        トップページです
        <section>
          <H2>いつか完成するはず</H2>
          いつか
        </section>
      </>
    </Default>
  )
}
