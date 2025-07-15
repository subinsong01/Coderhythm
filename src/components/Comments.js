import Giscus from "@giscus/react";
import { useTranslation } from "next-i18next";

export default function Comments() {
  const { i18n } = useTranslation();
  const lang = ["ko", "en", "ja"].includes(i18n.language)
    ? i18n.language
    : "en";

  return (
    <Giscus
      repo="subinsong01/Coderhythm"
      repoId="R_kgDOPGJxzw"
      category="Comments"
      categoryId="DIC_kwDOPGJxz84Cs66K"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang={lang}
      loading="lazy"
    />
  );
}
